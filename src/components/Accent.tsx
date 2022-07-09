import { AccentType } from "../types";
import { clsxm } from "./links/clsxm";

const Accent = ({ children, className }: AccentType) => {
  return (
    <span
      className={clsxm(
        "transition-colors",
        "bg-gradient-to-r from-primary-100 to-primary-200 bg-clip-text text-transparent dark:from-primary-100 dark:via-primary-500 dark:to-sky-500",
        className,
      )}
    >
      {children}
    </span>
  );
};

export default Accent;
