import React from 'react';
import { FaBusinessTime } from "react-icons/fa";
import { FaCoins } from "react-icons/fa";
import { BsJournalCheck } from "react-icons/bs";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { BsCashCoin } from "react-icons/bs";
import { HiOutlineNewspaper } from "react-icons/hi";
import { BiCoinStack } from "react-icons/bi";
import { SiNounproject } from "react-icons/si";

export const bizSidebarProfileData = [
  {
    title: 'Profile',
    path: '/Profile',
    // icon: <SiNounproject />,
    cName: 'nav-text'
  },
  {
    title: 'Account',
    path: '/Account',
    // icon: <BsCashCoin />,
    cName: 'nav-text',
    bgButt: '#1a83ff'
  },
  {
    title: 'Subscription',
    path: '/Subscription',
    // icon: <FaCoins />,
    cName: 'nav-text',
    bgButt: '#1a83ff'
  }
];

