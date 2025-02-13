const PricingCards = () => {
  return (
    <section className="font-sora py-12">
        {/* Header */}
      <div className="text-center mb-12">
        <span className="bg-secondary text-white px-6 py-2 rounded-lg text-[1.9rem] font-medium ">
          Pricing
        </span>
        <h2 className="text-6xl font-bold mt-4 text-gray-900">
          Transparent, fair pricing
        </h2>
      </div>
    
    <div className="flex flex-col md:flex-row gap-8 justify-center items-start max-w-6xl mx-auto px-4">
      {/* Blue Card */}
      <div className="bg-privariant text-white rounded-3xl p-8 w-full max-w-md">
        {/* Header */}
        <h3 className="text-xl font-semibold mb-4">
          Optimise revenue with <br /> collections
        </h3>

        {/* Rate */}
        <div className="mb-6">
          <div className="text-6xl font-bold mb-2">1.4%</div>
          <div className="text-lg">Domestic card transactions</div>
        </div>

        {/* Pricing Items */}
        <div className="space-y-8">
          <div className="flex justify-between items-center">
            <div>
              <span>Payout only</span>
            </div>
            <span className="text-sm">₦100/transaction</span>
          </div>

          <div className="flex justify-between items-center">
            <div>
              <span>Instant collection</span>
              <span className="text-sm opacity-80 block">(Branches)</span>
            </div>
            <span className="text-sm">100/transaction</span>
          </div>

          <div className="flex justify-between items-center">
            <div>
              <span>Virtual account transfer</span>
            </div>
            <span className="text-sm">100/transaction</span>
          </div>

          <div className="flex justify-between items-center">
            <div>
              <span>Split payment or Bulk payment</span>
            </div>
            <span className="text-sm">100/transaction</span>
          </div>

          <div className="flex justify-between items-center">
            <div>
              <span>Payment link</span>
              <span className="text-sm opacity-80 block">(transfer)</span>
            </div>
            <span className="text-sm">100/transaction</span>
          </div>

          <div className="flex justify-between items-center">
            <div>
              <span>Payment link</span>
              <span className="text-sm opacity-80 block">(card)</span>
            </div>
            <span className="text-sm text-right">1.4% capped at ₦2000 <br /> per transaction</span>
          </div>
        </div>
      </div>

      {/* White Card */}
      <div className="bg-transparent text-[#0A0F29] rounded-3xl p-8 w-full max-w-md border-2 border-gray-700">
        {/* Header */}
        <h3 className="text-xl font-semibold mb-4">
          Optimise revenue with <br /> Collection
        </h3>

        {/* Rate */}
        <div className="mb-6">
          <div className="text-6xl font-bold mb-2">1.4%</div>
          <div className="text-lg">Domestic card transactions</div>
        </div>

        {/* Pricing Items */}
        <div className="space-y-8">
          <div className="flex justify-between items-center">
            <div>
              <span>Payout only</span>
            </div>
            <span className="text-sm">₦100/transaction</span>
          </div>

          <div className="flex justify-between items-center">
            <div>
              <span>Instant collection</span>
              <span className="text-sm opacity-80 block">(Branches)</span>
            </div>
            <span className="text-sm">100/transaction</span>
          </div>

          <div className="flex justify-between items-center">
            <div>
              <span>Virtual account transfer</span>
            </div>
            <span className="text-sm">100/transaction</span>
          </div>

          <div className="flex justify-between items-center">
            <div>
              <span>Split payment or Bulk payment</span>
            </div>
            <span className="text-sm">100/transaction</span>
          </div>

          <div className="flex justify-between items-center">
            <div>
              <span>Payment link</span>
              <span className="text-sm opacity-80 block">(transfer)</span>
            </div>
            <span className="text-sm">100/transaction</span>
          </div>

          <div className="flex justify-between items-center">
            <div>
              <span>Payment link</span>
              <span className="text-sm opacity-80 block">(card)</span>
            </div>
            <span className="text-sm text-right">1.4% capped at ₦2000 <br /> per transaction</span>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default PricingCards;