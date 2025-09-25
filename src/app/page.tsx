import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ContactForm from "@/components/ContactForm";
import {
  Menu,
  ArrowRight,
  CheckCircle,
  Users,
  Shield,
  Zap,
  Headphones,
  Building,
  Heart,
  CreditCard,
  Cloud,
  Globe,
  ShoppingCart,
  Phone,
  Smartphone,
  Monitor,
  PenTool,
  BarChart3,
  Lock,
  Settings,
  Lightbulb,
  Target,
  Award,
  Clock,
  Mail
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-900">
      {/* Hidden form for Netlify Forms detection */}
      <form name="contact" data-netlify="true" data-netlify-honeypot="bot-field" hidden>
        <input type="text" name="name" />
        <input type="email" name="email" />
        <input type="text" name="company" />
        <input type="text" name="phone" />
        <input type="text" name="service" />
        <textarea name="message"></textarea>
      </form>

      {/* Navigation */}
      <nav className="flex items-center justify-between p-4 lg:px-8">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
            <Building className="h-6 w-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-white">Venture Hub Group</h1>
            <p className="text-xs text-blue-400">Technologies & Solutions</p>
          </div>
        </div>
        <div className="hidden lg:flex items-center space-x-8">
          <a href="#" className="text-gray-300 hover:text-white">Home</a>
          <a href="#about" className="text-gray-300 hover:text-white">About Us</a>
          <a href="#services" className="text-gray-300 hover:text-white">Services</a>
          <a href="#contact" className="text-gray-300 hover:text-white">Contact</a>
        </div>
        <div className="lg:hidden">
          <Menu className="h-6 w-6 text-white" />
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-gradient py-20 lg:py-32 px-4 lg:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <p className="text-blue-400 uppercase tracking-wider text-sm mb-4">
                Trusted Collaboration, and Lasting Impact
              </p>
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Your Catalyst for Seamless Digital Transformation.
              </h1>
              <p className="text-gray-300 text-lg mb-8 max-w-2xl">
                We collaborate closely with your team, combining cutting-edge technology with strategic insight to deliver innovative solutions that drive impactful change and long-term success, shaping the future of your business
              </p>
              <a href="#contact">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg">
                  Contact Us
                </Button>
              </a>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-96 h-96 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-lg transform rotate-12 absolute"></div>
                <div className="w-96 h-96 bg-gradient-to-br from-purple-500/20 to-blue-600/20 rounded-lg transform -rotate-6 absolute"></div>
                <div className="w-96 h-96 bg-gradient-to-br from-blue-600/30 to-purple-500/30 rounded-lg relative z-10 flex items-center justify-center">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="w-16 h-16 bg-blue-500 rounded-lg flex items-center justify-center">
                      <Monitor className="h-8 w-8 text-white" />
                    </div>
                    <div className="w-16 h-16 bg-purple-500 rounded-lg flex items-center justify-center">
                      <Smartphone className="h-8 w-8 text-white" />
                    </div>
                    <div className="w-16 h-16 bg-green-500 rounded-lg flex items-center justify-center">
                      <Cloud className="h-8 w-8 text-white" />
                    </div>
                    <div className="w-16 h-16 bg-orange-500 rounded-lg flex items-center justify-center">
                      <BarChart3 className="h-8 w-8 text-white" />
                    </div>
                    <div className="w-16 h-16 bg-pink-500 rounded-lg flex items-center justify-center">
                      <PenTool className="h-8 w-8 text-white" />
                    </div>
                    <div className="w-16 h-16 bg-teal-500 rounded-lg flex items-center justify-center">
                      <Shield className="h-8 w-8 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-blue-400 uppercase tracking-wider text-sm mb-4">Our Services</p>
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
              Let us do the work, so you can focus on what matters.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Product Consulting */}
            <Card className="service-card-blue text-white border-0 p-8 relative overflow-hidden">
              <CardContent className="p-0">
                <div className="mb-6">
                  <Lightbulb className="h-12 w-12 text-white mb-4" />
                  <h3 className="text-xl font-bold mb-2">Product Consulting</h3>
                  <p className="text-blue-100">
                    Turning Ideas into Impactful Solutions with Data-Driven Consulting.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Digital Transformation */}
            <Card className="service-card-purple text-white border-0 p-8">
              <CardContent className="p-0">
                <div className="mb-6">
                  <Zap className="h-12 w-12 text-white mb-4" />
                  <h3 className="text-xl font-bold mb-2">Digital Transformation</h3>
                  <p className="text-purple-100">
                    Empowering Businesses to Lead in the Digital Era.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Mobile App Development */}
            <Card className="service-card-blue text-white border-0 p-8">
              <CardContent className="p-0">
                <div className="mb-6">
                  <Smartphone className="h-12 w-12 text-white mb-4" />
                  <h3 className="text-xl font-bold mb-2">Mobile App Development</h3>
                  <p className="text-blue-100">
                    Empowering Businesses with Scalable, User-Centric Mobile Solutions.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* UI/UX Design */}
            <Card className="service-card-green text-white border-0 p-8">
              <CardContent className="p-0">
                <div className="mb-6">
                  <PenTool className="h-12 w-12 text-white mb-4" />
                  <h3 className="text-xl font-bold mb-2">UI/UX Design</h3>
                  <p className="text-green-100">
                    Crafting user-focused designs that drive engagement, boost retention, and foster loyalty.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Website Development */}
            <Card className="bg-slate-800 text-white border-slate-700 p-8">
              <CardContent className="p-0">
                <div className="mb-6">
                  <Monitor className="h-12 w-12 text-blue-400 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Website Development</h3>
                  <p className="text-gray-300">
                    Driving Innovation and Excellence in Web Application Development.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Staff Augmentation */}
            <Card className="service-card-purple text-white border-0 p-8">
              <CardContent className="p-0">
                <div className="mb-6">
                  <Users className="h-12 w-12 text-white mb-4" />
                  <h3 className="text-xl font-bold mb-2">Staff Augmentation</h3>
                  <p className="text-purple-100">
                    Empowering Your Projects with the Right Talent.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* SAP */}
            <Card className="bg-slate-800 text-white border-slate-700 p-8">
              <CardContent className="p-0">
                <div className="mb-6">
                  <Settings className="h-12 w-12 text-blue-400 mb-4" />
                  <h3 className="text-xl font-bold mb-2">SAP</h3>
                  <p className="text-gray-300">
                    Seamless SAP Implementation, Powered for Success.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* AI/ML Solutions */}
            <Card className="service-card-blue text-white border-0 p-8">
              <CardContent className="p-0">
                <div className="mb-6">
                  <Target className="h-12 w-12 text-white mb-4" />
                  <h3 className="text-xl font-bold mb-2">AI/ML Solutions</h3>
                  <p className="text-blue-100">
                    Turning Challenges into Opportunities with AI/ML Excellence.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Digital Marketing */}
            <Card className="service-card-green text-white border-0 p-8">
              <CardContent className="p-0">
                <div className="mb-6">
                  <BarChart3 className="h-12 w-12 text-white mb-4" />
                  <h3 className="text-xl font-bold mb-2">Digital Marketing</h3>
                  <p className="text-green-100">
                    Driving Results with Strategic and Creative Digital Marketing.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Cyber Security */}
            <Card className="bg-slate-800 text-white border-slate-700 p-8">
              <CardContent className="p-0">
                <div className="mb-6">
                  <Shield className="h-12 w-12 text-blue-400 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Cyber Security</h3>
                  <p className="text-gray-300">
                    Protect Your Business in a Digital-First World.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Industry Expertise Section */}
      <section className="py-20 px-4 lg:px-8 bg-slate-800/50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
            Diverse Industry Expertise Across Business Sectors
          </h2>
          <p className="text-gray-300 text-lg mb-16 max-w-3xl mx-auto">
            We excel in crafting tailored software solutions for companies spanning a wide array of industries, ensuring our services align with the unique needs of each business domain.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card className="bg-slate-800 border-slate-700 p-8">
              <CardContent className="p-0 text-center">
                <Building className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-white">Banking</h3>
              </CardContent>
            </Card>
            <Card className="service-card-blue text-white border-0 p-8">
              <CardContent className="p-0 text-center">
                <Shield className="h-12 w-12 text-white mx-auto mb-4" />
                <h3 className="text-lg font-bold">Insurance</h3>
              </CardContent>
            </Card>
            <Card className="bg-slate-800 border-slate-700 p-8">
              <CardContent className="p-0 text-center">
                <CreditCard className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-white">Fintech</h3>
              </CardContent>
            </Card>
            <Card className="service-card-blue text-white border-0 p-8">
              <CardContent className="p-0 text-center">
                <Cloud className="h-12 w-12 text-white mx-auto mb-4" />
                <h3 className="text-lg font-bold">SAAS</h3>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-slate-800 border-slate-700 p-8">
              <CardContent className="p-0 text-center">
                <Globe className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-white">Consumer Internet</h3>
              </CardContent>
            </Card>
            <Card className="service-card-blue text-white border-0 p-8">
              <CardContent className="p-0 text-center">
                <ShoppingCart className="h-12 w-12 text-white mx-auto mb-4" />
                <h3 className="text-lg font-bold">E-commerce & Retail</h3>
              </CardContent>
            </Card>
            <Card className="bg-slate-800 border-slate-700 p-8">
              <CardContent className="p-0 text-center">
                <Heart className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-white">Healthcare</h3>
              </CardContent>
            </Card>
            <Card className="service-card-blue text-white border-0 p-8">
              <CardContent className="p-0 text-center">
                <Phone className="h-12 w-12 text-white mx-auto mb-4" />
                <h3 className="text-lg font-bold">Telecom</h3>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* AI Solutions Section */}
      <section className="py-20 px-4 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
            Sparking Innovation, Driving Excellence, and Fueling Growth through smart AI-Solutions
          </h2>
          <p className="text-gray-300 text-lg mb-16 max-w-3xl mx-auto">
            We help businesses transform their vision into reality by delivering tailored, scalable, and impactful digital solutions that unlock their true potential.
          </p>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 lg:px-8 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-blue-400 uppercase tracking-wider text-sm mb-4">Why Choose Us</p>
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
              Let us change the way you think about technology.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-slate-800 border-slate-700 p-8">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mb-6">
                  <Lightbulb className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Disruptive Innovation</h3>
                <p className="text-gray-300">
                  We harness AI, machine learning, and digital transformation to drive business disruption with intelligent, human-centric solutions.
                </p>
              </CardContent>
            </Card>

            <Card className="service-card-blue text-white border-0 p-8">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">Efficiency at Scale</h3>
                <p className="text-blue-100">
                  Tailored software solutions that optimize processes, ensuring impactful results with maximum efficiency.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-slate-700 p-8">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mb-6">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Finesse in Execution</h3>
                <p className="text-gray-300">
                  Delivering precise, high-quality outcomes through expert leadership and strong collaborative partnerships.
                </p>
              </CardContent>
            </Card>

            <Card className="service-card-blue text-white border-0 p-8">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6">
                  <Headphones className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">24/7 Premium Support</h3>
                <p className="text-blue-100">
                  After service support and continuous monitoring and being in touch once executed.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 lg:px-8 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-blue-400 uppercase tracking-wider text-sm mb-4">Get in Touch</p>
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Let's discuss how Venture Hub Group can help you achieve your digital transformation goals.
              Our team of experts is ready to turn your vision into reality.
            </p>
          </div>

          <ContactForm />

          <div className="mt-16 text-center">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Call Us</h3>
                <p className="text-gray-400">+1 437 345 3584</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Email Us</h3>
                <p className="text-gray-400">info@venturehubgroup.ca</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Visit Us</h3>
                <p className="text-gray-400">5 Hollidge Boulevard<br />Aurora, Ontario, L4G 7H2</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Response Time</h3>
                <p className="text-gray-400">Within 24 hours</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-16 px-4 lg:px-8 border-t border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Building className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Venture Hub Group</h3>
                  <p className="text-xs text-blue-400">Technologies & Solutions</p>
                </div>
              </div>
              <p className="text-gray-400 mb-4">
                At Venture Hub Group, we enable businesses to succeed in this ever-changing digital landscape.
              </p>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Product Consulting</li>
                <li>UI/UX Design</li>
                <li>Mobile App Development</li>
                <li>Web App Development</li>
                <li>Digital Transformation</li>
                <li>Staff Augmentation</li>
                <li>AI/ML Solutions</li>
                <li>Digital Marketing</li>
                <li>Cyber Security</li>
                <li>SAP</li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">Solutions</h4>
              <ul className="space-y-2 text-gray-400">
                <li>AI Products</li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>About us</li>
                <li>Leadership</li>
                <li>Career</li>
                <li>Get in Touch</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8">
            <p className="text-gray-400 text-center">
              © 2025 Venture Hub Group LLC, All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
