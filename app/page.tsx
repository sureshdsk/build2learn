import Image from "next/image";
import Link from "next/link";
import { Users, Heart, Globe2, MessageSquare, ArrowRight, ChevronDown } from 'lucide-react';
export default function Home() {
  return (
    <div className="">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-600 to-purple-700 text-white">
        <div className="absolute inset-0 bg-black opacity-10 pattern-grid"></div>
        <div className="flex align-items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative">
          <div className="">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              Build2Learn
            </h1>
            <p className="text-xl text-purple-100 mb-8 leading-relaxed">
              Join hundreds of passionate individuals in building meaningful connections, sharing ideas, and creating lasting impact in our thriving community platform.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-50 transition-colors flex items-center">
                Join Community <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-colors">
                Learn More
              </button>
            </div>
          </div>
          <div className="">
            <Image src="/images/hero-fold.svg" width={800} height={600} alt="Community Platform" />
          </div>
        </div>
        {/* <div className="absolute bottom-0 left-0 right-0 text-center">
          <ChevronDown className="h-8 w-8 mx-auto mb-4 animate-bounce text-purple-200" />
        </div> */}
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Join Our Community?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover the benefits of being part of a vibrant and supportive community
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: <Users className="h-8 w-8 text-indigo-600" />,
                title: "Connect with Like-minds",
                description: "Meet people who share your interests and passions"
              },
              {
                icon: <Heart className="h-8 w-8 text-indigo-600" />,
                title: "Supportive Environment",
                description: "Experience a welcoming space where everyone belongs"
              },
              {
                icon: <Globe2 className="h-8 w-8 text-indigo-600" />,
                title: "Global Network",
                description: "Connect with members from around the world"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-indigo-50 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Stats Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: "10K+", label: "Active Members" },
              { number: "500+", label: "Daily Discussions" },
              { number: "50+", label: "Countries" },
              { number: "100+", label: "Community Events" }
            ].map((stat, index) => (
              <div key={index} className="bg-gradient-to-br from-indigo-50 to-purple-50 p-8 rounded-xl">
                <div className="text-4xl font-bold text-indigo-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">What Our Members Say</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote: "Being part of this community has transformed my professional network and opened up countless opportunities.",
                author: "Sarah Johnson",
                role: "Tech Entrepreneur"
              },
              {
                quote: "The support and knowledge sharing in this community is incredible. I've learned so much from fellow members.",
                author: "Michael Chen",
                role: "Product Designer"
              },
              {
                quote: "I've made lifelong friends and valuable connections through this amazing community.",
                author: "Emma Rodriguez",
                role: "Community Leader"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm">
                <MessageSquare className="h-8 w-8 text-indigo-600 mb-6" />
                <p className="text-gray-600 mb-6 italic">"{testimonial.quote}"</p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.author}</div>
                  <div className="text-indigo-600">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-indigo-600 to-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Join Our Community?</h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Take the first step towards connecting with like-minded individuals and becoming part of something special.
          </p>
          <button className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-50 transition-colors">
            Get Started Now
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white font-semibold mb-4">About</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">Our Story</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Team</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Community</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">Guidelines</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Events</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Forums</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Support</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Connect</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p>&copy; 2025 Community Platform. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
