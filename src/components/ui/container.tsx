import { twMerge } from "tailwind-merge";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function Container({ children, className = "" }: ContainerProps) {
  return (
    <div className={twMerge("bg-slate-800 rounded-md p-2.5", className)}>
      {children}
    </div>
  );
}
