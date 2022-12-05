import React from 'react';

export default function BackgroundVideo(){
    const VIDEOLINK = ''
    const POSTERLINK = ''

    return(
        <video autoPlay loop muted playsInline id='background-video' poster={POSTERLINK} style=''>
            <source src={VIDEOLINK} type='video/mp4'/>
        </video>
    )
}