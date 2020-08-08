import React from "react";

import WomenImgOne from "../assets/banner_1.jpg";
import AccessoriesImg from "../assets/banner_2.jpg";
import MenImg from "../assets/banner_3.jpg";
import "../pages/home/Home.css";

import { Container, Button } from "../shared/MaterialUi";

const CategoryImgs = () => {
   const data = [
      {
         img: WomenImgOne,
         btnName: "Women's",
      },
      {
         img: AccessoriesImg,
         btnName: "Accessories",
      },
      {
         img: MenImg,
         btnName: " Men's",
      },
   ];

   return (
      <React.Fragment>
         <Container maxWidth="lg">
            <div className="flex__items">
               {data.map((item, i) => (
                  <div key={i} className="category__layout">
                     <img src={item.img} alt={item.btnName} className="category__Bgimg" />
                     <span className="content">
                        <Button variant="contained"> {item.btnName} </Button>
                     </span>
                  </div>
               ))}
            </div>
         </Container>
      </React.Fragment>
   );
};

export default CategoryImgs;
