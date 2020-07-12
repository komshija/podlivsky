import React from 'react'
import Youtube from 'react-youtube';

const VideoPage = (props) => {
    
    const { id } = props.match.params;

    console.log(id);
    return (
        <div className="page">
            <Youtube 
                id={id}
                videoId="yBULVheXj5c"
                className="w-100 mt-3"
                containerClassName="yt-container mb-5"
                opts= {{
                    height: '720'
                }}
            />

        </div>
    )
}

export default VideoPage
