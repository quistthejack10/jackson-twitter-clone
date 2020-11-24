import React from 'react';
import './Widgets.css';
import {
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchIcon from '@material-ui/icons/Search';


function Widgets() {
    return (
        <div className="widgets">
            <div className="widgets__input">
                <SearchIcon className="widgets__searchIcon" />
                <input placeholder="Search Twitter" type="text" />
            </div>
            <div className="widgets__widgetContainer">
                <h2>What's going on?</h2>

                <TwitterTweetEmbed tweetId={"858551177860055040"} />

                <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="quistthejack10"
                    options={{ height: 400 }}
                />

                <TwitterShareButton
                    url={"https://www.linkedin.com/in/jackson-quist-556318143/"}
                    options={{ text: "reactjs is cool", via: "quistthejack10" }}
                />
            </div>
            
        </div>
    );
}

export default Widgets;
