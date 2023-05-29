'use client';

import type { GetServerSideProps, GetStaticProps, NextPage } from 'next'
import {AnimatePresence, motion} from 'framer-motion';
// import { GetAppsDocument } from '../generated/types';
import { FC, useEffect, useState } from 'react';
import NavButton from '../../components/NavButton';
import { RouteType } from 'next/dist/lib/load-custom-routes';
import { UrlObject } from 'url';
import { Project } from './types';
import { projects } from './data';
import Link from 'next/link';
import Box from '../../components/Box';
import Text from '../../components/Text';
import Gap from '../../components/Gap';
import Column from '../../components/Column';
import AutoGrid from '../../components/AutoGrid';

export type AppsParams = {}

const ProjectsPage: NextPage<AppsParams> = () => {
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
          justifyContent: 'center', 
          alignItems: 'flex-start', 
          width: '100%'
        }}
      >
        {projects.map(project => <ProjectGridView key={project.title} project={project} />)}
      </AutoGrid>
      {/* <div 
        style={{gap: 30, gridAutoFlow: 'row', display: 'grid', gridTemplateColumns: 'repeat( auto-fill, minmax(250px, 1fr) )', justifyContent: 'center', alignItems: 'flex-start', width: '100%'}}>
        {
          projects.map(project => <ProjectGridView key={project.title} project={project} />)
        }
      </div> */}
    </Column>
    </>
  )
}

const ProjectGridView: FC<{project: Project}> = ({project}) => {
  return <Link href={`/projects/${project.title.toLowerCase()}`}>
    <Box>
      <div style={{display: 'flex', flexDirection: 'column', gap: 15, padding: 20}}>
        <div>{project.title}</div>
        <div style={{fontSize: 14, fontWeight: '300', lineHeight: 1.5}}>{project.description}</div>
      </div>
    </Box>
  </Link>
}

export default ProjectsPage;