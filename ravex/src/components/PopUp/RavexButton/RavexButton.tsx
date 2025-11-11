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
          {icon && icon !== "" && (
            <img src={`/svg/${icon}.svg`} alt="" className="mr-2" />
          )}
          {title}
        </div>
      </div>
    </div>
  );
};

export default RavexButton;
