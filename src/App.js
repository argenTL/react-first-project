import React from 'react'

import Main from "./header/main";
import Cards from "./sectionCards/Cards";
import Blogs from "./blogs/blogs";
import About from "./about/about";
import Footer from "./footer/footer";

import {Grid,Container} from "@material-ui/core";

function App() {
  return (
    <Container>
      <Main/>
      <Cards/>
      <Grid container spacing={5} style={{marginTop: 35}}>
          <Grid item xs={12} md={8}>
              <Blogs/>
          </Grid>
          <Grid item xs={12} md={4}>
              <About/>
          </Grid>
      </Grid>
      <Footer/>
    </Container>
  );
}

export default App;

