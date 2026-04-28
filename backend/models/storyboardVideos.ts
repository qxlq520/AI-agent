import { Schema, model } from 'mongoose';

const StoryboardVideosSchema = new Schema({
  project_id: String,
  episodes: [
    {
      episode_id: String,
      title: String,
      storyboard: [
        {
          shot_id: String,
          scene_id: String,
          char_ids: [String],
          description: String,
          duration: Number
        }
      ],
      video_url: String,
      status: String,
      integral_cost: Number
    }
  ],
  created_at: Date
});
export default model('StoryboardVideos', StoryboardVideosSchema);
