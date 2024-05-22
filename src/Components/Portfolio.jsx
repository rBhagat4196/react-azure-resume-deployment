/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Note Making App",
    description:
      "Intuitive note-taking app with secure sharing and dynamic filing system.",
    url: "https://github.com/rBhagat4196/notion-clone",
  },
  {
    title: "Social Media Application",
    description:
      "Secure social media platform with JWT authentication and friend requests.",
    url: "https://github.com/rBhagat4196/social-media-app",
  },
  {
    title: "Online Hotel Booking System",
    description:
      "Airbnb clone with user profiles, accommodation management, and search functionality.",
    url: "https://github.com/rBhagat4196/Airbnb-Clone/",
  },
  {
    title: "Chat Application",
    description:
      "Real-time chat app with multimedia sharing, email login, and notifications.",
    url: "https://github.com/rBhagat4196/Chat_APP_WhatsAppClone/",
  },
];



const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
