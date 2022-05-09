import React from "react";
import "../Components/Component-styles.css";
import { FaAngleDown } from "react-icons/fa";

const Faqs = () => {
  const [faqs, setFaqs] = React.useState([
    {
      id: 1,
      isOpen: false,
      question: "What is unify??",
      answer:
        "Unify is a holistic educational app that eliminates manual work & helps tertiary institutions achieve maximum productivity by computerizing student, staff & administration lifecycles and minimizing the hassles of the university administration. Unify Mobile App is customized for schools to actively engage with students and parents to enhance cognitive learning experience wherever and whenever.",
    },
    {
      id: 2,
      isOpen: false,
      question: "Who can use Unify?",
      answer:
        "Any school can use Unify. It is a tailored solution for every stakeholder in a tertiary institution - be it Colleges, Polytechnics, universities, Seminary, etc",
    },
    {
      id: 3,
      isOpen: false,
      question: "How do I get started?",
      answer:
        "To get started, register your interest for a demo here. After you are satisfied with the demo session(s), a member of the team will work with you to ensure smooth onboarding.",
    },
    {
      id: 4,
      isOpen: false,
      question: "Can Unify accept records from other school portals if we want to migrate?",
      answer:
        "Yes, we can format the records and upload them.",
    },
    {
      id: 5,
      isOpen: false,
      question: "Is Unify software installed on the computer?",
      answer:
        "No, Unify is a cloud-based software so it can be accessed from anywhere at any time and with any device that has internet accessibility.",
    },
    {
      id: 6,
      isOpen: false,
      question: "Can I perform financial transactions on the Unify platform?",
      answer:
        "Yes every stakeholder on Unify is financially included. A Unify wallet along with a unify debit card is issued after successful onboarding. Users can pay school bills, send money, buy airtime and perform other transactions anywhere and anytime.",
    },
    {
      id: 7,
      isOpen: false,
      question: "How flexible is the software?",
      answer:
        "Unify is so flexible that certain reports and certain features can be customized to meet the needs and peculiarities of each school.",
    },
    {
      id: 8,
      isOpen: false,
      question: "What if there is a system crash in our school, what happens to the school data?",
      answer:
        "Your data is not stored on your system but in the cloud. So, if your system crashes it does not affect the data stored on Unify.",
    },
    {
      id: 9,
      isOpen: false,
      question: "How secure is Unify?",
      answer:
      "The platform is secured and encrypted through SSL",
    },
  ]);

  const toggle = (id) => {
    setFaqs(
      faqs.map((item) => {
        if (item.id === id) {
          item.isOpen = !item.isOpen;
        
        } else {
          item.isOpen = false;
        }
        return item;
      })
    );
  };
  return (
    <div className="py-20">
      <div className="relative mt-2 mb-5">
        <p className="title-feat-faq"></p>
      </div>
      <div className="absolute hidden md:block -translate-y-20 right-36 border-r-[3px] border-dashed border-[#F1EBE3] h-[1500px]"></div>
      <div className="absolute hidden md:block -translate-y-20 left-36  border-r-[3px] border-dashed border-[#F1EBE3] h-[1500px]"></div>

      <p className="mb-14 -6 fomt-medium text-3xl text-center">FAQs</p>

      <div className="md:w-8/12 mx-auto w-full px-5">
        {faqs.map((item) => (
          <div
            key={item.id}
            onClick={() => {
              toggle(item.id);
            }}
            className="cursor-pointer border-b mb-2"
          >
            <div className="flex justify-between items-center py-2 ">
              <div className="font-medium"> {item.question} </div>
              <div>
                <FaAngleDown
                  className={`${
                    item.isOpen ? "transform rotate-180 duration-500" : ""
                  }`}
                />
              </div>
            </div>
            {
              <div className={`${item.isOpen ? "flex" : "hidden"} py-5`}>
                {item.answer}
              </div>
            }
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faqs;
