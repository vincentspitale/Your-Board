import React from "react";
import tw from 'twin.macro'


function Welcome() {
  return(
    <div tw="w-screen" className="welcomeColor">
 
        <h1 className="first">Welcome to your Board</h1>
        <br></br>
      
      <ul className="list">
     
      <span><p className="one">1</p><li className="second">Create a new Figma project</li></span>
      <span><p className="two">2</p><li className="third">Share a link with edit access</li></span>
      <span><p className="three">3</p><li className="fourth">Send it to your friends</li></span>
      <span><p className="four">4</p><li className="fifth">Paste the link here</li></span>
      <span><p className="five">5</p><li className="sixth">See the changes live</li></span>
      </ul>
      
    </div>
  )
}
/* const Welcome = props => {
  return (
    <div style={{width:'100%', margin:'auto', backgroundImage:"blue"}}>
      
      
    </div>
  );
};*/

export default Welcome;
