const ticketData = [
  {
    ID: "",
    createdBy: "E00000002", // Employee UID
    assignedTo: ["S00000001"], // can be multiple
    createdAtDate: "13/07/2020",
    modifiedAtDate: [""],
    isOpen: true,
    priority: 3, // Time-based on date
    eventLog: [
      // Includes all events including messages.
      {
        type: "opened",
        details: "Ticket was created",
        content: {
          name: "E00000002",
          message: "I haven't been paid this month."
        },
        date: "13/07/2020 13:05:43",
      },
      {
        type: "assignedTo",
        details: "Ticket assigned to ",
        content: {
          name: "E00000009",
          message: null
        },
        date: "13/07/2020 16:05:43",
      },
      {
        type: "message",
        details: "New message received",
        content: {
          name: "E00000002",
          message: "I still haven't heard back from HR"
        },
        date: "13/07/2020 15:05:43",
      },
      {
        type: "changeOfAgent",
        details: "Ticket escalated to ",
        content: {
          name: "E00000009"
        },
        date: "13/07/2020 17:05:43",
      },
    ],
  },

  {
    ID: "",
    createdBy: "E00000001", // Employee UID
    assignedTo: ["S00000001"], // can be multiple
    createdAtDate: "13/07/2020",
    modifiedAtDate: ["14/07/2020"],
    isOpen: true,
    priority: 3, // Time-based on date
    eventLog: [
      // Includes all events including messages.
      {
        type: "opened",
        details: "Ticket was created",
        content: {
          name: "E00000001",
          message: "I want to findout my UTR number",
        },
        date: "3/07/2020 11:02:43",
      },
      {
        type: "assignedTo",
        details: "Ticket assigned to ",
        content: {
          name: "A00000001",
          message: null,
        },
        date: "3/07/2020 16:09:43",
      },
      {
        type: "message",
        details: "New message received",
        content: {
          name: "E00000002",
          message: "Hi, could you please tell me my UTR number. Thanks",
        },
        date: "3/07/2020 11:05:43",
      },
      {
        type: "changeOfAgent",
        details: "Ticket escalated to ",
        content: {
          name: "S00000001",
        },
        date: "14/07/2020 12:00:43",
      },
    ],
  },
];