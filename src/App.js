import React, {useEffect, useState}from 'react';
import './App.css';
import WheelComponent from "react-wheel-of-prizes";
import jwt_decode from "jwt-decode";
import insta from './images/insta.svg'
import Tasks from './components/Tasks';
import Modals from './components/Modal';

function App() {

  const[user, setUser] = useState({});
  const[isLoggedIn, setIsLoggedIn] = useState(false);
  const [clicked, setClicked] = useState(false); // Initialize the state variable

  function handleCallbackResponse(response) {
    var userObject = jwt_decode(response.credential);
    var updatedFirstName = capitalizeFirstLetter(userObject.given_name);
    userObject.given_name = updatedFirstName;
    setUser(userObject);
    console.log(userObject);
    setIsLoggedIn(true);
  }

  function handleSignOut(event) {
    setUser({});
    setIsLoggedIn(false);
  }

  function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id: "689769832671-atetd0nde06ndtd9btrclb7m486m37hu.apps.googleusercontent.com",
      callback: handleCallbackResponse
    });

    google.accounts.id.renderButton(
      document.getElementById("signIn"),
      {theme: "outline", size: "large"}
    )

    console.log(clicked);
    console.log(isLoggedIn);
  }, [isLoggedIn, clicked]);

  const segments = [
    "10%",
    "15%",
    "10%",
    "20%",
    "10%",
    "30%",
    "10%",
    "50%",
    "10%",
    "Free candle !"
  ];

  const segColors = [
    "#E5E5F8",
    "#C72C7D",
    "#E5E5F8", 
    "#CB45F7",
    "#E5E5F8",
    "#CB45F7",
    "#E5E5F8", 
    "#CB45F7",
    "#E5E5F8",
    "#CB45F7" 
  ];

  const onFinished = (winner) => {
    console.log(winner);
  };

  return (
    <div className="App">
      {!(isLoggedIn && clicked) &&(
        <div>
          <br/>
          <br/>
          <br/>
          <h2 className='bck'>Welcome to Bougie M !</h2>
          <br/>
          <br/>
          <br/>
          <h3 className='bck'>Complete the tasks below to spin the wheel :</h3>
          <div className='tasks'>
            <Tasks setClicked={setClicked}/>
            <h3 className='bck'>2. Connect with Google : </h3>
            <div className='bck' id="signIn">
            </div>
          </div>
          {/* <Modals setIsLoggedIn={setIsLoggedIn}/> */}

        </div>
      )}  
      
      {isLoggedIn && clicked &&(
        <div>
          <h3>Welcome {user.given_name}</h3>
          {user.picture && <img src={user.picture} alt='picture' />}
          <br/>
          <button onClick={(e) => handleSignOut(e)}>Sign Out</button>
          <h1>Spin the wheel and win prizes</h1>
          <div className="Wheel">
            <WheelComponent
              segments={segments}
              segColors={segColors}
              // winningSegment="Free candle !"
              onFinished={(winner) => onFinished(winner)}
              primaryColor="black"
              contrastColor="white"
              buttonText="Click"
              isOnlyOnce={true}
              size={180}
              // upDuration={100}
              downDuration={400}
              fontFamily="Arial"
            />
          </div>
          <a href="https://instagram.com/bougiee_m" target="_blank" rel="noopener noreferrer"  >
            <img src={insta} alt="Bougie M Instagram account" 
              style={{
                width:'60px', 
                height:'60px',
                position: 'absolute',
                right: '35px',
                bottom: '35px'
            }}/>
          </a>
          </div>
      )}  
    </div> 
  );
}

export default App;
