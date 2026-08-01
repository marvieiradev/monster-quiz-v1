import React from "react";
import Frame from "/ui/frame_monster.webp";

const MonsterCard = ({ id }) => {

  return (
    <div>
      <div className="w-[150px] flex items-center justify-center relative p-[5px]  bg-white rounded-xl md:w-[200px]">
        <img src={`/monsters/small/${id}.webp`} />
        <img src={Frame} className="absolute" />
      </div>
      <p className="text-xl lg:text-2xl mt-4">Que Monstro é esse?</p>
    </div>
  );
};

export default React.memo(MonsterCard);
