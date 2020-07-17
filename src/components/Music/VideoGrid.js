import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Loading from "../Loading";
import Grid from "./Grid";


const VideoGrid = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    document.title = "Music videos • Podlivsky";
    useEffect(() => {
        const fetchData = async () => {

            const response = await axios("https://podlivskyapi.azurewebsites.net/api/Videos");
            setData(response.data);
            setLoading(false);
        };
        fetchData();

    }, []);

    return (
        <div className="page">
            {
                loading ?
                    <Loading /> : <Grid data={data} />
            }
        </div>
    )
}

export default VideoGrid
