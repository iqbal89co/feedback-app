import propTypes from "prop-types";
function Button({ children, type, version, isDisabled }) {
  return (
    <button type={type} className={`btn btn-${version}`} disabled={isDisabled}>
      {children}
    </button>
  );
}

Button.defaultProps = {
  type: "button",
  version: "primary",
  isDisabled: false,
};

Button.propTypes = {
  type: propTypes.string,
  version: propTypes.string,
  isDisabled: propTypes.bool,
  children: propTypes.node.isRequired,
};

export default Button;
