import { useEffect, useState } from "react";
import "./LoginForm.css";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import { app } from "../../firebase/firebase";
export const LoginForm = () => {
  
  const [getAuths, setGetAutn] = useState({});
  const [inputsFields, setInputFields] = useState({
    name: "",
    email: "",
    password: "",
  });
  console.log(inputsFields);
  const [emailUser, setEmailUser] = useState({});
  console.log(emailUser);
  const auth = getAuth(app);
  console.log(getAuths);
  useEffect(() => {
    setGetAutn(auth);
    console.log(auth);
  }, [auth]);
  const handleSubmit = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(
      auth,
      inputsFields.email,
      inputsFields.password
    )
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        setEmailUser(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error);
        setEmailUser(errorMessage);
        // ..
      });
  };

  return (
    <>
      <div className="loginForm">
        <div className="yo ">
          <form action="" onSubmit={handleSubmit}>
            <div className="inputHover">
              <input
                type="text"
                value={inputsFields.name}
                name="name"
                placeholder="Pease type your name"
                onChange={(e) =>
                  setInputFields({
                    ...inputsFields,
                    [e.target.name]: e.target.value,
                  })
                }
              />
              <span className="span"></span>
            </div>

            <div className="inputHover">
              <input
                value={inputsFields.email}
                onChange={(e) =>
                  setInputFields({
                    ...inputsFields,
                    [e.target.name]: e.target.value,
                  })
                }
                type="email"
                name="email"
                placeholder="Please type your email"
              />
            </div>
            <div className="inputHover">
              <input
                type="password"
                name="password"
                value={inputsFields.password}
                onChange={(e) =>
                  setInputFields({
                    ...inputsFields,
                    [e.target.name]: e.target.value,
                  })
                }
                placeholder="Please type your password"
              />
            </div>
            <button className="submitBtn text-6xl" type="submit">
              signin
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
