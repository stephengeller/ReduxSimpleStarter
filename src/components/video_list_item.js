import React from 'react'

const VideolistItem = (props) => {
    const video = props.video;
    console.log(video);
    return (
        <li key={props.key}>{video.snippet.channelTitle}
            <div className="video-list media">
                <div className="media-left">
                    <img src="" alt="" className="media-object"/>
                </div>

                <div className="media-body">
                    <div className="media-heading"/>
                </div>
            </div>
        </li>
    )
};

export default VideolistItem