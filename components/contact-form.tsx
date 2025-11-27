'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  projectDescription: string;
  file?: FileList;
}

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const formData = new FormData();
      formData.append('name', data.name);
      formData.append('email', data.email);
      formData.append('phone', data.phone);
      formData.append('projectDescription', data.projectDescription);
      
      if (data.file && data.file[0]) {
        formData.append('file', data.file[0]);
      }

      const response = await fetch('/api/contact', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setSubmitStatus('success');
        reset();
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-navy mb-2">
          Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="name"
          {...register('name', { required: 'Name is required' })}
          className="w-full px-4 py-3 border border-concrete-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
          placeholder="Your full name"
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-navy mb-2">
          Email <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          id="email"
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Invalid email address',
            },
          })}
          className="w-full px-4 py-3 border border-concrete-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
          placeholder="your.email@example.com"
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
        )}
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-navy mb-2">
          Phone <span className="text-red-500">*</span>
        </label>
        <input
          type="tel"
          id="phone"
          {...register('phone', { required: 'Phone number is required' })}
          className="w-full px-4 py-3 border border-concrete-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
          placeholder="(732) 555-1234"
        />
        {errors.phone && (
          <p className="mt-1 text-sm text-red-500">{errors.phone.message}</p>
        )}
      </div>

      {/* Project Description */}
      <div>
        <label htmlFor="projectDescription" className="block text-sm font-medium text-navy mb-2">
          Project Description <span className="text-red-500">*</span>
        </label>
        <textarea
          id="projectDescription"
          {...register('projectDescription', { required: 'Project description is required' })}
          rows={6}
          className="w-full px-4 py-3 border border-concrete-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all resize-none"
          placeholder="Tell us about your project..."
        />
        {errors.projectDescription && (
          <p className="mt-1 text-sm text-red-500">{errors.projectDescription.message}</p>
        )}
      </div>

      {/* File Upload */}
      <div>
        <label htmlFor="file" className="block text-sm font-medium text-navy mb-2">
          File Upload (Optional)
        </label>
        <input
          type="file"
          id="file"
          {...register('file')}
          accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
          className="w-full px-4 py-3 border border-concrete-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-concrete-200 file:text-navy hover:file:bg-concrete-300"
        />
        <p className="mt-1 text-sm text-gray-500">
          Accepted formats: PDF, DOC, DOCX, JPG, PNG (Max 10MB)
        </p>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>

      {/* Status Messages */}
      {submitStatus === 'success' && (
        <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
          <p className="font-medium">Thank you!</p>
          <p className="text-sm">Your message has been sent successfully. We'll get back to you soon.</p>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-800">
          <p className="font-medium">Error</p>
          <p className="text-sm">Something went wrong. Please try again or call us directly.</p>
        </div>
      )}
    </form>
  );
}

