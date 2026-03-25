import { motion } from "framer-motion";
import { Phone, MessageSquare, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-hero overflow-hidden flex items-center">
      {/* Subtle grid */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(hsl(0 0% 100%) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 100%) 1px, transparent 1px)`,
        backgroundSize: '60px 60px',
      }} />

      {/* Glow orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-primary/10 blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 rounded-full bg-secondary/10 blur-[100px] animate-pulse-glow" />

      <div className="container relative z-10 py-24 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-secondary/30 bg-secondary/5 mb-8">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              <span className="text-sm font-medium text-primary-foreground/70">Human Reps by Day · AI Receptionist After Hours</span>
            </div>
          </motion.div>

          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-primary-foreground leading-[1.1] mb-5 md:mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Never Miss a{" "}
            <span className="text-gradient-secondary">Plumbing Call</span>{" "}
            Again
          </motion.h1>

          <motion.p
            className="text-base sm:text-lg md:text-xl text-primary-foreground/60 max-w-2xl mx-auto mb-8 md:mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <strong className="text-primary-foreground/80">Real human representatives</strong> answer your calls during business hours. When the day ends, our <strong className="text-primary-foreground/80">AI receptionist</strong> takes over — catching leads, qualifying callers, and booking appointments while you sleep.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <a href="https://cal.com/raijon-nixon-vvvyze/15min" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto bg-secondary text-secondary-foreground hover:bg-secondary/90 glow-secondary text-sm md:text-base px-5 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 rounded-xl font-semibold">
                Book a Discovery Call
                <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
              </Button>
            </a>
            <a href="#how-it-works" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto bg-primary-foreground/10 text-primary-foreground border border-primary-foreground/20 hover:bg-primary-foreground/20 text-sm md:text-base px-5 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 rounded-xl">
                See How It Works
              </Button>
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-3 gap-8 mt-20 max-w-xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            {[
              { icon: Phone, value: "24/7", label: "Call Coverage" },
              { icon: MessageSquare, value: "< 30s", label: "SMS Follow-up" },
              { icon: Clock, value: "100%", label: "Leads Captured" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <stat.icon className="h-5 w-5 text-secondary mx-auto mb-2" />
                <div className="text-2xl font-bold text-primary-foreground">{stat.value}</div>
                <div className="text-xs text-primary-foreground/40">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
