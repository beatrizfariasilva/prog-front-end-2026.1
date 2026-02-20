import Image from "next/image";
import Profile from "@/components/profile";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <div>
        Olá! Essa é a minha primeira conexão entre pastas em React
        <Profile />
        <Profile />
      </div>
    </div>
  );
}
