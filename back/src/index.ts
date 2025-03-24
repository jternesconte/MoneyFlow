import express from 'express';
import { AppDataSource } from './data-source';
import cors from 'cors';
import { userRoutes } from './routes/User.routes';
import { categoryRoutes } from './routes/Category.routes';

AppDataSource.initialize().then(() => {
   const app = express();

   app.use(express.json({ limit: '50mb' }));
   app.use(express.urlencoded({ extended: true, limit: '50mb' }));

   app.use(express.json());

   app.use(cors({
    origin: '*',
    methods: 'GET, PUT, POST, DELETE',
    allowedHeaders: 'Content-Type, Authorization'
    }));

   app.use((req, res, next) => {
       res.header("Access-Control-Allow-Origin", "*");
       res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
       res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
       next();
   });

   app.use('/api/user', userRoutes);
   app.use('/api/category', categoryRoutes);
   

   return app.listen(process.env.PORT);
});