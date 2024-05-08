"use client"
import React from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { Toaster, toast } from 'sonner';
import { motion } from 'framer-motion';

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3,
            delayChildren: 0.2,
        },
    },
}

const item = {
    hidden: { scale: 0 },
    show: { scale: 1 },
}

export default function Form() {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const sendEmail = (params) => {

        const toastId = toast.loading('En cours d\'envoi, patientez un instant..');
    
        emailjs
            .send(
                process.env.NEXT_PUBLIC_SERVICE_ID,
                process.env.NEXT_PUBLIC_TEMPLATE_ID,
                params,
                {
                    publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
                    limitRate: {
                        throttle: 5000,
                    },
                }
            )
            .then(
                () => {
                    toast.success('J\'ai bien reçu votre message, je vous réponds très prochainement', {
                        id: toastId
                    });
                reset();
                },
                (error) => {
                    toast.error('Oh non, votre message n\'a pas pu partir, veuillez réessayer ultérieurement', {
                        id: toastId
                    });
                },
            );
    };

    const onSubmit = data => {

        const templateParams = {
            to_name: "Guillermo",
            from_name: data.name,
            reply_to: data.email,
            message: data.message,
        };

        sendEmail(templateParams);

    };
    
    return (
        <>
            <Toaster richColors={true} />
            <motion.form
                variants={container}
                initial="hidden"
                animate="show"
                onSubmit={handleSubmit(onSubmit)}
                className='max-w-md w-full flex flex-col items-center justify-center space-y-4 scale-95'>
                <motion.input
                    variants={item}
                    type="text"
                    name="name"
                    id="name"
                    placeholder="nom..."
                    {...register("name", {required: '*Le nom est requis', minLength: {
                        value: 3,
                        message: 'Le nom doit faire au moins 3 caractères',
                    }, maxLength: {
                        value: 30,
                        message: 'Le nom doit faire moins de 30 caractères',
                    }})}
                    className='w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-custom/50 custom-bg'
                />
                {
                    errors.name && <span className='inline-block self-start text-custom'>{errors.name.message}</span>
                }
            
                <motion.input
                    variants={item}
                    type="email"
                    name="email"
                    placeholder="e-mail..."
                    {...register("email", {required: '*L\'e-mail est requis'})}
                    className='w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-custom/50 custom-bg'
                />
                {
                    errors.email && <span className='inline-block self-start text-custom'>{errors.email.message}</span>
                }
            
                <motion.textarea
                    placeholder="message..."
                    name="message"
                    {...register("message", {required: '*Le message est requis', maxlength: {
                        value: 500,
                        message: 'Le message doit faire moins de 500 caractères',
                    }, minLength: {
                        value: 10,
                        message: 'Le message doit faire plus de 10 caractères',
                    }})}
                    className='w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-custom/50 custom-bg'
                />
                {
                    errors.message && <span className='inline-block self-start text-custom'>{errors.message.message}</span>
                }
            
                <motion.input
                    variants={item}
                    className='!mt-20 px-10 py-4 rounder-md shadow-lg bg-background border border-custom border-solid rounded-md hover:shadow-glass-sm backdrop-blur-sm text-foreground focus:outline-none focus:ring-2 focus:ring-custom/50 cursor-pointer capitalize'
                    value="Invoquez votre message!"
                    type="submit"
                />
            </motion.form>
        </>
    );
}