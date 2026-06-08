import logo from '../../assets/pehnawa-collection-logo.svg';

export default function Footer({ navigate }) {
  return (
    <footer className="hidden bg-charcoal text-white md:block">
      <div className="container-page grid gap-10 py-14 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
        <div>
          <img src={logo} alt="Pehnawa Collection Dungar" className="h-16 rounded bg-white p-1" />
          <p className="mt-4 max-w-md text-sm leading-7 text-slate-300">
            Pehnawa Collection Dungar is a fashion-first ecommerce store for sarees, suits, kurtis, Dungar edits, festive wear, and everyday ethnic style.
          </p>
        </div>
        <FooterList title="Shop" items={['Sarees', 'Suits', 'Kurtis', 'Dungar Edit', 'Sale']} navigate={navigate} />
        <FooterList title="Support" items={['Contact', 'Return Policy', 'Privacy Policy', 'Terms']} navigate={navigate} />
        <div>
          <h3 className="text-sm font-black uppercase tracking-[0.24em] text-slate-400">Contact</h3>
          <p className="mt-4 text-sm text-slate-300">hello@pehnawacollection.com</p>
          <p className="mt-2 text-sm text-slate-300">+91 98765 43210</p>
          <p className="mt-2 text-sm text-slate-300">Mon - Sat, 10 AM - 7 PM</p>
        </div>
      </div>
    </footer>
  );
}

function FooterList({ title, items, navigate }) {
  return (
    <div>
      <h3 className="text-sm font-black uppercase tracking-[0.24em] text-slate-400">{title}</h3>
      <div className="mt-4 grid gap-3">
        {items.map((item) => (
          <button key={item} onClick={() => navigate(item === 'Contact' ? '/contact' : '/products')} className="text-left text-sm text-slate-300 hover:text-white">
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}
