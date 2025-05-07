import React from 'react'
import { useEffect } from "react";
import './Header.css'
function Header() {
    // Function to toggle the mobile menu
      function toggleMenu(event) {
        event.stopPropagation();
    
        const menuList = document.getElementById("menu-list");
    
        if (menuList) {
          if (menuList.classList.contains("show-menu")) {
            menuList.style.opacity = "0";
            menuList.style.visibility = "hidden";
            setTimeout(() => {
              menuList.style.display = "none";
            }, 300);
            menuList.classList.remove("show-menu");
          } else {
            menuList.style.display = "flex";
            setTimeout(() => {
              menuList.style.opacity = "1";
              menuList.style.visibility = "visible";
            }, 10);
            menuList.classList.add("show-menu");
          }
        }
    
        if (menuList.classList.contains("show-menu")) {
          document.addEventListener("click", closeMenuOnClickOutside);
        } else {
          document.removeEventListener("click", closeMenuOnClickOutside);
        }
      }
    
      // Function to close the mobile menu when clicking outside
      function closeMenuOnClickOutside(event) {
        const menuList = document.getElementById("menu-list");
        const menuToggle = document.getElementById("show-menu");
    
        if (!menuList.contains(event.target) && event.target !== menuToggle) {
          menuList.style.opacity = "0";
          menuList.style.visibility = "hidden";
          setTimeout(() => {
            menuList.style.display = "none";
          }, 300);
          menuList.classList.remove("show-menu");
          document.removeEventListener("click", closeMenuOnClickOutside);
        }
      }

      // Function to handle smooth scrolling
  function handleNavLinkClick(event) {
    event.preventDefault();
    const targetId = event.target.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }

    const menuList = document.getElementById("menu-list");
    if (menuList && menuList.classList.contains("show-menu")) {
      menuList.style.opacity = "0";
      menuList.style.visibility = "hidden";
      setTimeout(() => {
        menuList.style.display = "none";
      }, 300);
      menuList.classList.remove("show-menu");
    }
  }

  // Click event listeners to nav links
  useEffect(() => {
    const navLinks = document.querySelectorAll(".nav-item a");
    navLinks.forEach((link) => {
      link.addEventListener("click", handleNavLinkClick);
    });

    // Cleanup event listeners on component unmount
    return () => {
      navLinks.forEach((link) => {
        link.removeEventListener("click", handleNavLinkClick);
      });
    };
  }, []);

    return (
        <header>
        <h1><a href="/https://marq-codes.github.io/Marq.codes/">MARQ.</a><span>CODES</span></h1>
        <nav>
          <div className="menu-toggle" id="show-menu" onClick={toggleMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 100" width="30" height="30" fill="#111447">
              <rect x="10" y="10" width="100" height="15" rx="7" ry="7" />
              <rect x="10" y="40" width="100" height="15" rx="7" ry="7" />
              <rect x="10" y="70" width="100" height="15" rx="7" ry="7" />
            </svg>
          </div>
          <ul className="menu" id="menu-list">
            <li className="nav-item"><a href="#projects">Projects</a></li>
            <li className="nav-item"><a href="#tech-stack">Tech Stack</a></li>
            <li className="nav-item"><a href="#about-me">About Me</a></li>
            <li className="nav-item"><a href="#contact-me">Get in Touch</a></li>
          </ul>
        </nav>
      </header>
    )
  }

export default Header