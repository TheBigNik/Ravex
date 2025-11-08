import type { RavexButtonProps } from "../../types/components";

const RavexButton = (props: RavexButtonProps) => {
  const { variant, title, fullWidth, icon } = props;

  return (
    <div
      className={`${fullWidth ? "w-full" : ""} w-40 h-10 relative ${
        variant === "primary"
          ? "bg-[color:var(--color-royal)] "
          : variant === "secondary"
          ? "border border-[color:var(--color-primary)]"
          : ""
      } rounded-[var(--radius-sm)] flex justify-center`}
    >
      <div className="flex justify-center items-center">
        <div
          className={`flex ${
            variant === "primary"
              ? "text-[color:var(--color-text-inverse)]"
              : "text-[color:var(--color-primary)]"
          } font-[var(--font-ui)]`}
        >
          {icon && icon !== "" && <img src={`/svg/${icon}.svg`} alt="" className="mr-2"/>}
          {title}
        </div>
      </div>
      <button
      {...props}
      style={baseStyles}
      onMouseEnter={(e) => {
        const target = e.currentTarget;
        if (variant === 'primary') {
          target.style.backgroundColor = tokens.accent;
          target.style.boxShadow = '0 0 16px rgba(75,179,253,0.5)';
        } else if (variant === 'secondary') {
          target.style.backgroundColor = 'rgba(75,179,253,0.1)';
        } else if (variant === 'icon') {
          target.style.transform = 'scale(1.05)';
        } else if (variant === 'destructive') {
          target.style.filter = 'brightness(0.9)';
        }
        props.onMouseEnter?.(e);
      }}
      onMouseLeave={(e) => {
        const target = e.currentTarget;
        if (variant === 'primary') {
          target.style.backgroundColor = tokens.primary;
          target.style.boxShadow = 'none';
        } else if (variant === 'secondary') {
          target.style.backgroundColor = 'transparent';
        } else if (variant === 'icon') {
          target.style.transform = 'scale(1)';
        } else if (variant === 'destructive') {
          target.style.filter = 'brightness(1)';
        }
        props.onMouseLeave?.(e);
      }}
    >
      {icon && <span style={{ display: 'flex', alignItems: 'center' }}>{icon}</span>}
      {children}
    </button>
    </div>
  );
};

export default RavexButton;
