import {NextApiRequest, NextApiResponse} from "next";

export default function (req: NextApiRequest, res: NextApiResponse) {
  const { name, age, profession } = req.body;
  const info = { name, age, profession };
  res.status(200).json({ info });
}