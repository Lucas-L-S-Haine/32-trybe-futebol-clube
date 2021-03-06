import * as express from 'express';
import { Express, RequestHandler, json } from 'express';
import router from './routes';
import errorHandler from './middlewares/errorHandler';
import notFoundHandler from './middlewares/notFoundHandler';

class App {
  public app: Express;
  // ...

  constructor() {
    // ...
    this.app = express();
    this.config();
    // ...
  }

  private config(): void {
    const accessControl: RequestHandler = (_req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
      res.header('Access-Control-Allow-Headers', '*');
      next();
    };

    this.app.use(accessControl);
    this.app.use(json());
    this.app.use(router);
    this.app.use(errorHandler);
    this.app.use(notFoundHandler);
    // ...
  }

  // ...
  public start(PORT: string | number): void {
    this.app.listen(PORT, () => console
      .log(`Server online on port \x1b[03;94m${PORT}\x1b[00m!`));
  }
}

export { App };

export const { app } = new App();
