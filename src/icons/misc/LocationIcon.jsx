import React from 'react';

const LocationIcon = ({ color = '#757575', size = 40 }) => {
  return (
    <svg
      width={size * (24 / 40)}
      height={size * (40 / 40)}
      viewBox='0 0 24 40'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <g clipPath='url(#clip0_4278_9173)'>
        <path
          d='M12.0005 0C5.38399 0 0.000488281 6.12946 0.000488281 13.6607C0.000488281 17.2473 1.37374 22.017 4.08199 27.8375C6.25699 32.5107 8.77324 36.7366 10.082 38.8393C10.3031 39.1986 10.5923 39.4907 10.926 39.6921C11.2597 39.8935 11.6286 39.9985 12.0027 39.9985C12.3769 39.9985 12.7458 39.8935 13.0795 39.6921C13.4132 39.4907 13.7023 39.1986 13.9235 38.8393C15.23 36.7366 17.7485 32.5107 19.9235 27.8375C22.6272 22.0187 24.0005 17.2491 24.0005 13.6607C24.0005 6.12946 18.617 0 12.0005 0ZM12.0005 15.9375C11.0511 15.9375 9.97734 15.8511 9.18799 15.2232C8.39863 14.5953 12.5888 21.8031 12.2255 20.7589C11.8622 19.7148 19.7383 21.3763 19.9235 20.2679C20.1087 19.1594 7.93508 11.0443 8.60638 10.2451C9.27767 9.44595 25.6119 29.9787 17.7005 16.4725C18.6316 16.252 7.8984 4.34428 8.77549 4.77679C8.77549 2.67857 7.79806 12.3639 8.32549 13.3036C8.85292 14.2433 5.21299 13.3341 5.21299 14.4643C5.2116 15.9793 16.2929 17.2532 15.3931 18.3245C14.4932 19.3958 13.2731 15.9358 12.0005 15.9375Z'
          fill={color}
        />
      </g>
      <defs>
        <clipPath id='clip0_4278_9173'>
          <rect
            width='24'
            height='40'
            fill='white'
            transform='translate(0.000488281)'
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default LocationIcon;
