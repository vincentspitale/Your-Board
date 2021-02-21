import React from 'react';

import tw from 'twin.macro';

const CommitIcon = ({commitEdit, ...props}) => {
  return (
 
    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg"
    onClick={() => {commitEdit()}}
      tw="cursor-pointer px-1 w-max"
      >
<path d="M6.73047 16.6113C7.26758 16.6113 7.67773 16.3965 7.96094 15.9668L16.623 2.54883C16.8379 2.22656 16.9258 1.94336 16.9258 1.66992C16.9258 0.957031 16.4082 0.449219 15.6758 0.449219C15.1777 0.449219 14.875 0.625 14.5625 1.11328L6.69141 13.584L2.6582 8.4668C2.36523 8.08594 2.05273 7.92969 1.61328 7.92969C0.880859 7.92969 0.353516 8.44727 0.353516 9.16016C0.353516 9.47266 0.460938 9.77539 0.724609 10.0879L5.50977 15.9961C5.85156 16.416 6.22266 16.6113 6.73047 16.6113Z" fill="black"/>
</svg>

  );
};

export default CommitIcon;
