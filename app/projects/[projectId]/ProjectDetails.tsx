'use client';

import { motion } from "framer-motion";
import { FC, useState } from "react";
import Button from "../../../components/Button";
import NavButton from "../../../components/NavButton";
import { useTheme } from "../../../redux/hooks";
import { App, Project, Role } from "../types";

const RoleView: FC<{role: Role}> = ({role}) => {
  const theme = useTheme();

  return <div style={{flexShrink: 0, display: 'flex', flexDirection: 'column', gap: 10, padding: 0}}>
    <div style={{fontSize: 18, fontWeight: '600'}}><span style={{color: theme?.fontFaded}}>Role</span> {role.title}</div>
    <div style={{fontSize: 14, fontWeight: '400', color: theme?.fontFaded, textTransform: 'capitalize'}}>{role.from} - {role.to}</div>
    <div style={{fontSize: 14, fontWeight: '300', whiteSpace: 'pre-line'}}>{role.description}</div>
  </div>
}

const ProjectDetails: FC<{project: Project}> = ({project}) => {
    return <>
      <div style={{display: 'flex', flexDirection: 'column', gap: 30, padding: 30, minHeight: '100vh', paddingBottom: 130}}>
        <h1>{project.title}</h1>
        <div style={{whiteSpace: 'pre-line', lineHeight: 1.3}}>{project.description}</div>
        <RoleView role={project.role} />
        <div style={{display: 'flex', flexDirection: 'column', gap: 15}}>
          <div>Apps / Products</div>
          <div 
            style={{overflowY: 'auto', gap: 30, gridAutoFlow: 'row', display: 'grid', gridTemplateColumns: 'repeat( auto-fill, minmax(250px, 1fr) )', justifyContent: 'center', alignItems: 'flex-start'}}>
            {
              project.apps.map(app => <AppView key={`${project.title}_${app.name}`} app={app} />)
            }
          </div>
        </div>
      </div>
    </>;
  }
  
const Circle: FC = () => {
  const theme = useTheme();
  return <div style={{flexShrink: 0, borderRadius: 10, width: 5, height: 5, backgroundColor: theme?.fontFull}} />
}

  const AppView: FC<{app: App}> = ({app}) => {
    const theme = useTheme();
    const [showingFeatures, setShowingFeatures] = useState(false);
  
    return <div style={{padding: 15, color: theme?.fontFull, backgroundColor: theme?.boxColor, display: 'flex', flexDirection: 'column', gap: 10}}>
      <div style={{fontSize: 16, fontWeight: '600'}}>{app.name}</div>
      <div style={{whiteSpace: 'pre-line', fontWeight: '300', fontSize: 14, lineHeight: 1.3}}>{app.description}</div>
      {
        !!app.role && <RoleView role={app.role} />
      }
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