import { nanoid } from 'nanoid/async';
import { isEmpty } from 'class-validator';
import { format } from 'date-fns';
import { HttpException } from '@/exceptions/HttpException';
import { PrismaClient, Url } from '@prisma/client';

class ShrinkService {
  public urls = new PrismaClient().url;

  public async shrinkUrl(url: string): Promise<Url> {
    if (isEmpty(url)) throw new HttpException(400, 'URL required.');

    const short = await nanoid(5);
    const createdAt = format(new Date(), 'yyyy-MM-dd');

    const createShortenedUrl: Url = await this.urls.create({ data: { long: url, short: `https://gian.short/${short}`, createdAt } });
    return createShortenedUrl;
  }

  public async findUrlById(id: number): Promise<Url> {
    if (isEmpty(id)) throw new HttpException(400, 'URL identifier is required.');

    const findShortUrl: Url = await this.urls.findUnique({ where: { id } });
    if (!findShortUrl) throw new HttpException(404, 'No url found by the given Id.');

    return findShortUrl;
  }

  public async findUrlsByDate(createdAt: string): Promise<{ short: string }[]> {
    if (isEmpty(createdAt)) throw new HttpException(400, 'Date string is required.');

    const short: { short: string }[] = await this.urls.findMany({
      where: { createdAt },
      select: {
        short: true,
      },
    });

    return short;
  }
}

export default ShrinkService;
