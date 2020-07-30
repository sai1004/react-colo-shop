import React from "react";
import "../pages/home/Home.css";

import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

import BlogOne from "../assets/blog_1.jpg";
import BlogTwo from "../assets/blog_2.jpg";
import BlogThree from "../assets/blog_3.jpg";
import "../pages/home/Home.css";

const LatestBlogs = () => {
   return (
      <React.Fragment>
         <div className="blogs__content" Align="center">
            <h1> Latest Blogs </h1>
            <div className="underLine"> </div>
         </div>
         <Container maxWidth="lg">
            <Grid container spacing={3}>
               <Grid item xs={12} sm={4}>
                  <div className="blogs_layout">
                     <img src={BlogOne} alt="imgblog" />
                     <div className="inside__Content"></div>
                  </div>
               </Grid>

               <Grid item xs={12} sm={4}>
                  <div className="blogs_layout">
                     <img src={BlogTwo} alt="imgblog" />
                     <div className="inside__Content"></div>
                  </div>
               </Grid>

               <Grid item xs={12} sm={4}>
                  <div className="blogs_layout">
                     <img src={BlogThree} alt="imgblog" />
                     <div className="inside__Content"></div>
                  </div>
               </Grid>
            </Grid>
         </Container>
      </React.Fragment>
   );
};

export default LatestBlogs;
