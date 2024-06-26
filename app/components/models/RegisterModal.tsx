'use client'

import axios from 'axios';
import { AiFillGithub } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import { useCallback, useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';

import { useRegisterModal } from '@/app/hooks/useRegisterModal';
import { Modal } from './Modal';
import { Heading } from '../Heading';
import { Input } from '../inputs/Input';
import { toast } from 'react-hot-toast';
import Button from '../Button';
import { FaFacebook } from 'react-icons/fa';

export const RegisterModal = () => {
    const registerModal = useRegisterModal();
    const [isLoading, setLoading] = useState(false);

    const {
        register,
        handleSubmit,
        formState: {
            errors,
        }
    } = useForm<FieldValues> ({
        defaultValues: {
            name: '',
            email: '',
            password: ''
        }
    })

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setLoading(true);
        
        axios.post('/api/register', data)
        .then(() => {
            registerModal.onClose();
        })
        .catch((error) => {
            toast.error('Registeration Failed');
            console.log(error)
        })
        .finally(() => {
            setLoading(false);
        })
    } 

    const bodyContent = (
        <div className='flex flex-col gap-4'>
           <Heading 
            title='Welcome to Airbnb'
            subtitle='Create an account!'
           />
           <Input 
            id="email"
            type='email'
            label='Email'
            disabled={isLoading}
            register={register}
            errors={errors}
            required
           />
            <Input 
            id="name"
            label='Name'
            disabled={isLoading}
            register={register}
            errors={errors}
            required
            />
            <Input 
            id="password"
            type='password'
            label='Password'
            disabled={isLoading}
            register={register}
            errors={errors}
            required
            />
        </div>
    )

    const footerContent = (
        <div className='flex flex-col gap-2 mt-4'>
            <Button  
                outline
                label='Continue with Google'
                disabled={isLoading}
                icon={FcGoogle}
            />
                <Button  
                outline
                label='Continue with Facebook'
                disabled={isLoading}
                icon={FaFacebook}
            />
            <div className='justify-center flex flex-row items-center gap-2 mt-4 text-neutral-500 font-light'>
                <div>
                    Already have an account?
                </div>
                <div onClick={registerModal.onClose} className='text-neutral-800 cursor-pointer hover:underline'>
                    Log In
                </div>
            </div>
        </div>
    )

  return (
    <Modal 
        disabled={isLoading}
        isOpen={registerModal.isOpen}
        title='Register'
        actionLabel='Continue'
        onClose={registerModal.onClose}
        onSubmit={handleSubmit(onSubmit)}
        body={bodyContent}
        footer={footerContent}
    />
  )
}
