const offers = [
  ['Dungar Deals', 'Flat 20% off with DUNGAR20', 'from-[#FF3F6C] to-[#FF905A]'],
  ['New User Deal', 'Extra 15% off with PEHNAWA15', 'from-[#282C3F] to-[#535766]'],
  ['Free Shipping', 'Orders above Rs. 999', 'from-[#03A685] to-[#14CDA8]'],
];

export default function OfferBanners({ navigate }) {
  return (
    <section className="container-page pb-8">
      <div className="hide-scrollbar flex gap-4 overflow-x-auto">
        {offers.map(([title, subtitle, gradient]) => (
          <button key={title} onClick={() => navigate('/products')} className={`min-w-[280px] flex-1 rounded bg-gradient-to-br ${gradient} p-6 text-left text-white shadow-lg`}>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-white/70">Offer</p>
            <h3 className="mt-3 text-2xl font-black">{title}</h3>
            <p className="mt-2 text-sm font-semibold text-white/80">{subtitle}</p>
          </button>
        ))}
      </div>
    </section>
  );
}
