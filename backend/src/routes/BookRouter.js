import express from 'express';
import {
  createBook,
  getBooks,
  getBookById,
  updateBook,
  deleteBook,
} from './Controllers/BookController';

const router = express.Router();

router.post('/create', createBook);
router.get('/list', getBooks);
router.get('/:id', getBookById);
router.put('/:id/update', updateBook);
router.delete('/:id/delete', deleteBook);

export default router;
