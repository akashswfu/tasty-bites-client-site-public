import { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useAuth from "../../ReactHooks/useAuth";
import axios from "axios";
import { Helmet } from "react-helmet-async";

const Register = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { createUser, setLoading, updateUserProfile, setUser, user } =
    useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const { name, email, photo, password } = data;
    console.log(data);

    if (password.length < 6) {
      toast.warning("Password must be 6 or more characters long ");

      return;
    } else if (!/^(?=.*[a-z])(?=.*[A-Z]).+$/.test(password)) {
      toast.warning("Password must have a lowercase and Uppercase character ");

      return;
    }

    setSuccess("");
    setError("");
    try {
      const result = await createUser(email, password);
      toast.success("Registration Successfully");

      await updateUserProfile(name, photo);
      setUser({
        ...result?.user,
        displayName: name,
        photoURL: photo,
        email: email,
      });

      const { data } = await axios.post(
        `http://localhost:5000/jwt`,
        {
          email: result?.user?.email,
        },
        { withCredentials: true }
      );
      toast.success("Login Successfully");
      setLoading(false);
      setTimeout(() => {
        navigate(location?.state ? location.state : "/");
      }, 1000);
    } catch (err) {
      toast.warning("User Already Exists! ");
    }
  };

  return (
    <div data-aos="fade-left" data-aos-duration="1000">
      <Helmet>
        <title>TastyBites | Register</title>
        {/* <link rel="canonical" href="" /> */}
      </Helmet>
      <div className="hero-content w-full  flex-col">
        <div className="text-center"></div>
        <div className="card shrink-0 w-full max-w-md shadow-2xl bg-base-100">
          <h1 className="text-3xl text-transparent bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text font-bold text-center mt-8">
            Create an account
          </h1>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="card-body mb-0 pb-0"
          >
            <div>
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <div className="flex rounded-md border-2 border-gray-300  items-center">
                <input
                  className=" py-3 rounded-md px-3 w-full outline-2   "
                  type="text"
                  name="name"
                  placeholder="Enter Your Name"
                  {...register("name", { required: true })}
                />
              </div>
              {errors.name && (
                <span className="text-red-500 text-sm mt-2">
                  This field is required
                </span>
              )}
            </div>
            <div>
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <div className="flex rounded-md border-2 border-gray-300  items-center">
                <input
                  className=" py-3 rounded-md px-3 w-full outline-2  "
                  type="email"
                  name="email"
                  placeholder="Enter Your Email"
                  {...register("email", { required: true })}
                />
              </div>
              {errors.email && (
                <span className="text-red-500 text-sm mt-2">
                  This field is required
                </span>
              )}
            </div>
            <div>
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <div className="flex rounded-md border-2 border-gray-300  items-center">
                <input
                  className=" py-3 rounded-md px-3 w-full outline-2   "
                  type="text"
                  name="photo"
                  placeholder="Enter Your Photo URL"
                  {...register("photo", { required: true })}
                />
              </div>
              {errors.photo && (
                <span className="text-red-500 text-sm mt-2">
                  This field is required
                </span>
              )}
            </div>

            <div>
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <div className="flex rounded-md border-2 border-gray-300  items-center">
                <input
                  className=" py-3 rounded-md px-3 w-full outline-none   "
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="password"
                  {...register("password", { required: true })}
                />
                <span
                  onClick={() => setShowPassword(!showPassword)}
                  className="pe-3 cursor-pointer "
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>

              {errors.password && (
                <span className="text-red-500 text-sm mt-2">
                  This field is required
                </span>
              )}
            </div>

            {error && <p className="text-sm text-red-500">{error}</p>}
            <div className="form-control mt-6">
              <button className="btn  uppercase  text-white text-transparent bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-700 font-semibold ">
                Register
              </button>
            </div>
          </form>
          <p className="text-sm text-center my-3">
            Already Have an Account?
            <Link to="/login">
              <button className="btn btn-link">Login Here</button>
            </Link>
          </p>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Register;
