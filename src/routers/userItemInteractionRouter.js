import express from 'express';
const Router = express.Router();

import {
  createInteraction,
  getInteractionByUserID,
  deleteInteractionById,
  getInteractions,
  getSingleInteraction,
} from '../modals/userItemInteraction/userItemInteraction.modal.js';

// get all or single Item

Router.get('/:slug?', async (req, res) => {
  try {
    const { slug } = req.params;
    let result = null;
    if (slug) {
      result = await getSingleInteraction({ slug });
    } else {
      result = await getInteractions();
    }

    res.json({
      status: 'success',
      message: 'Interaction as requested',
      result,
    });
  } catch (error) {
    res.json({
      status: 'error',
      message: error.message,
    });
  }
});

// create new Interaction
Router.post('/', async (req, res) => {
  try {
    const result = await createInteraction(req.body);
    console.log(req.body);
    if (result?._id) {
      res.json({
        status: 'success',
        message: 'Interaction added',
        data: { ...req.body },
      });
    }
    res.json({
      status: 'error',
      message: 'Unable to add Interaction.',
    });
  } catch (error) {
    let msg = error.message;
    if (msg.includes('E11000 duplicate key error collection')) {
      msg = 'The Interaction slug already exists.';
    }
    res.json({
      status: 'error',
      message: msg,
    });
  }
});

// Delete Interaction
Router.delete('/:_id', async (req, res) => {
  try {
    const { _id } = req.params;

    const Interaction = await deleteInteractionById(_id);
    if (Interaction?._id) {
      return res.json({
        status: 'success',
        message: 'The Interaction has been deleted',
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
