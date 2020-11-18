// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from "next";
import { File } from "formidable";
import Formidable from "formidable-serverless";

import ProjetoSchema from "../../schemas/ProjectSchema";
import imageUploader from "../../utils/imageUploader";
import connectDatabase from "../../services/db";

export const config = {
  api: {
    bodyParser: false,
  },
};

connectDatabase();

interface Project {
  techs: string[];
  _id: string;
  img_public_id: string;
  img_secure_url: string;
  name: string;
  description: string;
  demo_url: string;
  github_url: string;
  __v: string;
}

function formatProject(project: Project) {
  const {
    techs,
    _id,
    demo_url,
    description,
    github_url,
    img_public_id,
    img_secure_url,
    name,
  } = project;

  return {
    techs,
    _id,
    demo_url,
    description,
    github_url,
    img_public_id,
    img_secure_url,
    name,
  };
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    return new Promise(async (resolve, reject) => {
      const form = new Formidable.IncomingForm({
        multiples: true,
        keepExtensions: true,
      });

      let data = {};
      let filename: string;

      form
        .on("file", (_: string, image: File) => {
          filename = image.path;
        })
        .on("field", function (name: string, value: string) {
          if (name === "techs") {
            const newValue = value.split(",");
            data[name] = newValue;
          } else {
            data[name] = value;
          }
        })
        .on("aborted", () => {
          reject(res.status(500).json({ error: "Internal server error." }));
        })
        .on("end", async () => {
          try {
            const { img_public_id, img_secure_url } = await imageUploader(
              filename
            );
            data = { img_public_id, img_secure_url, ...data };

            await ProjetoSchema.create(data);

            resolve(res.status(200).json(data));
          } catch (error) {
            reject(res.status(500).json({ error: error.message }));
          }
        });

      await form.parse(req);
    });
  } else if (req.method === "GET") {
    return new Promise(async (resolve, reject) => {
      try {
        const projects = (await ProjetoSchema.find()) as Project[];

        const formattedProjects = projects.map((project) =>
          formatProject(project)
        );

        resolve(res.json(formattedProjects));
      } catch (error) {
        reject(res.json({ error: error.message }));
      }
    });
  }
};
