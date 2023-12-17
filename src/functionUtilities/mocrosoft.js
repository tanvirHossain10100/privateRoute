import { OAuthProvider } from "firebase/auth";
import { getAuth, signInWithPopup } from "firebase/auth";
import { app } from "../firebase/firebase";
const provider = new OAuthProvider("microsoft.com");
export const microsoft = (getsetUser) => {
  const auth = getAuth(app);
  signInWithPopup(auth, provider)
    .then((result) => {
      // User is signed in.
      // IdP data available in result.additionalUserInfo.profile.

      // Get the OAuth access token and ID Token
      getsetUser(result);
      const credential = OAuthProvider.credentialFromResult(result);
      const accessToken = credential.accessToken;
      const idToken = credential.idToken;
      getsetUser(idToken);
    })
    .catch((error) => {
      // Handle error.
      getsetUser(error);
    });
};
