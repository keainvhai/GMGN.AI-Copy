import React, { useState } from "react";
import { X } from "lucide-react";
import { useAuth } from "../context/AuthContext";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  mode: "login" | "signup";
  onModeChange: (mode: "login" | "signup") => void;
}

const AuthModal = ({ isOpen, onClose, mode, onModeChange }: AuthModalProps) => {
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [inviteCode, setInviteCode] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      login(email, password);
      onClose();
    } catch (err) {
      alert("Invalid email or password");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-gray-800 rounded-lg p-6 w-full max-w-md relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          <X className="w-6 h-6" />
        </button>

        <h2 className="text-2xl font-bold text-white mb-6">
          {mode === "login" ? "Log In" : "Sign Up"}
        </h2>

        <div className="mb-4">
          <p className="text-gray-400 text-sm mb-4">
            {mode === "login"
              ? "Don't have an account yet? "
              : "Already have an account? "}
            <button
              onClick={() =>
                onModeChange(mode === "login" ? "signup" : "login")
              }
              className="text-blue-400 hover:text-blue-300"
            >
              {mode === "login" ? "Sign Up" : "Log In"}
            </button>
          </p>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-white text-sm mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Email"
              className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-green-400"
            />
          </div>

          {mode === "login" && (
            <div>
              <label className="block text-white text-sm mb-2">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter Password"
                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-green-400"
              />
              <div className="text-right mt-2">
                <button
                  type="button"
                  className="text-green-400 text-sm hover:text-green-300"
                >
                  Forgot Password?
                </button>
              </div>
            </div>
          )}

          {mode === "signup" && (
            <div>
              <input
                type="text"
                value={inviteCode}
                onChange={(e) => setInviteCode(e.target.value)}
                placeholder="Invite Code (Optional)"
                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-green-400"
              />
              <p className="text-xs text-gray-400 mt-2">
                The invite code cannot be changed after binding. Please ensure
                the correct invite code is entered.
              </p>
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 text-black font-medium py-3 rounded-lg transition-colors"
          >
            {mode === "login" ? "Log In" : "Sign Up"}
          </button>
        </form>

        <div className="my-6 text-center text-gray-400 text-sm">
          {mode === "signup" ? "OR Sign Up" : "OR"}
        </div>

        <div className="flex justify-center space-x-8">
          <button className="flex flex-col items-center space-y-2 text-gray-400 hover:text-white transition-colors">
            <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
              <span className="text-white">📧</span>
            </div>
            <span className="text-sm">Telegram</span>
          </button>

          <button className="flex flex-col items-center space-y-2 text-gray-400 hover:text-white transition-colors">
            <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center">
              <span className="text-white">👻</span>
            </div>
            <span className="text-sm">Phantom</span>
          </button>

          {mode === "login" && (
            <button className="flex flex-col items-center space-y-2 text-gray-400 hover:text-white transition-colors">
              <div className="w-12 h-12 bg-gray-600 rounded-lg flex items-center justify-center">
                <span className="text-white">📱</span>
              </div>
              <span className="text-sm">APP Scan</span>
            </button>
          )}
        </div>

        {mode === "login" && (
          <div className="mt-6 text-center">
            <button className="text-gray-400 hover:text-white text-sm transition-colors">
              Connect with extension wallet →
            </button>
          </div>
        )}

        <div className="mt-6 text-center text-xs text-gray-500">
          <span>Terms of Service</span>
          <span className="mx-2">|</span>
          <span>Privacy Policy</span>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
