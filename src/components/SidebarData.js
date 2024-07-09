import {IoIosArrowUp, IoIosArrowDown} from 'react-icons/io'
import data from "../data.json";

const SidebarData = [
  {
    title: data[0].name,
    expandIcon: <IoIosArrowDown />,
    collapseIcon:<IoIosArrowUp />,
    subnav: [
      {
        title: data[0].albums[0].title,
        path: "/radiohead/album1",
      },
      {
        title: data[0].albums[1].title,
        path: "/radiohead/album2",
      },
    ],
  },

  {
    title: data[1].name,
    expandIcon: <IoIosArrowDown />,
    collapseIcon:<IoIosArrowUp />,
    subnav: [
      {
        title: data[1].albums[0].title,
        path: "/portishead/album1",
      },
      {
        title: data[1].albums[1].title,
        path: "/portishead/album2",
      },
    ],
  },

  {
    title: data[2].name,
    expandIcon: <IoIosArrowDown />,
    collapseIcon:<IoIosArrowUp />,
    subnav: [
      {
        title: data[2].albums[0].title,
        path: "/rammstein/album1",
      },
      {
        title: data[2].albums[1].title,
        path: "/rammstein/album2",
      },
    ],
  },

  {
    title: data[3].name,
    expandIcon: <IoIosArrowDown />,
    collapseIcon:<IoIosArrowUp />,
    subnav: [
      {
        title: data[3].albums[0].title,
        path: "/taylorswift/album1",
      },
      {
        title: data[0].albums[1].title,
        path: "/taylorswift/album2",
      },
    ],
  },
];

export default SidebarData;