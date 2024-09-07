import React, { useState, useRef } from 'react';

interface FAQSectionProps {
  faqRef: React.RefObject<HTMLElement>;
}

const FAQSection: React.FC<FAQSectionProps> = ({ faqRef }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: 'How can I reset my password?',
      answer: `To reset your password, go to the login page, click on 'Forgot password,' and follow the instructions to reset your password.`
    },
    {
      question: 'How do I update my billing information?',
      answer: `To update your billing information, go to your account settings, select 'Billing Information,' and update your details accordingly.`
    },
    {
      question: 'How can I contact customer support?',
      answer: `You can contact customer support by clicking on the 'Support' link in the footer of the website and filling out the contact form.`
    },
    {
      question: 'How do I delete my account?',
      answer: `To delete your account, go to your account settings, scroll down to the 'Delete Account' section, and follow the instructions.`
    }
  ];

  return (
    <section className="py-24 bg-black" ref={faqRef}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-4xl font-manrope text-center text-[#c8c8c9] leading-[3.25rem]">
            Frequently asked questions
          </h2>
        </div>
        <div className="accordion-group" data-accordion="default-accordion">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`accordion border border-solid border-gray-300 p-4 rounded-xl transition duration-500 ${
                activeIndex === index
                  ? 'accordion-active:bg-indigo-50 accordion-active:border-indigo-600 active'
                  : ''
              } mb-8 lg:p-4`}
              id={`basic-heading-${index + 1}-with-icon`}
            >
              <button
                className={`accordion-toggle group inline-flex items-center justify-between text-left text-lg font-normal leading-8 text-[#c8c8c9] w-full transition duration-500 hover:text-violet-700 ${
                  activeIndex === index
                    ? 'accordion-active:font-medium accordion-active:text-indigo-600'
                    : ''
                }`}
                aria-controls={`basic-collapse-${index + 1}-with-icon`}
                onClick={() => toggleAccordion(index)}
              >
                <h5>{faq.question}</h5>
                <svg
                  className={`w-6 h-6 text-[#c8c8c9] transition duration-1000 ${
                    activeIndex === index ? 'hidden' : 'block'
                  } group-hover:text-indigo-600`}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 12H18M12 18V6"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                <svg
                  className={`w-6 h-6 text-[#c8c8c9] transition duration-500 ${
                    activeIndex === index ? 'block' : 'hidden'
                  } group-hover:text-indigo-600`}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 12H18"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </button>
              <div
                id={`basic-collapse-${index + 1}-with-icon`}
                className="accordion-content w-full overflow-hidden pr-4"
                aria-labelledby={`basic-heading-${index + 1}`}
                style={{ maxHeight: activeIndex === index ? '250px' : '0' }}
              >
                <p className="text-base text-[#c8c8c9] font-normal leading-6 mt-3">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
