import express from 'express';
// eslint-disable-next-line import/named
import { addUser, deleteUser, getUsers, updateUser } from '../controllers/user';

const router = express.Router();

router.get('/', getUsers);

router.post('/', addUser);

router.put('/:id', updateUser);

router.delete('/:id', deleteUser);

export default router;
