const colorMap = {
  green: "bg-green-500",
  lime: "bg-lime-500",
  black: "bg-black text-white",
  red: "bg-red-500",
};

const Button = async ({ children, onClick, color = "green" }) => {
  return (
    <>
      <button className={colorMap[color]} onClick={(e) => onClick(e)}>
        {children}
      </button>
    </>
  );
};

export default Button;
