import React from "react";
import { ItemTypes } from "./constants";
import { useDrag } from "react-dnd";
import Icon from "./components/Icon";

const ActionLabels = ({ textBeforeIcon, icon, textAfterIcon, handleClick }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.MOTION_ACTION,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  return (
    <div
      ref={drag}
      className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
      onClick={() => handleClick("sprite1", 10, 0)}
    >
      {textBeforeIcon}
      {icon.length > 0 ? (
        <Icon name={icon} size={15} className="text-white mx-2" />
      ) : null}
      {textAfterIcon}
    </div>
  );
};

export default ActionLabels;
