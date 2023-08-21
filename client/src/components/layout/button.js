function Button({ children, className, src }) {
  return (
    <a href={src} className={className}>
      {children}
    </a>
  );
}
export default Button;
