import { Request, Response, NextFunction } from 'express';
import util from 'util';
import * as child_process from 'child_process';

const exec = util.promisify(child_process.exec);

const testController = (() => {
  const test = (req: Request, res: Response, next: NextFunction) => {
    console.log('the middleware is speaking');
    return next();
  };

  const showContainers = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const { stdout } = await exec('docker ps');
    console.log(stdout);
    return next();
  };

  return {
    test,
    showContainers,
  };
})();

export default testController;
