import React from 'react';

type Props = {
  width: number;
  height: number;
  color: string;
};

const CheckIcon = ({ width, height, color }: Props) => {
  return (
    <div style={{ width, height }}>
      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 13.2 10.117">
        <defs></defs>
        <path
          d="M12.962,53.075,11.8,51.916a.822.822,0,0,0-1.158,0l-5.587,5.6L2.555,55a.788.788,0,0,0-.579-.238A.788.788,0,0,0,1.4,55L.238,56.157a.823.823,0,0,0,0,1.158L3.321,60.4l1.158,1.158a.822.822,0,0,0,1.158,0L6.8,60.4l6.166-6.166a.823.823,0,0,0,0-1.158Z"
          transform="translate(0 -51.678)"
          fill={color}
        />
      </svg>
    </div>
  );
};

export default CheckIcon;
