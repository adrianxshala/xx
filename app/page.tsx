"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Home,
  Search,
  CheckCircle,
  Map,
  Phone,
  Download,
  ArrowRight,
  Star,
  Mail,
  Instagram,
  Twitter,
  Facebook,
  Linkedin,
} from "lucide-react";

export default function LandingPage() {
  const features = [
    {
      icon: <Search className="h-8 w-8" />,
      title: "Advanced Search",
      description:
        "Find properties that match your exact criteria with our powerful search filters",
    },
    {
      icon: <CheckCircle className="h-8 w-8" />,
      title: "Verified Listings",
      description:
        "All properties are verified by our team to ensure accuracy and authenticity",
    },
    {
      icon: <Map className="h-8 w-8" />,
      title: "Interactive Map",
      description:
        "Explore neighborhoods and properties with our intuitive map interface",
    },
    {
      icon: <Phone className="h-8 w-8" />,
      title: "Easy Contact",
      description:
        "Connect with agents and property owners instantly through the app",
    },
  ];

  const screenshots = [
   
    "https://images.unsplash.com/photo-1581287053822-fd7bf4f4bfec?q=80&w=800&auto=format",
    "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format",
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "First-time Homebuyer",
      content:
        "This app made finding my first home so much easier! The interface is intuitive and the verified listings gave me peace of mind.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Real Estate Investor",
      content:
        "As an investor, I appreciate the advanced search features and quick contact options. It's streamlined my property hunting process.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "Property Owner",
      content:
        "Listing my properties on this app has been a breeze. The response rate from potential buyers is impressive!",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section
        className="relative h-screen flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1920&auto=format')",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Find Your Dream Home with Ease
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Your perfect home is just a tap away. Download our app and start your
            journey today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="https://apps.apple.com/" target="_blank" rel="noopener noreferrer">
  <img
    src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
    alt="Download on the App Store"
    className="h-12"
  />
</a>
<a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
  <img
    src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
    alt="Get it on Google Play"
    className="h-12"
  />
</a>

          </div>
        </div>
      </section>

     

      {/* Features Section */}
      
      {/* How It Works Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Search className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Search Properties</h3>
              <p className="text-muted-foreground">
                Use our advanced filters to find properties that match your criteria
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Home className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">View Details</h3>
              <p className="text-muted-foreground">
                Explore detailed information, photos, and virtual tours
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Contact Agent</h3>
              <p className="text-muted-foreground">
                Connect directly with agents or property owners
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Screenshots Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            App Screenshots
          </h2>
          <Carousel className="max-w-3xl mx-auto">
            <CarouselContent>
              {screenshots.map((screenshot, index) => (
                <CarouselItem key={index}>
                  <img
                    src={screenshot}
                    alt={`App Screenshot ${index + 1}`}
                    className="rounded-lg shadow-lg w-full"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            What Our Users Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <p className="mb-4">{testimonial.content}</p>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Find Your Dream Home?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Download our app now and start your journey to finding the perfect
            property.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="https://apps.apple.com/" target="_blank" rel="noopener noreferrer">
  <img
    src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
    alt="Download on the App Store"
    className="h-12"
  />
</a>
<a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
  <img
    src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
    alt="Get it on Google Play"
    className="h-12"
  />
</a>
          </div>
        </div>
      </section>

      {/* Contact & FAQ Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Contact & Support
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Send us a message</h3>
              <form className="space-y-4">
                <Input placeholder="Your Name" />
                <Input type="email" placeholder="Your Email" />
                <Textarea placeholder="Your Message" className="h-32" />
                <Button>
                  Send Message
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-6">
                Frequently Asked Questions
              </h3>
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    How do I download the app?
                  </AccordionTrigger>
                  <AccordionContent>
                    Our app is available for download on both the Apple App Store
                    and Google Play Store. Simply click on the respective download
                    button and follow the installation instructions.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>
                    Is the app free to use?
                  </AccordionTrigger>
                  <AccordionContent>
                    Yes, the basic version of our app is completely free to use.
                    We also offer premium features for advanced users.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>
                    How are properties verified?
                  </AccordionTrigger>
                  <AccordionContent>
                    Our team thoroughly verifies each property listing by checking
                    documentation and conducting virtual or physical inspections
                    when necessary.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold text-lg mb-4">About</h3>
              <p className="text-muted-foreground">
                Your trusted partner in finding the perfect property through our
                innovative mobile app.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary">
                    How It Works
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary">
                    Testimonials
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary">
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Connect</h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary"
                  aria-label="Facebook"
                >
                  <Facebook className="h-6 w-6" />
                </a>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary"
                  aria-label="Twitter"
                >
                  <Twitter className="h-6 w-6" />
                </a>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary"
                  aria-label="Instagram"
                >
                  <Instagram className="h-6 w-6" />
                </a>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 Real Estate App. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}