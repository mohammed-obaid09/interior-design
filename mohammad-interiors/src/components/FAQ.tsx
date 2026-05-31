import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

export default function FAQ() {
  const faqs = [
    {
      question: 'How long does an interior design project take?',
      answer: 'Most residential projects take 6–12 weeks, depending on scope and customization.',
    },
    {
      question: 'Do you provide 3D designs?',
      answer: 'Yes, we provide detailed 3D visualizations before execution so you can see exactly how your space will look.',
    },
    {
      question: 'Do you handle project execution?',
      answer: 'Yes, we offer end-to-end design and execution services, managing everything from concept to completion.',
    },
    {
      question: 'What is the consultation fee?',
      answer: 'Initial consultation starts from ₹2,000. This includes an on-site visit and basic space planning recommendations.',
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 sm:py-32 bg-secondary">
      <div className="max-w-4xl mx-auto px-6 sm:px-12">
        <div className="text-center mb-16">
          <h2 className="text-sm uppercase tracking-[0.3em] text-accent mb-4 font-semibold">Support</h2>
          <h3 className="text-4xl sm:text-5xl font-serif text-primary">Common Questions</h3>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full text-left px-8 py-6 flex justify-between items-center focus:outline-none"
              >
                <span className="font-serif text-lg text-primary">{faq.question}</span>
                <span className="text-accent ml-4 flex-shrink-0">
                  {openIndex === idx ? <Minus size={20} /> : <Plus size={20} />}
                </span>
              </button>
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-6 text-gray-500 font-light leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
