import React from 'react';
import Blog from "./blog";
import Banner from "./banner";
import Container from "@material-ui/core/Container";

const Main = () => {
    return (
        <Container>
            <Blog/>
            <Banner/>
        </Container>
    );
};

export default Main;