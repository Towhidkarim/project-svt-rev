import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: 'When can I start the SVT course?',
    answer:
      'You can start anytime that suits you. We offer open enrolments. You will start the day you enrol. ',
    value: 'item-1',
  },
  {
    question: 'What support will I get with my course?',
    answer:
      'We employ all of our assessors and they are based at our offices. You will be assigned one Assessor/Tutor throughout the duration of the course so you know who to deal with and build that important rapport. There is no limit to the support you can ask for. This is available via phone, Instant messenger, email and Teams. You will also be able to contact a course advisor and use our Website chat facility. Support is uncapped.',
    value: 'item-2',
  },
  {
    question: 'Where are NVQ qualifications recognised?',
    answer:
      'City & Guilds, IOSH,  ILM, CMI and ProQual are internationally recognised as an institution. They are heavily recognised in the UK, Europe, Middle East and Australia.',
    value: 'item-3',
  },
  {
    question: 'How long does it take to gain an NVQ Qualification?',
    answer:
      'Most candidates complete a course in 3 - 12 months depending on the level. Some in as little as 3 months depending on what time you have available and what evidence you may already have. Should you wish to gain GradIOSH you must complete unit 611 for City & Guilds unless you are an experienced practitioner or have a strong Safety educational background and up to date CPD. ProQual you will need to apply with IOSH for GradIOSH. ',
    value: 'item-4',
  },
  {
    question: 'Will an Assessor visit my workplace?',
    answer:
      'Yes. Towards the end of your course, your Assessor will conduct an onsite observation at your workplace to make sure you are putting into practice what you have been studying. We observe you not the business. This only applies to City & Guilds care courses.',
    value: 'item-5',
  },
];

export const FAQSection = () => {
  return (
    <section id='faq' className='container md:w-[700px] py-24 sm:py-32'>
      <div className='text-center mb-8'>
        <h2 className='text-lg text-primary text-center mb-2 tracking-wider'>
          FAQS
        </h2>

        <h2 className='text-3xl md:text-4xl text-center font-bold'>
          Common Questions
        </h2>
      </div>

      <Accordion type='single' collapsible className='AccordionRoot'>
        {FAQList.map(({ question, answer, value }) => (
          <AccordionItem key={value} value={value}>
            <AccordionTrigger className='text-left'>
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};
