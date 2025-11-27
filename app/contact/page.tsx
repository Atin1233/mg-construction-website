import type { Metadata } from 'next';
import { COMPANY_INFO } from '@/lib/constants';
import ContactForm from '@/components/contact-form';
import { AnimatedSection } from '@/components/section';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: `Contact ${COMPANY_INFO.name} for your concrete and foundation needs. Located at ${COMPANY_INFO.fullAddress}. Call ${COMPANY_INFO.phone} or fill out our contact form.`,
  openGraph: {
    title: `Contact Us | ${COMPANY_INFO.name}`,
    description: 'Get in touch for a free consultation and quote on your construction project.',
  },
};

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-navy to-navy-700 text-white">
        <div className="container-custom text-center">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Get In Touch
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Ready to start your project? Contact us for a free consultation and quote.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <AnimatedSection>
              <div>
                <h2 className="text-3xl font-bold text-navy mb-8">Contact Information</h2>
                
                <div className="space-y-6 mb-8">
                  {/* Phone Numbers */}
                  <div>
                    <h3 className="text-lg font-semibold text-navy mb-3">Phone</h3>
                    <div className="space-y-2">
                      <a
                        href={`tel:${COMPANY_INFO.phone.replace(/\s/g, '')}`}
                        className="block text-gray-700 hover:text-accent transition-colors"
                      >
                        {COMPANY_INFO.phone}
                      </a>
                      <a
                        href={`tel:${COMPANY_INFO.altPhone.replace(/\s/g, '')}`}
                        className="block text-gray-700 hover:text-accent transition-colors"
                      >
                        {COMPANY_INFO.altPhone}
                      </a>
                    </div>
                  </div>

                  {/* Address */}
                  <div>
                    <h3 className="text-lg font-semibold text-navy mb-3">Address</h3>
                    <address className="text-gray-700 not-italic">
                      {COMPANY_INFO.address}<br />
                      {COMPANY_INFO.city}, {COMPANY_INFO.state} {COMPANY_INFO.zip}
                    </address>
                  </div>

                  {/* Hours */}
                  <div>
                    <h3 className="text-lg font-semibold text-navy mb-3">Business Hours</h3>
                    <div className="text-gray-700 space-y-1">
                      <p>Monday - Friday: 7:00 AM - 5:00 PM</p>
                      <p>Saturday: By appointment</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>

                {/* Google Maps */}
                <div className="mt-8">
                  <h3 className="text-lg font-semibold text-navy mb-3">Find Us</h3>
                  <div className="rounded-lg overflow-hidden shadow-lg">
                    <iframe
                      width="100%"
                      height="300"
                      style={{ border: 0 }}
                      loading="lazy"
                      allowFullScreen
                      referrerPolicy="no-referrer-when-downgrade"
                      src={`https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || 'YOUR_API_KEY'}&q=${encodeURIComponent(COMPANY_INFO.fullAddress)}`}
                      title="M.G. Construction Co. Location"
                      className="w-full"
                    />
                  </div>
                  <p className="text-sm text-gray-500 mt-2">
                    Note: Map may require Google Maps API key for full functionality
                  </p>
                </div>
              </div>
            </AnimatedSection>

            {/* Contact Form */}
            <AnimatedSection>
              <div>
                <h2 className="text-3xl font-bold text-navy mb-8">Send Us a Message</h2>
                <ContactForm />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}

