import { FaGooglePlus } from "react-icons/fa";
import { FaMicrosoft } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import "./LoginWithSocialMedai.css";
import { google } from "../../functionUtilities/google";
import { useState } from "react";
import { handleGit } from "../../functionUtilities/git";
import { fb } from "../../functionUtilities/fb";
import { microsoft } from "../../functionUtilities/mocrosoft";
import { twiter } from "../../functionUtilities/twitter";
export const LoginWithSocialMedais = () => {
  const [userAuthState, setUserAuthState] = useState({});
  console.log(userAuthState);
  return (
    <>
      <h1>Login with social media</h1>
      <div className="socailMedaias">
        <ul>
          <li className="google hover" onClick={() => google(setUserAuthState)}>
            <FaGooglePlus className="hover" size={25} />
            <span>Google</span>
          </li>
          <li className="git" onClick={() => handleGit(setUserAuthState)}>
            <FaGithub size={25} />
            <span>Git</span>
          </li>
          <li className="microsoft" onClick={() => microsoft(setUserAuthState)}>
            <FaMicrosoft size={25} />
            <span>Microsoft</span>
          </li>
          <li className="fb" onClick={() => fb(setUserAuthState)}>
            <FaFacebook size={25} />
            <span>Facebook</span>
          </li>
          <li className="twitter" onClick={() => twiter(setUserAuthState)}>
            <FaTwitter size={25} />
            <span>Twitter</span>
          </li>
        </ul>
      </div>
    </>
  );
};
