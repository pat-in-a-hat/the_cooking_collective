import React from 'react';
import '../../styling/BackgroundVideo.css'
import VideoLink from '../../assets/piebackground.mp4'
import PosterLink from '../../assets/piebackgroundimage.png'
import { Box } from '@chakra-ui/react'

//using local storage for a background video for the homepage
export default function BackgroundVideo(){

    //poster attribute replaces video with a photo if loading blocked (happens on mobile)
    //most browsers require muted when autoPlay is used
    return(
        <Box className='video-container'>
        <video autoPlay loop muted playsInline id='background-video' poster={PosterLink}>
            <source src={VideoLink} type='video/mp4'/>
        </video>
        </Box>
    )
}