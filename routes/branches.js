import express from "express"
const router = express.Router();
import { v4 as uuidv4 } from 'uuid';

const branches = [
];
router.post('/', (req, res) => {
    const branch = req.body;
    branches.push({...branch, id: uuidv4()});
    res.send("Brach has being added");
})
router.get('/', (req, res) => {
    res.send(branches);
})


export default router
  