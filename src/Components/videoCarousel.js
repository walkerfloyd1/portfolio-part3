import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import "../styles/carousel.css";

import { Carousel } from 'react-responsive-carousel';

import Grid from '@material-ui/core/Grid';

export default class ControlledCarousel extends Component {
    render () {
        return (
            <Grid container
            spacing={6}
            direction="column"
            alignItems="center"
            justify="center"
            >
                <Grid item lg={9}>
            <Carousel showThumbs={false}>
                {/* <div>
                    <iframe src="https://player.vimeo.com/video/247003506" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
                </div> */}
<div>
<iframe width="560" height="315" src="https://www.youtube.com/embed/-JCj2gLRfzk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
<div>
<iframe width="560" height="315" src="https://www.youtube.com/embed/tzC901_XP9U" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
<div>
<iframe src="https://player.vimeo.com/video/247003506" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
</div>
<div>
<iframe src="https://player.vimeo.com/video/196279477" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
</div>
<div>
<iframe src="https://player.vimeo.com/video/185302989" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
</div>
<div>
<iframe width="560" height="315" src="https://www.youtube.com/embed/kFU-Sv6q7HU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
<div>
<iframe src="https://player.vimeo.com/video/247003720" width="640" height="352" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
</div>
<div>
<iframe src="https://player.vimeo.com/video/247003536" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
</div>
            </Carousel>
            </Grid>
            </Grid>
        )
    }
};