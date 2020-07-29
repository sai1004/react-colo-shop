import React from "react";

import WomenImgOne from "../assets/banner_1.jpg";
import AccessoriesImg from "../assets/banner_2.jpg";
import MenImg from "../assets/banner_3.jpg";

import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";

const CategoryImgs = () => {
   return (
      <React.Fragment>
         <Container maxWidth="lg">
            <div className="flex__items">
               <div className="category__layout">
                  <img src={WomenImgOne} alt="imgOne" className="category__Bgimg" />
                  {/* <div className="content">
                     <Button> Women's </Button>
                  </div> */}
               </div>
               <div className="category__layout">
                  <img src={AccessoriesImg} alt="imgOne" className="category__Bgimg" />
                  {/* <div className="content">
                     <Button> Accessories </Button>
                  </div> */}
               </div>
               <div className="category__layout">
                  <img src={MenImg} alt="imgOne" className="category__Bgimg" />
                  {/* <div className="content">
                     <Button> Men's </Button>
                  </div> */}
               </div>
            </div>
         </Container>
      </React.Fragment>
   );
};

export default CategoryImgs;
