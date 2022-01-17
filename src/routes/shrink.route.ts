import { Router } from 'express';
import ShrinkController from '@/controllers/shrink.controller';
import { Routes } from '@/interfaces/routes.interface';

class Shrink implements Routes {
  public path = '/url';
  public router = Router();
  public shrinkController = new ShrinkController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}/short/:id`, this.shrinkController.getShortURLById);
    this.router.get(`${this.path}/short/date/:date`, this.shrinkController.getShortURLByDate);
    this.router.post(`${this.path}/shrink`, this.shrinkController.shrinkLongURL);
  }
}

export default Shrink;
