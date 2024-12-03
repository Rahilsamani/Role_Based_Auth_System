import { Link } from "react-router-dom";

const Button = ({ children, linkto }) => {
  return (
    <Link to={linkto}>
      <div
        className={`text-[13px] sm:text-[16px] rounded-md font-bold hover:scale-110 transition-all duration-200 bg-blue text-white w-24 h-10 flex justify-center items-center`}
      >
        {children}
      </div>
    </Link>
  );
};

export default Button;
