import { redirect } from "next/navigation";
import HomePage from "./HomePage";
  
export default function Page() {
    // return <HomePage />
    return redirect('/projects');
}