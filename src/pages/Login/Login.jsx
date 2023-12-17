import { LogInBackGround } from "../../componets/Background/LoginBackGround/LoginBackGround";
import { LoginForm } from "../../componets/LoginForm/LoginForm";
import { LoginWithSocialMedais } from "../../componets/LoginWithSocialMedia/LoginWithSocialMedai";

const Login = () => {
  return (
    <>
      <div className="logInpage">
        <LogInBackGround>
          <LoginForm></LoginForm>
          <LoginWithSocialMedais></LoginWithSocialMedais>
        </LogInBackGround>
      </div>
    </>
  );
};
export default Login;
