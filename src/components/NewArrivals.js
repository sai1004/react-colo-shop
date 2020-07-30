import React from "react";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

const NewArrivals = () => {
   const [value, setValue] = React.useState(4);

   const handleChange = (event, newValue) => {
      setValue(newValue);
   };

   return (
      <React.Fragment>
         <div className="content" Align="center">
            <h1> New Arrivals </h1>
            <div className="underLine"> </div>
         </div>
         <Container maxWidth="sm">
            <Paper square>
               <Tabs value={value} indicatorColor="primary" textColor="primary" onChange={handleChange}>
                  <Tab label="ALL" />
                  <Tab label="WOMEN'S" />
                  <Tab label="ACCESSORIES" />
                  <Tab label="MEN'S" />
               </Tabs>
            </Paper>
         </Container>
      </React.Fragment>
   );
};

export default NewArrivals;
