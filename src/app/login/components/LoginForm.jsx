'use client';
import React from 'react';
import { signIn } from 'next-auth/react';
import { toast } from 'sonner';
import SocialLogin from './SocialLogin';
const LoginForm = () => {
    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        toast.promise(
            signIn("credentials", {
                email,
                password,
                callbackUrl: "/",
                redirect: false,
            }),
            {
                loading: 'Logging in...',
                success: 'Login successful!',
                error: 'Login failed!',
            },
        );

    }

    return (
        <div>
            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                    <label className="block mb-1 text-sm font-medium">
                        Email
                    </label>
                    <input
                        type="email"
                        placeholder="Your email"
                        className="input input-bordered w-full"
                        name='email'
                    />
                </div>

                <div>
                    <label className="block mb-1 text-sm font-medium">
                        Confirm Password
                    </label>
                    <input
                        type="password"
                        placeholder="Your password"
                        className="input input-bordered w-full"
                        name='password'
                    />
                </div>

                <button className="btn btn-primary w-full mt-2">
                    Login
                </button>
            </form>
            {/* Social Login */}
            <div className="mt-8 text-center">
                <p className="text-sm text-gray-500 mb-4">
                    Or Sign In with
                </p>

                <SocialLogin></SocialLogin>
            </div>
        </div >
    );
};

export default LoginForm;