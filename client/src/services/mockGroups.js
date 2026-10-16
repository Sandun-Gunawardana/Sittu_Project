// Fictional data used until the backend exists.
export const mockGroups = [
  {
    id: "family-circle",
    name: "Family Circle",
    color: "sage",
    amount: "LKR 5,000",
    amountValue: 5000,
    frequency: "Monthly",
    nextDue: "Oct 24, 2026",
    currentRound: 3,
    rounds: [
      { number: 1, dueDate: "Aug 24, 2026", recipient: "Nimali Perera" },
      { number: 2, dueDate: "Sep 24, 2026", recipient: "Ruwan Silva" },
      { number: 3, dueDate: "Oct 24, 2026", recipient: null },
    ],
    status: "On track",
    members: [
      { name: "Nimali Perera", role: "Organizer", status: "Confirmed" },
      { name: "Kavindu Amarasinghe", role: "Member", status: "Confirmed" },
      { name: "Ruwan Silva", role: "Member", status: "Pending" },
      { name: "Hasini Fernando", role: "Member", status: "Not paid" },
    ],
  },
  {
    id: "weekend-friends",
    name: "Weekend Friends",
    color: "peach",
    amount: "LKR 3,000",
    amountValue: 3000,
    frequency: "Weekly",
    nextDue: "Oct 28, 2026",
    currentRound: 3,
    rounds: [
      { number: 1, dueDate: "Oct 14, 2026", recipient: "Tharushi Jayasena" },
      { number: 2, dueDate: "Oct 21, 2026", recipient: "Dilan Madushanka" },
      { number: 3, dueDate: "Oct 28, 2026", recipient: null },
    ],
    status: "Due soon",
    members: [
      { name: "Dilan Madushanka", role: "Organizer", status: "Pending" },
      { name: "Kavindu Amarasinghe", role: "Member", status: "Confirmed" },
      { name: "Tharushi Jayasena", role: "Member", status: "Confirmed" },
    ],
  },
  {
    id: "office-seettu",
    name: "Office Seettu",
    color: "blue",
    amount: "LKR 10,000",
    amountValue: 10000,
    frequency: "Monthly",
    nextDue: "Nov 02, 2026",
    currentRound: 2,
    rounds: [
      { number: 1, dueDate: "Oct 02, 2026", recipient: "Madhavi Rathnayake" },
      { number: 2, dueDate: "Nov 02, 2026", recipient: null },
    ],
    status: "On track",
    members: [
      { name: "Sahan Kumara", role: "Organizer", status: "Confirmed" },
      { name: "Kavindu Amarasinghe", role: "Member", status: "Confirmed" },
      { name: "Madhavi Rathnayake", role: "Member", status: "Confirmed" },
    ],
  },
];

// A member is eligible only if they have not already received a turn.
export function eligibleRecipients(group, rounds) {
  const received = new Set(rounds.map((round) => round.recipient).filter(Boolean));
  return group.members.filter((member) => !received.has(member.name));
}

export function formatLkr(value) {
  return `LKR ${value.toLocaleString("en-US")}`;
}

export function getGroup(id) {
  return mockGroups.find((group) => group.id === id);
}

export function initialsOf(name) {
  return name.split(" ").map((word) => word[0]).join("").slice(0, 2).toUpperCase();
}
