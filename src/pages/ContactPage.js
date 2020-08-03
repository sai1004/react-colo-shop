import React, { useState } from "react";

import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import { TextareaAutosize } from "@material-ui/core";

const ContactPage = () => {
   const [contact, setContact] = useState({
      name: "",
      email: "",
      website: "",
      message: "",
   });

   const handleChange = (e) => {
      e.preventDefault();
   };
   const handleSubmit = (e) => {};

   return (
      <div>
         <h1> Hello Contact Page </h1>

         <div className="google__maps__iframe"></div>

         <div>
            <Container maxWidth="lg">
               <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                     <h2> Contact Us </h2>
                     <p>
                        There are many ways to contact us. You may drop us a line, <br /> give us a call or send an email, choose what suits you the most.{" "}
                     </p>

                     <p>(800) 686-6688 info.deercreative@gmail.com</p>

                     <p> Open hours: 8.00-18.00 Mon-Fri Sunday: Closed</p>
                     <h2> Follow Us </h2>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                     <h2> Get In Touch With Us! </h2>
                     <p> Fill out the form below to recieve a free and confidential. </p>

                     <form onSubmit={handleSubmit} noValidate autoComplete="off">
                        <TextField
                           type="text"
                           id="outlined-basic"
                           label="Your Name"
                           variant="outlined"
                           size="small"
                           color="secondary"
                           name="name"
                           value={contact.name}
                           onChange={handleChange}
                           placeholder="your Name"
                           required
                        />
                        <br />
                        <br />
                        <TextField
                           type="text"
                           id="outlined-basic"
                           label="Your Email"
                           variant="outlined"
                           size="small"
                           color="secondary"
                           name="email"
                           value={contact.email}
                           onChange={handleChange}
                           placeholder="your email"
                           required
                        />
                        <br />
                        <br />
                        <TextField
                           type="text"
                           id="outlined-basic"
                           label="Your Website"
                           variant="outlined"
                           size="small"
                           color="secondary"
                           name="website"
                           value={contact.website}
                           onChange={handleChange}
                           placeholder="your website"
                           required
                        />
                        <br />
                        <br />

                        <TextareaAutosize
                           type="text"
                           id="outlined-basic"
                           label="Your Message"
                           variant="outlined"
                           rows="10"
                           cols="30"
                           placeholder="your message"
                           required
                        ></TextareaAutosize>
                        <br />
                        <br />

                        <Button type="submit" variant="contained" color="secondary">
                           Send Message
                        </Button>
                     </form>
                  </Grid>
               </Grid>
            </Container>
         </div>
      </div>
   );
};

export default ContactPage;
