import React from "react";

import TwitterBirdSVG from "./bird.png";
import VerifiedSVG from "./verified.png";
import InfoSVG from "./info.png";
import HeartSVG from "./like.png";
import ReplySVG from "./reply.png";
import CopyLinkSVG from "./copy_link.png";

import "./TweetDisplay.scss";

const TweetDisplay = (props) => {

  const getVerified = () => {
    if(props.tweetFormData.verified) {
      return (
        <div className="verified">
        <img src={ VerifiedSVG } alt="twitter verified account icon" />
        </div>
      )
    }

    return;
  }

  return (
    <div id="tweet-display" className="tweet-display-wrapper">
      <div className="row">
        <div className="profile-picture">
          <img src={ props.tweetFormData.profilePicture }  />
        </div>

        <div className="column">
          <div className="row center-content">
            <div className="display-name">{ props.tweetFormData.displayName }</div>
            { getVerified() }
          </div>
          <div className="username">@{ props.tweetFormData.username }</div>
        </div>

        <div className="float-right">
          <div className="twitter-bird">
            <img src={ TwitterBirdSVG } alt="twitter verified account icon" />
          </div>
        </div>
        
      </div>

      <div className="row">
        <div className="tweet-text">
          { props.tweetFormData.tweet_text }
        </div>
      </div>

      <div className="row bottom-bordered">
        <div className="datetime">
          { props.tweetFormData.time } · { props.tweetFormData.date }
        </div>

        <div className="float-right">
          <div className="info">
            <img src={ InfoSVG } alt="tweet info icon" />
          </div>
        </div>
      </div>

      <div className="row centered">
        <div className="likes-icon">
          <img src={ HeartSVG } alt="tweet like icon" />
        </div>
        <div className="likes">
          { props.tweetFormData.likes }
        </div>

        <div className="reply-icon">
          <img src={ ReplySVG } alt="tweet like icon" />
        </div>
        <div className="reply">
          Reply
        </div>

        <div className="copy-link-icon">
          <img src={ CopyLinkSVG } alt="tweet copy link icon" />
        </div>
        <div className="copy-link">
         Copy Link
        </div>
      </div>

      <div className="row">
        <div className="read-replies">
          Read { props.tweetFormData.replies } replies
        </div>
      </div>
    </div>
  )
}

export default TweetDisplay;