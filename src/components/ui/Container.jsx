/* eslint-disable react/prop-types */
const Container = ({ children, className }) => {
  return (
    <div className={`${className} max-w-[1250px] w-full mx-auto`}>
      {children}
    </div>
  );
};

export default Container;
