import React from "react";



import tw from 'twin.macro'

function Welcome() {
  return(
    <div tw="w-screen h-screen bg-gradient-to-b from-purple-200 via-yellow-50">
 
        <h1 tw="text-center p-48 text-7xl">Welcome to your Board</h1>
        <br></br>
      
      
      
      <ul tw="p-2 ">
      <span tw="flex justify-center "><p tw="rounded-full h-12 w-12 flex items-center justify-center bg-purple-600 text-2xl text-white">1</p><li tw="text-center text-3xl pl-14">Create a new <a href="https://www.figma.com" tw="underline">Figma project</a></li></span>
      <span tw="flex justify-center "> <p tw="rounded-full h-12 w-12 flex items-center justify-center bg-purple-500 text-2xl text-white ">2</p><li tw="text-center text-3xl pl-14">Share a link with edit access</li></span>

      <span tw="flex justify-center"><p tw="rounded-full h-12 w-12 flex items-center justify-center bg-purple-400 text-2xl text-white">3</p><li tw="text-center text-3xl pl-14">Send it to your friends</li></span>
      <span tw="flex justify-center"><p tw="rounded-full h-12 w-12 flex items-center justify-center bg-purple-300 text-2xl text-white">4</p><li tw="text-center text-3xl pl-14">Paste the link here</li></span>
      <span tw="flex justify-center"><p tw="rounded-full h-12 w-12 flex items-center justify-center bg-purple-200 text-2xl text-white">5</p><li tw="text-center text-3xl pl-14">See the changes live</li></span>

      </ul>
      
      
    </div>
  )
}

export default Welcome;
