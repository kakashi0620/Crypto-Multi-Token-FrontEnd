import React from 'react';

const ImageView = ({
  imgurl
}) => {

  return (
    <div className="w-full h-[250px] max-w-sm p-6 mb-4 bg-gray-100 border-dashed border-2 border-gray-400 rounded-lg items-center mx-auto text-center cursor-pointer">
      <img
        src={imgurl}
        className="w-full h-full max-h-48 object-contain rounded-lg mx-auto"
        alt="Image preview"
      />
    </div>
  );
};

export default ImageView;
