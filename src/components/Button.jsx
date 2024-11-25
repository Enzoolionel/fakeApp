/* eslint-disable react/prop-types */
const Button = ({ children, className }) => {
  return (
    <button
      className={`${className} w-44 h-max flex py-3 px-5 gap-1 rounded-full font-medium text-xl items-center`}
    >
      {children}
    </button>
  );
};

export default Button;
