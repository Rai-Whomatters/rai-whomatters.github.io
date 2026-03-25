import { motion } from "framer-motion";
import { Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="py-24 lg:py-32 bg-hero relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-secondary/5 blur-[150px]" />

      <div className="container relative z-10">
        <motion.div
          className="text-center max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center mx-auto mb-8">
            <Phone className="h-8 w-8 text-secondary" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6 leading-tight">
            Stop Losing Leads to <span className="text-gradient-secondary">Voicemail</span>
          </h2>
          <p className="text-primary-foreground/60 text-lg mb-10 leading-relaxed">
            Human receptionists during the day. AI after hours. Every call answered, every lead captured — even at 2AM.
          </p>
          <a href="https://cal.com/raijon-nixon-vvvyze/15min" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 glow-secondary text-sm md:text-base px-6 md:px-8 py-4 md:py-6 rounded-xl font-semibold">
              Book a Discovery Call
              <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
