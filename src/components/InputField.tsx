import { InputHTMLAttributes, TextareaHTMLAttributes } from "react";
import {
  FieldErrors,
  FieldValues,
  FormState,
  UseFormRegister,
} from "react-hook-form";

type InputProps<T extends "input" | "textarea"> = {
  tag: T;
  label: string;
  name: string;
  register: UseFormRegister<FieldValues>;
  dirtyFields: FormState<FieldValues>["dirtyFields"];
  errors: FieldErrors<FieldValues>;
} & (T extends "input"
  ? InputHTMLAttributes<HTMLInputElement>
  : TextareaHTMLAttributes<HTMLTextAreaElement>);

export const InputField = <T extends "input" | "textarea">({
  tag: Tag,
  label,
  name,
  register,
  dirtyFields,
  errors,
  ...props
}: InputProps<T>) => {
  const hasError = Boolean(errors[name] && dirtyFields[name]);
  const errorMessage = errors[name]?.message as string | undefined;

  return (
    <div className="relative w-full">
      <Tag
        id={name}
        className={`peer custom-transition w-full border-[1.3px] bg-transparent px-5 py-3 text-[14px] font-medium leading-[1.44] tracking-[-0.03em] text-textColor placeholder-transparent hover:shadow-sm focus-visible:shadow-sm md:py-[14px] md:text-[16px] ${Tag === "input" ? "h-[42px] rounded-full md:h-[48px] lg:h-[52px]" : "scrollbar h-[168px] resize-none rounded-[30px] align-top md:h-[192px]"} ${
          hasError
            ? "border-red-700 hover:border-red-600 focus-visible:border-red-600"
            : "border-borderColor hover:border-hoverColor focus-visible:border-hoverColor"
        }`}
        {...register(name)}
        // eslint-disable-next-line
        {...(props as any)}
      />
      <label htmlFor={name} className="label">
        {label}
      </label>
      {errorMessage && <p className="error">{errorMessage}</p>}
    </div>
  );
};
