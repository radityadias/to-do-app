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
  const currentDate = new Date().toDateString();

  return (
   <>
     <div className="flex flex-col justify-center items-start gap-2">
       <div className="flex gap-2 items-center">
         <svg width="32px" height="32px" viewBox="0 0 1024 1024" className="icon" version="1.1"
              xmlns="http://www.w3.org/2000/svg" fill="#000000">
           <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
           <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
           <g id="SVGRepo_iconCarrier">
             <path
                 d="M365.6 864.7c-22.7-9.4-38.5-10.4-69.9-7.1-32.2 3.3-45.1 3.2-64.5-4.1-13.1-4.9-25.2-13-36.7-24.4-11.5-11.5-19.5-23.6-24.5-36.7-7.3-19.4-7.4-32.3-4.1-64.5 3.2-31.5 2.3-47.3-7.1-69.9-7.4-17.9-17-30.6-31.4-43.5-3-2.7-6.2-5.4-10.4-8.9 1.9 1.6-8.5-7-11.2-9.1-29.4-24.6-42.9-47-42.9-84.7s13.5-60.1 42.9-84.7c2.6-2.2 13.1-10.7 11.2-9.1 4.3-3.5 7.4-6.2 10.4-8.9 14.3-12.9 23.9-25.5 31.4-43.5 9.4-22.7 10.4-38.5 7.1-69.9-3.3-32.2-3.2-45.1 4.1-64.5 4.9-13.1 13-25.2 24.4-36.7C205.9 183 218 175 231.2 170c19.4-7.3 32.3-7.4 64.5-4.1 31.5 3.2 47.3 2.3 69.9-7.1 17.9-7.4 30.6-17 43.5-31.4 2.7-3 5.4-6.2 8.9-10.4-1.6 1.9 7-8.5 9.1-11.2 24.6-29.4 47-42.9 84.7-42.9s60.1 13.5 84.7 42.9c2.2 2.6 10.7 13.1 9.1 11.2 3.5 4.3 6.2 7.4 8.9 10.4C627.4 141.7 640 151.3 658 158.8c22.7 9.4 38.5 10.4 69.9 7.1 32.2-3.3 45.1-3.2 64.5 4.1 13.1 4.9 25.2 13 36.7 24.4 11.5 11.5 19.5 23.6 24.4 36.7 7.3 19.4 7.4 32.3 4.1 64.5-3.2 31.5-2.3 47.3 7.1 69.9 7.4 17.9 17 30.6 31.4 43.5 3 2.7 6.2 5.4 10.4 8.9-1.9-1.6 8.5 7 11.2 9.1 29.4 24.6 42.9 47 42.9 84.7s-13.5 60.1-42.9 84.7c-2.6 2.2-13.1 10.7-11.2 9.1-4.3 3.5-7.4 6.2-10.4 8.9-14.3 12.9-23.9 25.5-31.4 43.5-9.4 22.7-10.4 38.5-7.1 69.9 3.3 32.2 3.2 45.1-4.1 64.5-4.9 13.1-13 25.2-24.4 36.7-11.5 11.5-23.6 19.5-36.7 24.4-19.4 7.3-32.3 7.4-64.5 4.1-31.5-3.2-47.3-2.3-69.9 7.1-17.9 7.4-30.6 17-43.5 31.4-2.7 3-5.4 6.2-8.9 10.4 1.6-1.9-7 8.5-9.1 11.2-24.6 29.4-47 42.9-84.7 42.9s-60.1-13.5-84.7-42.9c-2.2-2.6-10.7-13.1-9.1-11.2-3.5-4.3-6.2-7.4-8.9-10.4-12.9-14.3-25.6-23.9-43.5-31.3z"
                 fill="#000000"></path>
             <path
                 d="M376.3 838.8c74.4 30.8 67.7 93.7 135.4 93.7s61.1-62.9 135.4-93.7c74.4-30.8 114.1 18.4 162-29.5s-1.3-87.7 29.5-162c30.8-74.4 93.7-67.7 93.7-135.4s-62.9-61.1-93.7-135.4c-30.8-74.4 18.4-114.1-29.5-162s-87.7 1.3-162-29.5c-74.4-30.8-67.7-93.7-135.4-93.7S450.6 154.2 376.3 185c-74.4 30.8-114.1-18.4-162 29.5s1.3 87.7-29.5 162c-30.8 74.2-93.7 67.5-93.7 135.3s62.9 61.1 93.7 135.4c30.8 74.4-18.4 114.1 29.5 162s87.6-1.3 162 29.6z"
                 fill="#FFFFFF"></path>
             <path
                 d="M511.8 792.2c-154.9 0-280.5-125.6-280.5-280.5S356.9 231.2 511.8 231.2s280.5 125.6 280.5 280.5-125.7 280.5-280.5 280.5z"
                 fill="#000000"></path>
             <path
                 d="M511.8 736.1c123.9 0 224.4-100.5 224.4-224.4S635.7 287.4 511.8 287.4 287.4 387.8 287.4 511.8s100.4 224.3 224.4 224.3z"
                 fill="#FFFFFF"></path>
           </g>
         </svg>
         <p className="text-lg font-medium text-text-primary">Today</p>
       </div>

       <p className="text-xs text-text-primary/50">{currentDate}</p>
     </div>
   </>
  );
}
