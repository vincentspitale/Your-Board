import React, { useState } from "react";
import SideBar from "./SideBar";
import Welcome from "./Welcome";

import tw from 'twin.macro'

const Board = props => {
  // REMOVE this default later
  const defaultFigmaUrl = "https://www.figma.com/proto/qAoAPNoJwt6SZxAj4w2DOL/Untitled?node-id=1%3A2&scaling=min-zoom";
  const [figmaUrl, setFigmaUrl] = useState("");

  return (
    <div className="App" tw="flex flex-row">
      { figmaUrl === "" ?
          <Welcome />
          : <iframe src={"https://www.figma.com/embed?embed_host=astra&url=" + `${figmaUrl}`} />
      }
      <SideBar figmaUrl={figmaUrl} setFigmaUrl={setFigmaUrl} />
    </div>
  );
};



export default Board;