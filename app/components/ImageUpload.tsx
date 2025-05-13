// ImageUpload.tsx
import React, { useState } from "react";
import { ImageUploadProps } from "@/types/types"; // Import the ImageUploadProps type from types.ts

const ImageUpload = ({ setPlantInfo, setImageUrl }: ImageUploadProps) => {
  const [image, setImage] = useState<File | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      setImage(file);
      uploadImage(file);
    }
  };

  const uploadImage = async (file: File) => {
    // Use your method of uploading the image here
    const imageUrl = URL.createObjectURL(file); // Replace this with your actual upload logic
    
    setImageUrl(imageUrl); // Set the image URL

    // Call Google API or other plant identification API to get plant info
    const plantInfo = await fetchPlantInfo(file); // Assuming a function fetchPlantInfo that gets plant details
    setPlantInfo(plantInfo);
  };

  const fetchPlantInfo = async (file: File) => {
    // Simulating a call to a plant identification API
    // Replace this with an actual API call to Google or any other API you are using
    const dummyPlantInfo = {
      name: "Rose",
      scientificName: "Rosa",
      family: "Rosaceae",
      nativeRegion: "Asia, Europe",
      description: "A beautiful flowering plant.",
      careInstructions: "Water regularly, requires full sun.",
      medicianValue: "Used for skin healing.",
    };

    return dummyPlantInfo;
  };

  return (
    <div>
      <input type="file" onChange={handleImageChange} />
      {image && <img src={URL.createObjectURL(image)} alt="Uploaded" />}
    </div>
  );
};

export default ImageUpload;
