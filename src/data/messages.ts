export interface Message {
  id: string;
  name: string;
  preview: string;
  time: string;
  unread: boolean;
  messages: { from: "user" | "admin"; text: string; time: string }[];
}

export const conversations: Message[] = [
  {
    id: "msg-1",
    name: "Kidus Fikadu",
    preview: "When does the weekend class start?",
    time: "10:30 AM",
    unread: true,
    messages: [
      { from: "user", text: "Hello, I registered for weekend class. When does it start?", time: "10:28 AM" },
      { from: "admin", text: "Hi Kidus! Weekend classes begin next Saturday at 9 AM.", time: "10:30 AM" },
    ],
  },
  {
    id: "msg-2",
    name: "Selam Tadesse",
    preview: "Thank you for the approval!",
    time: "Yesterday",
    unread: false,
    messages: [
      { from: "user", text: "Thank you for approving my registration!", time: "Yesterday" },
      { from: "admin", text: "Welcome to BEL ACADEMY, Selam!", time: "Yesterday" },
    ],
  },
  {
    id: "msg-3",
    name: "Nati Girma",
    preview: "Can I switch to online classes?",
    time: "Yesterday",
    unread: true,
    messages: [
      { from: "user", text: "Can I switch from night class to online?", time: "Yesterday" },
    ],
  },
  {
    id: "msg-4",
    name: "Feven Assefa",
    preview: "VIP class schedule question",
    time: "2 days ago",
    unread: false,
    messages: [
      { from: "user", text: "What is the VIP class schedule?", time: "2 days ago" },
    ],
  },
  {
    id: "msg-5",
    name: "Robel Haile",
    preview: "Payment inquiry",
    time: "3 days ago",
    unread: false,
    messages: [
      { from: "user", text: "How do I pay for private classes?", time: "3 days ago" },
    ],
  },
];
