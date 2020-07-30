import React from "react";

import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";

const Footer = () => {
   return (
      <React.Fragment>
         <div className="footer__bgGray">
            <Container maxWidth="lg">
               <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                     <h2> Newsletter </h2>
                     <p>Subscribe to our newsletter and get 20% off your first purchase </p>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                     <form noValidate autoComplete="off">
                        <TextField
                           type="text"
                           id="outlined-basic"
                           label="Your Email"
                           variant="outlined"
                           placeholder="your email"
                           size="small"
                           color="secondary"
                        />
                        <Button variant="contained" color="secondary">
                           Subscribe
                        </Button>
                     </form>
                  </Grid>
               </Grid>
            </Container>
         </div>
         <div>
            <Container maxWidth="lg">
               <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                     <div className="footer__Content">
                        <span> Blog </span>
                        <span> FAQs </span>
                        <span> Contact us </span>
                     </div>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                     <div>
                        <p> Social Icons </p>
                     </div>
                  </Grid>
               </Grid>
               <div className="footer__Sapce">
                  <p>©2018 All Rights Reserverd. This template is made with by Colorlib</p>
               </div>
            </Container>
         </div>
      </React.Fragment>
   );
};

export default Footer;
