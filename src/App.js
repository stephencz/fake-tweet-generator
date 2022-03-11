import React from 'react';
import { useState } from 'react';

import Header from "./components/Header/Header";
import TweetDataForm from './components/TweetDataForm/TweetDataForm';
import TweetDisplay from './components/TweetDisplay/TweetDisplay';

import './App.scss';


const App = () => {

  const [tweetFormData, setTweetFormData] = useState({
    username: "johndoe",
    displayName: "John Doe",
    profilePicture: "",
    tweet_text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
    time: "12:35 PM",
    date: "Feb 27, 2022",
    retweets: "100",
    replies: "100",
    likes: "1.5K",
    verified: false
  });

  return (
    <main>
      <Header />
      <TweetDataForm tweetFormData={ tweetFormData } setTweetFormData={ setTweetFormData } />
      <TweetDisplay tweetFormData={ tweetFormData } />
    </main>
  );
}

export default App;
