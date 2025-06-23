import mongoose from 'mongoose';

const todoSchema = new mongoose.schema(
  {
    content: {
      type: String,
      required: true,
    },
    complete: {
      type: Boolean,
      default: false,
    },
    createdBy: {
      type: mongoose.schema.Types.objectId,
      ref: 'User',
    },
    subTodos: [
      {
        type: mongoose.Schema.Types.ObjectId,
        refer: 'SubTodo',
      }, // Array of sub-todos
    ],
  },
  { timestamps: true }
);

export const Todo = mongoose.model('Todo', todoSchema);
