import jwt from 'jsonwebtoken';
import { users } from '../data/data.js';
import { secretKey } from '../data/data.js';

export const login = (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username);
  
    if (user == null) {
      return res.status(404).send('User not found');
    }
  
    if (user.password !== password) {
      return res.status(401).send('Invalid credentials');
    }
  
    const token = jwt.sign({ id: user.id, username: user.username }, secretKey);
    res.json({ token });
}