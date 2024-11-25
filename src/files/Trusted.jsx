import React, { useState, useEffect, useRef } from "react";

export function Trusted() {
  const [projects, setProjects] = useState(0);
  const [completion, setCompletion] = useState(0);
  const [percent, setPercent] = useState(0);
  const [number4, setNumber4] = useState(0);
  const sectionRef = useRef(null);

  const resetCounts = () => {
    // Reset counts before starting the animation
    setProjects(0);
    setCompletion(0);
    setPercent(0);
    setNumber4(0);
  };

  const startCounting = () => {
    const projectCount = 500; // Target value for projects
    const completePercent = 450; // Target value for completion percentage
    const otherPercent = 79; // Target value for another percent value
    const number4Value = 200; // Target value for number 4

    // Function to start counting
    const interval1 = setInterval(() => {
      setProjects((prev) => {
        if (prev < projectCount) return prev + 1;
        clearInterval(interval1);
        return projectCount;
      });
    }, 5); // Adjust speed of counting

    const interval2 = setInterval(() => {
      setCompletion((prev) => {
        if (prev < completePercent) return prev + 1;
        clearInterval(interval2);
        return completePercent;
      });
    }, 1);

    const interval3 = setInterval(() => {
      setPercent((prev) => {
        if (prev < otherPercent) return prev + 1;
        clearInterval(interval3);
        return otherPercent;
      });
    }, 25);

    const interval4 = setInterval(() => {
      setNumber4((prev) => {
        if (prev < number4Value) return prev + 1;
        clearInterval(interval4);
        return number4Value;
      });
    }, 10);

    // Cleanup intervals when component unmounts
    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
      clearInterval(interval3);
      clearInterval(interval4);
    };
  };

  useEffect(() => {
    // IntersectionObserver to detect when the section is in view
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          resetCounts(); // Reset counts before starting animation
          startCounting(); // Start the animation when the section enters the viewport
        }
      },
      {
        threshold: 0.5, // Trigger when 50% of the section is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Cleanup observer on component unmount
    return () => {
      if (sectionRef.current) {
        observer.disconnect();
      }
    };
  }, []); // Only run once when the component is mounted

  return (
    <section ref={sectionRef} className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto justify-between">
        <div className="flex flex-wrap -m-4 text-center">
          <div className="p-4 sm:w-1/4 w-1/2">
            <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
              {projects}+
            </h2>
            <p className="leading-relaxed">Total Project</p>
          </div>
          <div className="p-4 sm:w-1/4 w-1/2">
            <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
              {completion}
            </h2>
            <p className="leading-relaxed">Complete</p>
          </div>
          <div className="p-4 sm:w-1/4 w-1/2">
            <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
              {percent}%
            </h2>
            <p className="leading-relaxed">Good reviews</p>
          </div>
          <div className="p-4 sm:w-1/4 w-1/2">
            <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
              {number4}+
            </h2>
            <p className="leading-relaxed">Trusted by over clients</p>
          </div>
        </div>
      </div>
    </section>
  );
}
