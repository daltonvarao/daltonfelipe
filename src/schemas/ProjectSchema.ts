import { model, Schema } from "mongoose";

const ProjectSchema = new Schema({
  name: String,
  description: String,
  demo_url: String,
  github_url: String,
  techs: [String],
  img_secure_url: String,
  img_public_id: String,
});

let ProjectModel;

try {
  ProjectModel = model("Project");
} catch (error) {
  ProjectModel = model("Project", ProjectSchema);
}

export default ProjectModel;
