// Fictional data used until the backend exists.
export const mockGroups = [
  {
    id: "family-circle",
    name: "Family Circle",
    color: "sage",
    amount: "LKR 5,000",
    frequency: "Monthly",
    nextDue: "Oct 24, 2026",
    currentRound: 4,
    status: "On track",
    members: [
      { name: "Nimali Perera", role: "Organizer", status: "Confirmed", received: true },
      { name: "Kavindu Amarasinghe", role: "Member", status: "Confirmed", received: false },
      { name: "Ruwan Silva", role: "Member", status: "Pending", received: true },
      { name: "Hasini Fernando", role: "Member", status: "Confirmed", received: false },
    ],
  },
  {
    id: "weekend-friends",
    name: "Weekend Friends",
    color: "peach",
    amount: "LKR 3,000",
    frequency: "Weekly",
    nextDue: "Oct 28, 2026",
    currentRound: 7,
    status: "Due soon",
    members: [
      { name: "Dilan Madushanka", role: "Organizer", status: "Pending", received: true },
      { name: "Kavindu Amarasinghe", role: "Member", status: "Confirmed", received: false },
      { name: "Tharushi Jayasena", role: "Member", status: "Confirmed", received: true },
    ],
  },
  {
    id: "office-seettu",
    name: "Office Seettu",
    color: "blue",
    amount: "LKR 10,000",
    frequency: "Monthly",
    nextDue: "Nov 02, 2026",
    currentRound: 2,
    status: "On track",
    members: [
      { name: "Sahan Kumara", role: "Organizer", status: "Confirmed", received: false },
      { name: "Kavindu Amarasinghe", role: "Member", status: "Confirmed", received: false },
      { name: "Madhavi Rathnayake", role: "Member", status: "Confirmed", received: true },
    ],
  },
];

export function getGroup(id) {
  return mockGroups.find((group) => group.id === id);
}

export function initialsOf(name) {
  return name.split(" ").map((word) => word[0]).join("").slice(0, 2).toUpperCase();
}
