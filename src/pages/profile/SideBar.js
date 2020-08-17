import React from "react";
import profilePic from "../../assets/blog_2.jpg";

import {
   makeStyles,
   AccountCircleSharpIcon,
   EditSharpIcon,
   ListSubheader,
   List,
   ListItem,
   LockSharpIcon,
   RedeemSharpIcon,
   ListItemIcon,
   ListItemText,
} from "../../shared/MaterialUi";
import { Divider } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
   root: {
      width: "100%",
      maxWidth: 360,
   },
   nested: {
      paddingLeft: theme.spacing(4),
   },
}));

const profileMenuList = [
   {
      name: "Account Overview",
      icon: <AccountCircleSharpIcon />,
   },
   {
      name: "Profile Edit",
      icon: <EditSharpIcon />,
   },
   {
      name: "Password Change",
      icon: <LockSharpIcon />,
   },
   {
      name: "Coupons",
      icon: <RedeemSharpIcon />,
   },
];

const SideBar = () => {
   const classes = useStyles();

   const handleClick = () => {};

   return (
      <div style={classes} className="sideBar">
         <div className="profile__pic__frame">
            <div className="profile__bg">
               <img className="profile__pic" src={profilePic} alt="propic" />
            </div>
         </div>

         <List component="nav" className={classes.root}>
            {profileMenuList.map((menu) => (
               <div>
                  <ListItem button onClick={handleClick} className="list__item">
                     <ListItemIcon>{menu.icon}</ListItemIcon>
                     <ListItemText primary={menu.name} />
                  </ListItem>
                  <Divider />
               </div>
            ))}
         </List>
      </div>
   );
};

export default SideBar;
