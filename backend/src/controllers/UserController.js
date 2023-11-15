import { User } from '../models/user'; // Assuming the model is in the correct path
import bcrypt from 'bcrypt';

// Create a new user
export const createUser = async (req, res) => {
  try {
    // Destructure values from the request body
    const { username, email, password, phoneNumber, college, role } = req.body;

    // Hash the password before saving it to the database
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user instance
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      phoneNumber,
      college,
      role,
    });

    // Save the user to the database
    const savedUser = await newUser.save();

    // Return the saved user in the response
    res.status(201).json(savedUser);
  } catch (error) {
    // Handle errors
    console.error('Error creating user:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};
