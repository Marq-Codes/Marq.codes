import React from "react";
import { useEffect } from "react";
import './ScrollToTop.css'

function ScrollToTop() {
    
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  useEffect(() => {
    const scrollToTopButton = document.getElementById("scroll-to-top");
  
    const handleScroll = () => {
      if (window.scrollY > 300) {
        scrollToTopButton.classList.add("show");
      } else {
        scrollToTopButton.classList.remove("show");
      }
    };
  
    window.addEventListener("scroll", handleScroll);
  
    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

    return (
    <button id="scroll-to-top" className="scroll-to-top" onClick={scrollToTop}>
      ↑
    </button>
    )
}

export default ScrollToTop