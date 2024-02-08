import Herosection from "@/components/main/Herosection";
import Skills from "@/components/main/Skills";


export default function Home() {
  return (
   <main className="h-full w-full">
      <div className="h-auto ">
        <Herosection />
        <Skills />

      </div>
    </main>
  );
}
