import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
  {
    title: "Home",
    path: '/Home',
    icon: <AiIcons.AiFillHome />
  },
  {
    title: 'Root of Equation',
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Bisection',
        path : '/Bisection',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'False-Position',
        path : '/FalsePosition',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'One-Point',
        path : 'Onepoint',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Newton',
        path : '/Newton',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Secant',
        path : '/Secant',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    title: 'Linear Algebra',
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Cramer's rule",
        path: '/Cramer',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Gauss Eliminate',
        path: '/GuassElimination',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Gauss-Jordan',
        path: '/reports/reports2',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Matrix Inversion',
        path: '/reports/reports2',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'LU Decompostion',
        path: '/reports/reports2',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        
        title: 'Cholesky Decomp',
        path: '/reports/reports2',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Jacobi Iteration',
        path: '/reports/reports2',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Gauss-Seidel',
        path: '/reports/reports2',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Conjugate Gradient',
        path: '/reports/reports3',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    title: 'Interpolation',
    path: '/messages',
    icon: <IoIcons.IoIosPaper />,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Newton's divided",
        path: '/messages/message1',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Lagrange Interporate',
        path: '/messages/message2',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  }
];