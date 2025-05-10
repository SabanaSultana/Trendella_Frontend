

const uploadImage = async (file) => {
  const url = `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUD_NAME_CLOUDINARY}/image/upload`;
  console.log("cloudinary name ", process.env.REACT_APP_CLOUD_NAME_CLOUDINARY);

  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "unsigned_preset");

  try {
    const response = await fetch(url, {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    return data;
  } catch (err) {
    console.error("Image upload error", err);
    return null;
  }
};

export default uploadImage;
