import { useForm } from "react-hook-form";
import useAuth from "../hooks/useAuth";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";

const UpdateProfile = () => {
  const { user, updateUserProfile } = useAuth();
  const {
    register,
    handleSubmit,
  } = useForm();

  const handleUpdateProfile = (data) => {
    const { email, fullName, image } = data;
    updateUserProfile(fullName, image).then(() => {
      toast.success("Your profile has been updated successfully!");
    });
  };
  return (
    <div className="container mx-auto mb-10">
      <Helmet>
        <title>UrbanNest | Update Profile</title>
      </Helmet>
      <h1 className="text-2xl font-semibold mb-4 mt-4">Update Your Profile</h1>
      <p className="text-gray-600 mb-6">
        Use the form below to update your profile information, including your
        name and profile photo.
      </p>
      <div className="card border bg-base-100 md:w-4/5 shrink-0 shadow-2xl">
        <form
          onSubmit={handleSubmit(handleUpdateProfile)}
          className="card-body"
        >
          <div className="form-control">
            <label className="label">
              <span className="label-text text-base">Full Name</span>
            </label>
            <input
              {...register("fullName")}
              type="text"
              placeholder="Enter your full name"
              className="input input-bordered"
              defaultValue={user?.displayName}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-base">Email Address</span>
            </label>
            <input
              {...register("email")}
              type="email"
              placeholder="Enter your email address"
              className="input input-bordered"
              value={user?.email}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-base">Profile Photo</span>
            </label>
            <input
              {...register("image")}
              type="text"
              placeholder="Enter your photo URL"
              className="input input-bordered"
              defaultValue={user?.photoURL}
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-base-300">Update Profile</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
