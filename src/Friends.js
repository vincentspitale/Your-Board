import React, {useState} from 'react';

import tw from 'twin.macro'

import AddButton from './AddButton.js'
import FriendsList from './FriendsList.js'

const Friends = ({...props}) => {
    const listString = window.localStorage.getItem('friendsList');
    console.log(JSON.parse(listString));
    const [friendsList, setFriendsList] = useState(JSON.parse(listString));
    if (friendsList === null) {
        setFriendsList([]);
    }
    return (
        <div>
            <div tw="flex flex-row pt-6 pb-3">
                <h2 tw="text-xl font-semibold ">Friends</h2>
                <div tw="ml-auto">
                    <AddButton setFriendsList={setFriendsList} friendsList={friendsList}/>
                </div>
            </div>
            <FriendsList friendsList={friendsList} setFriendsList={setFriendsList} />
        </div>
    );


}

export default Friends;