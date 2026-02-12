import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <div>{"Olá, amigo.\nGostaria de compatilhar que no início deste terceiro período, estou sendo introduzida a disciplina de Front-End. Para isso, aprenderemos como utilizar uma nova biblioteca dentro do JS, o React, e utilizaremos Next.js como framework. Está sendo bem legal aprender algo completamente novo."}</div>
    </div>
  );
}
