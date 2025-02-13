import PricingCards from '../components/PricingCards';
import NavigationBar from '../components/NavigationBar';
import Footer from '../components/Footer';

const Pricing = () => {  
  return (
    <div className='max-w-screen-xl mx-auto'>
      <NavigationBar />
      <main className="py-12 pt-40 pb-80">
        <PricingCards />
      </main>
      <Footer />
    </div>
    
    
  );
};

export default Pricing; 