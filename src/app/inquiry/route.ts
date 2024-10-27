import { NextApiRequest } from "next";
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
    console.error("Error refreshing access token:");
    throw new Error("Failed to refresh access token");
  }
}

// Helper function to send email
async function sendEmail(name: string, email: string, message: string) {
  if (!accessToken) {
    accessToken = await refreshAccessToken(); // Get a new access token if none exists
  }

  console.log(accessToken);
  try {
    const zohoResponse = await axios.post(
      "https://mail.zoho.com/api/accounts/1679262000000008002/messages",
      {
        fromAddress: "tom@nextgenproof.com",
        toAddress: "tommyjohn2006@gmail.com",
        subject: "New Next Gen Inquiry Received",
        content: `
          <p>You have a new inquiry from <strong>${name}</strong> (<a href="mailto:${email}">${email}</a>).</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        `,
      },
      {
        headers: {
          Authorization: `Zoho-oauthtoken ${accessToken}`,
          "Content-Type": "application/json",
        },
      }
    );
    console.log("Email sent successfully:", zohoResponse);
    return zohoResponse;
  } catch (error: any) {
    console.log("Email sent failed:", error.response.data);
    if (error.response && error.response.status === 401) {
      // If unauthorized, refresh token and retry
      accessToken = await refreshAccessToken();
      return sendEmail(name, email, message); // Retry sending the email with new token
    } else {
      console.error("Error sending email:");
      throw new Error("Failed to send email");
    }
  }
}

// API handler
export async function POST(req: any) {
  const reqBody = await req.json();
  const { name, email, message } = reqBody;

  console.log("Received inquiry:", { name, email, message });

  try {
    await sendEmail(name, email, message);
    return new Response(
      JSON.stringify({ message: "Inquiry email sent successfully." }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error with route /inquiry:");
    return new Response(
      JSON.stringify({ message: "Inquiry failed to send." }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
