import request from 'supertest';
import App from '../app';
import ShrinkRoute from '../routes/shrink.route';
import { URLShortenerDto } from '../dtos/url.dto';

afterAll(async () => {
  await new Promise<void>(resolve => setTimeout(() => resolve(), 500));
});

describe('Testing URL Shortener', () => {
  let urls;
  let shrinkRoute;

  const MockUrl: URLShortenerDto = {
    id: 1,
    long: 'https://www.google.com',
    short: 'https://gian.short/12tNma_@y4',
    createdAt: '2022-01-11',
  };

  beforeAll(() => {
    shrinkRoute = new ShrinkRoute();
    urls = shrinkRoute.shrinkController.shrinkService.urls;
  });

  describe('[GET] /short/:id', () => {
    it('response should have the shortened url given an Id', () => {
      const urlId = 1;

      urls.findUnique = jest.fn().mockReturnValue({ url: MockUrl.short });

      const app = new App([shrinkRoute]);
      return request(app.getServer()).get(`${shrinkRoute.path}/short/${urlId}`).expect(200);
    });
  });

  describe('[GET] /short/date/:date', () => {
    it('response should return all shortened urls given a timespan', () => {
      const urlDate = '2022-01-11';

      urls.findMany = jest.fn().mockReturnValue([{ url: MockUrl.short }]);

      const app = new App([shrinkRoute]);
      return request(app.getServer()).get(`${shrinkRoute.path}/short/date/${urlDate}`).expect(200);
    });
  });

  describe('[POST] /shrink', () => {
    it('response should return the created shortened url', () => {
      urls.findUnique = jest.fn().mockReturnValue(null);
      urls.create = jest.fn().mockReturnValue(MockUrl);

      const app = new App([shrinkRoute]);
      return request(app.getServer()).post(`${shrinkRoute.path}/shrink`).send({ long: MockUrl.long }).expect(201);
    });
  });
});
