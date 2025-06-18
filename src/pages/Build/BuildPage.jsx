import React, { useRef, useState, useEffect } from "react";
import MiniProjectCard from "../../components/Build/MiniProjectCard";
import MidProjectCard from "../../components/Build/MidProjectCard";
import MajorProjectCard from "../../components/Build/MajorProjectCard";
import { ChevronLeftIcon, ChevronRightIcon, SunIcon, MoonIcon } from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";

const miniProjects = [
  { id: 1, title: "Simple Calculator App", image: "/assets/cards/mini_projects/calculator.png", tags: ["Python", "Beginner"] },
  { id: 2, title: "Basic To-Do List App", image: "/assets/cards/mini_projects/todo.png", tags: ["JS", "Beginner"] },
  { id: 3, title: "Beginner's Blog Website", image: "/assets/cards/mini_projects/blog.png", tags: ["HTML/CSS", "Beginner"] },
  { id: 4, title: "Simple Weather App", image: "/assets/cards/mini_projects/weather.png", tags: ["Python", "Beginner"] },
  { id: 5, title: "Basic Quiz App", image: "/images/quiz.png", tags: ["JS", "Beginner"] },
  { id: 6, title: "Beginner's Website", image: "/images/website.png", tags: ["HTML/CSS", "Beginner"] },
];

const midProjects = [
  { id: 1, title: "E-commerce Product Listing Page", image: "/images/ecommerce.png", tags: ["React", "Node.js", "Intermediate"], locked: true, price: "₹XXX" },
  { id: 2, title: "Data Visualization Dashboard", image: "/images/dataviz.png", tags: ["Python", "Data Science", "Intermediate"], locked: true, price: "₹XXX" },
  { id: 3, title: "Social Media Feed with API Integration", image: "/images/social.png", tags: ["React", "Node.js", "Intermediate"], locked: true, price: "₹XXX" },
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
  const [dark, setDark] = useState(false);
  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

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
    <div className="min-h-screen font-inter bg-[linear-gradient(135deg,#daf0fa_0%,#bceaff_50%,#bceaff_100%)] dark:bg-[linear-gradient(135deg,#1e293b_0%,#334155_50%,#334155_100%)]">
      {/* Header */}
      <header className="flex items-center justify-between px-8 py-4">
        <div className="flex items-center gap-2">
          <a href="/">
            <img src="/assets/logo.png" alt="TechLearn Solutions" className="h-8 w-auto" />
          </a>
          <span className="font-bold text-lg text-blue-900 dark:text-blue-100">
            TeachLearn Solutions
          </span>
        </div>
        <nav className="hidden md:flex gap-8 text-gray-700 dark:text-gray-200 font-medium">
          <a href="#" className="hover:text-blue-700">Learn</a>
          <a href="#" className="hover:text-blue-700">Courses</a>
          <a href="#" className="hover:text-blue-700">Get Started</a>
        </nav>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setDark((prev) => !prev)}
            className="p-2 rounded-full bg-white dark:bg-slate-700 border border-gray-200 shadow hover:bg-gray-100 dark:hover:bg-slate-800 transition"
            aria-label="Toggle dark mode">
            {dark ? (
              <SunIcon className="w-5 h-5 text-yellow-400" />
            ) : (
              <MoonIcon className="w-5 h-5 text-gray-700" />
            )}
          </button>
          <button className="px-4 py-1.5 bg-white dark:bg-slate-700 border border-gray-200 rounded-full font-semibold text-blue-700 dark:text-blue-200 hover:bg-gray-100 dark:hover:bg-slate-800 transition">
            Sign In
          </button>
          <img
            src="/assets/avatar.png"
            alt="profile"
            className="w-8 h-8 rounded-full border border-gray-300"/>
        </div>
      </header>

      {/* Popup for club membership */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded shadow-lg">
            <h3 className="text-lg font-bold mb-2">Club Membership Required</h3>
            <p className="mb-4">Please become a club member to access this project.</p>
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

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 md:px-8 pt-8 pb-16">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8">
          Build Your Skills with Projects
        </h1>

        {/* Mini Projects */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-3">
            Mini Projects
          </h2>
          <div className="flex items-center w-full">
            <button
              onClick={() => scroll("left")}
              className="mr-2 bg-white dark:bg-slate-700 rounded-full shadow p-1 hover:bg-gray-100 dark:hover:bg-slate-800"
              aria-label="Scroll left">
              <ChevronLeftIcon className="w-6 h-6 text-blue-700 dark:text-blue-200" />
            </button>
            <div
              ref={scrollRef}
              className="flex overflow-x-auto pb-2 no-scrollbar gap-5 flex-1"
              style={{ scrollBehavior: "smooth" }}>
              {miniProjects.map((project) => (
                <MiniProjectCard key={project.id} project={project} />
              ))}
            </div>
            <button
              onClick={() => scroll("right")}
              className="ml-2 bg-white dark:bg-slate-700 rounded-full shadow p-1 hover:bg-gray-100 dark:hover:bg-slate-800"
              aria-label="Scroll right">
              <ChevronRightIcon className="w-6 h-6 text-blue-700 dark:text-blue-200" />
            </button>
          </div>
          <div className="mt-4 flex justify-center">
            <button className="text-base font-medium px-6 py-2 rounded-full bg-white dark:bg-slate-700 shadow border border-gray-200 hover:bg-gray-100 dark:hover:bg-slate-800 transition">
              See All Mini Projects
            </button>
          </div>
        </section>

        {/* Mid-Level Projects */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-3">
            Mid-Level Projects
          </h2>
          <div className="flex gap-6 flex-wrap md:flex-nowrap">
            {midProjects.map((project) => (
              <MidProjectCard key={project.id} project={project} setShowPopup={setShowPopup} />
            ))}
          </div>
        </section>

        {/* Major Projects */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-3">Major Projects</h2>
          <div className="flex flex-col gap-6">
            {majorProjects.map((project) => (
              <MajorProjectCard key={project.id} project={project} setShowPopup={setShowPopup} />
            ))}
          </div>
        </section>

        {/* UI Source Library */}
        <section className="mt-14">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-1">UI Source Library</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Explore a collection of reusable UI components to accelerate your development process.
          </p>
          <button
            className="px-5 py-2 rounded-full bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition"
            onClick={() => navigate("/build/ui")}>
            Explore Components &rarr;
          </button>
        </section>
      </main>
    </div>
  );
};
export default BuildPage;