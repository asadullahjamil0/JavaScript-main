import { Timestamp } from 'bson';
import mongoose from 'mongoose';

const subTodoSchema = new mongoose.schema({}, { timestamps: true });

export const SubTodo = new mongoose.model('SubTodo', subTodoSchema);
