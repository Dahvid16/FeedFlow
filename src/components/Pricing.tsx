import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const pricingTiers = [
  {
    name: "Starter",
    price: "Free",
    description: "Perfect for trying out FeedFlow",
    features: [
      "Up to 50 responses/month",
      "1 feedback form",
      "Basic analytics",
      "Email support",
      "7-day data retention",
    ],
    cta: "Start Free",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$29",
    period: "/month",
    description: "For growing teams and businesses",
    features: [
      "Unlimited responses",
      "Unlimited forms",
      "Advanced analytics & sentiment",
      "Custom branding",
      "Priority support",
      "90-day data retention",
      "Testimonial widgets",
      "Basic integrations",
    ],
    cta: "Start Free Trial",
    highlighted: true,
  },
  {
    name: "Business",
    price: "$99",
    period: "/month",
    description: "Advanced analytics for scale",
    features: [
      "Everything in Pro",
      "Advanced AI insights",
      "Custom integrations",
      "Dedicated account manager",
      "Unlimited data retention",
      "White-label options",
      "API access",
      "SSO & advanced security",
    ],
    cta: "Contact Sales",
    highlighted: false,
  },
];

const Pricing = () => {
  const scrollToCTA = () => {
    const element = document.getElementById("cta");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="pricing" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the plan that's right for your business. All plans include a 14-day free trial.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingTiers.map((tier, index) => (
            <div
              key={index}
              className={`relative bg-card rounded-3xl p-8 border-2 transition-all duration-300 hover:shadow-xl animate-fade-in ${
                tier.highlighted
                  ? "border-primary shadow-xl scale-105 lg:scale-110"
                  : "border-border hover:border-primary/50"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {tier.highlighted && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-primary to-accent text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                <p className="text-muted-foreground text-sm">{tier.description}</p>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline">
                  <span className="text-5xl font-bold">{tier.price}</span>
                  {tier.period && <span className="text-muted-foreground ml-2">{tier.period}</span>}
                </div>
              </div>

              <Button
                onClick={scrollToCTA}
                className={`w-full mb-8 font-semibold py-6 rounded-xl transition-all ${
                  tier.highlighted
                    ? "bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl"
                    : "bg-secondary hover:bg-secondary/80 text-secondary-foreground"
                }`}
              >
                {tier.cta}
              </Button>

              <ul className="space-y-4">
                {tier.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start space-x-3">
                    <Check className={`w-5 h-5 mt-0.5 flex-shrink-0 ${tier.highlighted ? "text-primary" : "text-accent"}`} />
                    <span className="text-foreground/80">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Additional info */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-4">
            All plans include secure data storage and GDPR compliance
          </p>
          <button className="text-primary hover:underline font-medium">
            Compare all features →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
