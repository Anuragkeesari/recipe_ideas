import React from "react";

export default function Footer() {
  return (
    <footer className="bg-dark text-white text-center py-3 mt-4">
      <p>
        © {new Date().getFullYear()} QuickMeal for Taylor | Built with  using React
      </p>
    </footer>
  );
}
