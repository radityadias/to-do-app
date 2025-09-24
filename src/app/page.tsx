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

export default function Home() {
  return (
   <div>
     <div className="grid grid-cols-4 gap-4">
       {data.map((item) => (
           <div className={`flex flex-col justify-evenly items-center h-28 w-full rounded-xl shadow-md text-blue-accent ${item.color || 'bg-gray-300'}`} key={item.title}>
             <p className="text-xl">{item.title}</p>
             <p className="text-4xl">{item.value}</p>
           </div>
       ))}
       <div className="col-span-4">
         <Button className="w-full bg-white-foreground hover:bg-white-accent active:bg-blue-primary" variant="secondary" >
           <PlusIcon />
           Add New Task
         </Button>
       </div>
     </div>
   </div>
  );
}
