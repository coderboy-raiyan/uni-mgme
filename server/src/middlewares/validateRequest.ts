import { NextFunction, Request, Response } from 'express';
import { ZodObject } from 'zod';

function validateRequest(zodObject: ZodObject) {
    return async function (req: Request, res: Response, next: NextFunction) {
        try {
            await zodObject.parseAsync({
                body: req.body,
                cookies: req.cookies,
            });
            next();
        } catch (error) {
            next(error);
        }
    };
}

export default validateRequest;
