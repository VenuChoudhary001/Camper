import React from "react";

const Success = () => {
  return (
    <>
      <section className="container py-8 mx-auto flex items-center justify-center flex-col gap-3">
        <main className="text-2xl md:text-4xl font-medium">Success!</main>
        <main className="text-sm text-center md:text-left md:text-lg text-dark font-regular">
          We are now scanning for campsites for you. While you wait, please
          complete your account creation below
        </main>
        <main className="flex flex-col mt-6 md:mt-12 gap-6 w-full max-w-[600px]">
        <main className="text-lg text-center  md:text-left md:text-xl font-medium w-full">Finish your account creation</main>
        <main className="flex flex-col gap-3 max-w-[300px] md:max-w-[600px] mx-auto md:gap-6">

            <div className="flex flex-col gap-2 w-full">
                <div className="text-sm md:text-base ">Enter your email address</div>
                <div className="w-full flex gap-3 p-3 rounded-lg border-[1px] md:border-2 border-gray-200">
                <img src="/icons/mail.svg" />
                <input type="text" placeholder="Email address"  className="w-full outline-none text-base"/>
                </div>
            </div>
            <div className="flex flex-col gap-2 w-full">
                <div className="text-sm md:text-base">Create password</div>
                <div className="w-full flex gap-3 p-3 rounded-lg border-[1px] md:border-2 border-gray-200">
                <img src="/icons/lock.svg" />
                <input type="password" placeholder="New Password"  className="w-full outline-none text-base"/>
                </div>
            </div>
            <div className="flex flex-col gap-2 w-full">
                <div className="text-sm md:text-base">Confirm password</div>
                <div className="w-full flex gap-3 p-3 rounded-lg border-[1px] md:border-2 border-gray-200">
                <img src="/icons/lock.svg" />
                <input type="password" placeholder="Re-enter the Password"  className="w-full outline-none text-base"/>
                </div>
            </div>
        <main className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <button className="bg-brown font-medium text-white p-3 rounded">CREATE ACCOUNT</button>
            <button className="border-2 border-brown  font-medium text-brown p-3 rounded">REMIND ME LATER</button>
        </main>
        </main>
        </main>
      </section>
    </>
  );
};

export default Success;
