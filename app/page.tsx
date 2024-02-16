import Encryption from "@/components/main/Encryption";
import Herosection from "@/components/main/Herosection";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";


export default function Home() {
  return (
   <main className="h-full  w-full">
      <div className="h-auto ">
        <Herosection />
        <Skills />
        <Encryption />
        <Projects/>
      </div>
    </main>
  );
}
