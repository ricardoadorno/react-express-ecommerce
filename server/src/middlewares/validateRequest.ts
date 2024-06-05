import { plainToInstance } from 'class-transformer';
import { validate, ValidationError } from 'class-validator';
import { Request, Response, NextFunction } from 'express';

export function validateRequest(schema: any) {
  return (req: Request, res: Response, next: NextFunction) => {
    const dto = plainToInstance(schema, req.body);
    validate(dto).then((errors: ValidationError[]) => {
      if (errors.length > 0) {
        const messages = errors
          .map((err) => Object.values(err.constraints || {}))
          .flat();
        res.status(400).json({ errors: messages });
      } else {
        next();
      }
    });
  };
}
