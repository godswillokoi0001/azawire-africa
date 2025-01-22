import DownloadAppSection from "../components/DownloadAppSection";
import FAQHero from "../components/FAQHero";
import Footer from "../components/Footer";
import NavigationBar from "../components/NavigationBar";
import PopularQuestions from "../components/PopularQuestions";

const FAQ = () => {
  return (
    <>
      <header className="bg-[#030637] text-white h-[38rem]">
        <NavigationBar />
        <FAQHero />
      </header>
      <PopularQuestions />
      <DownloadAppSection />
      <Footer />
    </>
  );
};

export default FAQ;
