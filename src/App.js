import React, { useState } from "react"
import './App.css'
import FileView from "./Components/FileView/FileView"
import Header from "./Components/Header/Header"
import SideBar from "./Components/SideBar/SideBar"
import SideIcons from "./Components/SideIcons/SideIcons"
// import { auth, provider } from "./firebase"


function App() {
  const [user,setUser] = useState()
  // const handleLogin = () =>{
  //   if(!user){
  //     auth.signInWithPopup(provider).then((result)=>{
  //       setUser(result.user)
  //     })
  //   }
  // }
  const handleLogin = () =>{
        setUser(true)
  }

  return (
      <div className="app">
        {
          user ?(
            <>
              <Header userPhoto={user.userPhoto}/>
              <div className="app_main">
                <SideBar/>
                <FileView />
                <SideIcons/>
              </div>
            </>

          ) : (

              <div className="app_login">
                <img src="data:image/png;base64,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" alt=""/>
                <button onClick={handleLogin}>Log into Google Drive</button>
              </div>
          )
        }
        

      </div>
  );
}

export default App;
