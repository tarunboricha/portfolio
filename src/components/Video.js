import React from "react";

function Video(props) {
    const data = [
        {
            img: "https://i.ytimg.com/vi/7WOIJwed0OA/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDbvgwJAttJiW2C7-YddPNdkreZ2Q",
            views: "192K",
            heading: "120,000 NYC Students Are Homeless… Why?",
            time: "2 days",
            timedur: "12:01"
        },
        {
            img: "https://i.ytimg.com/vi/6OtMBlfdbwg/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC6aDgynqt3h7Ra4j-nGi2WKPCAhQ",
            views: "129K",
            heading: "Tiny Townhouses are Changing NYC Forever…",
            time: "3 days",
            timedur: "12:01"
        },
        {
            img: "https://i.ytimg.com/vi/BNhxRrH7Am0/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAurA5VSeqQhzcx3mX7ezXePCT9Vg",
            views: "199K",
            heading: "NYC Wants Less Police… Why",
            time: "5 days",
            timedur: "12:01"
        },
        {
            img: "https://i.ytimg.com/vi/w-2hqWC2se0/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC3AxkMd2kh2IT-uQBf1ATdWXPLOw",
            views: "230K",
            heading: "New York is Building Apartments Under a Bridge…",
            time: "9 days",
            timedur: "12:01"
        },
        {
            img: "https://i.ytimg.com/vi/xUTbivC1L5c/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBWaaw5DXp3ULdNfS1BVI-fsW_9Og",
            views: "192K",
            heading: "120,000 NYC Students Are Homeless… Why?",
            time: "2 days",
            timedur: "12:01"
        },
        {
            img: "https://i.ytimg.com/vi/gQaSsDLMiMc/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAFf7nD1CCn_GE_iZn7oKxFPFIO3g",
            views: "90K",
            heading: "Tiny Townhouses are Changing NYC Forever…",
            time: "3 days",
            timedur: "12:01"
        },
        {
            img: "https://i.ytimg.com/vi/nXQT7vPq9iY/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAHbD79OX2hn92eyooLOPLIE50LtA",
            views: "230K",
            heading: "NYC Wants Less Police… Why",
            time: "5 days",
            timedur: "12:01"
        },
        {
            img: "https://i.ytimg.com/vi/g3nxiu8sZDY/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCjrSjq5kNMP-If8ZPQZSPSa_1Jig",
            views: "900K",
            heading: "New York is Building Apartments Under a Bridge…",
            time: "9 days",
            timedur: "12:01"
        }
    ];

    console.log(data);

    return (
        <div style={{ width: '20.9%', padding: '1%', margin: '0%', marginLeft: '3%', marginBottom: '3%', paddingBottom: '0', float: 'left' }}>
            <div style={{ position: 'relative', textAlign: 'center' }}>
                <img style={{ width: '250px', height: '140px', borderRadius: '10px' }} src={props.img} alt=""></img>
                <div style={{ position: 'absolute', right: '1%', bottom: '4%', color: 'white', backgroundColor: 'black', borderRadius: '5px', fontSize: 'small', padding: '0 1%' }}>{props.timedur}</div>
            </div>
            <div style={{ marginTop: '2%' }}>
                <h6>{props.heading}</h6>
                <p style={{ margin: '0', color: '#aaa' }}>{props.views} views<span class="dot"></span>{props.time} ago</p>
            </div>
        </div>
    );
};

export default Video;