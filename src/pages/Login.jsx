import React from "react";
import { motion } from "framer-motion";
import {
  Checkbox,
  Input,
  Typography,
  Card,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { useState } from "react";
import { Link } from "react-router-dom";
const Login = () => {
  // State Definition
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");

  // Function to handle disable
  const HandleInputEmail = (e) => {
    setInputEmail(e.target.value);
  };
  const HandleInputPassword = (e) => {
    setInputPassword(e.target.value);
  };
  return (
    <>
      <motion.div
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        transition={{ type: "just", stiffness: 100, damping: "50" }}
      >
        <div className="Form my-12">
          <Card color="" className="mt-12 py-4 px-4 bg-blue-900" shadow={false}>
            <Typography variant="h2" color="white" className="text-center">
              Sign in
            </Typography>
            <hr />
            <form action="" className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
              <div className="mb-4 flex flex-col gap-6">
                <Input
                  type="email"
                  color="white"
                  size="lg"
                  label="Email"
                  onChange={HandleInputEmail}
                />
                <Input
                  type="password"
                  color="white"
                  size="lg"
                  label="Password"
                  onChange={HandleInputPassword}
                />
              </div>
              <div className="flex ">
                <Checkbox id="rememberCheckbox" color="blue-gray" />
                <label htmlFor="rememberCheckbox" className="text-white mt-2.5">
                  Remember me
                </label>
              </div>
              <Button
                type="submit"
                className="mt-8"
                fullWidth
                variant="gradient"
                color="white"
                disabled={inputEmail === "" || inputPassword === ""}
              >
                Sign in
              </Button>
              <Typography color="white" className="text-center mt-4">
                Don't have an account?
                <Link to={"/register"} className="text-blue">
                  Sign Up
                </Link>
              </Typography>
            </form>
          </Card>
        </div>
        <Typography color="blue-900" className="text-center mt-4">
          Sign in with
        </Typography>
        <div className="flex items-center justify-center mt-6 mb-6">
          <div className="flex gap-4">
            <IconButton className="bg-[#ea4335] rounded hover:shadow-[#ea4335]/20 focus:shadow-[#ea4335]/20 active:shadow-[#ea4335]/10">
              <i className="fab fa-google text-lg" title="Google" />
            </IconButton>
            <IconButton className="bg-[#1877F2] rounded hover:shadow-[#1877F2]/20 focus:shadow-[#ea4c89]/20 active:shadow-[#ea4c89]/10">
              <i className="fab fa-facebook text-lg" title="Facebook" />
            </IconButton>
            <IconButton className="bg-[#1DA1F2] rounded hover:shadow-[#1DA1F2]/20 focus:shadow-[#1DA1F2]/20 active:shadow-[#1DA1F2]/10">
              <i className="fab fa-twitter text-lg" title="Twitter" />
            </IconButton>
            <IconButton className="bg-[#333333] rounded hover:shadow-[#333333]/20 focus:shadow-[#333333]/20 active:shadow-[#333333]/10">
              <i className="fab fa-github text-lg" title="GitHub" />
            </IconButton>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Login;
