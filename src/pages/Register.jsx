import React from "react";
import {
  Checkbox,
  Input,
  Typography,
  Select,
  Option,
  Card,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { useState } from "react";

const Register = () => {
  const [inputEmail, setInputEmail] = React.useState("");
  const [profilePicture, setProfilePicture] = React.useState(null);

  // Functions to handle change and setters

  const HandleInputEmail = (e) => {
    // ``;
    setInputEmail(e.target.value);
  };

  const HandleProfilePictureChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = () => {
        setProfilePicture(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const languages = [
    "PHP",
    "JavaScript",
    "TypeScript",
    "Python",
    "Elixir",
    "Perl",
    "COBOL",
    "Rust",
    "Java",
    "C++",
    "C#",
    "C",
    "Dart",
    "Swift",
    "GO",
    "Kotlin",
    "R",
    "MATLAB",
    "Objective-C",
    "Shell Scripting",
    "Lua",
    "Groovy",
    "Scala",
    "Haskell",
    "F#",
    "Julia",
    "Erlang",
    "Clojure",
    "Fortran",
    "Crystal",
    "Delphi",
    "PL/SQL",
    "Scheme",
    "Ada",
    "Assembly",
    "PowerShell",
  ];
  languages.sort();
  return (
    <>
      <div className="Form my-12">
        <Card
          color="transparent"
          className="mt-12 py-10 h-120 bg-blue-900 px-10"
          shadow={false}
        >
          <Typography variant="h2" color="white" className="text-center mb-4">
            Create Account
          </Typography>
          <hr />
          <Typography className="text-center text-white mt-4 mb-2 font-small">
            Welcome! Mother of Software
          </Typography>
          {profilePicture && (
            <img
              src={profilePicture}
              alt=""
              style={{
                display: "flex",
                width: "90px",
                height: "90px",
                backgroundColor: "white",
                borderRadius: "50px",
                justifyContent: "center",
                alignItems: "center",
                margin: "auto",
              }}
            />
          )}

          <form action="" className="mt-8 mb-2 w-80  max-w-screen-lg sm:w-96">
            <div className="mb-4 flex flex-col gap-6">
              <Input color="white" type="text" size="lg" label="First name" />
              <Input color="white" type="text" size="lg" label="Last name" />
              <Input
                color="white"
                type="file"
                size="lg"
                label="Profile picture"
                className="form form-control"
                onChange={HandleProfilePictureChange}
              />
              <Input
                color="white"
                type="email"
                size="lg"
                label="Email"
                // value={email}
                onChange={HandleInputEmail || handleEmailChange}
              />
              {/* {isValid ? (
                <Typography variant="p" className="text-white font-small">
                  Valid Email
                </Typography>
              ) : (
                <Typography variant="p" className="text-white">
                  Invalid Email
                </Typography>
              )} */}
              <Input
                color="white"
                type="tel"
                size="lg"
                label="Phone number"
                // value={phoneNumber}
                // onChange={handlePhoneNumberChange}
              />
            </div>
            <div className="flex w-120 flex-col gap-6 text-white">
              <Select
                color="white"
                size="lg"
                className=""
                label="Language"
                fullWidth
              >
                {languages.map((language, index) => (
                  <Option key={index} value={language}>
                    {language}
                  </Option>
                ))}
              </Select>
            </div>
            <div className="flex mt-2">
              <Checkbox label={""} color="green" />
              <Typography color="white" className="font-medium flex mt-2.5">
                I agree with the
                <Typography
                  as="a"
                  href="#"
                  color="blue"
                  className="font-medium hover:text-blue-50 transition-colors"
                >
                  &nbsp;terms and conditions
                </Typography>
                .
              </Typography>
            </div>
            <Button
              type="submit"
              className="mt-8"
              fullWidth
              variant="transparent"
              color="white"
              disabled={inputEmail === ""}
            >
              Register
            </Button>
          </form>
        </Card>
      </div>
      <Typography color="blue-900" className="text-center mt-4">
        Sign Up with
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
    </>
  );
};

export default Register;
