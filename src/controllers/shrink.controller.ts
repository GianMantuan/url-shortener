import { NextFunction, Request, Response } from 'express';
import ShrinkService from '@/services/shrink.service';
import { URLShortenerDto } from '@/dtos/url.dto';

class ShrinkController {
  public shrinkService = new ShrinkService();

  public getShortURLById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const id = Number(req.params.id);
      const { short } = await this.shrinkService.findUrlById(id);

      res.status(200).json({ url: short });
    } catch (error) {
      next(error);
    }
  };

  public getShortURLByDate = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { date } = req.params;
      const urls = await this.shrinkService.findUrlsByDate(date);

      res.status(200).json({ data: urls });
    } catch (error) {
      next(error);
    }
  };

  public shrinkLongURL = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { long }: URLShortenerDto = req.body;
      const { short } = await this.shrinkService.shrinkUrl(long);

      res.status(201).json({ url: short });
    } catch (error) {
      next(error);
    }
  };
}

export default ShrinkController;
