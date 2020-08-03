import React from "react";
import { Link } from "react-router-dom";

import { makeStyles, fade, withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
// import MenuIcon from "@material-ui/icons/Menu";
import Container from "@material-ui/core/Container";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import Button from "@material-ui/core/Button";
import Badge from "@material-ui/core/Badge";
import Hidden from "@material-ui/core/Hidden";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

const useStyles = makeStyles((theme) => ({
   root: {
      flexGrow: 1,
   },
   menuButton: {
      marginRight: theme.spacing(),
   },
   fillSpacer: {
      flex: "1 1 auto",
   },
   menuIcons: {
      color: "black",
   },
   search: {
      position: "relative",
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      "&:hover": {
         backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginLeft: 0,
      width: "100%",
      [theme.breakpoints.up("sm")]: {
         marginLeft: theme.spacing(1),
         width: "auto",
      },
   },
   searchIcon: {
      padding: theme.spacing(0, 2),
      height: "100%",
      position: "absolute",
      pointerEvents: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
   },
   inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
         width: "12ch",
         "&:focus": {
            width: "20ch",
         },
      },
   },
}));

const StyledBadge = withStyles((theme) => ({
   badge: {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: "0 4px",
   },
}))(Badge);

const menus = [
   { name: "Home", link: "/" },
   { name: "About", link: "/about" },
   { name: "contact", link: "/contact" },
];

const getMenus = menus.map((menu, i) => {
   return (
      <Button key={i} color="inherit">
         <Link key={i} to={menu.link} className="text__none">
            {menu.name}
         </Link>
      </Button>
   );
});

const Header = () => {
   const [anchorEl, setAnchorEl] = React.useState(null);

   const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
   };

   const handleClose = () => {
      setAnchorEl(null);
   };

   const classes = useStyles();
   return (
      <React.Fragment>
         <AppBar position="fixed" style={{ backgroundColor: "white", color: "black" }}>
            <Container maxWidth="lg">
               <Toolbar>
                  <Typography variant="h6">COLOSHOP</Typography>

                  <Typography variant="h6" className={classes.fillSpacer}></Typography>
                  <Hidden only={["xs", "sm"]}>
                     <div>{getMenus}</div>
                  </Hidden>

                  <div className={classes.search}>
                     <div className={classes.searchIcon}>
                        <SearchIcon />
                     </div>
                     <InputBase
                        placeholder="Search…"
                        classes={{
                           root: classes.inputRoot,
                           input: classes.inputInput,
                        }}
                        inputProps={{ "aria-label": "search" }}
                     />
                  </div>
                  <IconButton className={classes.menuIcons} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                     <AccountCircleIcon />
                  </IconButton>

                  <Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
                     <MenuItem onClick={handleClose}>Profile</MenuItem>
                     <MenuItem onClick={handleClose}>My account</MenuItem>
                     <MenuItem onClick={handleClose}>Logout</MenuItem>
                  </Menu>

                  <IconButton aria-label="cart">
                     <StyledBadge badgeContent={4} color="secondary">
                        <ShoppingCartIcon />
                     </StyledBadge>
                  </IconButton>
               </Toolbar>
            </Container>
         </AppBar>
      </React.Fragment>
   );
};

export default Header;
