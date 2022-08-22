import type { GetServerSideProps, GetStaticProps, NextPage } from 'next'
import {AnimatePresence, motion} from 'framer-motion';
// import { GetAppsDocument } from '../generated/types';
import postgraphile from '../server/postgraphile';
import { useEffect, useState } from 'react';

import { colors, paddings } from '../styles/inlines';
import { useMutation, useQuery } from '@apollo/client';
import { AddAppDocument, AddAppMutation, AddAppMutationFn, AddAppMutationResult, AddAppMutationVariables, App, DeleteAppByIdInput, DeleteAppDocument, DeleteAppMutation, DeleteAppMutationVariables, GetAppsDocument, GetAppsQuery, GetAppsQueryResult, GetAppsQueryVariables } from '../generated/graphql';
import { initializeApollo, addApolloState } from '../lib/apolloClient';
import { unstable_getServerSession } from 'next-auth/next';
import { getToken } from 'next-auth/jwt';
import { authOptions } from './api/auth/[...nextauth]';

export type AppsParams = {apps: App[]}

const Apps: NextPage<AppsParams> = ({apps}) => {
  const { loading, error: cError, data: cData, refetch } = useQuery(GetAppsDocument) as GetAppsQueryResult;

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

  return (
    <motion.div 
    initial={{opacity: 0, y: 20}} 
    animate={{opacity: 1, y: 0}} 
    style={{display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100vw', height: '100vh'}}>
        <motion.div style={{display: 'flex', gap: 20}}>
            {apps.map((app, index) => <motion.div 
            key={app?.id} initial={{opacity: 0, scale: 0.5}} animate={{opacity: 1, scale: 1}} transition={{delay: index * 0.1, duration: 0.5}} style={{color:'white', padding: paddings.button, backgroundColor: colors.darkblue}}>{app?.name}</motion.div>)}
        </motion.div>
    </motion.div>
  )
}

export const getStaticProps: GetStaticProps<AppsParams> = async (ctx) => {
  const apolloClient = initializeApollo();

  const apps = await apolloClient.query<GetAppsQuery, GetAppsQueryVariables>({
    query: GetAppsDocument,
    variables: {},
  });

  // const session = await unstable_getServerSession();
  // const token = await getToken({req: apolloClient.});
  // console.log('api top', session, token, req.cookies);

  return await addApolloState(apolloClient, {
    props: {apps: (apps.data.allApps?.nodes ?? []) as App[]},
  })
}

export default Apps;