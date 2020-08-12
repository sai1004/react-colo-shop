import React, { useState, useEffect } from "react";
import "../pages/home/Home.css";

import { Container, Grid } from "../shared/MaterialUi";

import BlogOne from "../assets/blog_1.jpg";
import BlogTwo from "../assets/blog_2.jpg";
import BlogThree from "../assets/blog_3.jpg";
import "../pages/home/Home.css";

const LatestBlogs = () => {
   const [data, setData] = useState([]);

   console.log(data);

   useEffect(() => {
      setData([
         {
            img: BlogOne,
            title: "Here are the trends I see coming this fall",
            postedBy: " BY ADMIN | DEC 01, 2017 ",
            readMore: "Read more",
         },
         {
            img: BlogTwo,
            title: "Here are the trends I see coming this fall",
            postedBy: " BY ADMIN | DEC 01, 2017 ",
            readMore: "Read more",
         },
         {
            img: BlogThree,
            title: "Here are the trends I see coming this fall",
            postedBy: " BY ADMIN | DEC 01, 2017 ",
            readMore: "Read more",
         },
      ]);
   }, []); // useEffect Calls only Once When the Component Renders and also when callback [data] is changed

   useEffect(() => {
      fetch("https://fakestoreapi.com/products")
         .then((res) => res.json())
         .then((json) => console.log(json))
         .catch((error) => console.log(error));
   }, []);

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
                        <img className="blog__imgs" src={item.img} alt={item.img} />
                        <div className="inside__Content">
                           <h4> {item.title}</h4>
                           <p> {item.postedBy} </p>
                           <p style={{ color: "#f50057" }}> {item.readMore} </p>
                        </div>
                     </div>
                  </Grid>
               ))}
            </Grid>
         </Container>
      </React.Fragment>
   );
};

export default LatestBlogs;
