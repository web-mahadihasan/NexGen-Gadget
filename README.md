# **NexGen GadgetBD** ✨
Your go-to destination for the latest and greatest gadgets. NexGen GadgetBD is a responsive e-commerce platform designed for gadget enthusiasts. This site offers a seamless shopping experience, with features like product filtering, a shopping cart, and wishlist management, ensuring a smooth, user-friendly experience.

[Live Website Link](https://nexgen-gadgetbd.netlify.app/)

[Project Requirement Document (PDF)](https://github.com/ProgrammingHero1/B10-A8-gadget-heaven/blob/main/Batch-10_Assignment-08.pdf)

---

## Table of Contents
- [Features](#features)
- [React Concepts Used](#react-concepts-used)
- [Data Management](#data-management)
- [Responsive Design](#responsive-design)
- [Project Overview](#project-overview)

---

## Features

1. **View Gadgets by Category**: Users can browse gadgets by categories such as phones, tablets, laptops, accessories, and smart watches.
   - If a category has no products, a meaningful message is displayed.
   
2. **Detailed Product Pages**: Each product has its own details page, including an image, name, price, and detailed specifications.

3. **Shopping Cart & Wishlist**: 
   - Users can add items to the shopping cart or wishlist.
   - Duplicate items cannot be added to the wishlist.
   - Cart items can be sorted by price.
   - Users can view cart/wishlist items count dynamically on the navbar.
   
4. **Seamless Checkout**:
   - Upon purchasing items in the cart, a modal shows a congratulatory message, and the cart resets without a page reload.
   
5. **Enhanced Wishlist Management**:
   - Items in the wishlist can be added to the cart.
   - If a wishlist item exceeds a price limit when adding to the cart, a toast message appears.

---

## React Concepts Used

This project utilizes several core React features for an optimized experience:

- **`useState`**: Manages state for dynamic elements like cart and wishlist items.
- **`useEffect`**: Handles side effects, such as fetching initial data for gadgets and categories.
- **`useContext`**: Provides a global state for the cart and wishlist, accessible across the entire app.
- **`useRef`**: Tracks specific DOM elements or stores data without triggering re-renders.
- **`useLocation`**: Detects current routes for conditional styling (e.g., changing navbar background on the homepage).
- **`useParams`**: Extracts route parameters, like product ID, to fetch and display specific product details.
- **`useNavigate`**: Provides smooth navigation between pages (e.g., redirecting after completing a purchase).
- **`Link` & `NavLink`**: Enables navigation within the SPA and highlights the active route on the navbar.
- **React State Management**: Centralizes state with Context API for managing cart and wishlist data.
- **`Helmet`**: Adds dynamic titles to each page, enhancing SEO and user experience.

---

## Data Management

The project uses the **Context API** and **LocalStorage** for efficient data handling:

- **Context API**: The cart and wishlist data are managed centrally via Context API, making it easy to access and modify this data across various components without prop drilling.
- **LocalStorage**: To provide persistence, LocalStorage is used for storing cart and wishlist data, ensuring users' items remain saved across sessions and reloads.

---

## Responsive Design

NexGen GadgetBD is fully responsive, adapting seamlessly to various devices and screen sizes. The project utilizes CSS and custom media queries to provide a consistent experience across desktop, tablet, and mobile devices.

---

## Project Overview

NexGen GadgetBD is an intuitive e-commerce platform focused on gadget products, allowing users to browse, filter, and manage gadgets across different categories. From adding products to a cart to managing a wishlist, this project is designed with users' needs in mind, offering a streamlined interface and helpful navigation.

This project is built with React, styled using modern CSS techniques, and follows best practices for SPAs. It includes a custom 404 page, dynamic content for improved SEO, and various UI enhancements that contribute to a smooth, efficient user experience.

> The site is structured to handle edge cases, such as managing price limits, adding only unique items to the wishlist, and preventing errors on page reloads. Toast notifications provide feedback on user actions like adding items to the cart or wishlist.

---

Feel free to explore the [live website](https://nexgen-gadgetbd.netlify.app/) and check the [requirement document](https://github.com/ProgrammingHero1/B10-A8-gadget-heaven/blob/main/Batch-10_Assignment-08.pdf) for a detailed breakdown of the project specifications.

Happy browsing on **NexGen GadgetBD**! 😊
