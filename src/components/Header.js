import React from "react";
import { Link } from "react-router-dom";
import {
   makeStyles,
   fade,
   withStyles,
   MenuItem,
   Hidden,
   Badge,
   Button,
   AppBar,
   Toolbar,
   Typography,
   IconButton,
   Container,
   AccountCircleIcon,
   ShoppingCartIcon,
   SearchIcon,
   InputBase,
} from "../shared/MaterialUi";

import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuList from "@material-ui/core/MenuList";

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

const Header = () => {
   const menus = [
      { name: "Home", link: "/" },
      { name: "About", link: "/about" },
      { name: "contact", link: "/contact" },
   ];

   const [anchorEl, setAnchorEl] = React.useState(null);

   const [open, setOpen] = React.useState(false);
   const anchorRef = React.useRef(null);

   const handleToggle = () => {
      setOpen((prevOpen) => !prevOpen);
   };

   const handleClose = (event) => {
      if (anchorRef.current && anchorRef.current.contains(event.target)) {
         return;
      }
      setOpen(false);
   };

   function handleListKeyDown(event) {
      if (event.key === "Tab") {
         event.preventDefault();
         setOpen(false);
      }
   }

   // return focus to the button when we transitioned from !open -> open
   const prevOpen = React.useRef(open);
   React.useEffect(() => {
      if (prevOpen.current === true && open === false) {
         anchorRef.current.focus();
      }

      prevOpen.current = open;
   }, [open]);

   const classes = useStyles();
   return (
      <React.Fragment>
         <AppBar position="fixed" style={{ backgroundColor: "white", color: "black" }}>
            <Container maxWidth="lg">
               <Toolbar>
                  <Typography variant="h6">COLOSHOP</Typography>

                  <Typography variant="h6" className={classes.fillSpacer}></Typography>

                  <Hidden only={["xs", "sm"]}>
                     <div>
                        {menus.map((menu, i) => {
                           return (
                              <Button key={i} color="inherit">
                                 <Link key={i} to={menu.link} className="text__none">
                                    {menu.name}
                                 </Link>
                              </Button>
                           );
                        })}
                     </div>
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
                  <IconButton
                     className={classes.menuIcons}
                     ref={anchorRef}
                     aria-controls={open ? "menu-list-grow" : undefined}
                     aria-haspopup="true"
                     onClick={handleToggle}
                  >
                     <AccountCircleIcon />
                  </IconButton>

                  <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                     {({ TransitionProps, placement }) => (
                        <Grow {...TransitionProps} style={{ transformOrigin: placement === "bottom" ? "center top" : "center bottom" }}>
                           <Paper>
                              <ClickAwayListener onClickAway={handleClose}>
                                 <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                                    <MenuItem onClick={handleClose}>
                                       <Link to="/profile" style={{ textDecoration: "none" }}>
                                          Profile
                                       </Link>
                                    </MenuItem>
                                    <MenuItem onClick={handleClose}>My account</MenuItem>
                                    <MenuItem onClick={handleClose}>
                                       <Link to="/signin" style={{ textDecoration: "none" }}>
                                          Logout
                                       </Link>
                                    </MenuItem>
                                 </MenuList>
                              </ClickAwayListener>
                           </Paper>
                        </Grow>
                     )}
                  </Popper>

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
