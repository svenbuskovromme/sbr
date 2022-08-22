import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import store from '../app/store';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import {SessionProvider} from 'next-auth/react';
import { useApollo } from '../lib/apolloClient';

// const client = new ApolloClient({ cache: new InMemoryCache({}), uri: '/api/graphql'});

function MyApp({ Component, pageProps: {session, ...pageProps} }: AppProps) {
  const client = useApollo(pageProps);

  return (
    <Provider store={store}>
    <SessionProvider session={session}>
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
    </SessionProvider>
    </Provider>
  );
}

export default MyApp
