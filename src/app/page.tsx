import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className=" bg-firstcolormedium w-screen h-20 flex justify-center dashed-border">
        <div className="w-3/4 h-full md:flex justify-between px-5 hidden">
          <div className="flex gap-3 justify-center items-center">
            <div className="w-8 h-8">
              <Image
                src="/logo.svg"
                alt="logo"
                width={100}
                height={100}
                className="w-full h-full"
              />
            </div>
            <span className="font-pacifico text-xl text-whitecolor">
              Coffetto
            </span>
          </div>
          <div>
            <div className="w-2/4 h-full flex items-center gap-9 font-pacifico text-whitecolor ">
              <span className="hover:text-secondcolor cursor-pointer hover:scale-110">
                Home
              </span>
              <span className="hover:text-secondcolor cursor-pointer hover:scale-110">
                About
              </span>
              <span className="hover:text-secondcolor cursor-pointer hover:scale-110">
                Steps
              </span>
              <span className="hover:text-secondcolor cursor-pointer hover:scale-110">
                Testimonial
              </span>
            </div>
          </div>
        </div>
        <div className="mobile hidden max-md:flex">
          <div className="flex justify-center items-center">
            <div className="flex gap-3 justify-center items-center">
              <div className="w-8 h-8">
                <Image
                  src="/logo.svg"
                  alt="logo"
                  width={100}
                  height={100}
                  className="w-full h-full"
                />
              </div>
              <span className="font-pacifico text-xl text-whitecolor">
                Coffetto
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full" />
      <main className=" w-screen h-screen"></main>
      <div className="w-full fixed h-20 bottom-0 rounded-t-[50px] bg-gradient-to-t from-firstcolormedium to-firstcolorlight mobile hidden max-md:flex justify-center items-center">
        <div className=" w-10/12 h-10/12 flex justify-center items-center gap-9">
          <div className="flex justify-center items-center flex-col">
            <div className="w-8 h-8">
              <Image src="/home.svg" alt="logo" width={100} height={100} h-full w-full/>
            </div>
            <span className="text-whitecolor font-pacifico">Home</span>
          </div>
          <div className="flex justify-center items-center flex-col">
            <div className="w-8 h-8">
              <Image src="/about.svg" alt="logo" width={100} height={100} h-full w-full/>
            </div>
            <span className="text-whitecolor font-pacifico">About</span>
          </div>
          <div className="flex justify-center items-center flex-col">
            <div className="w-8 h-8">
              <Image src="/steps.svg" alt="logo" width={100} height={100} h-full w-full/>
            </div>
            <span className="text-whitecolor font-pacifico">steps</span>
          </div>
          <div className="flex justify-center items-center flex-col">
            <div className="w-8 h-8">
              <Image src="/testimonial.svg" alt="logo" width={100} height={100} h-full w-full/>
            </div>
            <span className="text-whitecolor font-pacifico">Testimonial</span>
          </div>
        </div>
      </div>
    </>
  );
}
