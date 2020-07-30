import React from "react";

import "../pages/home/Home.css";

import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

const NewArrivals = () => {
   return (
      <React.Fragment>
         <div className="content" Align="center">
            <h1> New Arrivals </h1>
            <div className="underLine"> </div>
         </div>
         <Container maxWidth="sm">
            <div Align="center" className="arrivals__GroupBtns">
               <ButtonGroup size="large" color="secondary" aria-label="large outlined primary button group">
                  <Button>ALL</Button>
                  <Button>WOMEN'S</Button>
                  <Button>ACCESSORIES</Button>
                  <Button>MEN'S</Button>
               </ButtonGroup>
            </div>
         </Container>
      </React.Fragment>
   );
};

export default NewArrivals;
