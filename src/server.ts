import 'dotenv/config';
import '@/index';
import App from '@/app';
import ShrinkRoute from '@routes/shrink.route';
import validateEnv from '@utils/validateEnv';

validateEnv();

const app = new App([new ShrinkRoute()]);

app.listen();
