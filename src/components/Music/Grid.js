import React from 'react'
import Row from './Row';

const Grid = (props) => {
    const { data } = props;
    const odd = data.length % 2;
    let i = 0;
    let j = 0;
    let array = []
    let array12 = [];
    array12.push(data[0]);

    if (odd) {
        i = 1;
    }
    for (; i < data.length; i = i + 2) {
        array.push({
            video1: data[i],
            video2: data[i + 1],
            odd: j++ % 2
        });
    }
    i = 0;

    return (
        <div>

            {
                array12.map(video => (
                    <Row video1={video} video2={undefined} />
                ))
            }

            {
                array.map(pairs => (
                    <Row key={i++} video1={pairs.video1} video2={pairs.video2} odd={pairs.odd} />
                ))

            }


        </div>
    )
}


export default Grid