import React from 'react';
import Link from "./link";
import {Grid, Container} from "@material-ui/core";
import './banner.css'

const Banner = () => {
    return (
        <Container className='container'>
            <Grid item md={6} className='grid'>
                <h2>Title of a longer featured blog post</h2>
                <p>Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.</p>
                <Link/>
            </Grid>
        </Container>
    );
};

export default Banner;