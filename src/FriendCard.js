import React, {useState} from 'react';

import DeleteIcon from "./DeleteIcon";
import EditIcon from './EditIcon'

import tw from 'twin.macro';

const FriendCard = ({name, url, deleteFunction, editFunction, ...props}) => {
  const openUrlNewTab = () => {
    window.open(url, '_blank', "noopener, noreferrer");
  };

  return (
    <div tw="items-center border-2 border-black flex px-3 py-2 rounded-full">
      <div tw="cursor-pointer w-screen" onClick={() => {openUrlNewTab()}}>
        <h3>{name}</h3>
      </div>
      <EditIcon editFunction={editFunction} />
      <DeleteIcon deleteFunction={deleteFunction} />
    </div>
  );
};

export default FriendCard;