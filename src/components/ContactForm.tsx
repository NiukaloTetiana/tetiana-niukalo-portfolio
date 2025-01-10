import { MdOutlineArrowOutward } from "react-icons/md";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
// import { toast } from "react-toastify";

import { InputField, InputProps } from "./InputField";
import { contactSchema } from "../schemas";

export const ContactForm = () => {
  const {
    register,
    // reset,
    handleSubmit,
    formState: { errors },
  } = useForm<InputProps>({
    mode: "onChange",
    resolver: yupResolver(contactSchema),
  });

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full flex-col gap-5 md:gap-9"
    >
      <div className="flex w-full flex-col gap-3 md:flex-row">
        <InputField
          label="Your name"
          name="name"
          type="text"
          placeholder=""
          errors={errors}
          register={register}
        />

        <InputField
          label="Your email"
          name="email"
          type="text"
          placeholder=""
          errors={errors}
          register={register}
        />
      </div>

      <div className="relative w-full">
        <textarea
          label="Your message"
          name="message"
          id="message"
          rows="7"
          placeholder=""
          {...register("message")}
          className={`peer h-[150px] w-full resize-none rounded-[30px] border bg-transparent px-5 py-3 text-[14px] font-medium leading-[1.44] tracking-[-0.03em] text-textColor placeholder-transparent outline-none hover:border-accentColor focus-visible:border-accentColor md:h-[190px] md:text-[16px] ${
            errors.message
              ? "border-red-700 focus-visible:border-red-700 focus-visible:shadow-sm"
              : "border-secondTextColor focus-visible:shadow-sm"
          }`}
        />
        <label htmlFor="message" className="label">
          Your message
        </label>
        {errors.message && <p className="error">{errors.message.message}</p>}
      </div>

      <button className="address-label group custom-transition relative z-[9] flex h-[42px] w-[200px] items-center justify-between overflow-hidden rounded-full border border-accentColor bg-transparent py-[14px] pl-6 text-start !text-textColor before:absolute before:inset-0 before:origin-right before:scale-x-0 before:bg-accentColor before:transition-transform before:duration-500 hover:before:z-[8] hover:before:scale-x-100 md:h-[52px]">
        Send message
        <span className="custom-transition z-[9] flex h-[42px] w-[42px] items-center justify-center rounded-full bg-accentColor md:h-[52px] md:w-[52px]">
          <MdOutlineArrowOutward className="custom-transition size-5 text-white transition-transform group-hover:-translate-y-10 md:size-[22px]" />
        </span>
      </button>
    </form>
  );
};
