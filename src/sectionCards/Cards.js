import React from 'react';
import {Container,Grid,Paper} from '@material-ui/core'
import Card1 from "./Card1";
const Cards = () => {
    return (
        <Container>
            <Grid container spacing={4} style={{marginTop: '15px'}}>
                <Grid item md={6} xs={12}>
                    <Paper elevation={3}>
                        <Card1/>
                    </Paper>
                </Grid>
                <Grid item md={6} xs={12}>
                    <Paper elevation={3}>
                        <Card1/>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Cards;