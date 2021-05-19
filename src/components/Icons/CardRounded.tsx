import React from 'react';

type Props = {
  width: number;
  height: number;
  color: string;
};

const CardRoundedIcon = ({ width, height, color }: Props) => {
  return (
    <div style={{ width, height }}>
      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 50 50">
        <defs></defs>
        <g transform="translate(-64 -55)">
          <g transform="translate(64 55)" fill="none" stroke={color} strokeWidth="3px">
            <circle cx="25" cy="25" r="25" stroke="none" />
            <circle cx="25" cy="25" r="23.5" fill="none" />
          </g>
          <g transform="translate(74.833 65.834)">
            <g transform="translate(0 0)">
              <path
                d="M28.392,10.02,19.157.784a2.654,2.654,0,0,0-3.744,0L.773,15.423a2.653,2.653,0,0,0,0,3.744l1.139,1.139h0l7.654,7.654H8.507a.608.608,0,0,0,0,1.215H20.659a.608.608,0,0,0,0-1.215H14.2l14.2-14.2A2.651,2.651,0,0,0,28.392,10.02ZM27.533,12.9,12.894,27.544a1.422,1.422,0,0,1-1.011.417h0a1.421,1.421,0,0,1-1.01-.417L3.2,19.877,17.26,5.818a.608.608,0,1,0-.859-.859L2.342,19.018l-.71-.71a1.438,1.438,0,0,1,0-2.026L16.272,1.643a1.439,1.439,0,0,1,2.026,0L21.585,4.93,7.525,18.99a.608.608,0,0,0,.859.859L22.444,5.79l5.089,5.089A1.434,1.434,0,0,1,27.533,12.9Z"
                transform="translate(0 -0.011)"
                fill={color}
              />
              <path
                d="M166.477,305.119a.608.608,0,0,0-.859,0l-4.781,4.781a.608.608,0,0,0,.859.859l4.781-4.781A.608.608,0,0,0,166.477,305.119Z"
                transform="translate(-151.506 -287.57)"
                fill={color}
              />
              <path
                d="M192.965,384.795,191,386.756a.608.608,0,0,0,.859.859l1.961-1.961a.608.608,0,0,0-.859-.859Z"
                transform="translate(-179.956 -362.707)"
                fill={color}
              />
              <path
                d="M252.84,353.12l-.258.258a.608.608,0,1,0,.859.859l.258-.258a.608.608,0,1,0-.859-.859Z"
                transform="translate(-238.026 -332.837)"
                fill={color}
              />
              <path
                d="M347.225,160.847a.608.608,0,0,0-.859,0l-2.578,2.578a.608.608,0,0,0,0,.859L345.507,166a.608.608,0,0,0,.859,0l2.578-2.578a.608.608,0,0,0,0-.859Zm-1.289,3.867-.859-.859,1.719-1.719.859.859Z"
                transform="translate(-324.036 -151.517)"
                fill={color}
              />
              <path
                d="M310.28,55.8a.605.605,0,0,0,.43-.178l.258-.258a.608.608,0,0,0-.859-.859l-.258.258a.608.608,0,0,0,.43,1.037Z"
                transform="translate(-292.032 -51.233)"
                fill={color}
              />
              <path
                d="M100,355.11l-.258.258a.608.608,0,0,0,.859.859l.258-.258a.608.608,0,0,0-.859-.859Z"
                transform="translate(-93.894 -334.714)"
                fill={color}
              />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
};

export default CardRoundedIcon;
