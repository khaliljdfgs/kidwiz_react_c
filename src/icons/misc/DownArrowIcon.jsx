import React from 'react';

const DownArrowIcon = ({ color = '#FAFAFA', size = 24 }) => {
  return (
    <svg
      width={size * (24 / 24)}
      height={size * (24 / 24)}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <g clipPath='url(#clip0_4278_10167)'>
        <path
          d='M12 24C18.6271 24 24 18.6271 24 12C24 5.37288 18.6271 0 12 0C5.37288 0 0 5.37288 0 12C0 18.6271 5.37288 24 12 24ZM6.72923 11.7317C6.81461 11.6457 6.91611 11.5772 7.02793 11.5304C7.13975 11.4835 7.25971 11.4592 7.38094 11.4587C7.50218 11.4582 7.62233 11.4816 7.73452 11.5276C7.84671 11.5735 7.94875 11.6411 8.03481 11.7265L11.0769 14.745V7.03846C11.0769 6.79365 11.1742 6.55886 11.3473 6.38575C11.5204 6.21264 11.7552 6.11539 12 6.11539C12.2448 6.11539 12.4796 6.21264 12.6527 6.38575C12.8258 6.55886 12.9231 6.79365 12.9231 7.03846V14.745L15.9652 11.7265C16.0513 11.6412 16.1535 11.5736 16.2657 11.5277C16.378 11.4817 16.4982 11.4584 16.6195 11.4589C16.7408 11.4594 16.8607 11.4839 16.9726 11.5308C17.0844 11.5777 17.186 11.6462 17.2713 11.7323C17.3567 11.8184 17.4243 11.9206 17.4702 12.0328C17.5162 12.1451 17.5395 12.2653 17.539 12.3866C17.5384 12.5079 17.514 12.6279 17.4671 12.7397C17.4202 12.8516 17.3517 12.9531 17.2656 13.0385L12.6502 17.6187C12.4773 17.7902 12.2436 17.8865 12 17.8865C11.7564 17.8865 11.5227 17.7902 11.3498 17.6187L6.73442 13.0385C6.64817 12.9531 6.57961 12.8515 6.53266 12.7396C6.48571 12.6276 6.46129 12.5075 6.46081 12.3862C6.46033 12.2648 6.48379 12.1445 6.52985 12.0322C6.5759 11.9199 6.64366 11.8178 6.72923 11.7317Z'
          fill={color}
        />
      </g>
      <defs>
        <clipPath id='clip0_4278_10167'>
          <rect
            width='24'
            height='24'
            fill='white'
            transform='matrix(0 -1 1 0 0 24)'
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default DownArrowIcon;
