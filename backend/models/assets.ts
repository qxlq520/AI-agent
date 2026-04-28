import { Schema, model } from 'mongoose';

const AssetSchema = new Schema({
  project_id: String,
  characters: [
    {
      char_id: String,
      name: String,
      description: String,
      image_url: String,
      status: String
    }
  ],
  scenes: [
    {
      scene_id: String,
      name: String,
      description: String,
      image_url: String,
      status: String
    }
  ],
  created_at: Date
});
export default model('Asset', AssetSchema);
