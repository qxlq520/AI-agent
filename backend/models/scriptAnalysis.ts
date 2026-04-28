import { Schema, model } from 'mongoose';

const ScriptAnalysisSchema = new Schema({
  project_id: String,
  summary: String,
  structured_script: [
    {
      scene_id: String,
      scene_name: String,
      time: String,
      tone: String,
      content: String
    }
  ],
  rewritten_script: String,
  created_at: Date
});
export default model('ScriptAnalysis', ScriptAnalysisSchema);
