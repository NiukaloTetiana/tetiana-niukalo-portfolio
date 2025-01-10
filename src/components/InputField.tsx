import { InputHTMLAttributes } from "react";

import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
}

export const InputField = ({
  label,
  name,
  register,
  errors,
  ...props
}: InputProps) => {
  const hasError = !!errors[name];
  const errorMessage = errors[name]?.message as string | undefined;

  return (
    <div className="relative w-full">
      <input
        className={`peer custom-transition h-[42px] w-full rounded-full border bg-transparent px-5 py-3 text-[14px] font-medium leading-[1.44] tracking-[-0.03em] text-textColor placeholder-transparent md:h-[48px] lg:h-[52px] md:py-[14px] md:text-[16px] ${
          hasError
            ? "border-red-700 focus-visible:border-red-700 focus-visible:shadow-sm"
            : "border-secondTextColor focus-visible:border-accentColor focus-visible:shadow-sm"
        }`}
        {...register(name)}
        {...props}
      />
      <label className="label">{label}</label>
      {errorMessage && <p className="error">{errorMessage}</p>}
    </div>
  );
};
