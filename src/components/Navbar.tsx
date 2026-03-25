import { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b border-primary-foreground/5 transition-colors duration-300 ${
        scrolled ? "bg-[hsl(220_30%_12%)]" : "bg-hero/80"
      }`}
    >
      <div className="container flex items-center justify-between h-16">
        <span className="text-xl text-primary-foreground tracking-tight" style={{ fontFamily: '"Times New Roman", Times, serif' }}>
          NyxonMarketing
        </span>

        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">Features</a>
          <a href="#pricing" className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">Pricing</a>
          <a href="#how-it-works" className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">How It Works</a>
        </div>

        <a
          href="https://cal.com/raijon-nixon-vvvyze/15min"
          target="_blank"
          rel="noopener noreferrer"
          className="px-3 sm:px-5 py-2 rounded-lg bg-secondary text-secondary-foreground text-xs sm:text-sm font-semibold hover:bg-secondary/90 transition-colors"
        >
          Discovery Call
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
