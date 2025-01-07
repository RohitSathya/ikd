import React, { useState } from 'react';
import { ChevronDown, Search, MessageCircle } from 'lucide-react';

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is digital marketing?",
      answer: "Digital marketing refers to the use of digital channels, such as search engines, social media, email, and websites, to promote products and services to potential customers. It's a modern approach to connecting with your target audience in the digital age.",
      category: "Basics"
    },
    {
      question: "How can digital marketing benefit my business?",
      answer: "Digital marketing allows you to reach a global audience, target specific demographics, track campaign performance in real-time, and achieve measurable results. It provides cost-effective solutions and higher ROI compared to traditional marketing methods.",
      category: "Benefits"
    },
    {
      question: "What are the key components of a digital marketing strategy?",
      answer: "Key components include SEO (Search Engine Optimization), content marketing, social media marketing, pay-per-click advertising, email marketing, and analytics. Each component plays a crucial role in creating a comprehensive digital presence.",
      category: "Strategy"
    },
    {
      question: "How long does it take to see results from digital marketing?",
      answer: "The time frame varies depending on the strategy. SEO typically takes 3-6 months for significant results, while PPC campaigns can deliver results within days or even hours. Content marketing usually shows steady growth over 6-12 months.",
      category: "Timeline"
    },
    {
      question: "How do I choose the right digital marketing agency?",
      answer: "Look for an agency with a proven track record, expertise in your industry, transparent pricing, and a customized approach tailored to your business goals. Check their portfolio, client testimonials, and case studies to make an informed decision.",
      category: "Partnership"
    }
  ];

  const filteredFaqs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20 px-4 sm:px-6 lg:px-8 min-h-screen">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-4">
            FAQ
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            Frequently Asked Questions
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto text-lg mb-12">
            Find answers to common questions about digital marketing and how it can help your business grow.
          </p>

          {/* Search Bar */}
          <div className="relative max-w-xl mx-auto mb-12">
            <Search className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search your question..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 bg-white/80 backdrop-blur-sm"
            />
          </div>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {filteredFaqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full text-left p-6 focus:outline-none"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-blue-100 text-blue-600">
                      <MessageCircle className="w-4 h-4" />
                    </span>
                    <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
                      activeIndex === index ? 'transform rotate-180' : ''
                    }`}
                  />
                </div>
                <span className="inline-block mt-2 text-sm text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
                  {faq.category}
                </span>
              </button>
              
              <div
                className={`transition-all duration-300 ease-in-out ${
                  activeIndex === index
                    ? 'max-h-96 opacity-100'
                    : 'max-h-0 opacity-0'
                } overflow-hidden`}
              >
                <p className="px-6 pb-6 text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* No Results Message */}
        {filteredFaqs.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No matching questions found. Try adjusting your search terms.
            </p>
          </div>
        )}

        {/* Contact Section */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <button className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5">
            Contact Support
            <ChevronDown className="ml-2 w-4 h-4 transform -rotate-90" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FAQ;