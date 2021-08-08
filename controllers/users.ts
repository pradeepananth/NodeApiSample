import { Request, Response } from "express";

const users = [
    { name: 'tobi' }
  , { name: 'loki' }
  , { name: 'jane' }
];

export const user = (req: Request, res: Response) => {
    res.send(users);
}