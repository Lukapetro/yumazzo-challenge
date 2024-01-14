import { Controller } from "react-hook-form";
import { twMerge } from "tailwind-merge";

type OptionType = { value: string | number; label: string };

type SelectProps = {
  control: any;
  name: string;
  label?: string;
  options: OptionType[];
  className?: string;
  error?: string;
};

export function Select({
  control,
  name,
  label,
  options,
  className = "",
  error,
}: SelectProps) {
  const handleSelectChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ): string | number => {
    const selectedOption = options.find(
      (option) => option.value.toString() === e.target.value
    );
    return selectedOption ? selectedOption.value : e.target.value;
  };

  return (
    <div className="w-full">
      {label && (
        <label htmlFor={name} className="block text-base text-white pb-2.5">
          {label}
        </label>
      )}

      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value, ...field } }) => (
          <select
            {...field}
            value={value ?? ""}
            placeholder="Select an option"
            onChange={(e) => onChange(handleSelectChange(e))}
            className={twMerge(
              "block bg-[#181F30] w-full rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-slate-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-600 ",
              className,
              error &&
                "ring-red-300 placeholder:text-red-300 focus:ring-red-500"
            )}
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        )}
      />
      {error && <div className="text-red-500 pt-1">{error}</div>}
    </div>
  );
}
