import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const SignUp = () => {
  const { createUser } = useAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSingUp = (data) => {
    const { email, fullName, image, password } = data;
    console.log(email, fullName, image, password);
    const uppercaseRegex = /[A-Z]/;
    const lowercaseRegex = /[a-z]/;
    const lengthRegex = /^.{6,}$/;

    if (!lengthRegex.test(password)) {
      return toast.error("Password must be at least 6 characters long.");
    }
    if (!uppercaseRegex.test(password)) {
      return toast.error(
        "Password must include at least one uppercase letter."
      );
    }
    if (!lowercaseRegex.test(password)) {
      return toast.error(
        "Password must include at least one lowercase letter."
      );
    }
    createUser(email, password).then(() => {
      toast.success("Sign up successful! Welcome aboard!");
      navigate("/");
    });
  };

  return (
    <div>
      <div className="hero  rounded-lg p-5">
        <div className="hero-content flex-col">
          <div className="text-center ">
            <h1 className="text-5xl font-bold mt-5 mb-3">Sign Up Now</h1>
          </div>
          <div className="card border bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleSubmit(handleSingUp)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Full Name</span>
                </label>
                <input
                  {...register("fullName", { required: true })}
                  type="text"
                  placeholder="Enter your full name"
                  className="input input-bordered"
                />
                {errors.fullName && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>
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
                  <span className="label-text">Profile Photo</span>
                </label>
                <input
                  {...register("image")}
                  type="text"
                  placeholder="Enter your photo URL"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  {...register("password", { required: true })}
                  type="password"
                  placeholder="Enter a strong password"
                  className="input input-bordered"
                />
                {errors.password && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
                <p className="text-xs text-gray-500 mt-1">
                  Password must include at least 6 characters, with one
                  uppercase letter and one lowercase letter.
                </p>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-base-300">Sign Up</button>
              </div>
              <div className="mt-2">
                <p>
                  Already have an account?{" "}
                  <span className="italic text-blue-500 hover:underline">
                    <Link to={"/sign-in"}>Sign In</Link>
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

export default SignUp;
