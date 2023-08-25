import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import HowToRegOutlinedIcon from "@mui/icons-material/HowToRegOutlined";
const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  console.log(isSignUp);
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
  };
  const handleReset = () => {
    setIsSignUp(!isSignUp);
    setInputs({
      name: "",
      email: "",
      password: "",
    });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Box
          display={"flex"}
          flexDirection={"column"}
          maxWidth={400}
          alignItems={"center"}
          justifyContent={"center"}
          margin={"auto"}
          marginTop={5}
          padding={5}
          borderRadius={5}
          boxShadow={"5px 5px 10px #ccc"}
          sx={{
            ":hover": {
              boxShadow: "10px 10px 10px #ccc",
            },
          }}
        >
          <Typography variant={"h2"} padding={3} textAlign={"center"}>
            {isSignUp ? "Sign Up" : "Login"}
          </Typography>
          {isSignUp && (
            <TextField
              name={"name"}
              value={inputs.name}
              onChange={handleChange}
              type={"text"}
              placeholder={"username"}
              variant={"outlined"}
              margin={"normal"}
            />
          )}{" "}
          <TextField
            name={"email"}
            value={inputs.email}
            onChange={handleChange}
            type={"email"}
            placeholder={"email"}
            variant={"outlined"}
            margin={"normal"}
          />
          <TextField
            name={"password"}
            value={inputs.password}
            onChange={handleChange}
            type={"password"}
            placeholder={"password"}
            variant={"outlined"}
            margin={"normal"}
          />
          <Button
            endIcon={
              isSignUp ? <HowToRegOutlinedIcon /> : <LoginOutlinedIcon />
            }
            type={"submit"}
            variant={"contained"}
            color={"success"}
            sx={{
              marginTop: 3,
              borderRadius: 3,
            }}
          >
            {isSignUp ? "Sign Up" : "Login"}
          </Button>
          <Typography
            variant={"span"}
            padding={3}
            textAlign={"center"}
            sx={{
              marginTop: 3,
              borderRadius: 3,
            }}
          >
            {isSignUp ? "Already " : "Don’t "}
            have an Account?
          </Typography>
          <Button
            endIcon={
              isSignUp ? <LoginOutlinedIcon /> : <HowToRegOutlinedIcon />
            }
            onClick={handleReset}
          >
            {isSignUp ? "Login " : "Sign up "}
            here
          </Button>
        </Box>
      </form>
    </div>
  );
};

export default Login;
