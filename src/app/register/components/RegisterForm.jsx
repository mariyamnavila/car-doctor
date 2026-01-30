'use client';
import { registerUser } from '@/app/actions/auth/registerUser';
import SocialLogin from '@/app/login/components/SocialLogin';
import { useRouter } from 'next/navigation';
import React from 'react';
import { FaFacebookF, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { toast } from 'sonner';


const RegisterForm = () => {
    const router = useRouter()

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value

        const result = await registerUser({ name, email, password });
        console.log(result, "from register form", name, email, password);
        if (result.insertedId) {
            toast.success("Registration successful!");
            router.push("/");
            form.reset()
        } else if (!result || !result.insertedId) {
            toast.error("Registration failed! User may already exist.");
        } else {
            toast.error("Registration failed! User may already exist.");
        }

    }

    return (
        <div>
            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                    <label className="block mb-1 text-sm font-medium">
                        Name
                    </label>
                    <input
                        type="text"
                        placeholder="Your name"
                        name='name'
                        className="input input-bordered w-full"
                    />
                </div>

                <div>
                    <label className="block mb-1 text-sm font-medium">
                        Email
                    </label>
                    <input
                        type="email"
                        placeholder="Your email"
                        name='email'
                        className="input input-bordered w-full"
                    />
                </div>

                <div>
                    <label className="block mb-1 text-sm font-medium">
                        Confirm Password
                    </label>
                    <input
                        type="password"
                        placeholder="Your password"
                        name='password'
                        className="input input-bordered w-full"
                    />
                </div>

                <button className="btn btn-primary w-full mt-2">
                    Sign Up
                </button>
            </form>
            {/* Social Login */}
            <div className="mt-8 text-center">
                <p className="text-sm text-gray-500 mb-4">
                    Or Sign Up with
                </p>

                <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default RegisterForm;