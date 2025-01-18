1. What is Emmet?
    Emmet is a productivity tool for web developers, integrated into many code editors (like VS Code). It allows you to write HTML and CSS code faster using shortcuts or abbreviations that expand into full code.

  Example: Typing div>ul>li*3 and hitting Tab expands to:
  html
  Copy
  Edit
  <div>
    <ul>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>
  
2. What is CDN? Why do we use it?
  CDN (Content Delivery Network) is a distributed network of servers that deliver web content like JavaScript files, stylesheets, and images to users based on their geographic location.
    Why Use It?:
    Improves Speed: Files are served from the nearest server, reducing latency.
    Reduces Server Load: Offloads file delivery to the CDN, freeing your server for other tasks.
    Easy Integration: Allows direct use of hosted files without downloading or bundling.

3. Why is React known as React?
    React is named for its primary purpose: Reacting to changes in data.
    It efficiently updates and re-renders the UI whenever the state or props change, ensuring that the view stays in sync with the data.

4. What is crossorigin in the <script> tag?
    The crossorigin attribute is used to handle Cross-Origin Resource Sharing (CORS) policies when loading external scripts.
    It ensures that the browser can fetch and execute the resource securely if it comes from a different origin.
    Common Values:
    anonymous: Sends no user credentials (e.g., cookies) with the request.
    use-credentials: Sends user credentials with the request.

5. What is the difference between React and ReactDOM?
React:
    The core library for creating and managing components, states, and props.
    Used for logic and defining reusable UI elements.
    ReactDOM:
    Provides methods to interact with the DOM, like rendering components (ReactDOM.createRoot).
    Handles rendering React components to the browser.
    Analogy: React is the artist; ReactDOM is the brush used to paint on the canvas (DOM).

6. What is the difference between react.development.js and react.production.js files via CDN?
    react.development.js:
    Includes additional debugging tools and warnings to help during development.
    Larger in size and slower due to extra features.
    react.production.js:
    Minified and optimized for performance in production.
    Stripped of unnecessary debugging code, making it smaller and faster.
    Usage:

    Use react.development.js during development for debugging.
    Switch to react.production.js for live/production environments to ensure better performance.