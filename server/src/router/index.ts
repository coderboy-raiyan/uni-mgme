import { Router } from 'express';
import { TRoutes } from '../interface/routes';
import StudentRouter from '../modules/student/student.route';

const router = Router();

const routes: TRoutes = [
    {
        path: '/students',
        route: StudentRouter,
    },
];

routes.forEach(({ path, route }) => {
    router.use(path, route);
});

export default router;
