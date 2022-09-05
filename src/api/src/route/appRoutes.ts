import {Router} from 'express'
import { create_item, get_item_list, get_item } from '../controller/appController';

const appRouter = Router();

appRouter.route('/items').get(get_item_list)
                        .post(create_item);
appRouter.route('/items/:id').get(get_item);

export default appRouter;