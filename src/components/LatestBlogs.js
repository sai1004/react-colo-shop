import React, { useEffect } from "react";
import "../pages/home/Home.css";

import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

import BlogOne from "../assets/blog_1.jpg";
import BlogTwo from "../assets/blog_2.jpg";
import BlogThree from "../assets/blog_3.jpg";
import "../pages/home/Home.css";

const LatestBlogs = () => {
   const data = [
      {
         img: BlogOne,
      },
      {
         img: BlogTwo,
      },
      {
         img: BlogThree,
      },
   ];

   return (
      <React.Fragment>
         <div className="blogs__content" Align="center">
            <h1> Latest Blogs </h1>
            <div className="underLine"> </div>
         </div>
         <Container maxWidth="lg">
            <Grid container spacing={3}>
               {data.map((item, i) => (
                  <Grid key={i} item xs={12} sm={4}>
                     <div className="blogs_layout">
                        <img src={item.img} alt={item.img} />
                        <div className="inside__Content"></div>
                     </div>
                  </Grid>
               ))}
            </Grid>
         </Container>
      </React.Fragment>
   );
};

export default LatestBlogs;
