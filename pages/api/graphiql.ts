import { NextApiRequest, NextApiResponse } from "next";

import postgraphile from "../../server/postgraphile";
import runMiddleware from "../../server/middleware";

// Graphiql route that handles rendering graphiql
// https://github.com/graphql/graphiql
// An interactive in-browser GraphQL IDE
export default async (req: NextApiRequest, res: NextApiResponse) => {
  res.statusCode = 200;
  await runMiddleware(req, res, postgraphile);
  res.end();
};