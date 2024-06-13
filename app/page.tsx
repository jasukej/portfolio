import Intro from "@/components/intro";
import SectionDivider from "@/components/section-divider";
import Projects from "@/components/projects";
import Experience from "@/components/experience";
import About from "@/components/about";
import Footer from "@/components/footer";

export default function Home() {
  return (
      <main className="
        px-24 
        pt-20
        pb-10
        lg:py-0
        max-w-screen">
        <Intro />
        <SectionDivider />
        <About />
        <SectionDivider />
        <Projects />
        {/* <SectionDivider />
        <Skills /> */}
        <SectionDivider />
        <Experience />
        <SectionDivider />
        <Footer />
      </main>
  );
}
