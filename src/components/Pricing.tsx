import { motion } from "framer-motion";
import { Check, ArrowRight, User, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";

const tiers = [
  {
    name: "Basic",
    badge: "🟢",
    price: "$800",
    bestFor: "Small or solo plumbers",
    answerType: "human",
    answerLabel: "Human Reps Only",
    features: [
      "Up to ~100–150 calls/month",
      "Business hours coverage (or limited after-hours)",
      "Basic call answering + message taking",
      "Call forwarding or message delivery",
      "Email/text notifications",
      "Simple script (no deep qualification)",
    ],
    highlight: false,
  },
  {
    name: "Growth",
    badge: "🟡",
    price: "$1,400",
    bestFor: "Growing plumbing companies",
    answerType: "hybrid",
    answerLabel: "Human Reps + AI After-Hours",
    features: [
      "Up to ~250–400 calls/month",
      "Human reps during business hours",
      "AI receptionist after hours (8am–10pm)",
      "Light qualification (job type, urgency, location)",
      "Appointment booking",
      "CRM integration (GoHighLevel, etc.)",
      "Missed call text-back automation",
      "Basic upsell opportunity (emergency vs standard)",
    ],
    highlight: true,
  },
  {
    name: "Enterprise",
    badge: "🔴",
    price: "$2,200",
    bestFor: "Established plumbing companies",
    answerType: "hybrid",
    answerLabel: "Human Reps + 24/7 AI",
    features: [
      "Up to ~500–800 calls/month",
      "Human reps during business hours",
      "24/7 AI answering after hours & weekends",
      "Advanced call handling scripts",
      "Full appointment setting",
      "Emergency dispatch prioritization",
      "Multi-line support",
      "Priority support + faster response",
      "Reporting (calls, bookings, conversions)",
    ],
    highlight: false,
  },
];

const Pricing = () => {
  return (
    <section className="py-24 lg:py-32 bg-muted/30" id="pricing">
      <div className="container">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm font-semibold text-secondary uppercase tracking-widest">Pricing</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 mb-4">
            Simple, Transparent{" "}
            <span className="text-gradient-primary">Pricing</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Every plan includes trained human receptionists. Growth & Enterprise add AI after-hours coverage.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              className={`relative p-8 rounded-2xl border card-hover ${
                tier.highlight
                  ? "bg-card border-secondary/50 glow-secondary"
                  : "bg-card border-border"
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              {tier.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-bold uppercase tracking-wider">
                  Best Value
                </div>
              )}

              <div className="mb-4">
                <span className="text-2xl mr-2">{tier.badge}</span>
                <span className="text-xl font-bold">{tier.name}</span>
              </div>

              {/* Answer type badge */}
              <div className="flex items-center gap-2 mb-5 px-3 py-2 rounded-lg bg-muted">
                {tier.answerType === "human" ? (
                  <User className="h-4 w-4 text-primary shrink-0" />
                ) : (
                  <div className="flex items-center gap-1 shrink-0">
                    <User className="h-4 w-4 text-primary" />
                    <span className="text-muted-foreground text-xs">+</span>
                    <Bot className="h-4 w-4 text-secondary" />
                  </div>
                )}
                <span className="text-xs font-semibold text-foreground">{tier.answerLabel}</span>
              </div>

              <div className="mb-2">
                <span className="text-4xl font-bold">{tier.price}</span>
                <span className="text-muted-foreground">/mo</span>
              </div>
              <p className="text-sm text-muted-foreground mb-6">{tier.bestFor}</p>

              <ul className="space-y-3 mb-8">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm">
                    <Check className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a href="https://cal.com/raijon-nixon-vvvyze/15min" target="_blank" rel="noopener noreferrer" className="block">
                <Button
                  className={`w-full rounded-xl py-4 md:py-5 text-sm md:text-base font-semibold ${
                    tier.highlight
                      ? "bg-secondary text-secondary-foreground hover:bg-secondary/90"
                      : "bg-primary text-primary-foreground hover:bg-primary/90"
                  }`}
                >
                  Book a Discovery Call
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
            </motion.div>
          ))}
        </div>

        {/* Overage pricing */}
        <motion.div
          className="mt-12 max-w-2xl mx-auto text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="p-6 rounded-2xl bg-card border border-border">
            <h3 className="font-semibold text-lg mb-2">Overage Pricing</h3>
            <p className="text-muted-foreground text-sm">
              Exceeded your plan's call limit? No problem.{" "}
              <span className="font-semibold text-foreground">$2.50 per extra call</span> or{" "}
              <span className="font-semibold text-foreground">$7.50 per booked appointment</span>.
              <br />
              High-volume? Let's talk custom pricing.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
