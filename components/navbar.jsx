import React from "react";
import Image from "next/image";
import Link from "next/link";
const Navbar = () => {
  const navLinks = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Campgrounds",
      path: "/campgrounds",
    },
    {
      name: "Services",
      path: "/services",
    },
    {
      name: "Contacts",
      path: "/contacts",
    },
  ];
  return (
    <>
      <section className="shadow-lg py-6   ">
        <main className="container mx-auto flex items-center">
          <div className="">
            <Image
              src={"/icons/logo.png"}
              width={241}
              height={32}
              unoptimized
            />
          </div>
          <div className="md:flex hidden lg:gap-6 xl:gap-12 ml-auto items-center text-black font-medium">
            {navLinks.map((item, index) => (
              <Link
                href={item.path}
                key={index}
                className="text-base cursor-pointer"
              >
                {item.name}
              </Link>
            ))}
            <button className="bg-transparent text-green font-thi text-lg rounded border-green w-[180px] border-[1px] h-12">
              LOGIN
            </button>
          </div>
        </main>
      </section>
    </>
  );
};


export default Navbar;
