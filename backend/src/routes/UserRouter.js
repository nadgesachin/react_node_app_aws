app.use('/books', bookRouter);

import express from 'express';
import {
    createUser,
  
} from './Controllers/UserController';

const router = express.Router();

router.post('/create', createUser);

export default router;
