import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface ListWrapperProps {
  children: ReactNode;
  className?: string;
}

const ListWrapper = ({ children, className }: ListWrapperProps) => {
  return (
    <li
      className={cn(
        "rounded-md px-5 py-2 text-center text-sm font-semibold tracking-[0.3rem]",
        className,
      )}
    >
      {children}
    </li>
  );
};

export default ListWrapper;
