import './App.css';
import Footer from './Component/Footer';
import Navbar from "./Component/Navbar";
import SearchUser from './Component/SearchUser';
import User from './Component/User';

import { useState } from "react";

function App() {
  const [tweets, setTweets] = useState([]);
  const [user, setUser] = useState({});


  return (
    <>
      <Navbar />
      <main className="main-content">

        <SearchUser name={"Dilbar ALi"} setUser={setUser} setTweets={setTweets} />
        <div className='tweets'>
        <User id='tweet' user={user} tweets={tweets} setTweets={setTweets} />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
