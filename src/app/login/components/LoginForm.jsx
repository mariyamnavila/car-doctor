'use client';
import React from 'react';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
const LoginForm = () => {
    const router = useRouter();
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
            }
        );
        // try {
        //     const res = await signIn("credentials", {
        //         email,
        //         password,
        //         callbackUrl: "/",
        //         redirect: false,
        //     });
        //     if (res.ok) {
        //         toast.success("Login successful!");
        //         router.push("/");
        //         form.reset()
        //     } else {
        //         toast.error("Login failed! to");
        //     }
        // } catch (error) {
        //     console.log(error);
        //     toast.error("Login failed!");
        // }

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

                <div className="flex justify-center gap-4">
                    <button className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-gray-100">
                        <FaFacebookF className="text-blue-600" />
                    </button>

                    <button className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-gray-100">
                        <FaLinkedinIn className="text-blue-500" />
                    </button>

                    <button className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-gray-100">
                        <FcGoogle className="text-xl" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;