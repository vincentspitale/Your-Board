import React from "react";

import Time from './Time.js'

import Weather from './Weather'

import tw from 'twin.macro'

const SideBar = ({figmaUrl, setFigmaUrl, ...props}) => {
  return (
    <div tw="w-400px pl-4 pr-4 pt-20">
      <div tw="pb-10">
      <Time />
      </div>
      <Weather />
      <p tw="text-2xl font-semibold">Your Board</p>
      <div>
      </div>
    </div>
  );
};

export default SideBar;