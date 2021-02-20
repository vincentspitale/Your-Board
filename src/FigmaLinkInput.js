import React from "react";

import tw from 'twin.macro'

const FigmaLinkInput = ({figmaUrl, setFigmaUrl, ...props}) => {

  const setFigmaUrlProperty = (event) => {
    setFigmaUrl(event.target.value);
  };

  return (
    <div tw="border-4 border-black p-1 rounded-2xl">
      <input type="text" value={figmaUrl} onChange={setFigmaUrlProperty} placeholder="Enter Figma Url" tw="w-9/12"/>
    </div>
  );
};

export default FigmaLinkInput;
