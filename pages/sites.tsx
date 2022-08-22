import type { GetServerSideProps, NextPage } from 'next'
import {AnimatePresence, motion} from 'framer-motion';
// import { GetAppsDocument } from '../generated/types';
import postgraphile from '../server/postgraphile';
import { useEffect, useState } from 'react';

import { colors, paddings } from '../styles/inlines';
import { useMutation, useQuery } from '@apollo/client';
import { AddAppDocument, AddAppMutation, AddAppMutationFn, AddAppMutationResult, AddAppMutationVariables, App, DeleteAppByIdInput, DeleteAppDocument, DeleteAppMutation, DeleteAppMutationVariables, GetAppsDocument, GetAppsQuery, GetAppsQueryResult, GetAppsQueryVariables } from '../generated/graphql';

const Apps: NextPage = ({}) => {
  // const {data, error, isLoading} = useGetAppsQuery({top: 5});

  const { loading, error: cError, data: cData, refetch } = useQuery(GetAppsDocument) as GetAppsQueryResult;

  const [apps, setApps] = useState<App[]>([]);

  // useEffect(() => {
  //   console.log('apollo server data', data, error);
  // }, [data, error]);

  useEffect(() => {
    console.log('apollo client data', 'loading', loading, cData, cError);
    if(!cError){
      console.log(cData?.allApps?.nodes);
      setApps(cData?.allApps?.nodes as App[] ?? []);
    }
    else{
      console.log(cError);
    }
  }, [cData, cError, loading]);

  useEffect(() => {
    console.log('apps', apps.length);
  }, [apps]);

  const [addApp, addAppRes] = useMutation<AddAppMutation, AddAppMutationVariables>(AddAppDocument, {refetchQueries: 'active'});
  const [deleteApp, deleteAppRes] = useMutation<DeleteAppMutation, DeleteAppMutationVariables>(DeleteAppDocument, {refetchQueries: 'active'});

  return (
    <motion.div 
    initial={{opacity: 0, y: 20}} 
    animate={{opacity: 1, y: 0}} 
    style={{display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100vw', height: '100vh'}}>
        <motion.div style={{display: 'flex', gap: 20}}>
            {apps.map((app, index) => <motion.div 
            onClick={async () => {await deleteApp({variables: {deleteInput: {id: app!.id}}});  }}
            key={app?.id} initial={{opacity: 0, scale: 0.5}} animate={{opacity: 1, scale: 1}} transition={{delay: index * 0.1, duration: 0.5}} style={{color:'white', padding: paddings.button, backgroundColor: colors.darkblue}}>{app?.name}</motion.div>)}
        </motion.div>
        <motion.div onClick={async () => {await addApp({variables: {input: {app: {name: 'added through client ' + apps.length}}}}); }}>
          add app
        </motion.div>
    </motion.div>
  )
}

// export const getServerSideProps: GetServerSideProps = async (ctx) => {
//   return await ssrGetApps.getServerPage({variables: {top: 2}}, ctx);
// }

export default Apps;