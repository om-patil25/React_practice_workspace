const Btns = ({ btnName, btnStyle, onClickFunc = () => {}, type }) => {
  return (
    <button
      type={type || "button"}
      onClick={(e) => {
        //so it won't trigger onView
        if (type != "submit") e.stopPropagation();
        onClickFunc() || "";
      }}
      className={`${btnStyle} rounded-lg`}
    >
      {btnName}
    </button>
  );
};

export default Btns;
