import express from 'express';
const Router = express.Router();

import {
  createUser,
  getUsers,
  deleteUserById,
} from '../modals/user/User.modal.js';

// get all or single User

Router.get('/:slug?', async (req, res) => {
  try {
    const { slug } = req.params;
    let result = null;
    if (slug) {
      result = await getSingleUser({ slug });
    } else {
      result = await getUsers();
    }

    res.json({
      status: 'success',
      message: 'User as requested',
      result,
    });
  } catch (error) {
    res.json({
      status: 'error',
      message: error.message,
    });
  }
});

// create new User
Router.post('/', async (req, res) => {
  try {
    const result = await createUser(req.body);
    console.log(req.body);
    if (result?._id) {
      res.json({
        status: 'success',
        message: 'User added',
        data: { ...req.body },
      });
    }
    res.json({
      status: 'error',
      message: 'Unable to add User.',
    });
  } catch (error) {
    let msg = error.message;
    if (msg.includes('E11000 duplicate key error collection')) {
      msg = 'The User slug already exists.';
    }
    res.json({
      status: 'error',
      message: msg,
    });
  }
});

// Delete User
Router.delete('/:_id', async (req, res) => {
  try {
    const { _id } = req.params;

    const User = await deleteUserById(_id);
    if (User?._id) {
      return res.json({
        status: 'success',
        message: 'The User has been deleted',
      });
    }

    res.json({
      status: 'error',
      message: 'Unable to delete. Try later.',
    });
  } catch (error) {
    res.json({
      status: 'error',
      message: error.message,
    });
  }
});
export default Router;
