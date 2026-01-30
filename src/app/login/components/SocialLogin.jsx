'use client';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { toast } from 'sonner';

const SocialLogin = () => {
    const router = useRouter()
    const handleSocialLogin = async (provider) => {
        const result = await signIn(provider, { redirect: false, callbackUrl: "/" });

    }
    return (
        <div className="flex justify-center gap-4">
            <button onClick={() => handleSocialLogin("google")} className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-gray-100">
                <FcGoogle className="text-xl" />
            </button>

            <button onClick={() => handleSocialLogin("github")} className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-gray-100">
                <FaGithub className=" text-lg" />
            </button>
        </div>
    );
};

export default SocialLogin;