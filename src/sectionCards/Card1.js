import React from 'react';
import Link from "../header/link";
import {Grid,Hidden} from "@material-ui/core";



const Card1 = () => {
    return (
        <Grid container spacing={2}
              direction="row"
              justifyContent="space-between"
              alignItems="stretch">
            <Grid item md={8} style={{paddingLeft: '30px'}}>
                <h3>Lorem ipsum.</h3>
                <span>Nov 12</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius est eveniet hic illum incidunt ipsum nemo
                    omnis placeat veritatis voluptatibus.</p>
                <Link/>
            </Grid>
            <Grid item md={4}>
                <Hidden only={["xs", "sm"]}>
                    <img src="https://source.unsplash.com/random" width='100%' height='auto' alt=""/>
                </Hidden>
            </Grid>
        </Grid>
    );
};

export default Card1;