const Button = ({ children, onClick }) => (
    <button onClick={onClick}>{children}</button>
  );
  
  export default Button;
  // src/components/Button/index.js
export { default as Button } from './button';