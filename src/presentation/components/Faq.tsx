const questions = [
  {
    question: 'Do I need to be in crisis before I ask for help?',
    answer:
      'No. You can seek support whenever something feels difficult, unfamiliar, or persistent. Early support can make the next step feel more manageable.',
  },
  {
    question: 'What happens when I call a crisis hotline?',
    answer:
      'A trained responder will listen without judgment, help you talk through what is happening, and work with you on a safer next step. You do not need to prepare a speech.',
  },
  {
    question: 'Is the daily check-in private?',
    answer:
      'Yes. It is stored only in this browser on this device using local storage. This website has no account system or backend, and the check-in is not sent anywhere.',
  },
  {
    question: 'Is this website professional mental health care?',
    answer:
      'No. This is an awareness and navigation resource. It cannot diagnose or treat a condition. A qualified health professional can help with assessment and ongoing care.',
  },
];

export function Faq() {
  return (
    <section className="section faq-section" aria-labelledby="faq-title">
      <div className="container faq-grid">
        <div className="section-heading">
          <p className="eyebrow">A little more clarity</p>
          <h2 id="faq-title">Questions you may be carrying.</h2>
        </div>
        <div className="faq-list">
          {questions.map((item, index) => (
            <details key={item.question} open={index === 0}>
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
