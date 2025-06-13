import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Search, Menu, X } from "lucide-react";
import AuthModal from "./AuthModal"; // ✅ 确保路径正确

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<"login" | "signup">("login");
  const location = useLocation();

  const navItems = [
    { name: "Trenches", path: "/" },
    { name: "New pair", path: "/new-pair" },
    { name: "Trending", path: "/trending" },
    { name: "CopyTrade", path: "/copytrade" },
    { name: "Monitor", path: "/monitor" },
    { name: "Follow", path: "/follow" },
    { name: "Holding", path: "/holding" },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="bg-gray-800 border-b border-gray-700 px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-green-500 rounded flex items-center justify-center text-black font-bold">
              GM
            </div>
            <span className="text-xl font-bold">GMGN</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm hover:text-green-400 transition-colors ${
                  location.pathname === item.path
                    ? "text-green-400"
                    : "text-gray-300"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Search and Actions */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center bg-gray-700 rounded-lg px-3 py-2 min-w-64">
              <Search className="w-4 h-4 text-gray-400 mr-2" />
              <input
                type="text"
                placeholder="Search token/contract/wallet"
                className="bg-transparent text-sm text-white placeholder-gray-400 outline-none flex-1"
              />
            </div>

            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-400">Ctrl alt K</span>
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold">S</span>
                </div>
                <span className="text-sm">SOL</span>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <button
                className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-lg text-sm transition-colors"
                onClick={() => {
                  setAuthMode("signup");
                  setAuthModalOpen(true);
                }}
              >
                Sign Up
              </button>
              <button
                className="bg-white hover:bg-gray-100 text-black px-4 py-2 rounded-lg text-sm transition-colors"
                onClick={() => {
                  setAuthMode("login");
                  setAuthModalOpen(true);
                }}
              >
                Log In
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t border-gray-700 pt-4">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-sm hover:text-green-400 transition-colors py-2 ${
                    location.pathname === item.path
                      ? "text-green-400"
                      : "text-gray-300"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* Auth Modal */}
      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        mode={authMode}
        onModeChange={(newMode) => setAuthMode(newMode)}
      />
    </div>
  );
};

export default Layout;
