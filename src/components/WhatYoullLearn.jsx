
export default function WhatYoullLearn() {
  const cards = [
    {
      title: "How to use Stablecoins for borderless transactions",
      description: "Stablecoins are cryptocurrencies pegged to stable assets like fiat currencies.",
      buttons: ["cNGN", "USDT", "USDC"]
    },
    {
      title: "How digital money works",
      description: "Stablecoins are cryptocurrencies pegged to stable assets like fiat currencies.",
      buttons: ["cNGN", "USDT", "USDC"]
    },
    {
      title: "The power of stable coins",
      description: "Stablecoins are cryptocurrencies pegged to stable assets like fiat currencies.",
      buttons: ["cNGN", "USDT", "USDC"]
    }
  ];

  return (
    <div className="max-w-screen-xl mx-auto px-4 mb-16 font-sora">
      <h2 className="text-5xl font-bold text-gray-800 mb-8">What You&apos;ll Learn:</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <div key={index} className="bg-[#F5F5F5] rounded-2xl shadow-lg overflow-hidden border-4 border-white">
            {/* Image placeholder - same image for all cards */}
            <div className="hero-auto bg-gray-200">
              <img 
                src="/images/smiley-woman-holding-phone-side-view 1.png" 
                alt="Person using phone and laptop" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Card content */}
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2 leading-6">{card.title}</h3>
              <p className="text-sm text-gray-700 mb-4">{card.description}</p>
              
              {/* Buttons */}
              <div className="flex flex-wrap gap-2">
                {card.buttons.map((btn, btnIndex) => (
                  <button 
                    key={btnIndex} 
                    className="px-4 py-2 border border-gray-300 rounded-full text-gray-700"
                  >
                    {btn}
                  </button>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}