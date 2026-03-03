/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/
 */

// You can delete this file if you're not using it
import "@fontsource/roboto"
import "./src/styles/variable.css"
import "./src/styles/base.css"

export const onRouteUpdate = () => {
if (typeof document === "undefined") return;

const selectors = [
    ".fadeInUp",
    ".fadeInRight",
    ".fadeInLeft",
    ".fadeInBlur",
    ".fadeInMarker"
];

const elements = selectors.flatMap(selector => Array.from(document.querySelectorAll(selector)));

const observer = new IntersectionObserver(
    entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
        entry.target.classList.add("on");
        }
    });
    },
    { threshold: 0.7 }
);

elements.forEach(el => observer.observe(el));

return () => {
    elements.forEach(el => observer.unobserve(el));
};
};