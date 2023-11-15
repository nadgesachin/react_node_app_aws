import express from 'express';
import {
  createRequest,
  getRequests,
  getRequestById,
  updateRequest,
  deleteRequest,
} from './Controllers/RequestController';

const router = express.Router();

router.post('/create', createRequest);
router.get('/list', getRequests);
router.get('/:id', getRequestById);
router.put('/:id/update', updateRequest);
router.delete('/:id/delete', deleteRequest);

export default router;
