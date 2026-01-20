import HomeSharpIcon from '@mui/icons-material/HomeSharp';
import DescriptionSharpIcon from '@mui/icons-material/DescriptionSharp';
import FolderIcon from '@mui/icons-material/Folder';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import GppGoodIcon from '@mui/icons-material/GppGood';
export const sideBar = [
    {
      id: 1,
      title: "Home",
      icon: HomeSharpIcon,
      children: [
        { subId: 1, title: "Dashboard" },
        { subId: 2, title: "Analytics" },
      ],
    },
    {
      id: 2,
      title: "Pages",
      icon: DescriptionSharpIcon,
      children: [
        { subId: 1, title: "Profile" },
        { subId: 2, title: "Users" },
        { subId: 3, title: "Account", features : [
          {id : 1, title : "Setting"},
          {id : 2, title : "Billing"},
          {id : 3, title : "Invoice"},
          {id : 4, title : "Security"},
        ] },
        { subId: 4, title: "Projects" },
        { subId: 5, title: "Pricing page" },
        { subId: 6, title: "Charts" },
        { subId: 7, title: "Notification" },
        { subId: 8, title: "Chat" },
      ],
    },
    {
      id: 3,
      title: "Applications",
      icon: FolderIcon,
      children: [
        { subId: 1, title: "Chat" },
        { subId: 2, title: "Calendar" },
      ],
    },
    {
      id: 4,
      title: "E-Commerce",
      icon: ShoppingBasketIcon,
      children: [
        { subId: 1, title: "About" },
        { subId: 2, title: "Contact" },
      ],
    },
    {
      id: 5,
      title: "Authentication",
      icon: GppGoodIcon,
      children: [
        { subId: 1, title: "About" },
        { subId: 2, title: "Contact" },
      ],
    },
    
    
  ];