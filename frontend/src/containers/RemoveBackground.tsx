import { useState } from "react";
import { toast } from "react-toastify";

import DropZone from "../components/DropZone/DropZone";
import Header from "../components/Header";

const RemoveBackgroundPage = () => {
  const [inputImage, setInputImage] = useState<string | null>(null);
  const [outputImage, setOutputImage] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [currentFile, setCurrentFile] = useState<File | null>(null);

  const handleImageUpload = (file: File) => {
    setCurrentFile(file);
    const reader = new FileReader();
    reader.onload = (e) => {
      setInputImage(e.target?.result as string);
      setOutputImage(null);
    };
    reader.readAsDataURL(file);
  };

  const processImage = async () => {
    if (!currentFile) {
      toast.error("Please select an image first");
      return;
    }

    setIsProcessing(true);
    try {
      const formData = new FormData();
      formData.append("image", currentFile);

      const response = await fetch("http://localhost:4000/api/remove-bg", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to process image");
      }

      const blob = await response.blob();
      const imageUrl = URL.createObjectURL(blob);
      setOutputImage(imageUrl);
      toast.success("Image processed successfully!");
    } catch (error) {
      console.error("Error processing image:", error);
      toast.error("Failed to process image. Please try again.");
    } finally {
      setIsProcessing(false);
    }
  };

  const handleDownload = async () => {
    if (!outputImage) return;

    try {
      const response = await fetch(outputImage);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "processed-image.png";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
      toast.success("Image downloaded successfully!");
    } catch (error) {
      console.log(error);
      toast.error("Failed to download image");
    }
  };

  return (
    <div>
      <Header />
      <div className="flex flex-col md:flex-row gap-6 w-full max-w-7xl mx-auto p-6">
        <div className="flex-1">
          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Input Image</h2>
            <DropZone
              onFileUpload={handleImageUpload}
              currentImage={inputImage}
            />
            {inputImage && (
              <button
                className="w-full mt-4 bg-blue-950 p-2 rounded-md text-white"
                onClick={processImage}
                disabled={isProcessing}
              >
                {isProcessing ? <>Processing...</> : "Process Image"}
              </button>
            )}
          </div>
        </div>

        <div className="flex-1">
          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Output Image</h2>
            <div
              className="border-2 border-dashed border-gray-200 rounded-lg min-h-[300px] flex items-center justify-center"
              style={{
                background: `
                linear-gradient(45deg, #f0f0f0 25%, transparent 25%),
                linear-gradient(-45deg, #f0f0f0 25%, transparent 25%),
                linear-gradient(45deg, transparent 75%, #f0f0f0 75%),
                linear-gradient(-45deg, transparent 75%, #f0f0f0 75%)
              `,
                backgroundSize: "20px 20px",
                backgroundPosition: "0 0, 0 10px, 10px -10px, -10px 0px",
                backgroundColor: "white",
              }}
            >
              {outputImage ? (
                <img
                  src={outputImage}
                  alt="Processed"
                  className="max-w-full max-h-[500px] object-contain rounded"
                />
              ) : (
                <p className="text-gray-500">
                  Processed image will appear here
                </p>
              )}
            </div>
            {outputImage && (
              <button
                className="w-full mt-4  p-2 rounded-md border-blue-950 border-2"
                onClick={handleDownload}
              >
                Download Image
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RemoveBackgroundPage;
