import mongoose from 'mongoose';

const ItemSchema = mongoose.Schema({
  title: {
    type: String,
    maxLength: 100,
    default: false,
    require: true,
  },
  slug: {
    type: String,
    maxLength: 120,
    require: false,
    unique: true,
    index: 1,
    default: '',
  },
  price: {
    type: Number,
    max: 10000,
    require: false,
  },
  qty: {
    type: Number,
    max: 10000,
    require: false,
  },
  brand: {
    type: String,
    max: 30,
    default: '',
    require: true,
  },
  description: {
    type: String,
    max: 3000,
    default: '',
  },
  categories: {
    type: Array,
    default: null,
    require: false,
  },
  images: {
    type: Array,
    default: null,
  },
});

export default mongoose.model('Item', ItemSchema);
