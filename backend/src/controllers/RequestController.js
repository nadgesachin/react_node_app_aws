import { Request } from '../models/request';

export const createRequest = async (req, res) => {
  try {
    const { requester, book, status, message } = req.body;

    const newRequest = new Request({
      requester,
      book,
      status,
      message,
    });

    const savedRequest = await newRequest.save();

    res.status(201).json(savedRequest);
  } catch (error) {
    console.error('Error creating request:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

export const getRequests = async (req, res) => {
    try {
      const requests = await Request.find();
  
      res.status(200).json(requests);
    } catch (error) {
      console.error('Error fetching requests:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };
  

export const getRequestById = async (req, res) => {
    const { id } = req.params;
  
    try {
      const request = await Request.findById(id);
  
      if (!request) {
        return res.status(404).json({ message: 'Request not found' });
      }
  
      res.status(200).json(request);
    } catch (error) {
      console.error('Error fetching request by ID:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };
  