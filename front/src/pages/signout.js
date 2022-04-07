import "./wardrobe.css"
import "../App.js"

const SignOut = () => {
    return(
        <body>
            Do you want to sign out ?
            <div>
                <a href="/">
                    <button onClick={signOut}>Sign Out</button>
                </a>
                </div>
            </body>
    );
};

function signOut(){
    sessionStorage.removeItem('token');
    console.log("disconnected");
    if(sessionStorage.getItem('token')==null){
        alert("You have been successfully disconnected !");
    }
    else{
        alert("Error: token " + sessionStorage.getItem('token'));
    }
}
export default SignOut;