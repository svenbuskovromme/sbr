'use client';

import { FC } from 'react';
import { Project } from './types';
import { projects } from './data';
import Link from 'next/link';
import Box from '../../../components/Box';
import Text from '../../../components/Text';
import Gap from '../../../components/Gap';
import Column from '../../../components/Column';
import AutoGrid from '../../../components/AutoGrid';

const ProjectGridView: FC<{project: Project}> = ({project}) => {
  return <Link style={{height: '100%'}} href={`/projects/${project.title.toLowerCase()}`}>
    <Box style={{height: '100%'}}>
      <div style={{display: 'flex', flexDirection: 'column', gap: 15, padding: 20}}>
        <div>{project.title}</div>
        <div style={{fontSize: 14, fontWeight: '300', lineHeight: 1.5}}>{project.description}</div>
      </div>
    </Box>
  </Link>
}

export default function ProjectsPage(){
  return (
    <>
    <Column style={{padding: 30, flex: 1}}>
      <Text.Header>
        Projects
      </Text.Header>
      <Gap y={20} />
      <AutoGrid
        expand={false}
        min={'250px'}
        style={{
          gap: 30, 
          gridAutoFlow: 'dense',
          justifyContent: 'center', 
          alignItems: 'flex-start', 
          width: '100%'
        }}
      >
        {projects.map(project => <ProjectGridView key={project.title} project={project} />)}
      </AutoGrid>
    </Column>
    </>
  )
};