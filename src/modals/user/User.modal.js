import UserSchema from './User.schema.js';

export const createUser = (userInfo) => {
  return UserSchema(userInfo).save();
};
export const getUsers = () => {
  return UserSchema.find();
};
export const getSingleUser = (filter) => {
  return UserSchema.findOne(filter);
};
export const getSingleUserByID = (_id) => {
  return UserSchema.findById(_id);
};
export const updateUser = (filter, obj) => {
  return UserSchema.findOneAndUpdate(filter, obj);
};
export const updateUserById = (_id, obj) => {
  return UserSchema.findByIdAndUpdate(_id, obj);
};
export const deleteUserById = (_id) => {
  return _id ? UserSchema.findByIdAndDelete(_id) : null;
};
