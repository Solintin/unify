import React from "react";
import "../Components/Component-styles.css";
import { FaAngleDown } from "react-icons/fa";

const Faqs = () => {
  const [faqs, setFaqs] = React.useState([
    {
      id: 1,
      isOpen: false,
      question: "Is there a web application for Unify?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. A, tellus volutpat id adipiscing felis lobortis hac vitae dui. Vitae pellentesque tincidunt ornare elit ut ante vel pulvinar mauris. Nisi, fringilla ac ut vulputate. Sagittis dignissim ac euismod arcu nullam. In elementum aenean imperdiet ut risus, ut. Purus commodo scelerisque et quis montes. Leo massa, elit ut ornare eget viverra tortor eget quisque.  faucibus augu",
    },
    {
      id: 2,
      isOpen: false,
      question: " Is Unify free?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. A, tellus volutpat id adipiscing felis lobortis hac vitae dui. Vitae pellentesque tincidunt ornare elit ut ante vel pulvinar mauris. Nisi, fringilla ac ut vulputate. Sagittis dignissim ac euismod arcu nullam. In elementum aenean imperdiet ut risus, ut. Purus commodo scelerisque et quis montes. Leo massa, elit ut ornare eget viverra tortor eget quisque.  faucibus augu",
    },
    {
      id: 3,
      isOpen: false,
      question: "Are In-person classes available?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. A, tellus volutpat id adipiscing felis lobortis hac vitae dui. Vitae pellentesque tincidunt ornare elit ut ante vel pulvinar mauris. Nisi, fringilla ac ut vulputate. Sagittis dignissim ac euismod arcu nullam. In elementum aenean imperdiet ut risus, ut. Purus commodo scelerisque et quis montes. Leo massa, elit ut ornare eget viverra tortor eget quisque.  faucibus augu",
    },
    {
      id: 4,
      isOpen: false,
      question: "Are In-person classes available?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. A, tellus volutpat id adipiscing felis lobortis hac vitae dui. Vitae pellentesque tincidunt ornare elit ut ante vel pulvinar mauris. Nisi, fringilla ac ut vulputate. Sagittis dignissim ac euismod arcu nullam. In elementum aenean imperdiet ut risus, ut. Purus commodo scelerisque et quis montes. Leo massa, elit ut ornare eget viverra tortor eget quisque.  faucibus augu",
    },
    {
      id: 5,
      isOpen: false,
      question: "How does billing work?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. A, tellus volutpat id adipiscing felis lobortis hac vitae dui. Vitae pellentesque tincidunt ornare elit ut ante vel pulvinar mauris. Nisi, fringilla ac ut vulputate. Sagittis dignissim ac euismod arcu nullam. In elementum aenean imperdiet ut risus, ut. Purus commodo scelerisque et quis montes. Leo massa, elit ut ornare eget viverra tortor eget quisque.  faucibus augu",
    },
    {
      id: 6,
      isOpen: false,
      question: "What do the different payment packages mean?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. A, tellus volutpat id adipiscing felis lobortis hac vitae dui. Vitae pellentesque tincidunt ornare elit ut ante vel pulvinar mauris. Nisi, fringilla ac ut vulputate. Sagittis dignissim ac euismod arcu nullam. In elementum aenean imperdiet ut risus, ut. Purus commodo scelerisque et quis montes. Leo massa, elit ut ornare eget viverra tortor eget quisque.  faucibus augu",
    },
    {
      id: 7,
      isOpen: false,
      question: "What do the different payment packages mean?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. A, tellus volutpat id adipiscing felis lobortis hac vitae dui. Vitae pellentesque tincidunt ornare elit ut ante vel pulvinar mauris. Nisi, fringilla ac ut vulputate. Sagittis dignissim ac euismod arcu nullam. In elementum aenean imperdiet ut risus, ut. Purus commodo scelerisque et quis montes. Leo massa, elit ut ornare eget viverra tortor eget quisque.  faucibus augu",
    },
  ]);

  const toggle = (id) => {
    setFaqs(
      faqs.map((item) => {
        if (item.id === id) {
          item.isOpen = !item.isOpen;
          console.log(item.id);
          console.log(item.isOpen);
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
