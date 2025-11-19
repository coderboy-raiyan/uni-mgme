/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from 'express';

function globalErrorHandler(err: any, req: Request, res: Response, next: NextFunction) {
    return res.status(500).json(err);
}

export default globalErrorHandler;
