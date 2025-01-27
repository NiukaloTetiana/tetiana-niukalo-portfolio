import { useState } from "react";
import { motion } from "framer-motion";
import { MdOutlineArrowOutward } from "react-icons/md";
import {
  useForm,
  SubmitHandler,
  FieldValues,
  UseFormRegister,
} from "react-hook-form";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { useMediaQuery } from "react-responsive";
import { yupResolver } from "@hookform/resolvers/yup";

import { InputField, Loader } from "../components";
import { contactSchema } from "../schemas";

interface ContactFormValues {
  name: string;
  email: string;
  message: string;
}

export const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const isMobile = useMediaQuery({ query: "(max-width:767.98px)" });

  const serviceId = import.meta.env.VITE_SERVICE_ID;
  const templateId = import.meta.env.VITE_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_PUBLIC_KEY;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, dirtyFields },
  } = useForm<ContactFormValues>({
    mode: "onSubmit",
    resolver: yupResolver(contactSchema),
  });

  const onSubmit: SubmitHandler<ContactFormValues> = async ({
    name,
    email,
    message,
  }) => {
    setIsLoading(true);

    emailjs
      .send(
        serviceId,
        templateId,
        {
          from_name: `${name}`,
          message,
          from_email: email,
        },
        publicKey
      )
      .then(() => {
        toast.success(
          "Your message has been sent successfully! 🎉 I'll get back to you soon 😊"
        );
        reset();
      })
      .catch(() => {
        toast.error("Oops, server needs a coffee break ☕ Try again later 😞");
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <>
      <motion.form
        onSubmit={handleSubmit(onSubmit)}
        className="flex w-full flex-col gap-8 md:gap-10 lg:gap-11"
        initial={{ ...(isMobile ? { y: 100 } : { x: 100 }), opacity: 0 }}
        whileInView={{
          ...(isMobile ? { y: 0 } : { x: 0 }),
          opacity: 1,
        }}
        transition={{ duration: 0.8, delay: 0.5 }}
        viewport={{ once: true, amount: 0.5 }}
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
      </motion.form>
      {isLoading && <Loader />}
    </>
  );
};
