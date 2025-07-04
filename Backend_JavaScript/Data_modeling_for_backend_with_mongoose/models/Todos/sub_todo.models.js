import mongoose from 'mongoose';

const SubTodoSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    completed: {
      type: Boolean,
      default: false,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObectId,
      refer: 'Todo',
    },
  },
  { timestamps: true }
);

export const SubTodo = mongoose.model('SubTodo', SubTodoSchema);
