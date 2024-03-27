import { auth } from "@clerk/nextjs"
import { redirect } from "next/navigation";
import { CheckCircle, Clock } from "lucide-react";
import CoursesContainer from "./_components/coursecontainer";



export default async function Dashboard() {
  const { userId } = auth();

  if (!userId) {
    return redirect("/");
  }



  return (
    <div className="p-6 space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
       
      <CoursesContainer />
    </div>
    </div>
  )
}
