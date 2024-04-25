import express from 'express';
const router = express.Router();
import { v4 as uuidv4 } from 'uuid';

// Mock database
const users = [
];

router.post('/', (req, res) => {
  const user = req.body;
  users.push({ ...user, id: uuidv4() });
  res.send(user);
}) 

// Getting the list of users from the mock database
router.get('/', (req, res) => {
    res.send(users);
})

router.get('/:id', (req, res)=>{
  const {id} = req.params;
  const foundUser = users.find((user)=>user.id == id);

  res.send(foundUser)
})

export default router