import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <div>
        <p style={{fontSize: "80px"}}> Olá, amigo.</p>
        <p> Gostaria de compatilhar que venho sido introduzida à disciplina de Front-End. Vem sido bastante interessante aprender a como manipular uma nova biblioteca dentro do JS - o React - e usar Next.js como framework. Está sendo bem legal aprender algo completamente novo e diferente dos períodos anteriores.</p>
      </div>
    </div>
  );
}
