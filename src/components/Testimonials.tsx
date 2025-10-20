import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Founder",
    company: "Bloom & Co",
    avatar: "SJ",
    content: "FeedFlow transformed how we collect customer feedback. The insights we've gained have directly improved our product offerings and customer satisfaction scores.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Product Manager",
    company: "TechStart Inc",
    avatar: "MC",
    content: "The analytics dashboard is incredibly intuitive. We can now spot trends and act on customer concerns before they become bigger issues.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "CEO",
    company: "LocalBites",
    avatar: "ER",
    content: "Being able to showcase our best reviews directly on our website has boosted our conversion rate by 32%. Absolutely love this tool!",
    rating: 5,
  },
  {
    name: "David Thompson",
    role: "Head of Customer Success",
    company: "ServicePro",
    avatar: "DT",
    content: "The integrations with our existing tools made onboarding seamless. FeedFlow is now central to our customer experience strategy.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="pt-24 pb-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Loved by businesses worldwide
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of companies using FeedFlow to understand and delight their customers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-8 shadow-lg border border-border hover:shadow-xl transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Rating stars */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>

              {/* Testimonial content */}
              <p className="text-foreground mb-6 leading-relaxed text-lg">
                "{testimonial.content}"
              </p>

              {/* Author info */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role} at {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
