import React from "react";
import "./Home.css";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import NewArrivals from "../../components/NewArrivals";
import CategoryImgs from "../../components/ CategoryImgs";

const HomePage = () => {
   return (
      <React.Fragment>
         <div className="bg__img">
            <Container maxWidth="lg">
               <div className="content">
                  <p> SPRING / SUMMER COLLECTION 2017 </p>
                  <h1>
                     Get up to 30% Off <wbr /> New <wbr /> Arrivals
                  </h1>
                  <Button variant="contained" color="secondary">
                     Shop Now
                  </Button>
               </div>
            </Container>
         </div>
         {/* <div className="category_Component">
            <CategoryImgs />
         </div> */}

         {/* <div>
            <NewArrivals />
         </div> */}
      </React.Fragment>
   );
};

export default HomePage;
