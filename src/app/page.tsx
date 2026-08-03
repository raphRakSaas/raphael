import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { MorphProvider } from "@/components/morph-context";
import { Quote } from "@/components/Quote";
import { Services } from "@/components/Services";
import { About } from "@/components/About";
import { Parcours } from "@/components/Parcours";
import { Process } from "@/components/Process";
import { StackGrid } from "@/components/StackGrid";
import { Hobbies } from "@/components/Hobbies";
import { Faq } from "@/components/Faq";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <MorphProvider>
          <Hero />
          <Projects />
        </MorphProvider>
        <Quote />
        <Services />
        <About />
        <Parcours />
        <Process />
        <StackGrid />
        <Hobbies />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
