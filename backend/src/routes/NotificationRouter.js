import express from 'express';
import {
  createNotification,
  getNotifications,
  getNotificationById,
  updateNotification,
  deleteNotification,
} from './Controllers/NotificationController';

const router = express.Router();

router.post('/create', createNotification);
router.get('/list', getNotifications);
router.get('/:id', getNotificationById);
router.put('/:id/update', updateNotification);
router.delete('/:id/delete', deleteNotification);

export default router;
