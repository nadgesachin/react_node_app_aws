import { Notification } from '../models/notification';

export const createNotification = async (req, res) => {
  try {
    const { recipient, content, link, readStatus } = req.body;
    const newNotification = new Notification({
      recipient,
      content,
      link,
      readStatus,
    });

    const savedNotification = await newNotification.save();

    res.status(201).json(savedNotification);
  } catch (error) {
    console.error('Error creating notification:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};
