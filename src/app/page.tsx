import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 pb-5 gap-5 sm:p-20">
      <div className="text-center ">
        <h1 className="text-4xl font-bold">Welcome to Contact Manager App</h1>
        <p className="mt-2 text-lg text-gray-600">
          Manage your contacts efficiently.
        </p>
        <Image
        src="/Contact.jpg"
        alt="Contact Manager"
        width={300}
        height={300}
        className=" mx-auto rounded-lg shadow-lg mt-2 self-center"
        />
      </div>
      <div className="text-center ">
        <p className="mt-2 text-lg text-gray-600">
          Start managing your contact today
        </p>
      </div>
    </div>
  );
}
