import React, {useState} from "react";


import tw from 'twin.macro'


const Time = ({...props}) => {
    const [date, setDate] = useState(new Date());
    const [interval, setInterval] = useState(0);

    if (interval === 0) {
        componentDidMount(setInterval, setDate);
    }

    return (<p tw="text-3xl ml-auto w-max">{date.toLocaleTimeString()}</p>);


  };

const tick = (setDate) => {
    return setDate(new Date());
};
  
const componentDidMount = (setInteval, setDate) => {
    setInterval(() => tick(setDate), 1000);
};

  

export default Time;