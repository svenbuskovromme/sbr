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

export type AppsParams = {}

const ProjectsPage: NextPage<AppsParams> = () => {
  return (
    <>
    <div style={{padding: 30, width: '100vw', height: '100vh', display: 'flex', flexDirection: 'column'}}>
      <h1>Projects</h1>
      <motion.div 
        initial={{opacity: 0, y: 20}} 
        animate={{opacity: 1, y: 0}} 
        style={{flex: 1, overflowY: 'auto', gap: 30, gridAutoFlow: 'row', display: 'grid', gridTemplateColumns: 'repeat( auto-fill, minmax(250px, 1fr) )', justifyContent: 'center', alignItems: 'flex-start', width: '100%'}}>
        {
          projects.map(project => <ProjectGridView key={project.title} project={project} />)
        }
      </motion.div>
    </div>
    </>
  )
}

const ProjectGridView: FC<{project: Project}> = ({project}) => {
  return <NavButton href={`/projects/${project.title.toLowerCase()}`}>
    <div style={{display: 'flex', flexDirection: 'column', gap: 15, padding: 10}}>
      <div>{project.title}</div>
      <div style={{fontSize: 14, fontWeight: '300', lineHeight: 1.5}}>{project.description}</div>
    </div>
  </NavButton>
}

export default ProjectsPage;