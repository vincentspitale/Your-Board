import React, {useState} from 'react';

import tw from 'twin.macro'
import FriendCard from "./FriendCard";

const FriendsList = ({friendsList, setFriendsList, ...props}) => {
    const deleteFunction = (index) => {
        return () => {
            let newFriendsList =  [...friendsList];
            newFriendsList.splice(index, 1);
            console.log("DELETE object:");
            console.log(newFriendsList);
            setFriendsList(newFriendsList);

            // Update local storage
            window.localStorage.setItem("friendsList", JSON.stringify(newFriendsList));
        };
    };

    const editFunction = (index) => {
        return (friendInfo) => {
            let newFriendsList =  [...friendsList];
            newFriendsList.splice(index, 1, friendInfo);
            setFriendsList(newFriendsList);

            // Update local storage
            window.localStorage.setItem("friendsList", JSON.stringify(newFriendsList));
        };
    };

    return (
    <div>
        {
            friendsList.map((element, key) => {
                console.log("index: " + key);
                console.log(element);

                return <div tw="pb-2">
                    <FriendCard
                      friendName={element.name}
                      figmaUrl={element.url}
                      deleteFunction={deleteFunction(key)}
                      editFunction={editFunction(key)}
                      friendIsNew={element.isNew}
                    />
                </div>
            })
        }
    </div>
    );
};

export default FriendsList;