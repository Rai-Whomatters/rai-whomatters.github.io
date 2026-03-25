import { motion } from "framer-motion";
import { PhoneIncoming, MessageSquare, UserCheck, CalendarCheck, BellRing, Bot, Headphones } from "lucide-react";

const features = [
  {
    icon: Headphones,
    title: "Live Human Receptionists",
    description: "During business hours, real trained representatives answer your calls — providing a professional, personal touch your customers expect.",
    tag: "All Plans",
  },
  {
    icon: Bot,
    title: "AI After-Hours Coverage",
    description: "When your team clocks out, our AI receptionist takes over — answering calls, capturing leads, and ensuring no opportunity slips through the cracks.",
    tag: "Growth & Enterprise",
  },
  {
    icon: MessageSquare,
    title: "SMS Follow-Up",
    description: "Automatic text messages sent to every caller — confirming their request, providing ETAs, and keeping leads warm.",
    tag: "All Plans",
  },
  {
    icon: UserCheck,
    title: "Lead Qualification",
    description: "Smart scripts identify job type, urgency level, and location — separating emergency dispatch from standard bookings.",
    tag: "Growth & Enterprise",
  },
  {
    icon: CalendarCheck,
    title: "Appointment Booking",
    description: "Qualified leads are booked directly into your calendar or CRM. No more back-and-forth scheduling.",
    tag: "Growth & Enterprise",
  },
  {
    icon: BellRing,
    title: "Missed Call Text-Back",
    description: "If a call is missed, an instant automated text reaches the customer within seconds — keeping them engaged.",
    tag: "All Plans",
  },
];

const Features = () => {
  return (
    <section className="py-24 lg:py-32 bg-background" id="features">
      <div className="container">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm font-semibold text-secondary uppercase tracking-widest">What We Do</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 mb-4">
            Human Reps + AI,{" "}
            <span className="text-gradient-primary">Built for Plumbers</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Professional human receptionists during the day. AI-powered after-hours coverage to catch every lead — day and night.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              className="group relative p-8 rounded-2xl bg-card border border-border card-hover"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-muted text-muted-foreground">
                  {feature.tag}
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
