import { clsxm } from "./links/clsxm";

export type AccentType = React.ComponentPropsWithoutRef<"span">;

const Accent = ({ children, className }: AccentType) => {
  return (
    <span
      className={clsxm(
        "transition-colors",
        "bg-gradient-to-tr from-primary-300 via-green-400/70 to-primary-400 bg-clip-text text-transparent dark:from-primary-300 dark:via-primary-100/70 dark:to-sky-300",
        className,
      )}
    >
      {children}
    </span>
  );
};

export default Accent;
