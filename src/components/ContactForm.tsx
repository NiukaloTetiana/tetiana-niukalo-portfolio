import { MdOutlineArrowOutward } from "react-icons/md";
import {
  useForm,
  SubmitHandler,
  FieldValues,
  UseFormRegister,
} from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { InputField } from "./InputField";
import { contactSchema } from "../schemas";

interface ContactFormValues {
  name: string;
  email: string;
  message: string;
}

export const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, dirtyFields },
  } = useForm<ContactFormValues>({
    mode: "onSubmit",
    resolver: yupResolver(contactSchema),
  });
  const onSubmit: SubmitHandler<ContactFormValues> = (data) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex w-full flex-col gap-8 md:gap-10 lg:gap-11"
    >
      <div className="flex w-full flex-col gap-7 md:gap-10 lg:flex-row">
        <InputField
          tag="input"
          label="Your name"
          name="name"
          dirtyFields={dirtyFields}
          placeholder=""
          errors={errors}
          register={register as unknown as UseFormRegister<FieldValues>}
        />
        <InputField
          tag="input"
          label="Your email"
          name="email"
          dirtyFields={dirtyFields}
          placeholder=""
          errors={errors}
          register={register as unknown as UseFormRegister<FieldValues>}
        />
      </div>

      <InputField
        tag="textarea"
        label="Your message"
        name="message"
        dirtyFields={dirtyFields}
        placeholder=""
        errors={errors}
        register={register as unknown as UseFormRegister<FieldValues>}
        rows={7}
      />

      <button type="submit" className="button group">
        Send message
        <span className="button-span">
          <MdOutlineArrowOutward className="custom-transition absolute left-1/2 top-1/2 z-10 size-5 -translate-x-1/2 -translate-y-1/2 fill-textColor group-hover:-translate-y-10 group-hover:translate-x-8 md:size-[22px]" />
          <MdOutlineArrowOutward className="custom-transition absolute left-0 top-full size-5 -translate-x-1/2 -translate-y-1/2 fill-textColor group-hover:-translate-y-8 group-hover:translate-x-3 md:size-[22px] md:group-hover:-translate-y-9 md:group-hover:translate-x-4" />
        </span>
      </button>
    </form>
  );
};
