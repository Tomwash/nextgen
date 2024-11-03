import axios from "axios";

let accessToken = ""; // Store the access token in memory

// Helper function to refresh the access token
async function refreshAccessToken() {
  try {
    const response = await axios.post(
      "https://accounts.zoho.com/oauth/v2/token",
      null,
      {
        params: {
          grant_type: "refresh_token",
          client_id: process.env.ZOHO_CLIENT_ID,
          client_secret: process.env.ZOHO_CLIENT_SECRET,
          refresh_token: process.env.ZOHO_REFRESH_TOKEN,
        },
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      }
    );

    accessToken = response.data.access_token;
    return accessToken;
  } catch (error) {
    console.error("Failed to refresh access token", error);
    throw new Error("Failed to refresh access token");
  }
}

// Helper function to send email
async function sendEmail(to: string, subject: string, htmlContent: string) {
  if (!accessToken) {
    accessToken = await refreshAccessToken();
  }

  try {
    const zohoResponse = await axios.post(
      "https://mail.zoho.com/api/accounts/1679262000000008002/messages",
      {
        fromAddress: "tom@nextgenproof.com",
        toAddress: to,
        subject: subject,
        content: htmlContent,
      },
      {
        headers: {
          Authorization: `Zoho-oauthtoken ${accessToken}`,
          "Content-Type": "application/json",
        },
      }
    );
    return zohoResponse;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      console.error("Email send failed:", error.response.data);
      if (error.response.status === 401) {
        accessToken = await refreshAccessToken();
        return sendEmail(to, subject, htmlContent); // Retry with new token
      }
    }
    throw new Error("Failed to send email");
  }
}

// Email templates
function generateInquiryNotificationTemplate(
  name: string,
  email: string,
  message: string
) {
  return `
    <div style="font-family: Arial, sans-serif; color: #333; line-height: 1.6;">
      <h2>New Inquiry Received</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    </div>
  `;
}

function generateConfirmationTemplate(name: string) {
  return `
    <div style="font-family: Arial, sans-serif; color: #333; line-height: 1.6;">
      <h2>Thank you for your inquiry, ${name}!</h2>
      <p>I have received your message and will get back to you shortly.</p>
      <p>In the meantime, feel free to reach out to me at <a href="mailto:tom@nextgenproof.com">tom@nextgenproof.com</a> if you have any further questions.</p>
      <p>Best regards,</p>
      <p>The NextGenProof Team</p>
    </div>
  `;
}

// API handler
export async function POST(req: Request) {
  const reqBody = await req.json();
  const { name, email, message } = reqBody;

  try {
    // Send email to yourself
    const notificationTemplate = generateInquiryNotificationTemplate(
      name,
      email,
      message
    );
    await sendEmail(
      "tommyjohn2006@gmail.com",
      "New Next Gen Inquiry Received",
      notificationTemplate
    );

    // Send confirmation email to the inquirer
    const confirmationTemplate = generateConfirmationTemplate(name);
    await sendEmail(
      email,
      "Thank you for reaching out to NextGenProof",
      confirmationTemplate
    );

    return new Response(
      JSON.stringify({
        message: "I have received your inquiry. I will get back to you soon.",
      }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error with route /inquiry:", error);
    return new Response(
      JSON.stringify({ message: "Inquiry failed to send." }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
