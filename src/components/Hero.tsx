import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import CountUpOnView from "./CountUponView";
import { FaCheckCircle, FaMarker } from "react-icons/fa";

const Hero = () => {
  const scrollToCTA = () => {
    const element = document.getElementById("cta");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-primary/5 to-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 sm:px-8 lg:px-10 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left space-y-8 animate-slide-up">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Turn customer feedback into{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                business growth
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 text-justify">
              FeedFlow helps you collect, analyze, and improve from real customer insights — effortlessly.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                onClick={scrollToCTA}
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg px-8 py-6 rounded-2xl shadow-lg hover:shadow-xl transition-all"
              >
                Start Free Trial
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 font-semibold text-lg px-8 py-6 rounded-2xl hover:bg-muted hover:text-black/80 transition-all group"
              >
                <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Watch Demo
              </Button>
            </div>

            {/* Social proof */}
            <div className="flex items-center justify-center space-x-20 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">
                  <CountUpOnView end={10}/>k+
                </div>
                <div className="text-sm text-muted-foreground">Active Users</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground"><CountUpOnView end={500}/>k+</div>
                <div className="text-sm text-muted-foreground">Feedback Collected</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">4.9/5</div>
                <div className="text-sm text-muted-foreground">User Rating</div>
              </div>
            </div>
          </div>

          {/* Right column - Dashboard mockup */}
          <div className="relative animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border bg-card">
              {/* Dashboard header */}
              <div className="bg-muted/50 border-b border-border px-6 py-4 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="text-base font-medium text-muted-foreground">Dashboard</div>
              </div>
              
              {/* Dashboard content */}
              <div className="p-6 space-y-2">
                {/* Stats cards */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-primary/10 rounded-xl p-4">
                    <div className="text-2xl font-bold text-primary">847</div>
                    <div className="text-xs text-muted-foreground">Responses</div>
                  </div>
                  <div className="bg-accent/10 rounded-xl p-4">
                    <div className="text-2xl font-bold text-accent">4.8</div>
                    <div className="text-xs text-muted-foreground">Avg Rating</div>
                  </div>
                  <div className="bg-primary/10 rounded-xl p-4">
                    <div className="text-2xl font-bold text-primary">92%</div>
                    <div className="text-xs text-muted-foreground">Positive</div>
                  </div>
                </div>

                {/* Chart placeholder */}
                <div className="bg-muted/30 rounded-xl h-32 flex items-end justify-around p-4">
                  <div className="w-8 bg-primary rounded-t" style={{ height: "60%" }} />
                  <div className="w-8 bg-primary/70 rounded-t" style={{ height: "45%" }} />
                  <div className="w-8 bg-primary rounded-t" style={{ height: "80%" }} />
                  <div className="w-8 bg-primary/70 rounded-t" style={{ height: "55%" }} />
                  <div className="w-8 bg-primary rounded-t" style={{ height: "90%" }} />
                  <div className="w-8 bg-primary/70 rounded-t" style={{ height: "70%" }} />
                </div>

                {/* Recent feedback */}
                <div className="space-y-2">
                  <div className="text-lg font-medium text-muted-foreground">Recent Feedback</div>
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="bg-muted/30 rounded-lg p-3 flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <FaCheckCircle className="w-4 h-4 rounded-full" />
                        <div className="text-xs text-foreground/80">Great product experience!</div>
                      </div>
                      <div className="text-xs text-accent font-medium">⭐ 5.0</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
