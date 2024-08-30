import { readdirSync } from "fs";
import { NextApiHandler } from "next";
import path from "path";

const handler : NextApiHandler = (req,res) => {
    res.status(200).json(readdirSync(path.join(process.cwd(), 'components')))
}
export default handler