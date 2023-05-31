'use client';

import { motion } from "framer-motion";
import { FC, useState } from "react";
import Box from "../../../../components/Box";
import Button from "../../../../components/Button";
import Text from "../../../../components/Text";
import NavButton from "../../../../components/NavButton";
import { App, Project, Role, Stack } from "../types";

const RoleView: FC<{role: Role}> = ({role}) => {
  return <div style={{flexShrink: 0, display: 'flex', flexDirection: 'column', gap: 10, padding: 0}}>
    <div style={{fontSize: 18, fontWeight: '600'}}><Text.Faded>Role</Text.Faded> {role.title}</div>
    <Text.Faded style={{fontSize: 14, fontWeight: '400', textTransform: 'capitalize'}}>{role.from} - {role.to}</Text.Faded>
    <Text.Body style={{fontSize: 14, fontWeight: '300', whiteSpace: 'pre-line'}}>{role.description}</Text.Body>
  </div>
}

const StackView: FC<{stack: Stack}> = ({stack}) => {
  return <div style={{display: 'grid', gridTemplateColumns: 'auto auto', alignSelf: 'flex-start', gap: 10, padding: 5}}>
      <Text.Faded>Database</Text.Faded> <Text.Full style={{textTransform: 'capitalize'}}>{stack.database}</Text.Full>
      <Text.Faded>Backend</Text.Faded> <Text.Full style={{textTransform: 'capitalize'}}>{stack.backend}</Text.Full>
      <Text.Faded>Frontend</Text.Faded> <Text.Full style={{textTransform: 'capitalize'}}>{stack.frontend}</Text.Full>
  </div>
}

const ProjectDetails: FC<{project: Project}> = ({project}) => {
    return <>
      <div style={{display: 'flex', marginLeft: 'min(max(calc(100dvw - 900px) / 2, 0px), max(100px))', maxWidth: 900, flexDirection: 'column', gap: 30, padding: 30, minHeight: '100vh', paddingBottom: 130}}>
        <Text.Header>{project.title}</Text.Header>
        <div style={{whiteSpace: 'pre-line', lineHeight: 1.3}}>{project.description}</div>
        <RoleView role={project.role} />
        <div style={{display: 'flex', flexDirection: 'column', gap: 15}}>
          <div>Apps / Products</div>
          <div 
            style={{overflowY: 'auto', gap: 30, gridAutoFlow: 'row', display: 'grid', gridTemplateColumns: 'repeat( auto-fill, minmax(350px, 1fr) )', justifyContent: 'center', alignItems: 'flex-start'}}>
            {
              project.apps.map(app => <AppView key={`${project.title}_${app.name}`} app={app} />)
            }
          </div>
        </div>
      </div>
    </>;
  }
  
const AppView: FC<{app: App}> = ({app}) => {
  const [showingFeatures, setShowingFeatures] = useState(false);
  
  return <Box style={{padding: 15, display: 'flex', flexDirection: 'column', gap: 10}}>
    <Text.SubHeader>{app.name}</Text.SubHeader>
    <Text.Body style={{whiteSpace: 'pre-line'}}>{app.description}</Text.Body>
    {
      !!app.role && <RoleView role={app.role} />
    }
    <StackView stack={app.stack} />
    <div style={{display: 'flex', flexDirection: 'column', gap: 15}}>
      <div style={{display: 'flex', gap: 30, alignItems: 'center', justifyContent: 'space-between'}}>
        <Button onClick={() => setShowingFeatures(!showingFeatures)}>Features {showingFeatures ? '-' : '+'}</Button>
        {
          !!app.url &&
          <NavButton target={"_blank"} href={app.url}>Visit -&gt;</NavButton>
        }
      </div>
      
      {showingFeatures ? app.features.map(feature => <div style={{fontSize: 14, display: 'flex', alignItems: 'center', gap: 10}} key={`${feature}`}> - {feature}</div>) : null}
    </div>
    
  </Box>
}

  export default ProjectDetails;