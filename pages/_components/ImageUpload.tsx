import React, { useEffect, useRef, useState } from 'react';

const ImageUpload = ({
  target,
  setImage
}) => {

  const [previewUrl, setPreviewUrl] = useState<string | null>(null); // To store the preview URL
  const [filename, setFilename] = useState<string>(''); // To store the file name
  const imagePreviewRef = useRef<HTMLDivElement | null>(null); // Ref for image preview div
  const uploadInputRef = useRef<HTMLInputElement | null>(null); // Ref for the file input element
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;

    if (file) {
      setFilename(file.name);
      setImage(file);

      // Preview the image
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setFilename('');
      setImage(null);
      setPreviewUrl(null);
    }
  };

  useEffect(() => {
    const imagePreview = imagePreviewRef.current;
    const uploadInput = uploadInputRef.current;

    // Add click event listener to image preview div (for uploading)
    const handlePreviewClick = () => {
      if (uploadInput) uploadInput.click();
    };

    // Attach event listener to image preview div if it exists
    if (imagePreview) {
      imagePreview.addEventListener('click', handlePreviewClick);
    }

    // Clean up the event listener when the component unmounts
    return () => {
      if (imagePreview) {
        imagePreview.removeEventListener('click', handlePreviewClick);
      }
    };
  }, []);

  return (
    <div className="w-full h-[250px] max-w-sm p-6 mb-4 bg-gray-100 border-dashed border-2 border-gray-400 rounded-lg items-center mx-auto text-center cursor-pointer">
      <input
        id={target}
        ref={uploadInputRef}
        type="file"
        className="hidden"
        accept="image/*"
        onChange={handleImageChange}
      />
      {
        previewUrl ? <></> :
          <label htmlFor={target} className="cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-8 h-8 text-gray-700 mx-auto mb-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
              />
            </svg>
            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-700">Choose {target}</h5>
            <p className="font-normal text-sm text-gray-400 md:px-1">
              Choose {target} size should be less than <b className="text-gray-600">2mb</b> and should be in <b className="text-gray-600">JPG, PNG, or GIF</b> format.
            </p>
            {filename && (
              <span id="filename" className="text-gray-500 bg-gray-200 z-50">
                {filename}
              </span>
            )}
          </label>
      }

      {/* Image preview */}
      <div
        ref={imagePreviewRef}
        className={`${previewUrl ? 'h-48 rounded-lg flex items-center justify-center text-gray-500' : 'bg-gray-200'} `}
      >
        {previewUrl ? (
          <img
            src={previewUrl}
            className="max-h-48 rounded-lg mx-auto"
            alt="Image preview"
          />
        ) : (
          // <div>No image preview</div>
          <></>
        )}
      </div>
    </div>
  );
};

export default ImageUpload;
