import React, { useContext } from "react";

import "../pages/home/Home.css";
import { colorContext } from "../shared/colorContext";

import { Container, ButtonGroup, Button, Box } from "../shared/MaterialUi";

const NewArrivals = () => {
   // anthor way to access the colorContext
   // const colors = useContext(colorContext);
   // return <div style={{ backgroundColor: colors.blue }}>...</div>;

   return (
      <React.Fragment>
         <div className="content" Align="center">
            <h1> New Arrivals </h1>
            <div className="underLine"> </div>
         </div>
         <Container maxWidth="sm">
            <Box textAlign="center">
               <div className="arrivals__GroupBtns">
                  <ButtonGroup size="large" color="secondary" aria-label="catgeories button group">
                     <Button>ALL</Button>
                     <Button>WOMEN'S</Button>
                     <Button>ACCESSORIES</Button>
                     <Button>MEN'S</Button>
                  </ButtonGroup>
               </div>
            </Box>

            {/* 
            <colorContext.Consumer>
               {(colors) => (
                  <div style={{ backgroundColor: `${colors.blue}` }}>
                     <h4> Hello backgroundColor is set by colorContext </h4>
                  </div>
               )}
            </colorContext.Consumer> */}
         </Container>
      </React.Fragment>
   );
};

export default NewArrivals;
