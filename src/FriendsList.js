import React, {useState} from 'react';

import tw from 'twin.macro'
import FriendCard from "./FriendCard";

const FriendsList = ({friendsList, setFriendsList, ...props}) => {
    const name = "Vincent";
    const url = "https://www.figma.com/proto/qAoAPNoJwt6SZxAj4w2DOL/Untitled?node-id=1%3A2&scaling=min-zoom";
    const deleteFunciton = () => {
        console.log("Delete");
    };

    const editFunction = () => {
        console.log("EDIT");
    };

    return (
    <div>
        <FriendCard
          name={name}
          url={url}
          deleteFunction={deleteFunciton}
          editFunction={editFunction}
        />
    </div>
    );
};

export default FriendsList;