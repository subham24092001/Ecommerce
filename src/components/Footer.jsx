import React from "react";
import { useSelector } from "react-redux";

const Footer = () => {
  //toggle theme
  const isDark = useSelector(state=>state.theme.isDark)

  return (
    <div className={`${isDark && "dark"} transition-colors duration-1000`}>
      <footer className="bg-primary py-12 dark:bg-slate-800">
        <div className="container mx-auto">
          <p className="text-white text-center">Copyright &copy; Ecommerce Shop 2024. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
