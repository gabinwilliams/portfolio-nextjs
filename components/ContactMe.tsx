import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";

type Inputs = {
    name: string;
    email: string;
    subject: string;
    message: string;
};
type Props = {};

function ContactMe({}: Props) {
    const { register, handleSubmit, reset } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (formData) => {
        window.location.href = `mailto:gabinwilliams@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}, ${formData.message}`;
    };

    return (
        <div className="relative mx-auto flex h-screen max-w-7xl flex-col items-center justify-evenly px-10 text-center md:flex-row md:text-left">
            <h3 className="absolute top-24 text-2xl uppercase tracking-[20px] text-gray-500">
                Contact
            </h3>
            <div className="flex flex-col space-y-10">
                <h4 className="text-center text-4xl font-semibold">
                    If my skills look like what you need,{" "}
                    <span className="underline decoration-[#F7AB0A]/50">
                        Let&apos;s talk!
                    </span>
                </h4>
                <div className="space-y-10">
                    <div className="flex items-center justify-center space-x-5">
                        <PhoneIcon className="h-7 w-7 animate-pulse text-[#F7AB0A]" />
                        <p className="text-2xl">+1-222-222-1511</p>
                    </div>
                    <div className="flex items-center justify-center space-x-5">
                        <MapPinIcon className="h-7 w-7 animate-pulse text-[#F7AB0A]" />
                        <p className="text-2xl">Minneapolis</p>
                    </div>
                    <div className="flex items-center justify-center space-x-5">
                        <EnvelopeIcon className="h-7 w-7 animate-pulse text-[#F7AB0A]" />
                        <p className="text-2xl">gabinwilliams@gmail.com</p>
                    </div>
                </div>
                <form
                    className="mx-auto flex w-fit flex-col space-y-2"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <div className="flex space-x-2">
                        <input
                            {...(register("name"), { required: true })}
                            className="contactInput"
                            placeholder="Name"
                            type="text"
                        />
                        <input
                            {...(register("email"), { required: true })}
                            className="contactInput"
                            placeholder="Email"
                            type="email"
                        />
                    </div>
                    <input
                        {...register("subject")}
                        className="contactInput"
                        placeholder="subject"
                        type="text"
                    />
                    <textarea
                        className="contactInput"
                        placeholder="message"
                        {...(register("message"), { required: true })}
                    />
                    <button
                        className="rounded-md bg-[#F7AB0A] py-5 px-10 text-lg font-bold text-black"
                        type="submit"
                        onClick={() => reset()}
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}

export default ContactMe;
