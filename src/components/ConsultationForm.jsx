import React, { useState } from 'react';
import { Mail, User, Phone, ArrowRight, Sparkles, MessageSquare } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/card'

const ConsultationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-teal-50 p-4 flex items-center justify-center">
      <Card className="w-full max-w-3xl bg-white/80 backdrop-blur-lg shadow-xl">
        <CardHeader className="space-y-2 text-center">
          <div className="flex justify-center mb-4">
            <Sparkles className="h-12 w-12 text-teal-500 animate-pulse" />
          </div>
          <CardTitle className="text-3xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
            Get Free Digital Marketing Consultation
          </CardTitle>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Transform your business with our award-winning digital marketing solutions. Let our experts create a customized strategy that drives results.
          </p>
        </CardHeader>
        
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              {/* Name Input */}
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-gray-400 group-focus-within:text-teal-500 transition-colors" />
                </div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all bg-white/50"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>

              {/* Email Input */}
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400 group-focus-within:text-teal-500 transition-colors" />
                </div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all bg-white/50"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>

              {/* Phone Input */}
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Phone className="h-5 w-5 text-gray-400 group-focus-within:text-teal-500 transition-colors" />
                </div>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all bg-white/50"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>
            </div>

            <button 
              type="submit"
              className="w-full bg-gradient-to-r from-teal-500 to-cyan-500 text-white py-3 px-6 rounded-lg font-medium 
                       hover:from-teal-600 hover:to-cyan-600 transition-all duration-200 
                       flex items-center justify-center space-x-2 group"
            >
              <span>Get Free Consultation</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          <div className="mt-6 flex items-center justify-center space-x-2 text-gray-500">
            <MessageSquare className="h-4 w-4" />
            <span className="text-sm">We'll get back to you within 24 hours</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ConsultationForm;