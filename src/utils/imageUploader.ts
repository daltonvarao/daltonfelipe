import cloudinary from "cloudinary";

const api_key = process.env.CLOUDINARY_API_KEY;
const api_secret = process.env.CLOUDINARY_API_SECRET;
const cloud_name = process.env.CLOUDINARY_NAME;

cloudinary.v2.config({
  api_key,
  api_secret,
  cloud_name,
});

async function imageUploader(path: string) {
  const { public_id, secure_url } = await cloudinary.v2.uploader.upload(path, {
    folder: "portfolio",
  });

  return { img_public_id: public_id, img_secure_url: secure_url };
}

export default imageUploader;
