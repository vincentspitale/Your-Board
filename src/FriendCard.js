import React, {useState} from 'react';

import DeleteIcon from "./DeleteIcon";
import EditIcon from './EditIcon';
import CommitIcon from './CommitIcon';
import CancelIcon from './CancelIcon';

import tw from 'twin.macro';

const FriendCard = ({friendName, figmaUrl, friendIsNew, deleteFunction, editFunction, ...props}) => {

  const [isEditing, setIsEditing] = useState(friendIsNew);
  const [newName, setNewName] = useState(friendName);
  const [newFigmaUrl, setNewFigmaURl] = useState(figmaUrl);
  if (newFigmaUrl === undefined) {
    setNewFigmaURl("");
  }

  const openUrlNewTab = () => {
    if (!isEditing) {
      window.open(figmaUrl, '_blank', "noopener, noreferrer");
    }
  };

  // pencil
  const  editingFunction = () => {
    setIsEditing(true);
  };

  // checkmark
  const commitEdit = () => {
    setIsEditing(false);
    console.log(newFigmaUrl);
    const friendInfo = {name: newName, url: newFigmaUrl, isNew: false};
    editFunction(friendInfo);
  };

  const cancelFunction = () => {
    setIsEditing(false);
  };

  const setValue = (set) => {
    return (event) => {
      if (event.target.value === undefined) {
        set("");
      } else {
        set(event.target.value);
      }
    }
  };



  return (
    <div css={[!isEditing && tw`rounded-full`, isEditing && tw`rounded-3xl`]} tw="border-2 border-black flex flex-col px-3 py-2">
      <div tw="items-center flex">
        <div tw="cursor-pointer w-full" onClick={() => {openUrlNewTab()}} >
        { isEditing ? 
          <input
            type="text"
            value={newName}
            onChange={setValue(setNewName)}
            placeholder="Name"
            tw="outline-none w-full"
      />
         :
          <h3>{friendName}</h3>
        }
        </div>
        <div tw="ml-auto flex flex-row items-center">
        {
          isEditing && !friendIsNew && <CancelIcon cancelFunction={cancelFunction} />
        }
        { isEditing ? <CommitIcon commitEdit={commitEdit} /> :
          <EditIcon editFunction={editingFunction} />
        }
          <DeleteIcon deleteFunction={deleteFunction} />
        </div>
        </div>
      
        { isEditing &&
          <input
            type="text"
            value={newFigmaUrl}adghf
            onChange={setValue(setNewFigmaURl)}
            placeholder="Figma URL"
            tw="outline-none w-full"
          />
        }
    </div>
  );
};

export default FriendCard;