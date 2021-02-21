import React, {useState} from 'react';

import tw from 'twin.macro'

import AddButton from './AddButton.js'
import FriendsList from './FriendsList.js'

const Friends = ({...props}) => {
    const listString = window.localStorage.getItem('friendsList');

    const [friendsList, setFriendsList] = useState(JSON.parse(listString));

    return (
        <div>
            <div tw="flex flex-row pt-6 pb-3">
                <h2 tw="text-xl font-semibold ">Friends</h2>
                <div tw="ml-auto">
                    <AddButton />
                </div>
            </div>
            <FriendsList />
        </div>
    );


}

export default Friends;