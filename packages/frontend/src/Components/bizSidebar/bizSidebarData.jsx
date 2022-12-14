import React from 'react';
import { FaBusinessTime } from "react-icons/fa";
import { FaCoins } from "react-icons/fa";
import { BsJournalCheck } from "react-icons/bs";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { BsCashCoin } from "react-icons/bs";
import { HiOutlineNewspaper } from "react-icons/hi";
import { BiCoinStack } from "react-icons/bi";
import { SiNounproject } from "react-icons/si";

export const bizSidebarData_biztools = [
  {
    title: 'Project Config',
    path: '/ProjectConfig',
    icon: <SiNounproject />,
    cName: 'nav-text'
  },
  {
    title: 'Total investment',
    path: '/TotalInvestment',
    icon: <BsCashCoin />,
    cName: 'nav-text',
    bgButt: '#1a83ff'
  },
  {
    title: 'Operation cost',
    path: '/OperationCost',
    icon: <FaCoins />,
    cName: 'nav-text',
    bgButt: '#1a83ff'
  },
  {
    title: 'Revenue',
    path: '/Revenue',
    icon: <RiMoneyDollarCircleLine />,
    cName: 'nav-text',
    bgButt: '#1a83ff'
  },
  {
    title: 'Miscellaneous',
    path: '/Miscellaneous',
    icon: <BiCoinStack />,
    cName: 'nav-text',
    bgButt: '#1a83ff'
  },

];

export const bizSidebarData_checkbiz = [
    {
      title: 'FFC',
      path: '/ffc',
      icon: <BsJournalCheck />,
      cName: 'nav-text'
    },
    {
      title: 'Statements',
      path: '/Statements',
      icon: <HiOutlineNewspaper />,
      cName: 'nav-text',
      bgButt: '#1a83ff'
    },
  
  ];