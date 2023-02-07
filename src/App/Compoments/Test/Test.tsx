import React from 'react'
import { Carousel } from 'antd';

const contentStyle: React.CSSProperties = {
    margin: 0,
    height: '200px',
    width: '200px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};

function Test() {
    const onChange = (currentSlide: number) => {
        console.log(currentSlide);
    };
    return (
        <>
            <Carousel afterChange={onChange}>
                <div>
                    {/* <h3 >1</h3> */}
                    <img style={contentStyle} src='https://i.ytimg.com/vi/C_duDk5e8yU/maxresdefault.jpg' alt="" />
                </div>
                <div>
                    <img style={contentStyle} src='https://i.ytimg.com/vi/C_duDk5e8yU/maxresdefault.jpg' alt="" />
                </div>
                <div>
                    <img style={contentStyle} src='https://i.ytimg.com/vi/C_duDk5e8yU/maxresdefault.jpg' alt="" />
                </div>
                <div className="shop">
                    <img style={contentStyle} src='https://i.ytimg.com/vi/C_duDk5e8yU/maxresdefault.jpg' alt="" />
                </div>
            </Carousel>

        </>
    )
}

export default Test