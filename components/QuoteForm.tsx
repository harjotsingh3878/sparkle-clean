import React, { useState } from 'react';
import { Loader2, Send, Mail, CheckCircle2, MessageSquare } from 'lucide-react';
import { QuoteFormData, ServiceType } from '../types';

const QuoteForm: React.FC = () => {
  const [step, setStep] = useState<1 | 2>(1); // 1: Form, 2: Success
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<QuoteFormData>({
    name: '',
    email: '',
    phone: '',
    serviceType: ServiceType.RESIDENTIAL,
    sqFt: 1000,
    frequency: 'Bi-Weekly',
    details: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleManualEmail = () => {
    const subject = `Cleaning Quote Request: ${formData.serviceType} - ${formData.name}`;
    const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0APhone: ${formData.phone}%0D%0AService: ${formData.serviceType}%0D%0ASq Ft: ${formData.sqFt}%0D%0AFrequency: ${formData.frequency}%0D%0ADetails: ${formData.details}`;
    window.location.href = `mailto:harjotsingh538@gmail.com?subject=${subject}&body=${body}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const response = await fetch("https://formsubmit.co/ajax/harjotsingh538@gmail.com", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          _subject: `New Quote Request: ${formData.serviceType} - ${formData.name}`,
          _template: "table",
          _captcha: "false",
          ...formData
        })
      });

      if (response.ok) {
        setStep(2);
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("We encountered an issue sending the form automatically. We will open your email client instead.");
      handleManualEmail();
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setStep(1);
    setFormData({
      name: '',
      email: '',
      phone: '',
      serviceType: ServiceType.RESIDENTIAL,
      sqFt: 1000,
      frequency: 'Bi-Weekly',
      details: ''
    });
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/60 overflow-hidden border border-slate-100">
      <div className="bg-blue-600 p-8 text-white text-center">
        <h3 className="text-2xl font-bold flex items-center justify-center gap-3">
          {step === 2 ? <CheckCircle2 className="w-7 h-7 text-blue-100" /> : <Mail className="w-7 h-7 text-blue-100" />}
          {step === 2 ? 'Request Sent' : 'Request a Free Quote'}
        </h3>
        <p className="text-blue-50 mt-2 font-medium opacity-90">
          {step === 2 ? 'We will be in touch shortly' : 'Fill out the form below and we will contact you with a customized price.'}
        </p>
      </div>

      <div className="p-6 md:p-8">
        {step === 1 && (
          <form onSubmit={handleSubmit} className="space-y-6 animate-fadeIn">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all placeholder:text-slate-400"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all placeholder:text-slate-400"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Service Type</label>
                <select
                  name="serviceType"
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                  value={formData.serviceType}
                  onChange={handleInputChange}
                >
                  {Object.values(ServiceType).map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Approx. Sq Ft</label>
                <input
                  type="number"
                  name="sqFt"
                  required
                  min="100"
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                  value={formData.sqFt}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Frequency</label>
                <select
                  name="frequency"
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                  value={formData.frequency}
                  onChange={handleInputChange}
                >
                  <option value="One-Time">One-Time Clean</option>
                  <option value="Weekly">Weekly</option>
                  <option value="Bi-Weekly">Bi-Weekly (Most Popular)</option>
                  <option value="Monthly">Monthly</option>
                </select>
              </div>
              <div>
                 <label className="block text-sm font-semibold text-slate-700 mb-2">Phone (Optional)</label>
                <input
                  type="tel"
                  name="phone"
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all placeholder:text-slate-400"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="(555) 123-4567"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Details or Special Requests</label>
              <textarea
                name="details"
                rows={4}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all placeholder:text-slate-400"
                value={formData.details}
                onChange={handleInputChange}
                placeholder="e.g., We have a dog, focus on the kitchen, need windows done..."
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-xl transition-all transform hover:scale-[1.01] flex items-center justify-center gap-2 shadow-lg shadow-blue-500/25 active:scale-95"
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Sending Request...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Send Quote Request
                </>
              )}
            </button>
            <p className="text-xs text-center text-slate-400 mt-2">
              *Your privacy is important to us. We will never share your information.
            </p>
          </form>
        )}

        {step === 2 && (
            <div className="animate-fadeIn text-center py-8">
                <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-10 h-10 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Request Received!</h3>
                <p className="text-slate-600 mb-8 max-w-md mx-auto">
                    Thank you, <strong>{formData.name}</strong>. We have received your query for <strong>{formData.serviceType}</strong> cleaning.
                    <br/><br/>
                    Our team will review your details and contact you at <strong>{formData.email}</strong> shortly.
                </p>
                
                <div className="flex flex-col gap-3">
                  <button
                      onClick={handleReset}
                      className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-all shadow-lg hover:shadow-blue-500/30"
                  >
                      Send Another Request
                  </button>
                  
                  <button 
                    onClick={handleManualEmail}
                    className="text-slate-500 hover:text-blue-600 text-sm flex items-center justify-center gap-1 mt-4 font-medium transition-colors"
                  >
                    <MessageSquare className="w-4 h-4" />
                    Open in Email Client instead
                  </button>
                </div>
            </div>
        )}
      </div>
    </div>
  );
};

export default QuoteForm;