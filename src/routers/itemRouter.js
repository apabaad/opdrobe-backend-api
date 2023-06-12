import express from 'express';
const Router = express.Router();
import {
  createItem,
  getItems,
  getSingleItem,
  getSingleItemByID,
  updateItem,
  deleteItemById,
  updateItemById,
} from '../modals/item/Item.modal.js';

// get all or single Item

Router.get('/:slug?', async (req, res) => {
  try {
    const { slug } = req.params;
    let result = null;
    if (slug) {
      result = await getSingleItem({ slug });
    } else {
      result = await getItems();
    }

    res.json({
      status: 'success',
      message: 'Item as requested',
      result,
    });
  } catch (error) {
    res.json({
      status: 'error',
      message: error.message,
    });
  }
});

// Delete Item
Router.delete('/:_id', async (req, res) => {
  try {
    const { _id } = req.params;

    const Item = await deleteItemById(_id);
    if (Item?._id) {
      return res.json({
        status: 'success',
        message: 'The Item has been deleted',
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
