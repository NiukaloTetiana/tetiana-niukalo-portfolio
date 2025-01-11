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
    formState: { errors },
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
      className="flex w-full flex-col gap-7 md:gap-9 lg:gap-10"
    >
      <div className="flex w-full flex-col gap-7 md:gap-9 lg:flex-row">
        <InputField
          tag="input"
          label="Your name"
          name="name"
          placeholder=""
          errors={errors}
          register={register as unknown as UseFormRegister<FieldValues>}
        />
        <InputField
          tag="input"
          label="Your email"
          name="email"
          placeholder=""
          errors={errors}
          register={register as unknown as UseFormRegister<FieldValues>}
        />
      </div>

      <InputField
        tag="textarea"
        label="Your message"
        name="message"
        placeholder=""
        errors={errors}
        register={register as unknown as UseFormRegister<FieldValues>}
        rows={7}
      />

      <button className="address-label group custom-transition relative flex h-[42px] w-[200px] items-center justify-between overflow-hidden rounded-full border-[1.5px] border-accentColor bg-transparent py-[14px] pl-6 text-start !text-textColor before:absolute before:inset-0 before:origin-right before:scale-x-0 before:bg-hoverColor before:transition-transform before:duration-500 hover:border-hoverColor hover:before:z-[-1] hover:before:scale-x-100 focus-visible:border-hoverColor md:h-[52px]">
        Send message
        <span className="custom-transition relative h-[42px] w-[42px] overflow-hidden rounded-full bg-accentColor shadow-sm group-hover:bg-hoverColor group-hover:shadow-md group-focus-visible:bg-hoverColor group-focus-visible:shadow-md md:h-[52px] md:w-[52px]">
          <MdOutlineArrowOutward className="custom-transition absolute left-1/2 top-1/2 z-10 size-5 -translate-x-1/2 -translate-y-1/2 fill-textColor group-hover:-translate-y-10 group-hover:translate-x-8 md:size-[22px]" />
          <MdOutlineArrowOutward className="custom-transition absolute left-0 top-full size-5 -translate-x-1/2 -translate-y-1/2 fill-textColor group-hover:-translate-y-8 group-hover:translate-x-3 md:size-[22px] md:group-hover:-translate-y-9 md:group-hover:translate-x-4" />
        </span>
      </button>
    </form>
  );
};
