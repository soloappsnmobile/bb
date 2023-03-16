import React from 'react';
import './FAQ.css';

function FAQ() {
  const faqItems = [
    {
      question: 'What is Lorem Ipsum?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis neque nunc, et fringilla orci aliquam vel. In bibendum risus in nunc varius, eu malesuada mauris vestibulum. Fusce condimentum, lorem nec elementum vestibulum, velit sapien faucibus magna, ut imperdiet elit nibh vel erat.'
    },
    {
      question: 'How do I use this website?',
      answer: 'Simply navigate to the page you want to view using the menu at the top of the screen. If you have any questions or need further assistance, please don\'t hesitate to contact us.'
    },
    {
      question: 'Can I cancel my subscription?',
      answer: 'Yes, you can cancel your subscription at any time. Please log in to your account and follow the instructions to cancel.'
    }
  ];

  return (
    <div className='main'>
    <div className="faq">
      <h2>Frequently Asked Questions</h2>
      {faqItems.map((item, index) => (
        <div className="faq-item" key={index}>
          <h3 className="question">
            {item.question}
          </h3>
          <hr />
          <div className="answer">
            <p>{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
}

export default FAQ;
