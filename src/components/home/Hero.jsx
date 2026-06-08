export default function Hero({ navigate }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#282C3F] via-[#FF3F6C] to-[#FF905A] text-white">
      <div className="container-page grid min-h-[520px] items-center gap-10 py-14 md:grid-cols-[1fr_0.85fr]">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.28em] text-white/70">Pehnawa Collection Dungar</p>
          <h1 className="mt-5 max-w-3xl text-5xl font-black leading-tight md:text-7xl">Marketplace-style fashion shopping for Dungar.</h1>
          <p className="mt-5 max-w-xl text-base leading-8 text-white/85">Shop ethnic wear, Dungar edits, sarees, suits, kurtis, lehengas, and daily fashion with bold offers, quick browsing, and fresh product drops.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <button onClick={() => navigate('/products')} className="rounded bg-white px-7 py-4 text-sm font-black text-rose">Shop Collection</button>
            <button onClick={() => navigate('/category')} className="rounded border border-white/50 px-7 py-4 text-sm font-black text-white">Explore Categories</button>
          </div>
        </div>
        <div className="relative hidden h-[430px] md:block">
          <div className="absolute inset-x-8 bottom-0 h-[92%] rounded-t-[220px] bg-white/15" />
          <div className="absolute left-1/2 top-16 h-28 w-24 -translate-x-1/2 rounded-t-full bg-[#F5C2A4]" />
          <div className="absolute bottom-0 left-1/2 h-[72%] w-[58%] -translate-x-1/2 rounded-t-[180px] bg-white/20 ring-[18px] ring-white/15" />
          <div className="absolute right-8 top-10 rounded bg-white px-4 py-3 text-sm font-black text-charcoal shadow-xl">Up to 60% OFF</div>
        </div>
      </div>
    </section>
  );
}
