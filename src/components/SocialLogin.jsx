import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const SocialLogin = () => {
  const { googleSignIn } = useAuth();
  const navigate = useNavigate();
  const handleSocialLogin = (socialProvider) => {
    socialProvider().then((result) => {
      if (result.user) {
        navigate("/");
      }
    });
  };
  return (
    <div>
      <button onClick={() => handleSocialLogin(googleSignIn)} className="btn">
        Google
      </button>
    </div>
  );
};

export default SocialLogin;
