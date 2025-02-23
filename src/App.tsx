import React, { useState } from 'react';
import { Search, BarChart3, BookOpen, Compass, ArrowRight, Star, Users, MessageSquare, X, Send, Scale } from 'lucide-react';

function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [message, setMessage] = useState('');

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="bg-[#00334e]">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-white text-2xl font-bold">SaaSGrowthLab</div>
            <div className="hidden md:flex space-x-8">
              <a href="#" className="text-white hover:text-[#046bd2]">Tools</a>
              <a href="#" className="text-white hover:text-[#046bd2]">Guides</a>
              <a href="#" className="text-white hover:text-[#046bd2]">Discover</a>
              <a href="#" className="text-white hover:text-[#046bd2]">About</a>
            </div>
          </div>
        </nav>
        
        <div className="container mx-auto px-6 py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Discover and Compare the Best SaaS Tools
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Your trusted platform for in-depth SaaS reviews, expert business guides, and tool discovery
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-[#046bd2] text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition flex items-center justify-center">
                Explore Tools <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-[#00334e] transition">
                Read Guides
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="bg-[#046bd2] w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Search className="text-white h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Tool Reviews</h3>
              <p className="text-gray-600">Comprehensive, unbiased reviews of the latest SaaS tools and platforms</p>
            </div>
            <div className="text-center">
              <div className="bg-[#046bd2] w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-6">
                <BookOpen className="text-white h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Business Guides</h3>
              <p className="text-gray-600">Expert insights and strategies to grow your business effectively</p>
            </div>
            <div className="text-center">
              <div className="bg-[#046bd2] w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Compass className="text-white h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Tool Discovery</h3>
              <p className="text-gray-600">Find the perfect tools to solve your business challenges</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Tools Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Tools</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="border rounded-lg p-6 hover:shadow-lg transition">
                <div className="flex items-start justify-between mb-4">
                  <img
                    src={`https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop`}
                    alt="Tool"
                    className="w-16 h-16 rounded object-cover"
                  />
                  <div className="flex items-center">
                    <Star className="h-5 w-5 text-yellow-400 fill-current" />
                    <span className="ml-1 text-gray-600">4.8</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">Tool Name {item}</h3>
                <p className="text-gray-600 mb-4">Brief description of the tool and its main benefits for businesses.</p>
                <div className="flex items-center text-[#046bd2] hover:text-[#00334e]">
                  Read Review <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Tool Widget */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center justify-center mb-8">
              <Scale className="h-12 w-12 text-[#046bd2] mr-4" />
              <h2 className="text-3xl font-bold">Compare SaaS Tools</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Select first tool..."
                  className="w-full p-4 border rounded-lg focus:ring-2 focus:ring-[#046bd2] focus:border-transparent"
                />
              </div>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Select second tool..."
                  className="w-full p-4 border rounded-lg focus:ring-2 focus:ring-[#046bd2] focus:border-transparent"
                />
              </div>
            </div>
            <button className="mt-6 bg-[#046bd2] text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition w-full md:w-auto">
              Compare Tools
            </button>
          </div>
        </div>
      </section>

      {/* Business Guides & Resources */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Business Guides & Resources</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                image: 'https://images.unsplash.com/photo-1553484771-371a605b060b?w=500&h=300&fit=crop',
                category: 'Growth Strategy',
                title: 'How to Scale Your SaaS Business in 2024',
                excerpt: 'Learn the proven strategies and tactics for growing your SaaS business effectively.'
              },
              {
                image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop',
                category: 'Marketing',
                title: 'The Ultimate Guide to B2B SaaS Marketing',
                excerpt: 'Discover the most effective marketing strategies for B2B SaaS companies.'
              },
              {
                image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=500&h=300&fit=crop',
                category: 'Operations',
                title: 'Optimizing Your Tech Stack',
                excerpt: 'How to build and optimize your technology stack for maximum efficiency.'
              }
            ].map((guide, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition">
                <img src={guide.image} alt={guide.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <div className="text-sm text-[#046bd2] font-semibold mb-2">{guide.category}</div>
                  <h3 className="text-xl font-bold mb-3">{guide.title}</h3>
                  <p className="text-gray-600 mb-4">{guide.excerpt}</p>
                  <a href="#" className="inline-flex items-center text-[#046bd2] hover:text-[#00334e]">
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-[#00334e] py-20 text-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-gray-300">Tool Reviews</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50k+</div>
              <div className="text-gray-300">Monthly Readers</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100+</div>
              <div className="text-gray-300">Expert Guides</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-5 gap-8">
            <div>
              <h4 className="text-white text-lg font-semibold mb-4">SaaSGrowthLab</h4>
              <p className="text-sm">Your trusted source for SaaS tool reviews and business growth resources.</p>
            </div>
            <div>
              <h4 className="text-white text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white">Tools</a></li>
                <li><a href="#" className="hover:text-white">Guides</a></li>
                <li><a href="#" className="hover:text-white">Categories</a></li>
                <li><a href="#" className="hover:text-white">About Us</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white text-lg font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white">Blog</a></li>
                <li><a href="#" className="hover:text-white">Newsletter</a></li>
                <li><a href="#" className="hover:text-white">Compare Tools</a></li>
                <li><a href="#" className="hover:text-white">Submit Tool</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white text-lg font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white">Contact Us</a></li>
                <li><a href="#" className="hover:text-white">Support</a></li>
                <li><a href="#" className="hover:text-white">Partnerships</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white text-lg font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white">Affiliate Disclosure</a></li>
                <li><a href="#" className="hover:text-white">Disclaimer</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-center">
            <p>&copy; {new Date().getFullYear()} SaaSGrowthLab. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Chatbot */}
      <div className="fixed bottom-6 right-6 z-50">
        {!isChatOpen ? (
          <button
            onClick={() => setIsChatOpen(true)}
            className="bg-[#046bd2] text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition"
          >
            <MessageSquare className="h-6 w-6" />
          </button>
        ) : (
          <div className="bg-white rounded-lg shadow-xl w-80">
            <div className="bg-[#00334e] text-white p-4 rounded-t-lg flex justify-between items-center">
              <h3 className="font-semibold">Chat with us</h3>
              <button onClick={() => setIsChatOpen(false)} className="text-gray-300 hover:text-white">
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="h-96 p-4 overflow-y-auto">
              <div className="bg-gray-100 rounded-lg p-3 mb-4">
                <p className="text-sm">Hello! How can I help you today?</p>
              </div>
              {/* Add more message bubbles here */}
            </div>
            <div className="p-4 border-t">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 p-2 border rounded-lg focus:ring-2 focus:ring-[#046bd2] focus:border-transparent"
                />
                <button className="bg-[#046bd2] text-white p-2 rounded-lg hover:bg-blue-700 transition">
                  <Send className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;