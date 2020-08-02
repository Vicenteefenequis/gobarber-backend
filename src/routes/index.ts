import { Router } from 'express';
import Appointmentsroutes from './appointments.routes';
const routes = Router();

routes.use('/appointments', Appointmentsroutes);

export default routes;
