import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";

type Inputs = {
    name: string;
    email: string;
    subject: string;
    message: string;
};
type Props = {};

function ContactMe({}: Props) {
    const { register, handleSubmit, reset } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = async (formData) => {
        window.location.href = `mailto:gabinwilliams@gmail.com?subject=${await formData.subject}&body=Hi, my name is ${await formData.name}, ${await formData.message}`;
    };

    const handleResetForm = () => {
        setTimeout(() => {
            reset();
        }, 500);
    };

    return (
        <div className="relative mx-auto flex h-screen max-w-7xl flex-col items-center justify-evenly overflow-hidden px-10 text-center md:flex-row md:text-left">
            <h3 className="absolute top-24 text-2xl uppercase tracking-[20px] text-gray-500">
                Contact
            </h3>
            <div className="mt-[50px] flex w-screen flex-col space-y-3 p-2 md:mt-[100px] md:mb-[30px]">
                <h4 className="py-5 text-center text-2xl font-semibold md:text-4xl">
                    If my skills look like what you need,{" "}
                    <span className="underline decoration-[#F7AB0A]/50">
                        Let&apos;s talk!
                    </span>
                </h4>
                <div className="space-y-3">
                    <div className="flex items-center justify-center space-x-3">
                        <MapPinIcon className="h-7 w-7 animate-pulse text-[#F7AB0A]" />
                        <p className="text-2xl">Minneapolis</p>
                    </div>
                    <div className="flex items-center justify-center space-x-5">
                        <EnvelopeIcon className="h-7 w-7 animate-pulse text-[#F7AB0A]" />
                        <p className="text-2xl">gabinwilliams@gmail.com</p>
                    </div>
                </div>
                <form
                    className="flex flex-col space-y-2 p-5 md:mx-auto"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <div className="flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
                        <input
                            {...register("name", { required: true })}
                            className="contactInput"
                            placeholder="Name"
                            type="text"
                        />
                        <input
                            {...register("email", { required: true })}
                            className="contactInput"
                            placeholder="Email"
                            type="email"
                        />
                    </div>
                    <input
                        {...register("subject", { required: true })}
                        className="contactInput"
                        placeholder="subject"
                        type="text"
                    />
                    <textarea
                        className="contactInput"
                        placeholder="message"
                        {...register("message", { required: true })}
                    />
                    <button
                        className="rounded-md bg-[#F7AB0A] py-4 px-5 text-lg font-bold text-black md:py-5 md:px-10"
                        type="submit"
                        onClick={() => handleResetForm()}
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}

export default ContactMe;
