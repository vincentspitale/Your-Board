import React, {useState} from 'react';

import DeleteIcon from "./DeleteIcon";
import EditIcon from './EditIcon';
import CommitIcon from './CommitIcon';
import CancelIcon from './CancelIcon';

import tw from 'twin.macro';

const FriendCard = ({name, url, isNew, deleteFunction, editFunction, ...props}) => {

  const [isEditing, setIsEditing] = useState(isNew);
  const [newName, setNewName] = useState(name);
  const [newFigmaUrl, setNewFigmaURl] = useState(url);

  const openUrlNewTab = () => {
    if (!isEditing) {
      window.open(url, '_blank', "noopener, noreferrer");
    }
  };

  // pencil
  const  editingFunction = () => {
    setIsEditing(true);
  };

  // checkmark
  const commitEdit = () => {
    setIsEditing(false);
    editFunction();
  };

  const cancelFunction = () => {
    setIsEditing(false);
  }

  const setValue = (set) => {
    return (event) => {
       set(event.target.value);
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
          <h3>{name}</h3>
        }
        </div>
        <div tw="ml-auto flex flex-row items-center">
        {
          isEditing && !isNew && <CancelIcon cancelFunction={cancelFunction} />
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