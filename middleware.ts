import { withAuth } from "next-auth/middleware"
import { getSession } from "next-auth/react";
import { GetUserBySubDocument, GetUserBySubQuery, GetUserBySubQueryVariables } from "./generated/graphql";
import { initializeApollo } from "./lib/apolloClient";

export default withAuth(
  // `withAuth` augments your `Request` with the user's token.
  function middleware(req) {
    console.log('middleware', req.nextauth.token);
  },
  {
    callbacks: {
      authorized: async ({ token }) => {
        if(token?.sub){
          const userInfo = await initializeApollo().query<GetUserBySubQuery, GetUserBySubQueryVariables>({query: GetUserBySubDocument, variables: {sub: token.sub}});
          console.log('token', userInfo );
          return userInfo.data.userBySub?.type === "admin";
        }

        return false;
      },
    },
  }
)

export const config = { matcher: ["/admin"] }