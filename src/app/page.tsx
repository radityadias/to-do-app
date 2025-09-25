import { PlusIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const data = [
  {
    title: "Today Task",
    value: 5,
    color: "bg-blue-400"
  },
  {
    title: "Tomorrow Task",
    value: 10,
    color: "bg-yellow-300"
  },
  {
    title: "Upcoming Task",
    value: 15,
    color: "bg-red-400"
  },
  {
    title: "Completed Task",
    value: 20,
    color: "bg-green-400"
  }
]

const taskData = [
  {
    today: [
      {
        id: "24092025001",
        title: "Task 1",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        date: "24/09/2025",
        time: "10:00 AM",
        status: "Uncompleted"
      },
      {
        id: "24092025002",
        title: "Task 2",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        date: "24/09/2025",
        time: "09:00 AM",
        status: "Uncompleted"
      },
      {
        id: "24092025003",
        title: "Task 3",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        date: "24/09/2025",
        time: "02:00 PM",
        status: "Uncompleted"
      },
    ]
  },
  {
    tomorrow: [
      {
        id: "25092025001",
        title: "Prepare presentation for team meeting",
        description: "Review last week's performance data and create a slide deck summarizing key achievements and challenges.",
        date: "25/09/2025",
        time: "11:00 AM",
        status: "Uncompleted"
      },
      {
        id: "25092025002",
        title: "Respond to client emails",
        description: "Address all pending inquiries and follow up on outstanding requests from clients.",
        date: "25/09/2025",
        time: "03:00 PM",
        status: "Uncompleted"
      },
      {
        id: "25092025003",
        title: "Brainstorm new project ideas",
        description: "Collaborate with the design team to come up with creative concepts for the new marketing campaign.",
        date: "25/09/2025",
        time: "09:30 AM",
        status: "Uncompleted"
      }
    ]
  },
  {
    upcoming: [
      {
        id: "26092025001",
        title: "Finalize budget report",
        description: "Complete the quarterly budget report, ensuring all figures are accurate and aligned with department goals.",
        date: "26/09/2025",
        time: "01:00 PM",
        status: "Uncompleted"
      },
      {
        id: "27092025001",
        title: "Attend industry conference",
        description: "Register for and attend the annual tech industry conference to network and learn about new trends.",
        date: "27/09/2025",
        time: "09:00 AM",
        status: "Uncompleted"
      },
      {
        id: "29092025001",
        title: "Meet with project stakeholders",
        description: "Hold a meeting with key stakeholders to provide an update on the project's progress and gather feedback.",
        date: "29/09/2025",
        time: "10:00 AM",
        status: "Uncompleted"
      }
    ]
  }
]

export default function Home() {
  return (
   <div>
   </div>
  );
}
