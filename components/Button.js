const Button = ({ label, additionalFormatting }) => {
  return (
    <div
      className={`${additionalFormatting} inline-flex cursor-pointer justify-center w-48 text-xs md:w-64 rounded-md shadow-md border-gray-300  px-6 py-3 md:text-sm font-roboto font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500`}
    >
      {label}
    </div>
  );
};

export default Button;
