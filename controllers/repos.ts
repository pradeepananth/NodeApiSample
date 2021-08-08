import { Request, Response } from "express";

const repos = [
    { name: 'express', url: 'https://github.com/expressjs/express' },
    { name: 'stylus', url: 'https://github.com/learnboost/stylus' },
    { name: 'cluster', url: 'https://github.com/learnboost/cluster' }
  ];

  export const repo = (req: Request, res: Response) => {
    res.send(repos);
}