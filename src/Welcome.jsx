import React, { useState } from "react";
import { auth, signOut } from "./firebaseConfig";
import TopRightBar from "./components/TopRightBar";
import Button from "./components/Button";
import SubHeading from "./components/SubHeading";
import MemoryGame from "./components/Memory-game";

const Welcome = ({ user, setUser }) => {
  const [start, SetStart] = useState(false);
  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.error("Error logging out: ", error);
    }
  };

  const callmemorygame = () => {
    SetStart(true);
  };

  return (
    <div>
      {start == false ? (
        <div>
          {" "}
          <TopRightBar
            name={user.name}
            email={user.email}
            text={Welcome}
            logoutfn={handleLogout}
          ></TopRightBar>
          <div className="flex flex-col justify-center align-middle mx-96">
            <SubHeading title={`Wanna play a quick game ${user.name}`} />
            <Button onClick={callmemorygame} text={"Start Game"}></Button>
          </div>
        </div>
      ) : (
        <MemoryGame />
      )}
    </div>
  );
};

export default Welcome;
