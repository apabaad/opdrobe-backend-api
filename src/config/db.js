import mongoose from 'mongoose';

const mongoClient = async () => {
  try {
    const mongoUrl = 'mongodb://localhost:27017/opDrobe';
    if (!mongoUrl) {
      return console.log(
        'Please add mongoDB connection in env variable MONGO_CLIENT'
      );
    }

    const con = await mongoose.connect(mongoUrl);

    if (con) {
      console.log('mongodb connected');

      // Perform a test query or operation
      //   const result = await mongoose.connection.db.listCollections().toArray();
      //   console.log('Collections:', result);
    }
  } catch (error) {
    console.log(error);
  }
};

export default mongoClient;
