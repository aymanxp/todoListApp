import dotenv from 'dotenv';
import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

dotenv.config();

const url = process.env.MONGODB_URI;
console.log('connecting to ', url);

mongoose.connect(url)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.log('error connecting to MongoDB:', error.message);
  })

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    minlength: 4,
    required: true,
  },
  description: {
    type: String,
    minlength: 8,
    required: false,
    default: ""

  },
  status: {
    type: Boolean,
    required: true,
    default: false
  }
})



taskSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  }
})

taskSchema.plugin(uniqueValidator);

let Task = mongoose.model('Task', taskSchema);

export default Task;




