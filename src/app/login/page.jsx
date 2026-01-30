import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

export default function Login() {
    return (
        <div className="min-h-screen bg-white">

            {/* Main Section */}
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 items-center gap-16 mt-10">

                {/* Left SVG Image */}
                <div className="hidden lg:flex justify-center">
                    <Image
                        src="/assets/images/login/login.svg"
                        alt="Register illustration"
                        width={480}
                        height={480}
                        priority
                    />
                </div>

                {/* Right Register Card */}
                <div className="flex justify-center">
                    <div className="w-full max-w-md border rounded-xl p-8 shadow-sm">
                        <h2 className="text-3xl font-bold text-center mb-8">
                            Login
                        </h2>

                        {/* Form */}
                        <form className="space-y-5">
                            <div>
                                <label className="block mb-1 text-sm font-medium">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    placeholder="Your email"
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
                                    className="input input-bordered w-full"
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

                        {/* Footer */}
                        <p className="text-sm text-center mt-6 text-gray-600">
                            Don&apos;t have an account?{" "}
                            <Link
                                href="/register"
                                className="text-primary font-semibold"
                            >
                                Register
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}