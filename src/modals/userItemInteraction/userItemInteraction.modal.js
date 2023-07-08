import userItemInteractionSchema from './userItemInteraction.schema.js';

export const createInteraction = (interactionInfo) => {
  return userItemInteractionSchema(interactionInfo).save();
};
export const getInteractions = () => {
  return userItemInteractionSchema.find();
};
export const getSingleInteraction = (filter) => {
  return userItemInteractionSchema.findOne(filter);
};
export const getSingleInteractionByID = (_id) => {
  return userItemInteractionSchema.findById(_id);
};
export const getInteractionByUserID = (_id) => {
  return userItemInteractionSchema.findById(_id);
};
export const updateInteraction = (filter, obj) => {
  return userItemInteractionSchema.findOneAndUpdate(filter, obj);
};
export const updateInteractionById = (_id, obj) => {
  return userItemInteractionSchema.findByIdAndUpdate(_id, obj);
};
export const deleteInteractionById = (_id) => {
  return _id ? userItemInteractionSchema.findByIdAndDelete(_id) : null;
};
