import { RequestHandler } from 'express';

const notFoundHandler: RequestHandler = (req, res, _next) => {
  const message = 'Resource not found';
  return res.status(404).send({ message });
};

export default notFoundHandler;
