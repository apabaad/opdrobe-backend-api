import mongoose from 'mongoose';

const userItemInteractionSchema = mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  itemId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Item',
    required: true,
  },
  interactionType: {
    type: String,
    enum: ['viewed', 'purchased', 'liked', 'added_to_cart'],
    required: true,
  },
  interactionTimestamp: {
    type: Date,
    default: Date.now,
  },
  rating: {
    type: Number,
    min: 1,
    max: 5,
  },
  // Additional metadata fields
  //device: String,
  //location: String
});

// const UserItemInteraction = mongoose.model('UserItemInteraction', userItemInteractionSchema);
// module.exports = UserItemInteraction;

export default mongoose.model('UserItemInteraction', userItemInteractionSchema);
