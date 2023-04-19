import type { GetServerSideProps, GetStaticProps, NextPage } from 'next'
import {AnimatePresence, motion} from 'framer-motion';
// import { GetAppsDocument } from '../generated/types';
import postgraphile from '../server/postgraphile';
import { FC, useEffect, useState } from 'react';

import { colors, paddings } from '../styles/inlines';
import { useMutation, useQuery } from '@apollo/client';
import { AddAppDocument, AddAppMutation, AddAppMutationFn, AddAppMutationResult, AddAppMutationVariables, DeleteAppByIdInput, DeleteAppDocument, DeleteAppMutation, DeleteAppMutationVariables, GetAppsDocument, GetAppsQuery, GetAppsQueryResult, GetAppsQueryVariables } from '../generated/graphql';
import { initializeApollo, addApolloState } from '../lib/apolloClient';
import { unstable_getServerSession } from 'next-auth/next';
import { getToken } from 'next-auth/jwt';
import { authOptions } from './api/auth/[...nextauth]';
import Link from 'next/link';
import NavButton from '../components/NavButton';

export type AppsParams = {}
export type App = {
  name: string,
  description: string,
  webUrl?: string,
  appStoreUrl?: string
}

const Apps: NextPage<AppsParams> = () => {
  // const { loading, error: cError, data: cData, refetch } = useQuery(GetAppsDocument) as GetAppsQueryResult;

  // const [apps, setApps] = useState<App[]>([]);

  // useEffect(() => {
  //   console.log('apollo server data', data, error);
  // }, [data, error]);

  // useEffect(() => {
  //   console.log('apollo client data', 'loading', loading, cData, cError);
  //   if(!cError){
  //     console.log(cData?.allApps?.nodes);
  //     setApps(cData?.allApps?.nodes as App[] ?? []);
  //   }
  //   else{
  //     console.log(cError);
  //   }
  // }, [cData, cError, loading]);

  const apps: App[] = [
    {name: 'Jungle', 
    description: 'A product centered around food discovery. \n Find recommendations from culinary professionals',
    appStoreUrl: 'https://apps.apple.com/dk/app/apple-store/id1574546669', webUrl: 'https://jungleapp.co'},
  ];

  return (
    <motion.div 
    initial={{opacity: 0, y: 20}} 
    animate={{opacity: 1, y: 0}} 
    style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100vw', height: '100vh'}}>
        <motion.div style={{display: 'flex', gap: 20}}>
            {apps.map((app, index) => <AppView key={app.name} app={app} index={index} />)}
        </motion.div>
    </motion.div>
  )
}

const AppView: FC<{index: number, app: App}> = ({index, app}) => {
  return <motion.div initial={{opacity: 0, scale: 0.5}} animate={{opacity: 1, scale: 1}} transition={{delay: index * 0.1, duration: 0.5}} style={{color:'white', display: 'flex', alignItems: 'center', flexDirection: 'column', gap: 10}}>
    <div style={{fontSize: 22, fontWeight: '600'}}>{app.name}</div>
    <div style={{whiteSpace: 'pre-line', textAlign: 'center', lineHeight: 1.3}}>{app.description}</div>
    <div style={{display: 'flex', gap: 10}}>
      {!!app.webUrl && <NavButton href={app.webUrl}>web</NavButton>}
      {!!app.appStoreUrl && <NavButton href={app.appStoreUrl}>native</NavButton>}
    </div>
  </motion.div>
}


// export const getStaticProps: GetStaticProps<AppsParams> = async (ctx) => {
//   const apolloClient = initializeApollo();

//   const apps = await apolloClient.query<GetAppsQuery, GetAppsQueryVariables>({
//     query: GetAppsDocument,
//     variables: {},
//   });

//   // const session = await unstable_getServerSession();
//   // const token = await getToken({req: apolloClient.});
//   // console.log('api top', session, token, req.cookies);

//   return await addApolloState(apolloClient, {
//     props: {apps: (apps.data.allApps?.nodes ?? []) as App[]},
//   })
// }

export default Apps;