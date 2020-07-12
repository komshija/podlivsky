import React from 'react'
import { Link } from 'react-router-dom';

const Video = (props) => {
    const {videoId,image,kolona} = props;
    
    return (
        <Link className={`col-lg-${kolona} col-xl-${kolona} col-sm-12 col-xs-12 col-12 w-100 p-1 video-link`} to={`/video/${videoId}`}>
            <img src={image} className="w-100 h-100" />
            <span className="video-name"> Video name </span>
        </Link>
    )
}

export default Video
