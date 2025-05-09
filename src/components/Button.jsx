// === [ Button.jsx ] ===
// Reusable Button component that renders either a styled <button> or <a> tag depending on the presence of `href` prop.
import ButtonSvg from "../assets/svg/ButtonSvg";

// Props:
// - className: additional CSS class names for customization
// - href: if provided, renders an <a> tag instead of <button>
// - onClick: click handler (only used if rendering <button>)
// - children: inner content of the button
// - px: optional horizontal padding classes (e.g., "px-4")
// - white: boolean to determine text/icon color scheme
const Button = ({ className, href, onClick, children, px, white }) => {
  // Combine class names based on props for styling
  const classes = `button relative inline-flex items-center justify-center h-11 transition-colors hover:text-color-1 ${
    px || "px-7"
  } ${white ? "text-n-8" : "text-n-1"} ${className || ""}`;
  // Ensures content appears above SVG background
  const spanClasses = "relative z-10";

  // Render a <button> if no `href` is provided
  const renderButton = () => (
    <button className={classes} onClick={onClick}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    </button>
  );

  // Render an <a> link if `href` is provided
  const renderLink = () => (
    <a href={href} className={classes}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    </a>
  );

  // Choose between button or link based on presence of `href`
  return href ? renderLink() : renderButton();
};

// Export component for reuse
export default Button;
