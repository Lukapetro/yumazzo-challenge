import { Controller } from "react-hook-form";
import { twMerge } from "tailwind-merge";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  control: any;
  name: string;
  label?: string;
  className?: string;
  error?: string;
  trailingAddon?: React.ReactNode;
};

export function Input({
  control,
  name,
  label,
  className = "",
  error,
  trailingAddon,
  ...props
}: InputProps) {
  return (
    <div className="w-full">
      {label && (
        <label htmlFor={name} className="block text-base text-white pb-2.5">
          {label}
        </label>
      )}
      <div className="relative">
        <Controller
          name={name}
          control={control}
          render={({ field }) => (
            <input
              {...field}
              {...props}
              onChange={(e) => {
                const value =
                  props.type === "number"
                    ? parseInt(e.target.value, 10) || ""
                    : e.target.value;
                field.onChange(value);
              }}
              className={twMerge(
                "block bg-[#181F30] w-full rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-slate-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-600 pr-10 no-spinners",
                className,
                error &&
                  "text-red-900 ring-red-300 placeholder:text-red-300 focus:ring-red-500"
              )}
            />
          )}
        />
        {trailingAddon && (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            {trailingAddon}
          </div>
        )}
      </div>
      {error && <div className="text-red-500 pt-1">{error}</div>}
    </div>
  );
}
