import React from "react";
import "./ProfilePage.css";

import { Container, Grid, Box, TextField } from "../../shared/MaterialUi";
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
                  <Box textAlign="center">
                     <h1> Profile Details </h1>
                  </Box>

                  <Box>
                     <TextField id="outlined-password-input" label="name" type="text" variant="outlined" />

                     <TextField id="outlined-email-input" label="email" type="email" variant="outlined" />

                     <TextField id="outlined-mobile-input" label="mobile" type="text" variant="outlined" />
                  </Box>
               </Grid>
            </Grid>
         </Container>
      </div>
   );
};

export default ProfilePage;
