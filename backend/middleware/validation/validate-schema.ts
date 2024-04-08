import { ObjectSchema } from "joi";

import { RequestHandler } from "express";

import validation from "../../joi/validation";

type ValidateSchema = (schema: ObjectSchema) => RequestHandler;

const schemaValidation: ValidateSchema = (schema) => (req, res, next) => {

    const error = validation(schema, req.body);

    if (!error) return next();

    res.status(400).json({error});

};

export { schemaValidation };