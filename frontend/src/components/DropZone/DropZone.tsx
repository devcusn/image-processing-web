import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

import { DropZoneProps } from "./types";

const DropZone: React.FunctionComponent<DropZoneProps> = ({
  onFileUpload,
  currentImage,
}) => {
  const [isDragging, setIsDragging] = useState(false);

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      if (acceptedFiles.length > 0) {
        onFileUpload(acceptedFiles[0]);
      }
    },
    [onFileUpload]
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      "image/*": [".png", ".jpg", ".jpeg", ".gif", "webp"],
    },
    maxFiles: 1,
    onDragEnter: () => setIsDragging(true),
    onDragLeave: () => setIsDragging(false),
    onDropAccepted: () => setIsDragging(false),
    multiple: undefined,
    onDragOver: undefined,
  });

  return (
    <div
      {...getRootProps()}
      className={`border-2 border-dashed rounded-lg min-h-[300px] flex items-center justify-center cursor-pointer transition-colors
      ${
        isDragging
          ? "border-primary bg-primary/5"
          : "border-gray-200 hover:border-primary/50"
      }
    `}
    >
      <input {...getInputProps()} />
      {currentImage ? (
        <img
          src={currentImage}
          alt="Upload preview"
          className="max-w-full max-h-[500px] object-contain rounded"
        />
      ) : (
        <div className="text-center p-6">
          <p className="text-sm text-gray-600">
            Drag and drop an image here, or click to select
          </p>
        </div>
      )}
    </div>
  );
};

export default DropZone;
