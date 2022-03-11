import React from "react";
import { useRef } from "react";
import html2canvas from "html2canvas"; 

import './TweetDataForm.scss';

const TweetDataForm = (props) => {

  const profilePictureInputRef = useRef(null);

  const updateUsername = (event) => {
    props.setTweetFormData({
      ...props.tweetFormData,
      username: event.target.value
    });
  }

  const updateDisplayName = (event) => {
    props.setTweetFormData({
      ...props.tweetFormData,
      displayName: event.target.value
    });
  }

  const updateProfilePictureFetch = (event) => {
    props.setTweetFormData({
      ...props.tweetFormData,
      profilePicture: profilePictureInputRef.current.value
    })
  }

  const updateTweetText = (event) => {
    const hashTags = event.target.value.replace(/\B(\#[a-zA-Z]+\b)(?!;)/ig, '<span class="hash-tag">$1</span>');
    const atTags = hashTags.replace(/\B(\@[a-zA-Z]+\b)(?!;)/ig, '<span class="at-tag">$1</span>');
    props.setTweetFormData({
      ...props.tweetFormData,
      tweet_text: atTags
    });
  }

  const updateTime = (event) => {
    props.setTweetFormData({
      ...props.tweetFormData,
      time: event.target.value
    });
  }

  const updateDate = (event) => {
    props.setTweetFormData({
      ...props.tweetFormData,
      date: event.target.value
    });
  }

  const updateReplies = (event) => {
    props.setTweetFormData({
      ...props.tweetFormData,
      replies: event.target.value
    });
  }

  const updateLikes = (event) => {
    props.setTweetFormData({
      ...props.tweetFormData,
      likes: event.target.value
    });
  }

  const updateVerified = (event) => {
    props.setTweetFormData({
      ...props.tweetFormData,
      verified: event.target.checked
    });
  }

  return (
    <div className="tweet-data-form-wrapper">
      <table>
        <tbody>
          <tr>
            <td><label htmlFor="username">Username: </label></td>
            <td><input type="text"  id="username" placeholder="Username" onKeyUp={ updateUsername }/></td>
            <td><label htmlFor="display_name">Display Name: </label></td>
            <td><input type="text"  id="display_name" placeholder="Display Name" onKeyUp={ updateDisplayName }/></td>
          </tr>
          <tr>
            <td>
              <label htmlFor="profile_picture">Picture URL:</label>
            </td>
            <td>
              <input id="profile_picture" ref={profilePictureInputRef} placeholder="URL to an Image"></input>
            </td>
            <td>
              <button onClick={ updateProfilePictureFetch }>Fetch URL</button>
            </td>
          </tr>
          <tr>
            <td colSpan={ 4 }>
              <label htmlFor="tweet_text">Text:</label>
            </td>
          </tr>
          <tr>
            <td colSpan={ 4 }>
              <textarea id="tweet_text" onKeyUp={ updateTweetText } placeholder="Enter tweet text here...">

              </textarea>
            </td>
          </tr>

          <tr>
            <td><label htmlFor="time">Time: </label></td>
            <td><input type="text"  id="time" placeholder="12:00 PM" onKeyUp={ updateTime }/></td>
            <td><label htmlFor="date">Date: </label></td>
            <td><input type="text"  id="date" placeholder="Feb 27, 2022" onKeyUp={ updateDate }/></td>
          </tr>

          <tr>
            <td><label htmlFor="likes">Likes: </label></td>
            <td><input type="text"  id="likes" placeholder="1.5K" onKeyUp={ updateLikes }/></td>
            <td><label htmlFor="verified">Is Verified? </label></td>
            <td><input type="checkbox"  id="verified" onClick={ updateVerified } /></td>
          </tr>
          <tr>
            <td><label htmlFor="replies">Replies: </label></td>
            <td><input type="text"  id="replies"  placeholder="100"  onKeyUp={ updateReplies }/></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default TweetDataForm;