import { notFound } from "next/navigation";
import { projects } from "../data";
import ProjectDetails from "./ProjectDetails";

export const metadata = {
    title: 'Developer Services | Sven Buskov Romme',
};
  
export default function Page({params: {projectId}}: {params: {projectId: string}}) {
    const project = projects.find(project => project.title.toLowerCase() === projectId);
    return project ?
        <ProjectDetails project={project} /> :
        notFound();
}