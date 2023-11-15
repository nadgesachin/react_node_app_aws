import { Book } from '../models/book';

// Create a new book
export const createBook = async (req, res) => {
  try {
    // Destructure values from the request body
    const {
      title,
      author,
      edition,
      condition,
      description,
      price,
      images,
      college,
      user, // Assuming this is the user who posted the book
      status,
    } = req.body;

    // Create a new book instance
    const newBook = new Book({
      title,
      author,
      edition,
      condition,
      description,
      price,
      images,
      college,
      user,
      status,
    });

    // Save the book to the database
    const savedBook = await newBook.save();

    // Return the saved book in the response
    res.status(201).json(savedBook);
  } catch (error) {
    // Handle errors
    console.error('Error creating book:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};


export const getBooks = async (req, res) => {
    try {
      const books = await Book.find();
  
      res.status(200).json(books);
    } catch (error) {
      console.error('Error fetching books:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };

  
  export const getBookById = async (req, res) => {
    const { id } = req.params;
  
    try {
      const book = await Book.findById(id);
  
      if (!book) {
        return res.status(404).json({ message: 'Book not found' });
      }
  
      res.status(200).json(book);
    } catch (error) {
      console.error('Error fetching book by ID:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };

  export const updateBook = async (req, res) => {
    const { id } = req.params;
    const updateData = req.body;
  
    try {
      const updatedBook = await Book.findByIdAndUpdate(id, updateData, { new: true });
  
      if (!updatedBook) {
        return res.status(404).json({ message: 'Book not found' });
      }
  
      res.status(200).json(updatedBook);
    } catch (error) {
      console.error('Error updating book:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };

  
  export const deleteBook = async (req, res) => {
    const { id } = req.params;
  
    try {
      const deletedBook = await Book.findByIdAndRemove(id);
  
      if (!deletedBook) {
        return res.status(404).json({ message: 'Book not found' });
      }
  
      res.status(200).json(deletedBook);
    } catch (error) {
      console.error('Error deleting book:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };
  
