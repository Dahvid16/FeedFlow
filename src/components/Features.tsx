import { FileText, BarChart3, MessageSquare, Puzzle } from "lucide-react";
import { FaCheckCircle } from "react-icons/fa";

const features = [
  {
    icon: FileText,
    title: "Collect Feedback Anywhere",
    description: "Build on-brand feedback forms and share them by link or embed to capture responses from websites, emails, or kiosks in minutes.",
  },
  {
    icon: BarChart3,
    title: "Visual Analytics Dashboard",
    description: "See trends and sentiment at a glance with interactive charts, filters, and timeline views to track satisfaction over time.",
  },
  {
    icon: MessageSquare,
    title: "Showcase Reviews Publicly",
    description: "Turn customer reviews into attractive widgets and social proof you can publish anywhere to increase trust and conversions.",
  },
  {
    icon: Puzzle,
    title: "Integrate with Tools You Use",
    description: "Plug into Slack, Gmail, Notion and more to automate alerts, sync responses, and fit feedback into your existing workflows.",
  },
];

const Features = () => {
  return (
    <section id="features" className="pt-24 pb-16 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Everything you need to understand your customers
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Powerful features designed to help you collect, analyze, and act on customer feedback effortlessly.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-border hover:border-primary/50 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-6 inline-flex p-4 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional feature highlight */}
        <div className="mt-16 bg-gradient-to-br from-primary/10 via-accent/10 to-primary/10 rounded-3xl p-8 sm:p-12 border border-primary/20 animate-slide-up">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                Turn feedback into action
              </h3>
              <p className="text-muted-foreground mb-6">
                With AI-powered sentiment analysis, automated categorization, and smart insights, 
                FeedFlow helps you understand what matters most to your customers and take action quickly.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <FaCheckCircle className="w-3 h-3 rounded-full bg-accent" />
                  <span className="text-foreground">Automated sentiment detection</span>
                </li>
                <li className="flex items-center space-x-3">
                  <FaCheckCircle className="w-3 h-3 rounded-full bg-accent" />
                  <span className="text-foreground">Smart categorization and tagging</span>
                </li>
                <li className="flex items-center space-x-3">
                  <FaCheckCircle className="w-3 h-3 rounded-full bg-accent" />
                  <span className="text-foreground">Actionable insights and reports</span>
                </li>
              </ul>
            </div>
            
            <div className="relative">
              <div className="bg-card rounded-2xl p-6 shadow-xl border border-border">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Sentiment Analysis</span>
                    <span className="text-xs bg-accent/20 text-accent px-3 py-1 rounded-full font-medium">
                      92% Positive
                    </span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Positive</span>
                      <span className="font-medium text-accent">782</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-accent rounded-full h-2" style={{ width: "92%" }} />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Neutral</span>
                      <span className="font-medium">52</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-muted-foreground rounded-full h-2" style={{ width: "6%" }} />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Negative</span>
                      <span className="font-medium">17</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-destructive rounded-full h-2" style={{ width: "2%" }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
