export const packages = {
  packages: [
    {
      name: "Standard PoC Package",
      price: 20000,
      deliveryTimeline: "2 Weeks",
      description:
        "Basic proof-of-concept with essential functionality to validate the core idea.",
      whatsIncluded: [
        {
          phase: "Discovery & Scoping",
          timeframe: "Days 1-2",
          description:
            "Initial kickoff and scoping session to finalize requirements.",
        },
        {
          phase: "Development",
          timeframe: "Days 3-10",
          description: "Core functionality built to showcase primary features.",
        },
        {
          phase: "Delivery & Handoff",
          timeframe: "Days 11-12",
          description:
            "Final demo, essential documentation, and project handoff.",
        },
      ],
      clientExpectations: [
        "Come prepared with a clear outline of project goals prior to kickoff.",
        "Provide feedback within 24 hours at scheduled touchpoints.",
        "No adjustments to scope or feature set beyond initial agreement.",
      ],
      paymentStructure: [
        {
          amount: 10000,
          percentage: 50,
          due: "Upon Signing",
          description:
            "Initial deposit secures the project slot and covers discovery and initial scoping.",
        },
        {
          amount: 10000,
          percentage: 50,
          due: "Upon Delivery",
          description: "Final payment due before final demo and handoff.",
        },
      ],
    },
    {
      name: "Enhanced PoC Package",
      price: 40000,
      deliveryTimeline: "4 Weeks",
      description:
        "Mid-level PoC with added features and a polished UX/UI to demonstrate viability.",
      whatsIncluded: [
        {
          phase: "Discovery & Scoping",
          timeframe: "Week 1",
          description:
            "Detailed session to set expectations and finalize project goals.",
        },
        {
          phase: "Development",
          timeframe: "Weeks 2-3",
          description:
            "Development of core features with added design elements for enhanced UX/UI.",
        },
        {
          phase: "Delivery & Handoff",
          timeframe: "Week 4",
          description: "Final demo, complete documentation, and handoff.",
        },
      ],
      clientExpectations: [
        "Provide detailed project goals, examples, and assets at project start.",
        "Respond within 48 hours for feedback requests.",
        "No scope changes after the first week; new features require a new engagement.",
      ],
      paymentStructure: [
        {
          amount: 16000,
          percentage: 40,
          due: "Upon Signing",
          description:
            "Initial deposit secures project slot and covers discovery and scoping.",
        },
        {
          amount: 12000,
          percentage: 30,
          due: "End of Week 2",
          description: "Progress payment after initial development update.",
        },
        {
          amount: 12000,
          percentage: 30,
          due: "Upon Delivery",
          description: "Final payment due before final demo and handoff.",
        },
      ],
    },
    {
      name: "Accelerated PoC Package",
      price: 60000,
      deliveryTimeline: "6 Weeks",
      description:
        "High-impact PoC with advanced functionality and investor-ready polish.",
      whatsIncluded: [
        {
          phase: "Discovery & Scoping",
          timeframe: "Week 1",
          description:
            "Thorough planning session to establish comprehensive requirements and design.",
        },
        {
          phase: "Development",
          timeframe: "Weeks 2-5",
          description:
            "Full-feature development with advanced UX/UI and presentation-ready polish.",
        },
        {
          phase: "Delivery & Handoff",
          timeframe: "Week 6",
          description:
            "Final demo, in-depth documentation, and optional presentation support.",
        },
      ],
      clientExpectations: [
        "Provide comprehensive requirements, outline, and assets by kickoff.",
        "Designate one main contact to provide feedback within 48 hours.",
        "No scope adjustments after kickoff; additional features require a new engagement.",
      ],
      paymentStructure: [
        {
          amount: 20000,
          percentage: 33,
          due: "Upon Signing",
          description:
            "Initial deposit secures project slot and covers planning and scoping.",
        },
        {
          amount: 20000,
          percentage: 33,
          due: "End of Week 3",
          description: "Progress payment after mid-project development update.",
        },
        {
          amount: 20000,
          percentage: 34,
          due: "Upon Delivery",
          description: "Final payment due before final demo and handoff.",
        },
      ],
    },
  ],
};
