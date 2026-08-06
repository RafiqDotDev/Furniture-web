import React, { useState } from "react";
import { useCart } from "~/context/CartContext";

export default function Contact() {
  const { showToast } = useCart();

  const [bookingForm, setBookingForm] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "Residential Furniture",
    preferredDate: "",
    message: "",
  });

  const [faqOpenIndex, setFaqOpenIndex] = useState<number | null>(0);

  const handleSubmitBooking = (e: React.FormEvent) => {
    e.preventDefault();
    showToast("Consultation request received! Our Peshawar team will call you shortly.");
    setBookingForm({
      name: "",
      email: "",
      phone: "",
      projectType: "Residential Furniture",
      preferredDate: "",
      message: "",
    });
  };

  const FAQS = [
    {
      q: "Do you deliver to homes in Peshawar and other cities?",
      a: "Yes! We offer free White-Glove delivery and installation across Peshawar (Hayatabad, University Town, Cantt, Warsak Road), Islamabad, Rawalpindi, Lahore, and nationwide across Pakistan.",
    },
    {
      q: "Can I inspect furniture samples before placing an order?",
      a: "Absolutely. You can visit our flagship showroom on University Road, Peshawar, or request wood and fabric swatches delivered to your home.",
    },
    {
      q: "What payment methods are accepted?",
      a: "We accept Cash on Delivery (COD), Direct Bank Transfer (Meezan Bank / HBL), and major Credit/Debit cards upon delivery.",
    },
    {
      q: "Do you offer custom furniture sizing?",
      a: "Yes, our local workshop crafts custom dimensions for drawing rooms, dining halls, and bedrooms based on your home measurements.",
    },
  ];

  return (
    <div className="pt-24 sm:pt-32 pb-16 sm:pb-24 max-w-[1440px] mx-auto px-4 sm:px-6 md:px-16">
      {/* Page Header */}
      <header className="mb-12 sm:mb-20 text-center max-w-3xl mx-auto">
        <span className="font-sans text-xs tracking-[0.3em] uppercase text-secondary mb-2.5 block">
          Peshawar Showroom & Customer Support
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl md:text-6xl text-primary font-normal mb-4 sm:mb-6">Contact Us</h1>
        <p className="font-sans text-sm sm:text-base text-secondary font-light leading-relaxed">
          Visit our flagship showroom on University Road, Peshawar, or contact our concierge team for custom design orders and home visits across Pakistan.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-16 sm:mb-28">
        {/* Booking Form */}
        <div className="lg:col-span-7 glass-panel p-5 sm:p-8 md:p-12 rounded-3xl border border-black/5 shadow-2xl space-y-6">
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl text-primary font-normal mb-2">Book a Free Design Consultation</h2>
            <p className="font-sans text-xs text-secondary font-light">
              Connect with our Peshawar interior design experts in-person or at your home.
            </p>
          </div>

          <form onSubmit={handleSubmitBooking} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="font-sans text-[11px] uppercase tracking-wider text-secondary block mb-1">
                  Your Full Name
                </label>
                <input
                  type="text"
                  required
                  value={bookingForm.name}
                  onChange={(e) => setBookingForm({ ...bookingForm, name: e.target.value })}
                  placeholder="e.g. Muhammad Ahmad"
                  className="w-full px-4 py-3 rounded-xl border border-outline-variant/40 font-sans text-xs bg-white text-primary focus:outline-none focus:border-primary"
                />
              </div>

              <div>
                <label className="font-sans text-[11px] uppercase tracking-wider text-secondary block mb-1">
                  Phone / WhatsApp Number
                </label>
                <input
                  type="text"
                  required
                  value={bookingForm.phone}
                  onChange={(e) => setBookingForm({ ...bookingForm, phone: e.target.value })}
                  placeholder="0300 1234567"
                  className="w-full px-4 py-3 rounded-xl border border-outline-variant/40 font-sans text-xs bg-white text-primary focus:outline-none focus:border-primary"
                />
              </div>
            </div>

            <div>
              <label className="font-sans text-[11px] uppercase tracking-wider text-secondary block mb-1">
                Email Address
              </label>
              <input
                type="email"
                required
                value={bookingForm.email}
                onChange={(e) => setBookingForm({ ...bookingForm, email: e.target.value })}
                placeholder="ahmad@example.pk"
                className="w-full px-4 py-3 rounded-xl border border-outline-variant/40 font-sans text-xs bg-white text-primary focus:outline-none focus:border-primary"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="font-sans text-[11px] uppercase tracking-wider text-secondary block mb-1">
                  Project Type
                </label>
                <select
                  value={bookingForm.projectType}
                  onChange={(e) => setBookingForm({ ...bookingForm, projectType: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-outline-variant/40 font-sans text-xs bg-white text-primary focus:outline-none focus:border-primary cursor-pointer"
                >
                  <option>Residential Living Room</option>
                  <option>Drawing Room / Guest Lounge</option>
                  <option>Bedroom Furniture</option>
                  <option>Custom Woodwork Commission</option>
                </select>
              </div>

              <div>
                <label className="font-sans text-[11px] uppercase tracking-wider text-secondary block mb-1">
                  Preferred Date
                </label>
                <input
                  type="date"
                  value={bookingForm.preferredDate}
                  onChange={(e) => setBookingForm({ ...bookingForm, preferredDate: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-outline-variant/40 font-sans text-xs bg-white text-primary focus:outline-none focus:border-primary"
                />
              </div>
            </div>

            <div>
              <label className="font-sans text-[11px] uppercase tracking-wider text-secondary block mb-1">
                Message or Custom Requirements
              </label>
              <textarea
                rows={4}
                value={bookingForm.message}
                onChange={(e) => setBookingForm({ ...bookingForm, message: e.target.value })}
                placeholder="Share your home location or design ideas..."
                className="w-full px-4 py-3 rounded-xl border border-outline-variant/40 font-sans text-xs bg-white text-primary focus:outline-none focus:border-primary"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-on-primary font-sans text-xs tracking-[0.2em] uppercase py-4 rounded-xl hover:bg-surface-tint transition-all shadow-xl font-bold active:scale-[0.99]"
            >
              Submit Consultation Request
            </button>
          </form>
        </div>

        {/* Showrooms & Contact Direct */}
        <div className="lg:col-span-5 space-y-6">
          <div className="glass-panel p-5 sm:p-8 rounded-3xl border border-black/5 space-y-4">
            <h3 className="font-serif text-xl sm:text-2xl text-primary font-normal border-b border-outline-variant/30 pb-3">
              Pakistan Showrooms
            </h3>

            <div className="space-y-6 pt-2 font-sans text-xs text-secondary">
              <div>
                <h4 className="font-serif text-base sm:text-lg text-primary font-medium">Peshawar Flagship Showroom</h4>
                <p>Main University Road, Near Tehkal, Peshawar</p>
                <p className="text-[11px] text-secondary/80">Mon – Sat: 10:00 AM – 9:00 PM</p>
                <p className="text-primary font-medium mt-1">+92 91 584 1234 / +92 300 555 1234</p>
              </div>

              <div className="border-t border-outline-variant/20 pt-4">
                <h4 className="font-serif text-base sm:text-lg text-primary font-medium">Islamabad Atelier</h4>
                <p>F-7 Markaz, Main Boulevard, Islamabad</p>
                <p className="text-[11px] text-secondary/80">Mon – Sat: 11:00 AM – 9:00 PM</p>
                <p className="text-primary font-medium mt-1">+92 51 265 9876</p>
              </div>

              <div className="border-t border-outline-variant/20 pt-4">
                <h4 className="font-serif text-base sm:text-lg text-primary font-medium">Lahore Gallery</h4>
                <p>Gulberg III, M.M. Alam Road, Lahore</p>
                <p className="text-[11px] text-secondary/80">Mon – Sat: 11:00 AM – 9:00 PM</p>
                <p className="text-primary font-medium mt-1">+92 42 357 54321</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Accordion Section */}
      <section className="max-w-4xl mx-auto border-t border-outline-variant/30 pt-12 sm:pt-16">
        <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-primary font-normal mb-6 sm:mb-8 text-center">
          Frequently Asked Questions
        </h2>

        <div className="divide-y divide-outline-variant/30">
          {FAQS.map((faq, idx) => (
            <div key={idx} className="py-4 sm:py-5">
              <button
                onClick={() => setFaqOpenIndex(faqOpenIndex === idx ? null : idx)}
                className="w-full flex justify-between items-center text-left font-serif text-lg sm:text-xl text-primary font-normal focus:outline-none py-1"
              >
                <span className="pr-4">{faq.q}</span>
                <span className="material-symbols-outlined text-secondary transition-transform duration-300 flex-shrink-0">
                  {faqOpenIndex === idx ? "remove" : "add"}
                </span>
              </button>
              {faqOpenIndex === idx && (
                <p className="mt-2.5 font-sans text-xs text-secondary leading-relaxed font-light animate-in fade-in duration-200">
                  {faq.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
