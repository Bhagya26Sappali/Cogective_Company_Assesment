# Teknic Euchner Website

A responsive industrial website developed for **Teknic Euchner**, based on a Figma design. The project focuses on accurately converting the provided UI design into a functional, responsive, and interactive web page using HTML, CSS, and JavaScript.

## 🚀 Project Overview

The website presents Teknic Euchner's industrial sensing, switching, control, and safety solutions.

The implementation includes:

* Responsive navigation
* Hero section with background video
* Company introduction
* Engineering experience section
* Product showcase
* Why Teknic Euchner section
* Industries and applications
* German engineering and Indian manufacturing section
* Quality section
* Dealer call-to-action
* Footer with contact information and social links
* Scroll-based animations
* Mobile navigation menu
* Smooth scrolling
* Active navigation highlighting

---

## 🛠️ Technologies Used

### HTML5

Used to create the structure and semantic content of the website.

Main HTML elements used:

* `<header>`
* `<nav>`
* `<section>`
* `<article>`
* `<footer>`
* `<h1>`, `<h2>`, `<h3>`, `<h4>`
* `<p>`
* `<a>`
* `<img>`
* `<video>`
* `<picture>`
* `<button>`

Semantic HTML was used to organize different sections of the website.

---

### CSS3

CSS is used for the complete visual design and responsive layout.

#### CSS features used

* CSS Variables
* Flexbox
* CSS Grid
* Media Queries
* Absolute and Fixed Positioning
* CSS Transitions
* CSS Transforms
* `clip-path()`
* Border styling
* Gradients
* Responsive typography
* Hover effects
* Scroll reveal animations
* Custom buttons
* Custom card layouts

#### CSS Variables

Reusable colors and layout values are defined using CSS custom properties.

Example:

css
:root {
  --red: #e60000;
  --dark: #0f0f0f;
  --dark2: #151b20;
  --white: #ffffff;
  --muted: #5c5c5c;
  --max: 1280px;
}


This makes the design easier to maintain and update.

---

## ⚡ JavaScript

JavaScript is used to add interactivity and dynamic behavior to the website.

### JavaScript functionality

#### 1. Mobile Navigation

The hamburger menu opens and closes the navigation menu on smaller screens.

#### 2. Active Navigation

The current navigation item is highlighted based on the section currently visible while scrolling.

#### 3. Smooth Scrolling

Navigation links smoothly scroll to their respective sections.

#### 4. Header Scroll Effect

The header receives an additional class when the user scrolls down the page.

#### 5. Scroll Reveal Animation

Elements with the `.reveal` class are animated when they enter the viewport.

This functionality uses:

javascript
IntersectionObserver


#### 6. Hero Video

JavaScript handles the hero background video's loading and autoplay behavior.

#### 7. Product Image Hover

Product images receive a hover effect when the user moves the mouse over them.

#### 8. Escape Key Support

Pressing the `Escape` key closes the mobile navigation menu.

#### 9. Outside Click

Clicking outside the mobile menu closes the menu.

---

## 🎨 Fonts Used

The website uses the following font families:

### Space Grotesk

Used mainly for:

* Headings
* Hero title
* Section titles
* Product titles

### IBM Plex Sans

Used mainly for:

* Paragraphs
* Descriptions
* Supporting content

### IBM Plex Mono

Used mainly for:

* Navigation
* Buttons
* Labels
* Footer links


## 🖼️ Assets

The project uses image and video assets provided for the website design.

Examples include:

* Company logo
* Hero background video
* Product images
* Engineering icons
* Industry images
* Quality section images

Assets are stored inside:

text
required_assets/




## 📁 Project Structure

text
TEKNIC-EUCHNER/
│
├── index.html
├── app.js
├── README.md
│
├── style.css
│
└── required_assets/
    ├── logo.png
    ├── mainvideo.mp4
    ├── image1.png
    ├── image2.png
    ├── image3.png
    ├── image4.png
    ├── image5.png
    ├── image6.png
    ├── image12.png
    ├── user-settings-01.png
    ├── ai-co-editing.png
    ├── layers-01.png
    ├── network.png
    └── webhook.png




# 📌 Website Sections

## 1. Header

The header contains:

* Teknic Euchner logo
* Home
* About
* Products
* Dealers
* Contact
* Get in Touch button
* Responsive hamburger menu

The header remains fixed while scrolling.



## 2. Hero Section

The hero section contains:

* Full-screen background video
* Dark overlay
* Main heading
* Supporting description
* Call-to-action buttons
* Company introduction text

Example heading:

> Precision That Keeps Industry Moving.



## 3. About / Introduction

This section introduces Teknic Euchner and explains:

* Company experience
* Engineering expertise
* Manufacturing background
* Industrial applications



## 4. Engineering Section

The engineering section displays company information using cards.

The cards contain:

* Icons
* Experience
* Establishment year
* Product categories
* Dealer network



## 5. Products

The product section contains product cards for:

* Inductive Proximity Switches
* Single Limit Switches
* Precision Single & Multiple Limit Switches
* Photoelectric Sensors
* NK Limit Switches
* Cable Connectors

Each product card contains:

* Product title
* Product image
* Description
* Call-to-action button
* Image corner decorations



## 6. Why Teknic Euchner

This section explains the company's key strengths.

The cards cover:

* Industry requirements
* Engineering expertise
* Reliable performance
* Robust construction
* Industry-focused solutions
* Quality standards

Cards use scroll reveal animations.



## 7. Industries and Applications

The website presents applications in:

* Machine Tools
* Industrial Automation
* Manufacturing Equipment
* Material Handling
* Safety Applications
* Custom Industrial Applications


## 8. German Engineering

This section highlights the combination of:

**German Know-How + Indian Manufacturing**

It contains:

* Heading
* Supporting information
* Industrial image
* Call-to-action button



## 9. Quality Section

The quality section explains the company's approach to:

* Product development
* Manufacturing
* Consistent performance
* Quality control
* Customer confidence



## 10. Dealer CTA

The CTA section encourages users to find the appropriate solution for their industrial application.

It contains:

* Heading
* Description
* Talk to an Expert button
* Explore Products button



## 11. Footer

The footer contains:

### Quick Links

* Home
* About
* Products
* Dealers
* Events
* Contact

### Contact Information

* Address
* Phone number
* Email
* Website

### Social Media

* LinkedIn
* YouTube
* Instagram

### Legal Information

* Copyright
* Terms & Conditions
* Privacy Policy


# 📱 Responsive Design

The website is responsive for:

* Desktop
* Laptop
* Tablet
* Mobile

CSS media queries are used at different screen sizes.

Example:

css
@media (max-width: 900px) {
  /* Tablet and mobile styles */
}

@media (max-width: 600px) {
  /* Small mobile styles */
}

On smaller screens:

* Desktop navigation becomes a hamburger menu
* Product cards change from 3 columns to 2/1 column
* Content changes to single-column layouts
* Buttons become full width where required
* Footer columns become stacked
* Typography scales down



# ✨ Animations & Interactions

The website includes:

* Smooth scrolling
* Navigation hover effects
* Button hover effects
* Product image zoom
* Scroll reveal animation
* Header scroll effect
* Mobile menu animation
* Active navigation state
* Video autoplay

The `IntersectionObserver` API is used for scroll-based animations.



# 🔧 Browser APIs Used

The project uses native browser APIs including:

text
IntersectionObserver
Window Scroll Events
Window Resize Events
DOM Events
HTML5 Video API




# ▶️ How to Run

No backend or package installation is required.

Simply open:

text
index.html


in a modern web browser.

For the best development experience, use **VS Code with Live Server**.

### Using Live Server

1. Open the project in VS Code.
2. Install the Live Server extension.
3. Right-click `index.html`.
4. Select **Open with Live Server**.
5. The website will open in the browser.



# 🌐 Browser Compatibility

The website is designed for modern browsers such as:

* Google Chrome
* Microsoft Edge
* Mozilla Firefox
* Safari


# 🎯 Project Objective

The main objective of this project is to convert a Figma UI design into a functional web interface while maintaining:

* Visual accuracy
* Responsive behavior
* Clean HTML structure
* Maintainable CSS
* Interactive JavaScript
* Reusable UI styles
* Cross-device compatibility



# 👩‍💻 Developer

**Bhagya Basavaraj Sappali**

Computer Science & Engineering

2026
