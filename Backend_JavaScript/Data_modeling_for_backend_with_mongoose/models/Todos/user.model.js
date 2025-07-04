import mongoose from 'mongoose';

const userSchema = new mongoose.schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, 'Password is required!'],
    },
  },
  {
    timestamps: true,
  }
);

export const User = mongoose.model('User', userSchema);
