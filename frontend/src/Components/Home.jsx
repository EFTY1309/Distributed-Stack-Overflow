import React, { useState } from "react";
import SignUp from "./Authentication/Signup";
import SignIn from "./Authentication/Signin";

const Home = () => {
  const [signup, setSignup] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-purple-50">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center text-gray-800">
          {signup ? "Sign Up" : "Sign In"}
        </h1>
        <div className="flex justify-center mb-4">
          <label className="flex items-center space-x-2 text-gray-600">
            <input
              type="checkbox"
              name="check-signup"
              className="form-checkbox h-5 w-5 text-indigo-600"
              onChange={() => setSignup(!signup)}
            />
            <span className="text-sm text-gray-700">
              {signup ? "Already have an account?" : "Don't have an account?"}
            </span>
          </label>
        </div>
        {signup ? <SignUp /> : <SignIn />}
      </div>
    </div>
  );
};

export default Home;
