export const packages = {
  packages: [
    {
      name: "Quick MVP",
      price: 6000,
      deliveryTimeline: "72 hours",
      description:
        "Basic proof-of-concept with essential functionality to validate the core idea.",
      whatsIncluded: [
        {
          phase: "Discovery & Scoping",
          timeframe: "Days 1",
          description:
            "Initial kickoff and scoping session to finalize requirements.",
        },
        {
          phase: "Development",
          timeframe: "Days 2",
          description:
            "Core functionality developed to showcase the primary features.",
        },
        {
          phase: "Delivery & Handoff",
          timeframe: "Day 3",
          description:
            "Final demo, essential documentation, and one follow-up consultation.",
        },
      ],
      clientExpectations: [
        "Provide a clear outline of project goals prior to kickoff.",
        "Deliver feedback within 24 hours at scheduled touchpoints.",
        "No scope adjustments after initial agreement.",
      ],
      paymentStructure: [
        {
          amount: 3000,
          percentage: 50,
          due: "Upon Signing",
          description:
            "Initial deposit secures the project slot and covers discovery and initial development.",
        },
        {
          amount: 3000,
          percentage: 50,
          due: "Upon Delivery",
          description: "Final payment due before final demo and handoff.",
        },
      ],
    },
    {
      name: "Standard PoC Package",
      price: 12000,
      deliveryTimeline: "1 Week",
      description:
        "Standard proof-of-concept with polished UI for quick validation.",
      whatsIncluded: [
        {
          phase: "Discovery & Scoping",
          timeframe: "Days 1-2",
          description:
            "Kickoff session to finalize core functionality and requirements.",
        },
        {
          phase: "Development",
          timeframe: "Days 3-6",
          description: "Development of core features with a professional UI.",
        },
        {
          phase: "Delivery & Handoff",
          timeframe: "Day 7",
          description:
            "Final demo, essential documentation, and one post-project consultation.",
        },
      ],
      clientExpectations: [
        "Provide project goals and assets at kickoff.",
        "Feedback within 24 hours at touchpoints.",
        "No scope adjustments after agreement.",
      ],
      paymentStructure: [
        {
          amount: 6000,
          percentage: 50,
          due: "Upon Signing",
          description:
            "Initial deposit secures project slot and covers scoping and initial development.",
        },
        {
          amount: 6000,
          percentage: 50,
          due: "Upon Delivery",
          description: "Final payment due before final demo and handoff.",
        },
      ],
    },
    {
      name: "Enhanced PoC Package",
      price: 25000,
      deliveryTimeline: "3 Weeks",
      description:
        "Enhanced PoC with multi-functional features and refined UX/UI.",
      whatsIncluded: [
        {
          phase: "Discovery & Scoping",
          timeframe: "Week 1",
          description:
            "Detailed planning session to establish goals and expectations.",
        },
        {
          phase: "Development",
          timeframe: "Week 2-3",
          description:
            "Development of core features with extended UX/UI and polished visuals.",
        },
        {
          phase: "Delivery & Handoff",
          timeframe: "End of Week 3",
          description:
            "Final demo, in-depth documentation, and one post-project consultation.",
        },
      ],
      clientExpectations: [
        "Provide all assets and project goals at project start.",
        "Feedback within 48 hours at touchpoints.",
        "No scope adjustments after initial scoping; new features require a separate engagement.",
      ],
      paymentStructure: [
        {
          amount: 12500,
          percentage: 50,
          due: "Upon Signing",
          description:
            "Initial deposit secures project slot and covers planning and development.",
        },
        {
          amount: 12500,
          percentage: 50,
          due: "Upon Delivery",
          description: "Final payment due before final demo and handoff.",
        },
      ],
    },
    {
      name: "Accelerated PoC Package",
      price: 50000,
      deliveryTimeline: "5 Weeks",
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
          timeframe: "Weeks 2-4",
          description:
            "Development of full features with advanced UX/UI and presentation-ready polish.",
        },
        {
          phase: "Delivery & Handoff",
          timeframe: "Week 5",
          description:
            "Final demo, complete documentation, and investor presentation support.",
        },
      ],
      clientExpectations: [
        "Provide comprehensive requirements and assets by kickoff.",
        "Feedback within 48 hours for all requests.",
        "No scope adjustments after kickoff; additional features require a separate engagement.",
      ],
      paymentStructure: [
        {
          amount: 25000,
          percentage: 50,
          due: "Upon Signing",
          description:
            "Initial deposit secures project slot and covers discovery and initial development.",
        },
        {
          amount: 12500,
          percentage: 25,
          due: "End of Week 3",
          description:
            "Progress payment due at mid-project development update.",
        },
        {
          amount: 12500,
          percentage: 25,
          due: "Upon Delivery",
          description: "Final payment due before final demo and handoff.",
        },
      ],
    },
  ],
};
