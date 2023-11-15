import mongoose from 'mongoose';

const requestSchema = mongoose.Schema({
  requester: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  book: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Book',
    required: true,
  },
  status: {
    type: String,
    enum: ['Pending', 'Accepted', 'Rejected'],
    default: 'Pending',
  },
  message: {
    type: String,
  },
  requestDate: {
    type: Date,
    default: Date.now,
  },
});

export const Request = mongoose.model('Request', requestSchema);
