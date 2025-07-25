'use client';

import { useState } from 'react';
import { ContactFormData } from '@/types';
import { services } from '@/data/services';

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    service: 'Stay Over Service',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: 'Stay Over Service',
      message: ''
    });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-50 p-8 rounded-xl">
      <h3 className="text-2xl font-semibold text-gray-800 mb-6">Send us a Message</h3>
      <div className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pet-purple focus:border-transparent"
            required
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pet-purple focus:border-transparent"
            required
          />
        </div>
        
        <div>
          <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pet-purple focus:border-transparent"
            required
          />
        </div>
        
        <div>
          <label htmlFor="service" className="block text-gray-700 font-medium mb-2">
            Service Needed
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pet-purple focus:border-transparent"
          >
            {services.map((service) => (
              <option key={service.id} value={service.title}>
                {service.title}
              </option>
            ))}
            <option value="Other">Other</option>
          </select>
        </div>
        
        <div>
          <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pet-purple focus:border-transparent"
            placeholder="Tell us about your pet and your needs..."
            required
          />
        </div>
        
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-pet-purple to-pet-teal text-white py-3 rounded-lg font-semibold hover:from-pet-teal hover:to-pet-purple transition-colors"
        >
          Send Message
        </button>
      </div>
    </form>
  );
}