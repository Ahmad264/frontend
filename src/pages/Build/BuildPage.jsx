import React, { useRef, useState } from "react";
import MiniProjectCard from "../../components/Build/MiniProjectCard";
import MidProjectCard from "../../components/Build/MidProjectCard";
import MajorProjectCard from "../../components/Build/MajorProjectCard";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";

// Example data (to be replace with API or context as needed)
const miniProjects = [
  { id: 1, title: "Simple Calculator App", image: "/assets/cards/mini_projects/calculator.png", tags: ["Python", "Beginner"] },
  { id: 2, title: "Basic To-Do List App", image: "/assets/cards/mini_projects/todo.png", tags: ["JS", "Beginner"] },
  { id: 3, title: "Beginner's Blog Website", image: "/assets/cards/mini_projects/blog.png", tags: ["HTML/CSS", "Beginner"] },
  { id: 4, title: "Simple Weather App", image: "/assets/cards/mini_projects/weather.png", tags: ["Python", "Beginner"] },
  { id: 5, title: "Basic Quiz App", image: "/assets/cards/mini_projects/quiz.png", tags: ["JS", "Beginner"] },
  { id: 6, title: "Beginner's Website", image: "/assets/cards/mini_projects/website.png", tags: ["HTML/CSS", "Beginner"] },
];

const midProjects = [
  { id: 1, title: "E-commerce Product Listing Page", image: "/assets/cards/mid_projects/ecommerce.png", tags: ["React", "Node.js", "Intermediate"], locked: true, price: "₹XXX" },
  { id: 2, title: "Data Visualization Dashboard", image: "/assets/cards/mid_projects/dataviz.png", tags: ["Python", "Data Science", "Intermediate"], locked: true, price: "₹XXX" },
  { id: 3, title: "Social Media Feed with API Integration", image: "/assets/cards/mid_projects/social.png", tags: ["React", "Node.js", "Intermediate"], locked: true, price: "₹XXX" },
];

const majorProjects = [
  {
    id: 1,
    title: "Full-Stack E-commerce Platform with Payment Integration",
    description: "Build a complete e-commerce platform with user authentication, product management, shopping cart, and payment gateway integration.",
    tech: "React, Node.js, MongoDB, Advanced",
    duration: "2 - 3 weeks",
    image: "/images/major-ecommerce.png",
    trainer: true,
  },
  {
    id: 2,
    title: "AI-Powered Chatbot with Natural Language Processing",
    description: "Develop an intelligent chatbot using NLP techniques to understand and respond to user queries effectively.",
    tech: "Python, NLP, Machine Learning, Advanced",
    duration: "3 - 4 weeks",
    image: "/images/major-chatbot.png",
    trainer: true,
  },
];

const BuildPage = () => {
  const [showPopup, setShowPopup] = useState(false);
  const scrollRef = useRef(null);
  const navigate = useNavigate();

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -300 : 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <main className="max-w-7xl mx-auto px-4 md:px-8 pt-8 pb-16">
      <h1 className="text-3xl font-bold text-[#001233] dark:text-white mb-8">
        Build Your Skills with Projects
      </h1>

      {/* Mini Projects */}
      <section className="mb-12">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-xl font-semibold text-[#001233] dark:text-white mb-3">Mini Projects</h2>

        </div>
        <div className="flex items-center w-full">
          {/* Left Scroll Button */}
          <button
            onClick={() => scroll("left")}
            className="mr-2 bg-white dark:bg-[#0a1128] rounded-full shadow p-1 hover:bg-gray-100 dark:hover:bg-[#001233]"
            aria-label="Scroll left">
            <ChevronLeftIcon className="w-6 h-6 text-[#001233] dark:text-[#e0e6f5]" />
          </button>
          {/* Cards */}
          <div
            ref={scrollRef}
            className="flex overflow-x-auto pb-2 no-scrollbar gap-5 flex-1"
            style={{ scrollBehavior: "smooth" }}>
            {miniProjects.map((project) => (
              <MiniProjectCard key={project.id} project={project} />
            ))}
          </div>
          {/* Right Scroll Button */}
          <button
            onClick={() => scroll("right")}
            className="ml-2 bg-white dark:bg-[#0a1128] rounded-full shadow p-1 hover:bg-gray-100 dark:hover:bg-[#001233]"
            aria-label="Scroll right">
            <ChevronRightIcon className="w-6 h-6 text-[#001233] dark:text-[#e0e6f5]" />
          </button>
        </div>
        <div className="mt-4 flex justify-center">
          <button
            className="text-base font-medium px-6 py-2 rounded-full bg-[#bceaff] dark:bg-[#001233] text-[#001233] dark:text-[#e0e6f5] shadow border border-gray-200 hover:bg-[#daf0fa] dark:hover:bg-[#0a1128] transition"
            onClick={() => navigate("/build/mini")}>
            See All Mini Projects
          </button>
        </div>
      </section>

      {/* Mid-Level Projects */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-[#001233] dark:text-[#e0e6f5] mb-3">
          Mid-Level Projects
        </h2>
        <div className="flex gap-6 flex-wrap md:flex-nowrap">
          {midProjects.map((project) => (
            <MidProjectCard key={project.id} project={project} setShowPopup={setShowPopup} />
          ))}
        </div>
      </section>

      {/* Major Projects */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-[#001233] dark:text-[#e0e6f5] mb-3">
          Major Projects
        </h2>
        <div className="flex flex-col gap-6">
          {majorProjects.map((project) => (
            <MajorProjectCard key={project.id} project={project} setShowPopup={setShowPopup} />
          ))}
        </div>
      </section>

      {/* UI Source Library */}
      <section className="mt-14">
        <h2 className="text-xl font-semibold text-[#001233] dark:text-[#e0e6f5] mb-1">
          UI Source Library
        </h2>
        <p className="text-[#001233] dark:text-[#e0e6f5] mb-4">
          Explore a collection of reusable UI components to accelerate your development process.
        </p>
        <button
          className="px-5 py-2 rounded-full bg-[#bceaff] dark:bg-[#001233] text-[#001233] dark:text-[#e0e6f5] font-semibold shadow hover:bg-[#daf0fa] dark:hover:bg-[#0a1128] transition"
          onClick={() => navigate("/build/ui")}>
          Explore Components &rarr;
        </button>
      </section>

      {/* Popup for club membership */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-[#001233] p-8 rounded shadow-lg">
            <h3 className="text-lg font-bold mb-2 text-[#001233] dark:text-[#e0e6f5]">
              Club Membership Required
            </h3>
            <p className="mb-4 text-[#001233] dark:text-[#e0e6f5]">
              Please become a club member to access this project.
            </p>
            <button
              onClick={() => {
                window.location.href = "https://your-razorpay-link.com";
              }}
              className="bg-blue-600 text-white px-4 py-2 rounded-full">
              Pay with Razorpay
            </button>
            <button
              onClick={() => setShowPopup(false)}
              className="ml-4 text-gray-600">
              Cancel
            </button>
          </div>
        </div>
      )}
    </main>
  );
};

export default BuildPage;