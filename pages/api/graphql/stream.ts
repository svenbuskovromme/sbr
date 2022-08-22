import { NextApiRequest, NextApiResponse } from "next";

import postgraphile from "../../../server/postgraphile";
import runMiddleware from "../../../server/middleware";
import { unstable_getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await unstable_getServerSession(req, res, authOptions);
  console.log('stream', session);
  res.statusCode = 200;
  await runMiddleware(req, res, postgraphile);
  res.end();
};

export const config = {
    api: {
      bodyParser: false,
    },
}