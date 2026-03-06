const Container = ({ children, className }) => {
  return <div className={`max-w-280 mx-auto ${className}`}>{children}</div>;
};

export default Container;
