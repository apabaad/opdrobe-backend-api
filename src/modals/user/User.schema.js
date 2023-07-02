import mongoose from 'mongoose';

const UserSchema = mongoose.Schema(
  {
    status: {
      type: String,
      required: true,
      default: 'inactive',
    },
    isEmailConfirmed: {
      type: Boolean,
      required: true,
      default: false,
    },
    fname: {
      type: String,
      required: true,
      default: '',
      maxLength: 30,
    },
    lname: {
      type: String,
      required: true,
      default: '',
      maxLength: 30,
    },
    dob: {
      type: Date,
      default: null,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      maxLength: 30,
      index: 1,
    },
    phone: {
      type: String,
      default: '',
      maxLength: 15,
    },
    password: {
      type: String,
      required: true,
      minLength: 5,
    },
    address: {
      type: String,
      default: '',
      maxLength: 50,
    },
    gender: {
      type: String,

      default: '',
    },
    role: {
      type: String,
      required: true,
      default: 'user',
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('User', UserSchema);
