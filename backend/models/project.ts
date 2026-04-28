import { Schema, model } from 'mongoose';

const ProjectSchema = new Schema({
  project_id: String,
  user_id: String,
  name: String,
  script_text: String,
  config: {
    style: String,
    ratio: String,
    is_creator_agreed: Boolean
  },
  status: String,
  created_at: Date,
  updated_at: Date
});
export default model('Project', ProjectSchema);
