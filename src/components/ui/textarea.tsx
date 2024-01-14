import { useState } from "react";
import { Controller } from "react-hook-form";
import { twMerge } from "tailwind-merge";

type InputProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  control: any;
  name: string;
  label?: string;
  className?: string;
  error?: string;
};

export function Textarea({
  control,
  name,
  label,
  className = "",
  error,
  ...props
}: InputProps) {
  const [charCount, setCharCount] = useState(0);

  return (
    <div>
      {label && (
        <label htmlFor={name} className="block text-base text-white pb-2.5">
          {label}
        </label>
      )}
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <textarea
            {...field}
            {...props}
            className={twMerge(
              "block bg-[#181F30] w-full rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-slate-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-600 ",
              className,
              error &&
                "text-red-900 ring-red-300 placeholder:text-red-300 focus:ring-red-500"
            )}
            onChange={(e) => {
              field.onChange(e);
              setCharCount(e.target.value.length);
            }}
          />
        )}
      />
      <div
        className={twMerge(
          "text-left text-sm text-slate-500 pt-2.5",
          error && "text-red-900"
        )}
      >
        {charCount}/200 Characters
      </div>
    </div>
  );
}
