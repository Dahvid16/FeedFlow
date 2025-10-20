import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does the free trial work?",
    answer: "Start with our 14-day free trial on any paid plan. No credit card required. You'll have full access to all features during the trial period.",
  },
  {
    question: "Can I change plans later?",
    answer: "Absolutely! You can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.",
  },
  {
    question: "How do I integrate FeedFlow with my website?",
    answer: "FeedFlow provides simple embed codes and widgets that you can add to your website. We also offer plugins for popular platforms like WordPress, Shopify, and Webflow.",
  },
  {
    question: "Is my customer data secure?",
    answer: "Yes! We use enterprise-grade encryption for all data in transit and at rest. FeedFlow is GDPR compliant and SOC 2 certified.",
  },
  {
    question: "Can I customize the feedback forms?",
    answer: "Yes! You can fully customize your forms with your brand colors, logo, and custom questions. Pro and Business plans offer advanced customization options.",
  },
  {
    question: "What kind of support do you offer?",
    answer: "All plans include email support. Pro plans get priority support, and Business plans include a dedicated account manager and phone support.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Frequently asked questions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Got questions? We've got answers. Can't find what you're looking for? Contact our support team.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-2xl px-6 hover:border-primary/50 transition-colors animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <AccordionTrigger className="text-left font-semibold hover:text-primary transition-colors py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">Still have questions?</p>
            <button className="text-primary hover:underline font-medium">
              Contact our support team →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
