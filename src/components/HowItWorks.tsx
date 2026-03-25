import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Customer Calls After Hours",
    description: "A homeowner has a burst pipe at 11PM. They call your business number — our AI picks up instantly.",
  },
  {
    number: "02",
    title: "AI Qualifies the Lead",
    description: "The AI asks about job type, urgency, and location. Emergency? It gets flagged for immediate dispatch.",
  },
  {
    number: "03",
    title: "Appointment Booked & SMS Sent",
    description: "Non-emergency jobs are booked into your calendar. The caller gets a confirmation text within seconds.",
  },
  {
    number: "04",
    title: "You Wake Up to Booked Jobs",
    description: "Check your CRM in the morning — leads qualified, appointments set, no voicemails to dig through.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-24 lg:py-32 bg-background" id="how-it-works">
      <div className="container">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm font-semibold text-secondary uppercase tracking-widest">How It Works</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 mb-4">
            From Missed Call to{" "}
            <span className="text-gradient-primary">Booked Job</span>
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              className="flex gap-6 items-start"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="shrink-0 w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                <span className="text-lg font-bold text-primary">{step.number}</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
