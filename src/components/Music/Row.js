import React from 'react'
import Video  from "./Video";


const Row = (props) => {
    const {video1,video2,odd} = props;

    return (
        <div>
            {
                video2 === undefined ? 
                    <div className='row m-0 mt-1 mb-1 w-100 video-row'>
                        <Video key={video1.id} video={video1} velicina={12}/>
                    </div>
                : 
                    <div className='row m-0 mt-1 mb-1 w-100 video-row'>
                        <Video key={video1.id} video={video1} velicina={odd ? 4 : 8} />
                        <Video key={video2.id} video={video2} velicina={odd ? 8 : 4} />
                    </div>
            }
        </div>
    )
}


export default Row