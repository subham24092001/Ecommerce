import React from "react";
import { useSelector } from "react-redux";

const Contact = () => {
  //toggle theme
  const isDark = useSelector(state=>state.theme.isDark)

  return (
    <div className={`${isDark && "dark"} transition-colors duration-1000`}>
      <div name="contact" className="w-full bg-white dark:bg-slate-900 dark:text-white px-4 lg:h-full text-black md:h-screen lg:py-4">
        <div className="max-w-screen-lg mx-auto flex flex-col justify-center w-full h-full pt-14">
          <div className="pb-8 pt-14 sm:pt-14">
            <p className="text-4xl font-bold inline border-b-4 p-2 border-gray-500">Contact</p>
          </div>

          <div className="flex justify-center items-center">
            <form action="https://getform.io/f/b2426220-0f85-418d-94dd-377fc5f7ae9f" method="POST" className="flex flex-col w-full md:w-1/2">
              <input type="text" name="name" placeholder="Enter your name" className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none" />
              <input type="text" name="email" placeholder="Enter your email" className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none" />
              <textarea name="message" rows="10" placeholder="Enter your message" className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"></textarea>

              <button
                className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center 
            rounded-md hover:scale-110 duration-300 lg:mb-20">
                Let's Talk
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
