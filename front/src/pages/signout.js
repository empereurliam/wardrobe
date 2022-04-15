import "./wardrobe.css";
import "../App.js";

const SignOut = () => {
  return (
    <body>
      <div className="signout">
        <h2>Do you really want to sign out ?</h2>
        <a href="/">
          <button className="buttonbanner" onClick={signOut}>
            Sign Out
          </button>
        </a>
      </div>
    </body>
  );
};

function signOut() {
  sessionStorage.removeItem("token");
  console.log("disconnected");
  if (sessionStorage.getItem("token") == null) {
    alert("You have been successfully disconnected !");
  } else {
    alert("Error: token " + sessionStorage.getItem("token"));
  }
}
export default SignOut;
