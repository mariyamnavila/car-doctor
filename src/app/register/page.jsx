import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

export default function Register() {
    return (
        <div className="min-h-screen bg-white">
            {/* Navbar */}
            {/* <nav className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <Image
                        src="/assets/logo.svg"
                        alt="Car Doctor"
                        width={40}
                        height={40}
                    />
                    <span className="font-bold text-lg">Car Doctor</span>
                </div>

                <ul className="hidden md:flex gap-8 text-sm font-medium text-gray-700">
                    <li>Order</li>
                    <li>Order Review</li>
                    <li>Manage Inventory</li>
                    <li>
                        <Link href="/login" className="hover:text-primary">
                            Login
                        </Link>
                    </li>
                </ul>
            </nav> */}

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
                            Sign Up
                        </h2>

                        {/* Form */}
                        <form className="space-y-5">
                            <div>
                                <label className="block mb-1 text-sm font-medium">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    placeholder="Your name"
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
                                Sign Up
                            </button>
                        </form>

                        {/* Social Login */}
                        <div className="mt-8 text-center">
                            <p className="text-sm text-gray-500 mb-4">
                                Or Sign Up with
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
                            Already have an account?{" "}
                            <Link
                                href="/login"
                                className="text-primary font-semibold"
                            >
                                Login
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}