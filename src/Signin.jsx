import React from "react";
import { auth, provider, signInWithPopup } from "./firebaseConfig";
import Heading from "./components/Heading";
import SubHeading from "./components/SubHeading";
import Button from "./components/Button";

const Signin = ({ setUser }) => {
  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      setUser({
        name: result.user.displayName,
        email: result.user.email,
      });
    } catch (error) {
      console.error("Error logging in: ", error);
    }
  };

  // return <button onClick={handleLogin}>Login with Google</button>;
  return (
    <div className="flex justify-center h-screen bg-slate-300">
      <div className="flex flex-col justify-center">
        <div className="bg-white rounded-lg p-2 px-4 text-center w-80 h-max">
          <Heading title={"Sign in"}></Heading>
          <SubHeading
            title={"Enter your credentials to access your account"}
          ></SubHeading>
          <Button onClick={handleLogin} text={"Login with Google"}></Button>
        </div>
      </div>
    </div>
  );
};

export default Signin;
