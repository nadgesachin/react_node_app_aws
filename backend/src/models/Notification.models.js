import mongoose from 'mongoose';

const notificationSchema = mongoose.Schema({
  recipient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  content: {
    type: [String],
    required: true,
  },
  link: {
    type: String,
  },
  readStatus: {
    type: String,
    enum: ['Unread', 'Read'],
    default: 'Unread',
  },
  notificationDate: {
    type: Date,
    default: Date.now,
  },
});

export const Notification = mongoose.model('Notification', notificationSchema);
