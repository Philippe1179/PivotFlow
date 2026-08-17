import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AppsGrid from "@/components/AppsGrid";
import BuildWithUs from "@/components/BuildWithUs";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <AppsGrid />
        <BuildWithUs />
      </main>
      <Footer />
    </>
  );
}
