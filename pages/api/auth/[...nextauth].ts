import NextAuth, { NextAuthOptions } from "next-auth"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"
import { CreateUserDocument, CreateUserMutation, CreateUserMutationVariables, GetUserBySubDocument, GetUserBySubQuery, GetUserBySubQueryVariables, User } from "../../../generated/graphql"
import { initializeApollo } from "../../../lib/apolloClient"

export const authOptions: NextAuthOptions = {
    // Configure one or more authentication providers
    providers: [
      GoogleProvider({
          clientId: process.env.GOOGLE_CLIENT_ID!,
          clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
          profile(profile) {
              return {
                  id: profile.sub as string,
                  name: profile.name,
                  email: profile.email,
                  image: profile.picture,
              }
          },
      }),
      
      // ...add more providers here
    ],
    session: {strategy: 'jwt'},
    callbacks: {
  
      async session({session,token}){
          const {email,name,picture: image,sub} = token;
  
          if(sub){
              const client = initializeApollo();
              try{
                  const user: Partial<typeof session['user']> = {
                      image, email, name, sub, type: 'basic'
                  };
  
                  const createUser = async (sub: string) => {
                      const mutationInfo = await client.mutate<CreateUserMutation, CreateUserMutationVariables>({mutation: CreateUserDocument, variables: {sub}});
                      return mutationInfo.data?.createUser;
                  }
                  const getUser = async (sub: string) => {
                      const userInfo = await client.query<GetUserBySubQuery, GetUserBySubQueryVariables>({query: GetUserBySubDocument, variables: {sub}});
                      return userInfo.data.userBySub;
                  }
                  const userInfo = await getUser(sub) ?? await createUser(sub) as User;
  
                  user.type = userInfo.type as 'basic' | 'admin';
                  user.id = userInfo.id;
  
                  session.user = user as typeof session['user'];
              }
              catch(e){
                  console.log('get user by sub error', e);
              }
          }
          else{
              console.log('no sub', session.user);
          }
  
          return session;
      }
    }
  }

export default NextAuth(authOptions);