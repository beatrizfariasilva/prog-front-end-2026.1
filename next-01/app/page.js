import Profile from "@/components/profile";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1 style={{
        textAlign: "center",
        marginBottom: "90px",
        marginTop: "-170px",
        fontStyle: "italic"
      }}> Site criado para a disciplina Programação Front-End </h1> 
      <div>
        <Profile />
      </div>
    </div>
  );
}
