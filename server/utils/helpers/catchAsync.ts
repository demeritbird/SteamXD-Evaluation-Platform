import { Request, Response, NextFunction } from 'express';

module.exports = (fn: Function) => {
  return (req: Request, res: Response, next: NextFunction): void => {
    fn(req, res, next).catch((err: Error) => next(err));
  };
};
