import React from "react";

const Success = () => {
  return (
    <>
      <section className="container py-8 mx-auto flex items-center justify-center flex-col gap-3">
        <main className="text-4xl font-medium">Success!</main>
        <main className="text-lg text-dark font-regular">
          We are now scanning for campsites for you. While you wait, please
          complete your account creation below
        </main>
        <main className="flex flex-col mt-12 gap-10 w-full max-w-[600px]">
        <main className="text-xl font-medium w-full">Finish your account creation</main>
        <main className="flex flex-col gap-6">

            <div className="flex flex-col gap-2 w-full">
                <div className="text-base">Enter your email address</div>
                <div className="w-full flex gap-3 p-3 rounded-lg border-2 border-gray-200">
                <img src="/icons/mail.svg" />
                <input type="text" placeholder="Email address"  className="w-full outline-none text-base"/>
                </div>
            </div>
            <div className="flex flex-col gap-2 w-full">
                <div className="text-base">Create password</div>
                <div className="w-full flex gap-3 p-3 rounded-lg border-2 border-gray-200">
                <img src="/icons/lock.svg" />
                <input type="password" placeholder="New Password"  className="w-full outline-none text-base"/>
                </div>
            </div>
            <div className="flex flex-col gap-2 w-full">
                <div className="text-base">Confirm password</div>
                <div className="w-full flex gap-3 p-3 rounded-lg border-2 border-gray-200">
                <img src="/icons/lock.svg" />
                <input type="password" placeholder="Re-enter the Password"  className="w-full outline-none text-base"/>
                </div>
            </div>
        </main>
        <main className="grid grid-cols-2 gap-2">
            <button className="bg-brown font-medium text-white p-3 rounded">CREATE ACCOUNT</button>
            <button className="border-2 border-brown  font-medium text-brown p-3 rounded">REMIND ME LATER</button>
        </main>
        </main>
      </section>
    </>
  );
};

export default Success;
