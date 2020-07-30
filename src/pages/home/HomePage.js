import React from "react";

import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";

import "./Home.css";
import NewArrivals from "../../components/NewArrivals";
import CategoryImgs from "../../components/CategoryImgs";
import DealOfWeek from "../../components/DealOfWeek";
import BestSellers from "../../components/BestSellers";
import LatestBlogs from "../../components/LatestBlogs";

const HomePage = () => {
   return (
      <React.Fragment>
         <div className="bg__img">
            <Container maxWidth="lg">
               <div>
                  <div className="content">
                     <p> SPRING / SUMMER COLLECTION 2017 </p>
                     <h1>
                        Get up to 30% Off <wbr /> New <wbr /> Arrivals
                     </h1>
                     <Button variant="contained" color="secondary">
                        Shop Now
                     </Button>
                  </div>
               </div>
            </Container>
         </div>
         <div className="component__Gap">
            <CategoryImgs />
         </div>
         <div className="component__Gap">
            <NewArrivals />
         </div>
         <div className="component__Gap">
            <DealOfWeek />
         </div>
         <div className="component__Gap">
            <BestSellers />
         </div>
         <div className="component__Gap">
            <LatestBlogs />
         </div>
      </React.Fragment>
   );
};

export default HomePage;
