// Footer.tsx

import React from "react";

const Footer = () => {
  return (
    <footer className="bg-zinc-800 text-zinc-200 py-4 mt-10 bottom-0">
      <div className="flex justify-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Gni-Design. All Rights Reserved.
        </p>
      </div>
      <div className="flex justify-center mt-2">
        <a href="/privacy" className="text-zinc-400 hover:text-zinc-200 mx-2">
          Privacy Policy
        </a>
        <a href="/terms" className="text-zinc-400 hover:text-zinc-200 mx-2">
          Terms of Service
        </a>
      </div>
    </footer>
  );
};

export default Footer;
