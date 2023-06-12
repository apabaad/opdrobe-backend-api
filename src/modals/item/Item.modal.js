import ItemSchema from './Item.schema.js';

export const createItem = (prodInfo) => {
  return ItemSchema(prodInfo).save();
};
export const getItems = () => {
  return ItemSchema.find();
};
export const getSingleItem = (filter) => {
  return ItemSchema.findOne(filter);
};
export const getSingleItemByID = (_id) => {
  return ItemSchema.findById(_id);
};
export const updateItem = (filter, obj) => {
  return ItemSchema.findOneAndUpdate(filter, obj);
};
export const updateItemById = (_id, obj) => {
  return ItemSchema.findByIdAndUpdate(_id, obj);
};
export const deleteItemById = (_id) => {
  return _id ? ItemSchema.findByIdAndDelete(_id) : null;
};
