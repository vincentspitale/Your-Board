import React from "react";

import Time from './Time.js'
import FigmaLinkInput from "./FigmaLinkInput";

import Weather from './Weather'
import Friends from './Friends'

import tw from 'twin.macro'


const SideBar = ({figmaUrl, setFigmaUrl, ...props}) => {
  return (
    <div tw="w-400px pl-4 pr-4 pt-20">
      <div tw="pb-8">
        <Time />
      <div tw="pt-3" >
      <Weather />
      </div>
      </div>
      <h1 tw="text-2xl font-semibold pb-3">Your Board</h1>
      <FigmaLinkInput figmaUrl={figmaUrl} setFigmaUrl={setFigmaUrl} />
      <div tw="pt-3">
         <Friends />
      </div>
    </div>
  );
};

export default SideBar;
