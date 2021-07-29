import React from 'react';
import {Container} from "@material-ui/core";
import SimpleBlog from "./simple_blog";

const Blogs = () => {
    return (
        <Container>
            <h3>From the firehose</h3>
            <hr/>
            <SimpleBlog/>
        </Container>
    );
};

export default Blogs;