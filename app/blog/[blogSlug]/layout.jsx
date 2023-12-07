export default ({ children, nestedModal }) => {
  if (nestedModal) {
    return (
      <>
        {children}
        {nestedModal}
      </>
    );
  }

  return children;
};
