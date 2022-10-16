import React, { useContext } from "react";
import { AuthContext } from "../Context/UserContext";

const Home = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="w-[80%] mx-auto">
      <h1 className="text-center mt-10">
        This is Home for{" "}
        <span className="text-4xl text-gray-400 font-bold">{user?.email}</span>
      </h1>
    </div>
  );
};

export default Home;
