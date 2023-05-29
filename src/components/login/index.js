import React from "react";
import "./style.scss";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLogin = (data) => {
    console.log(data);
    if (data.username === "abhijit" && data.password === "abhijit123") {
      navigate("/home");
    }
  };

  return (
    <>
      <div className="login-card">
        <form onSubmit={handleSubmit(handleLogin)}>
          <div>
            <label>Username </label>
            <input {...register("username", { required: true })} />
            {errors.username && <p className="errors">Username is required!</p>}
          </div>

          <div>
            <label>Password </label>
            <input
              type="password"
              {...register("password", { required: true })}
            />
            {errors.password && <p className="errors">Password is required!</p>}
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default Login;
