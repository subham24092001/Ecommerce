import { useState } from "react";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import { FAQ } from "../Data/BackupData";
import { useSelector } from "react-redux";

const Section = ({ id, title, description, isVisible, setIsVisible }) => {
  //toggle theme
  const isDark = useSelector(state=>state.theme.isDark)

  return (
    <div className={`${isDark && "dark"} transition-colors duration-1000`}>
      <div className="flex bg-white flex-col dark:bg-slate-950 dark:text-white rounded-sm p-6 border-b-2 cursor-pointer" onClick={() => (isVisible ? setIsVisible(false) : setIsVisible(true))}>
        <div className="flex justify-between items-center">
          <h3 className=" text-base font-medium">{title}</h3>
          {isVisible ? <SlArrowUp /> : <SlArrowDown className="cursor-pointer" />}
        </div>
        {isVisible && <p className="text-sm pt-2 text-slate-500">{description}</p>}
      </div>
    </div>
  );
};

const Help = () => {
  //toggle theme
  const isDark = useSelector(state=>state.theme.isDark)

  /* In the starting description of all questions are hidden */
  const [visibleSection, setVisibleSection] = useState("");

  return (
    <div className={`${isDark && "dark"} transition-colors duration-1000 `}>
      <div className={`bg-slate-50 w-[80vw] flex-grow font-poppins mx-auto mt-0 dark:bg-slate-900`}>
        <h1 className="py-6 pt-36 font-bold text-center text-2xl text-black dark:text-white">FAQs</h1>
        {FAQ.map((question) => {
          return (
            <Section
              key={question.id}
              id={question.id}
              title={question.title}
              description={question.description}
              isVisible={visibleSection === question.id}
              setIsVisible={(param) => {
                if (param) {
                  setVisibleSection(question.id);
                } else {
                  setVisibleSection(" ");
                }
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Help;
