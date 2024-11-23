import { Link, NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { FaRegUserCircle } from "react-icons/fa";

const Header = () => {
  const { user } = useAuth();
  const navLinks = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>

      {!user && (
        <>
          <li>
            <NavLink to={"/updateProfile"}>Update Profile</NavLink>
          </li>
          <li>
            <NavLink to={"/userProfile"}>User Profile</NavLink>
          </li>
        </>
      )}
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navLinks}
            </ul>
          </div>
          <Link to={"/"} className="btn btn-ghost text-3xl">
            UrbanNest
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end space-x-3">
          <p className="text-4xl">
            {!user && (
              <>{user?.profile ? <img src={""} /> : <FaRegUserCircle />}</>
            )}
          </p>
          {user ? (
            <Link className="btn">Logout</Link>
          ) : (
            <Link className="btn">Login</Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;