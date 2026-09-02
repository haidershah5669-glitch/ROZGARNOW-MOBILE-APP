export const JOB_CATEGORIES = [
  "Construction",
  "Plumbing",
  "Electrician",
  "Painting",
  "Carpentry",
  "Cleaning",
  "Driving",
  "Gardening",
];

export const JOBS = [
  {
    id: "1",
    title: "Experienced Plumber Needed",
    company: "Khan Construction Ltd.",
    location: "Clifton, Karachi",
    distance: "1.2 km away",
    pay: "PKR 2,500/day",
    type: "Daily Wage",
    category: "Plumbing",
    postedAgo: "2 hours ago",
    urgent: true,
    description:
      "We need an experienced plumber for a 3-day residential project. Must have own tools and at least 2 years of experience fixing pipelines and fittings.",
    requirements: ["2+ years experience", "Own tools", "Available immediately"],
  },
  {
    id: "2",
    title: "Site Electrician",
    company: "Al-Habib Builders",
    location: "Gulshan-e-Iqbal, Karachi",
    distance: "3.5 km away",
    pay: "PKR 3,000/day",
    type: "Daily Wage",
    category: "Electrician",
    postedAgo: "5 hours ago",
    urgent: false,
    description:
      "Looking for a licensed electrician to handle wiring for a new commercial building. Long-term project, 20+ days of work available.",
    requirements: ["Electrician license", "Safety gear", "Team player"],
  },
  {
    id: "3",
    title: "House Painter (2 needed)",
    company: "Ahmed Khan",
    location: "DHA Phase 5, Karachi",
    distance: "4.8 km away",
    pay: "PKR 2,000/day",
    type: "Daily Wage",
    category: "Painting",
    postedAgo: "1 day ago",
    urgent: false,
    description:
      "Interior painting for a 3-bedroom house. Work expected to take 4-5 days. Paint and materials provided.",
    requirements: ["Experience with interior paint", "Own brushes"],
  },
  {
    id: "4",
    title: "Carpenter for Furniture Repair",
    company: "Sara Interiors",
    location: "North Nazimabad, Karachi",
    distance: "6.1 km away",
    pay: "PKR 2,800/day",
    type: "Daily Wage",
    category: "Carpentry",
    postedAgo: "1 day ago",
    urgent: false,
    description:
      "Repair and polish wooden furniture for an office relocation project. Basic tools provided, skilled labor required.",
    requirements: ["3+ years experience", "Attention to detail"],
  },
];

export const APPLICATIONS = [
  { id: "a1", jobId: "1", status: "Pending", appliedOn: "Today" },
  { id: "a2", jobId: "3", status: "Accepted", appliedOn: "Yesterday" },
  { id: "a3", jobId: "4", status: "Rejected", appliedOn: "2 days ago" },
];

export const APPLICANTS = [
  {
    id: "w1",
    name: "Bilal Ahmed",
    skill: "Plumber",
    rating: 4.8,
    experience: "5 years",
    status: "Pending",
  },
  {
    id: "w2",
    name: "Usman Tariq",
    skill: "Plumber",
    rating: 4.5,
    experience: "3 years",
    status: "Pending",
  },
  {
    id: "w3",
    name: "Fahad Malik",
    skill: "Plumber",
    rating: 4.9,
    experience: "7 years",
    status: "Shortlisted",
  },
];

export const WALLET_TRANSACTIONS = [
  { id: "t1", label: "Payment - Khan Construction", amount: 2500, type: "credit", date: "Today" },
  { id: "t2", label: "Withdrawal to JazzCash", amount: -2000, type: "debit", date: "Yesterday" },
  { id: "t3", label: "Payment - Al-Habib Builders", amount: 3000, type: "credit", date: "3 days ago" },
];

export const ADMIN_USERS = [
  { id: "u1", name: "Bilal Ahmed", role: "Worker", status: "Active", joined: "2 months ago" },
  { id: "u2", name: "Khan Construction Ltd.", role: "Employer", status: "Active", joined: "3 months ago" },
  { id: "u3", name: "Usman Tariq", role: "Worker", status: "Suspended", joined: "1 month ago" },
];

export const VERIFICATION_REQUESTS = [
  { id: "v1", name: "Fahad Malik", type: "CNIC Verification", submitted: "1 day ago" },
  { id: "v2", name: "Sara Interiors", type: "Business License", submitted: "2 days ago" },
];
