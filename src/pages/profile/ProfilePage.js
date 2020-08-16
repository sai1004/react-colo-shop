import React from "react";
import "./ProfilePage.css";

import { Container, Grid } from "../../shared/MaterialUi";
import SideBar from "./SideBar";

const ProfilePage = () => {
   return (
      <div>
         <Container maxWidth="lg">
            <Grid container spacing={3}>
               <Grid item xs={12} sm={3}>
                  <div className="side__bar">
                     <SideBar />
                  </div>
               </Grid>
               <Grid item xs={12} sm={9}>
                  <h1> Hello Profile</h1>
               </Grid>
            </Grid>
         </Container>
      </div>
   );
};

export default ProfilePage;
