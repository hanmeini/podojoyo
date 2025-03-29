
import {Link} from "react-router-dom"
import { GoogleLogout } from 'react-google-login';
const clientId = "548204688154-p0qo8nbl1rpo8pun1a7cjahipd4kfomg.apps.googleusercontent.com"


function Logout() {
  const onSucces = () => {
    console.log("Log out suksess");
  }

  return (
    <div id='signOutButton'>
      
      <GoogleLogout 
        clientId={clientId}
        buttonText={"Logout"}
        onLogoutSuccess={onSucces}
        
      />
     
    </div>
  )
}

export default Logout