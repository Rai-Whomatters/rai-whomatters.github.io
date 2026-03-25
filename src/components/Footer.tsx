const Footer = () => {
  return (
    <footer className="py-12 bg-muted/30 border-t border-border">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <span className="text-lg text-foreground" style={{ fontFamily: '"Times New Roman", Times, serif' }}>
            NyxonMarketing
          </span>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} NyxonMarketing. AI receptionists built for plumbing businesses.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
