import React from "react";


import tw from 'twin.macro'

function Welcome() {
  return(
    <div tw="w-screen h-screen bg-yellow-300">
      <h1 tw="text-center pt-48 pb-24 text-7xl font-semibold">Welcome to <span tw="text-green-800">Your Board</span>.</h1>
    
      <ul tw="flex justify-center font-semibold">
        <li>
        <span tw="flex text-3xl pb-5 text-center">
        <p tw="rounded-full h-12 w-12 flex items-center justify-center bg-green-800 text-2xl text-white">1</p>
        <div tw="pl-5">Create a new <a href="https://www.figma.com" target="_blank" rel="noopener noreferrer" tw="text-purple-900 underline">Figma project</a></div>
        </span>

        <span tw="flex text-3xl pb-5 text-center">
        <p tw="rounded-full h-12 w-12 flex items-center justify-center bg-green-800 text-2xl text-white">2</p>
        <div tw="pl-5">Share a link with edit access</div>
        </span>

        <span tw="flex text-3xl pb-5 text-center">
        <p tw="rounded-full h-12 w-12 flex items-center justify-center bg-green-800 text-2xl text-white">3</p>
        <div tw="pl-5">Send it to your friends</div>
        </span>

        <span tw="flex text-3xl pb-5 text-center">
        <p tw="rounded-full h-12 w-12 flex items-center justify-center bg-green-800 text-2xl text-white">4</p>
        <div tw="pl-5">Paste the link here</div>
        </span>

        <span tw="flex text-3xl pb-5 text-center">
        <p tw="rounded-full h-12 w-12 flex items-center justify-center bg-green-800 text-2xl text-white">5</p>
        <div tw="pl-5">See the changes live</div>
        </span>
        </li>
      </ul>
 
    </div>
  )
}

export default Welcome;
