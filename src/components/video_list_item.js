import React from 'react'

const VideolistItem = ({video, key, onVideoSelect}) => {
    const imageUrl = video.snippet.thumbnails.default.url;

    return (
        <li onClick={() => onVideoSelect(video)}
            key={key}
            className='list-group-item'>
            <div className="video-list media">
                <div className="media-left">
                    <img src={imageUrl} alt="" className="media-object"/>
                </div>

                <div className="media-body">
                    <div className="media-heading"/>
                    {video.snippet.title}</div>
            </div>
        </li>
    )
};

export default VideolistItem