import DownloadAppSection from "../components/DownloadAppSection";
import FAQHero from "../components/FAQHero";
import Footer from "../components/Footer";
import NavigationBar2 from "../components/NavigationBar2";
import PopularQuestions from "../components/PopularQuestions";

const FAQ = () => {
  return (
    <>
      <header className="h-[34rem] bg-[#030637]">
      <NavigationBar2 />
      <FAQHero />
    </header>
      <PopularQuestions />
      <DownloadAppSection />
      <Footer />
    </>
  );
};

export default FAQ;
