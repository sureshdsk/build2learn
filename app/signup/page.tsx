import Image from "next/image";
import Form from "@/components/form";
import Link from "next/link";

export default function Login() {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gray-50">
      <div className="z-10 w-full max-w-md overflow-hidden rounded-2xl border border-gray-100 shadow-xl">
        <div className="flex flex-col items-center justify-center space-y-3 border-b border-gray-200 bg-white px-4 py-6 pt-8 text-center sm:px-16">
          {/* <h1 className="text-xl font-semibold">Sign Up</h1> */}
          <Link href="/">
            <Image
              src="/images/build-2-learn-logo1.png"
              // priority
              alt="Logo"
              className=""
              width={200}
              height={20}
            />
          </Link>

          {/* <p className="text-sm text-gray-500">
            Create an account with your email and password
          </p> */}
        </div>
        <Form type="register" />
      </div>
    </div>
  );
}
