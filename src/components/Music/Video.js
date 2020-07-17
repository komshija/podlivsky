import React from 'react'
import { Link } from 'react-router-dom';

const Video = (props) => {
    const {id,naziv,thumbnailPath} = props.video;
    const {velicina} = props;

    return (
        <Link className={`col-lg-${velicina} col-xl-${velicina} col-sm-12 col-xs-12 col-12 w-100 p-1 video-link`} to={`/video/${id}`}>
            <img src={require(`../../images/video/${thumbnailPath}`)} alt={naziv} className="w-100 h-100" />
            <span className="video-name"> {naziv} </span>
        </Link>
    )
}

export default Video
