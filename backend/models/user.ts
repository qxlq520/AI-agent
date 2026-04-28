import { Schema, model } from 'mongoose';

const UserSchema = new Schema({
  user_id: String,
  username: String,
  email: String,
  integral: Number,
  created_at: Date,
  updated_at: Date
});
export default model('User', UserSchema);
