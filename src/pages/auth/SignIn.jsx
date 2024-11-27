import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import SocialLogin from "../../components/SocialLogin";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import { Helmet } from "react-helmet-async";

const SignIn = () => {
  const [showPass, setShowPass] = useState(true);
  const { signInUser } = useAuth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSignIn = (data) => {
    const { email, password } = data;
    signInUser(email, password)
      .then(() => {
        toast.success("Sign in successful! Welcome back!");
        navigate("/");
      })
      .catch((error) => {
        if (error.code == "auth/invalid-credential") {
          return toast.error(
            "Invalid credentials. Please check your email and password."
          );
        }
      });
  };

  return (
    <div>
      <Helmet>
        <title>UrbanNest | Sign In</title>
      </Helmet>
      <div className="hero  rounded-lg p-5">
        <div className="hero-content flex-col">
          <div className="text-center ">
            <h1 className="text-4xl lg:text-5xl font-bold mt-5 mb-3">
              Sign In Now
            </h1>
          </div>
          <div className="card border bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleSubmit(handleSignIn)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-base">Email Address</span>
                </label>
                <input
                  {...register("email", { required: true })}
                  type="email"
                  placeholder="Enter your email address"
                  className="input input-bordered"
                />
                {errors.email && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-base">Password</span>
                </label>
                <div className="relative">
                  <input
                    {...register("password", { required: true })}
                    type={showPass ? "password" : "text"}
                    placeholder="Enter your password"
                    className="input input-bordered w-full"
                  />
                  <span
                    onClick={() => setShowPass(!showPass)}
                    className="absolute top-4 right-4 cursor-pointer"
                  >
                    {showPass ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </div>
                {errors.password && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-base-300 ">Sign In</button>
              </div>
              <div className="mt-2">
                <p>
                  Don’t have an account?{" "}
                  <span className="italic text-blue-500 hover:underline">
                    <Link to={"/sign-up"}>Sign Up</Link>
                  </span>
                </p>
              </div>
            </form>
            <div>
              <div className="divider">Continue With</div>
              <div className="text-center mb-8 mt-6">
                <SocialLogin></SocialLogin>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
