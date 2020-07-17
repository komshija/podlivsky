import React, { useState, useEffect } from 'react'
import axios from "axios";
import Youtube from 'react-youtube';
import Loading from '../Loading';
import { Scrollbars } from "react-custom-scrollbars";
import NotFound from '../NotFound';
const VideoPage = (props) => {

    const { id } = props.match.params;
    const [video, setVideo] = useState();
    const [loading, setLoading] = useState(true);
    const [found, setFound] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {

                const response = await axios.get(`https://podlivskyapi.azurewebsites.net/api/Videos/${id}`);
                setFound(true);
                setVideo(response.data.video);
                setLoading(false);
            }
            catch 
            {
                setLoading(false);
                setFound(false);
            }
        }
        fetchData();
    }, [id]);

    return (
        <div className="page">
            {
                loading ?
                    <Loading /> :
                    found ? 
                    <Scrollbars autoHeight autoHeightMin={`calc(100vh - 120px)`}>

                        <Youtube
                            id={id}
                            videoId={video.youtubeLink.split('?v=')[1]}
                            className="w-100 mt-3"
                            containerClassName="yt-container mb-5"
                            opts={{
                                height: '720'
                            }}

                        />
                    </Scrollbars>
                    : <NotFound />
            }

        </div>
    )
}

export default VideoPage
