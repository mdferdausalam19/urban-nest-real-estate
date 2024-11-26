import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";

const SignIn = () => {
  const { signInUser } = useAuth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSignIn = (data) => {
    const { email, password } = data;
    console.log(email, password);
    signInUser(email, password)
      .then(() => {
        toast.success("Sign in successful! Welcome back!");
        navigate("/");
      })
      .catch((error) => {
        console.log(error.code);
        if (error.code == "auth/invalid-credential") {
          return toast.error(
            "Invalid credentials. Please check your email and password."
          );
        }
      });
  };

  return (
    <div>
      <div className="hero  rounded-lg p-5">
        <div className="hero-content flex-col">
          <div className="text-center ">
            <h1 className="text-5xl font-bold mt-5 mb-3">Sign In Now</h1>
          </div>
          <div className="card border bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleSubmit(handleSignIn)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email Address</span>
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
                  <span className="label-text">Password</span>
                </label>
                <input
                  {...register("password", { required: true })}
                  type="password"
                  placeholder="Enter your password"
                  className="input input-bordered"
                />
                {errors.password && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-base-300">Sign In</button>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
