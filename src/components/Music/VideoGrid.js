import React from 'react'
import Video  from "./Video";

/* <Video key={img} image={`../../images/music/${img}.jpg`} /> */

const VideoGrid = () => {
    const images = [1,3,5,7];
    let i=0;

    return (
        <div className="page">
            {images.map(img => (
                <div className='row m-0 mt-1 mb-1 w-100'>
                    <Video key={img} videoId={img} image={require(`../../images/music/${img}.jpg`)} kolona={i % 2 ? 4 : 8 }/>
                    <Video key={img+1} videoId={img+1} image={require(`../../images/music/${img+1}.jpg`)} kolona={ i++ % 2 ? 8 : 4 } />
                </div>
            ))}
        </div>
    )
}

export default VideoGrid
