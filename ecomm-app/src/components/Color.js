import React from "react";

const Color = ({ colorData, setColor }) => {
  console.log(colorData);
  return (
    <>
      <ul className="colors ps-0">
        {colorData?.map((color) => (
          <li
            onClick={() => setColor(color?._id)}
            key={color?._id}
            style={{ backgroundColor: `${color?.title}` }}
          ></li>
        ))}
      </ul>
    </>
  );
};

export default Color;
