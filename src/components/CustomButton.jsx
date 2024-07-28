import React from "react";

const CustomButton = ({ text }) => {
  return (
    <div className="flex justify-center my-6">
      <button
        type="submit"
        className="bg-purple-400 text-white font-bold py-2 px-4 mx-4 rounded-lg hover:bg-white hover:text-purple-600 text-sm shadow-xl"
      >
        {text}
      </button>
    </div>
  );
};

export default CustomButton;
