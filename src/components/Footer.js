import React from "react";

import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { Button } from "@material-ui/core";

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
                     <input type="text" placeholder="your email" />
                     <Button variant="contained"> Subscribe </Button>
                  </Grid>
               </Grid>
            </Container>
         </div>
         <div>
            <Container maxWidth="lg">
               <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                     <div>
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
            </Container>
         </div>
         <div Align="center">
            <p>©2018 All Rights Reserverd. This template is made with by Colorlib</p>
         </div>
      </React.Fragment>
   );
};

export default Footer;
