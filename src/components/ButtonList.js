import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const category = [
    "All",
    "Gaming",
    "Songs",
    "Live",
    "Soccer",
    "Cricket",
    "Cooking",
    "Hollywood",
    "Motivation",
    "MMA",
    "UFC",
    "Cars",
    "Camping",
  ];

  return (
    <div className="flex overflow-x-scroll">
      {category.map((type, i) => (
        <Button key={i} name={type} />
      ))}
    </div>
  );
};

export default ButtonList;
