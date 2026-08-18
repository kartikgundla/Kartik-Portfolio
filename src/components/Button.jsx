export default function Button({ children, variant = "primary", as = "a", ...props }) {
  const Tag = as;
  const base = "inline-flex items-center gap-2 font-medium px-5 py-3 rounded-lg transition-all duration-300";
  const styles = {
    primary: "bg-gradient-to-r from-accent to-accent2 text-white hover:shadow-glow",
    secondary: "border border-cardBorder text-white hover:border-accent/50",
  };

  return (
    <Tag className={`${base} ${styles[variant]}`} {...props}>
      {children}
    </Tag>
  );
}
