'use client';

import { motion } from "framer-motion";
import { FC, useState } from "react";
import Button from "../../../components/Button";
import NavButton from "../../../components/NavButton";
import { App, Project, Role } from "../types";

const RoleView: FC<{role: Role}> = ({role}) => {
  return <div style={{flexShrink: 0, display: 'flex', flexDirection: 'column', gap: 10, padding: 0, backgroundColor: 'rgba(255,255,255,0)'}}>
    <div style={{fontSize: 18, fontWeight: '600'}}><span style={{color: 'rgb(180,180,180)'}}>Role</span> {role.title}</div>
    <div style={{fontSize: 14, fontWeight: '400', color: 'rgb(180,180,180)', textTransform: 'capitalize'}}>{role.from} - {role.to}</div>
    <div style={{fontSize: 14, fontWeight: '300', whiteSpace: 'pre-line'}}>{role.description}</div>
  </div>
}

const ProjectDetails: FC<{project: Project}> = ({project}) => {
    return <>
      <div style={{display: 'flex', flexDirection: 'column', gap: 30, padding: 30}}>
        <h1>{project.title}</h1>
        <div style={{whiteSpace: 'pre-line', lineHeight: 1.3}}>{project.description}</div>
        <RoleView role={project.role} />
        <div style={{display: 'flex', flexDirection: 'column', gap: 15}}>
          <div>Apps / Products</div>
          <div 
            style={{overflowY: 'auto', gap: 30, gridAutoFlow: 'row', display: 'grid', gridTemplateColumns: 'repeat( auto-fill, minmax(250px, 1fr) )', justifyContent: 'center', alignItems: 'flex-start', width: '100vw', height: '100vh'}}>
            {
              project.apps.map(app => <AppView key={`${project.title}_${app.name}`} app={app} />)
            }
          </div>
        </div>
      </div>
    </>;
  }
  
const Circle: FC = () => {
  return <div style={{flexShrink: 0, borderRadius: 10, width: 5, height: 5, backgroundColor: 'white'}} />
}

  const AppView: FC<{app: App}> = ({app}) => {
    const [showingFeatures, setShowingFeatures] = useState(false);
  
    return <div style={{padding: 15, color:'white',backgroundColor: 'rgb(30,30,30)', display: 'flex', flexDirection: 'column', gap: 10}}>
      <div style={{fontSize: 16, fontWeight: '600'}}>{app.name}</div>
      <div style={{whiteSpace: 'pre-line', fontWeight: '300', fontSize: 14, lineHeight: 1.3}}>{app.description}</div>
      <RoleView role={app.role} />
      <div style={{display: 'flex', flexDirection: 'column', gap: 15}}>
        <div style={{display: 'flex', gap: 30, alignItems: 'center', justifyContent: 'space-between'}}>
          <Button onClick={() => setShowingFeatures(!showingFeatures)}>Features {showingFeatures ? '-' : '+'}</Button>
          {
            !!app.url &&
            <NavButton target={"_blank"} href={app.url}>Visit -&gt;</NavButton>
          }
        </div>
        {showingFeatures ? app.features.map(feature => <div style={{fontSize: 14, display: 'flex', alignItems: 'center', gap: 10}} key={`${feature}`}><Circle />{feature}</div>) : null}
      </div>
      
    </div>
  }

  export default ProjectDetails;