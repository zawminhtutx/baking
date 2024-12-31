import MobileNav from "@/components/MobileNav";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";

export const dynamic = "force-dynamic";

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = { firstName: "John", lastName: "Doe" };
  return (
    <main className='flex h-screen w-full font-inter'>
      <Sidebar user={loggedIn} />
      <div className='flex flex-col size-full'>
        <div className='root-layout'>
          <Image
            src={"/icons/logo.svg"}
            width={32}
            height={32}
            alt='logo'
          />
          <div className=''>
            <MobileNav user={loggedIn} />
          </div>
        </div>
        {children}
      </div>
    </main>
  );
}
