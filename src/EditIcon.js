import React from 'react';

import tw from 'twin.macro';

const EditIcon = ({editFunction, ...props}) => {
  return (
    <svg
      width="17"
      height="16"
      viewBox="0 0 17 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={() => {editFunction()}}
      tw="cursor-pointer px-1 w-max"
    >
      <path d="M15.2058 3.69922L16.291 2.63574C16.8158 2.11719 16.8336 1.51074 16.3444 1.00977L15.8907 0.561525C15.4015 0.0605482 14.77 0.113283 14.2452 0.614259L13.1601 1.67774L15.2058 3.69922ZM3.87407 14.8965L14.2008 4.68359L12.155 2.66211L1.83719 12.875L0.956623 15.1338C0.805414 15.5205 1.21457 15.8896 1.57035 15.7578L3.87407 14.8965Z" fill="black"/>
    </svg>
  );
};

export default EditIcon;
