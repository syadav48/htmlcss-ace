# htmlcss-ace
# HTML Interview Questions and Answers

A collection of frequently asked HTML interview questions with clear explanations and code examples.

---

## 1. What is Semantic HTML?

**Answer:**
Semantic HTML uses meaningful tags that describe the content's purpose and structure. It helps with accessibility, SEO, and readability.

```html
<article>
  <header>
    <h1>HTML Guide</h1>
  </header>
  <section>
    <p>This guide explains important HTML concepts.</p>
  </section>
</article>
```

---

## 2. What is the difference between `id` and `class` attributes?

**Answer:**

* `id` is unique and used for a single element.
* `class` can be used on multiple elements.
* Both can be targeted with CSS and JavaScript.

```html
<div id="main-header">Welcome</div>
<div class="card">Card 1</div>
<div class="card">Card 2</div>
```

---

## 3. What are void elements in HTML?

**Answer:**
Void elements are self-closing tags that do not have closing tags.
Examples: `<br>`, `<img>`, `<hr>`, `<meta>`, `<input>`

```html
<img src="logo.png" alt="Logo">
<hr>
<input type="text" placeholder="Enter name">
```

---

## 4. What is the difference between `<section>` and `<div>`?

**Answer:**

* `<section>` is a semantic tag used for related content blocks.
* `<div>` is non-semantic and used as a generic container.

```html
<section>
  <h2>Features</h2>
  <p>We offer multiple features.</p>
</section>

<div class="container">
  <p>Same layout using a div.</p>
</div>
```

---

## 5. How do you make an image accessible?

**Answer:**
Use the `alt` attribute to provide alternative text describing the image.

```html
<img src="team.jpg" alt="Our development team working together">
```

---

## 6. What are global attributes in HTML?

**Answer:**
Global attributes can be used on any HTML element. Common ones include:

* `id`
* `class`
* `style`
* `title`
* `data-*`
* `tabindex`

```html
<p id="intro" title="Introduction">Hello World</p>
```

---

## 7. What are custom data attributes in HTML?

**Answer:**
Custom `data-*` attributes are used to store extra information.
They can be accessed via JavaScript using `.dataset`.

```html
<div data-user-id="123" data-role="admin">User Info</div>
```

```js
const div = document.querySelector('div');
console.log(div.dataset.userId); // "123"
console.log(div.dataset.role);   // "admin"
```

---

## 8. What is the purpose of the `meta` tag in HTML?

**Answer:**
`<meta>` provides metadata such as character encoding, viewport settings, and SEO-related info.

```html
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="Frontend interview guide">
```

---

## 9. What is the use of `aria-*` attributes?

**Answer:**
ARIA (Accessible Rich Internet Applications) attributes enhance accessibility for screen readers.

```html
<button aria-label="Close dialog">✖</button>
```

---

## 10. How do you embed a video in HTML?

**Answer:**
Use the `<video>` tag with `controls` and other optional attributes like `autoplay`, `loop`, and `muted`.

```html
<video controls width="300">
  <source src="intro.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>
```
---

Here is a Markdown file containing 50 intermediate and advanced level HTML interview questions along with their answers.

```markdown
# HTML Interview Questions

## Intermediate Level Questions

1. **What is the difference between `<div>` and `<span>`?**
   - `<div>` is a block-level element used for grouping content, while `<span>` is an inline element used for styling a small portion of text.

2. **What are semantic HTML elements? Give examples.**
   - Semantic HTML elements clearly describe their meaning in a human- and machine-readable way. Examples include `<header>`, `<footer>`, `<article>`, and `<section>`.

3. **What is the purpose of the `<meta>` tag?**
   - The `<meta>` tag provides metadata about the HTML document, such as character set, page description, keywords, author, and viewport settings.

4. **How do you create a hyperlink in HTML?**
   - You can create a hyperlink using the `<a>` tag. Example: `<a href="https://www.example.com">Visit Example</a>`.

5. **What is the difference between `id` and `class` attributes?**
   - The `id` attribute is unique within a page and can be used to identify a single element, while the `class` attribute can be used on multiple elements to apply the same styles.

6. **What is the purpose of the `alt` attribute in images?**
   - The `alt` attribute provides alternative text for an image if it cannot be displayed. It is also important for accessibility.

7. **What are data attributes in HTML?**
   - Data attributes are custom attributes that start with `data-` and can be used to store extra information on standard HTML elements. Example: `<div data-user-id="12345"></div>`.

8. **How do you create a form in HTML?**
   - A form can be created using the `<form>` tag, which can contain various input elements like `<input>`, `<textarea>`, `<select>`, etc.

9. **What is the difference between `<ol>` and `<ul>`?**
   - `<ol>` creates an ordered list (numbered), while `<ul>` creates an unordered list (bulleted).

10. **What is the purpose of the `<head>` section in an HTML document?**
    - The `<head>` section contains meta-information about the document, such as the title, links to stylesheets, and scripts.

11. **How do you embed a video in HTML?**
    - You can embed a video using the `<video>` tag. Example: `<video src="video.mp4" controls></video>`.

12. **What is the `<canvas>` element used for?**
    - The `<canvas>` element is used to draw graphics on the fly via JavaScript, allowing for dynamic rendering of images, shapes, and animations.

13. **What is the purpose of the `<link>` tag?**
    - The `<link>` tag is used to link external resources like stylesheets to the HTML document.

14. **How do you create a table in HTML?**
    - A table can be created using the `<table>` tag, along with `<tr>` for rows, `<th>` for headers, and `<td>` for data cells.

15. **What is the difference between block-level and inline elements?**
    - Block-level elements take up the full width available and start on a new line (e.g., `<div>`, `<p>`), while inline elements only take up as much width as necessary and do not start on a new line (e.g., `<span>`, `<a>`).

16. **What is the `<iframe>` tag used for?**
    - The `<iframe>` tag is used to embed another HTML page within the current page.

17. **How do you create a checkbox in HTML?**
    - A checkbox can be created using the `<input type="checkbox">` tag.

18. **What is the purpose of the `placeholder` attribute in input fields?**
    - The `placeholder` attribute provides a hint to the user about what to enter in the input field.

19. **What is the `<fieldset>` tag used for?**
    - The `<fieldset>` tag is used to group related elements within a form, often with a `<legend>` to provide a title.

20. **How do you create a dropdown list in HTML?**
    - A dropdown list can be created using the `<select>` tag, with `<option>` tags for each item. Example: 
    ```html
    <select>
      <option value="1">Option 1</option>
      <option value="2">Option 2</option>
    </select>
    ```

## Advanced Level Questions

21. **What is the purpose of the `doctype` declaration?**
    - The `doctype` declaration defines the document type and version of HTML being used, helping browsers render the page correctly.

22. **What are the new features introduced in HTML5?**
    - HTML5 introduced new elements like `<article>`, `<section>`, `<nav>`, `<header>`, `<footer>`, `<figure>`, `<figcaption>`, and APIs like the Canvas API, Audio/Video API, and Geolocation API.

23. **How do you implement responsive design in HTML?**
    - Responsive design can be implemented using the `<meta name="viewport">` tag and CSS media queries to adjust styles based on screen size.

24. **What is the difference between `GET` and `POST` methods in forms?**
    - `GET` appends data to the URL and is used for retrieving data, while `POST` sends data in the request body and is used for submitting data.

25. **What is the purpose of the `defer` and `async` attributes in script tags?**
    - The `defer` attribute allows the script to be executed after the document has been parsed, while `async` allows the script to be executed as soon as it is available, without blocking the document parsing.

26. **How do you create an HTML5 audio element?**
    - You can create an audio element using the `<audio>` tag. Example: 
    ```html
    <audio controls>
      <source src="audio.mp3" type="audio/mpeg">
      Your browser does not support the audio element.
    </audio>
    ```

27. **What is the `contenteditable` attribute?**
    - The `contenteditable` attribute makes an element editable by the user. Example: `<div contenteditable="true">Edit me!</div>`.

28. **How do you use the `<template>` tag?**
    - The `<template>` tag is used to declare HTML that is not rendered when the page loads but can be instantiated later using JavaScript.

29. **What is the purpose of the `<noscript>` tag?**
    - The `<noscript>` tag is used to provide alternative content for users who have disabled JavaScript in their browsers.

30. **How do you create a responsive image in HTML?**
    - A responsive image can be created using the `srcset` attribute in the `<img>` tag to specify different images for different screen sizes. Example:
    ```html
    <img src="small.jpg" srcset="medium.jpg 600w, large.jpg 1200w" alt="Responsive Image">
    ```

31. **What is the `sandbox` attribute in `<iframe>`?**
    - The `sandbox` attribute applies restrictions to the content in the `<iframe>`, such as preventing scripts from running or forms from submitting.

32. **How do you implement ARIA roles in HTML?**
    - ARIA roles can be added using the `role` attribute to enhance accessibility. Example: `<div role="navigation">...</div>`.

33. **What is the difference between `inline`, `block`, and `inline-block` elements?**
    - Inline elements do not start on a new line and only take up as much width as necessary. Block elements start on a new line and take up the full width. Inline-block elements are similar to inline elements but can have width and height set.

34. **How do you create a custom HTML element?**
    - Custom HTML elements can be created using Web Components and the `customElements.define()` method in JavaScript.

35. **What is the `rel` attribute in `<link>` tags?**
    - The `rel` attribute specifies the relationship between the current document and the linked resource, such as `stylesheet`, `icon`, or `preload`.

36. **How do you use the `<picture>` element?**
    - The `<picture>` element allows for responsive images by providing multiple sources for different screen sizes and resolutions. Example:
    ```html
    <picture>
      <source srcset="image-large.jpg" media="(min-width: 800px)">
      <img src="image-small.jpg" alt="Responsive Image">
    </picture>
    ```

37. **What is the `hidden` attribute in HTML?**
    - The `hidden` attribute is a boolean attribute that indicates that an element is not yet, or is no longer, relevant. It is used to hide elements from the user.

38. **How do you create a multi-step form in HTML?**
    - A multi-step form can be created using multiple `<form>` elements or by using JavaScript to show/hide different sections of a single form based on user input.

39. **What is the `target` attribute in `<a>` tags?**
    - The `target` attribute specifies where to open the linked document. Common values include `_blank` (new tab) and `_self` (same frame).

40. **How do you implement a favicon in HTML?**
    - A favicon can be implemented using the `<link rel="icon" href="favicon.ico" type="image/x-icon">` tag in the `<head>` section.

41. **What is the `accept` attribute in file input fields?**
    - The `accept` attribute specifies the types of files that the server accepts. Example: `<input type="file" accept="image/*">`.

42. **How do you create a responsive navigation menu?**
    - A responsive navigation menu can be created using CSS media queries to adjust the layout and display of the menu items based on screen size.

43. **What is the `aria-label` attribute?**
    - The `aria-label` attribute provides an accessible name for an element, which can be read by screen readers.

44. **How do you use the `<progress>` element?**
    - The `<progress>` element represents the completion progress of a task. Example: `<progress value="50" max="100"></progress>`.

45. **What is the `data-*` attribute?**
    - The `data-*` attribute allows you to store custom data on an HTML element, which can be accessed via JavaScript.

46. **How do you create a modal dialog in HTML?**
    - A modal dialog can be created using a combination of HTML, CSS, and JavaScript to show/hide a dialog box over the main content.

47. **What is the `tabindex` attribute?**
    - The `tabindex` attribute specifies the tab order of an element when navigating through the page using the keyboard.

48. **How do you create a sticky footer in HTML?**
    - A sticky footer can be created using CSS with `position: fixed;` or by using flexbox to ensure the footer stays at the bottom of the viewport.

49. **What is the `srcdoc` attribute in `<iframe>`?**
    - The `srcdoc` attribute allows you to specify the HTML content of the `<iframe>` directly, instead of linking to an external document.

50. **How do you implement lazy loading for images in HTML?**
    - Lazy loading can be implemented using the `loading` attribute in the `<img>` tag. Example: `<img src="image.jpg" loading="lazy" alt="Lazy Loaded Image">`.
```

Feel free to copy and use this Markdown content for your interview preparation!


# defer vs async in Script Tags

## 1. What is the purpose of `defer` and `async`?

- The `defer` attribute allows the script to be **executed after the document has been parsed**.
- The `async` attribute allows the script to be **executed as soon as it is available**, without blocking the document parsing.

---

## 2. `defer` Attribute Example

```html
<!DOCTYPE html>
<html>
<head>
  <title>Defer Script Example</title>
  <script src="script.js" defer></script>
</head>
<body>
  <h1>Hello World</h1>
</body>
</html>

<!DOCTYPE html>
<html>
<head>
  <title>Async Script Example</title>
  <script src="analytics.js" async></script>
</head>
<body>
  <h1>Welcome!</h1>
</body>
</html>

| Attribute | Download | Execution Time       | Blocks HTML Parsing   | DOM Dependent? |
| --------- | -------- | -------------------- | --------------------- | -------------- |
| `defer`   | Parallel | After HTML parsed    | ❌ No                  | ✅ Yes          |
| `async`   | Parallel | As soon as available | ❌ No (but interrupts) | ❌ No           |

# Advanced HTML Interview Questions

1. **What is the purpose of the `<base>` tag in HTML?**
   - The `<base>` tag specifies a base URL for all relative URLs in a document. It should be placed inside the `<head>` section.

2. **How do you create a responsive layout using CSS Grid in HTML?**
   - You can create a responsive layout using CSS Grid by defining a grid container with `display: grid;` and using `grid-template-columns` to specify the layout. Media queries can adjust the grid for different screen sizes.

3. **What is the `content` attribute in the `<meta>` tag?**
   - The `content` attribute in the `<meta>` tag specifies the value of the metadata, such as the description, keywords, or author of the document.

4. **How do you use the `<dialog>` element in HTML?**
   - The `<dialog>` element represents a dialog box or other interactive component. It can be shown or hidden using JavaScript methods like `show()` and `close()`.

5. **What is the `crossorigin` attribute in `<script>` and `<img>` tags?**
   - The `crossorigin` attribute is used to specify how browsers should handle cross-origin requests for the resource. Values can be `anonymous` or `use-credentials`.

6. **How do you implement HTML5 Web Storage?**
   - HTML5 Web Storage can be implemented using the `localStorage` and `sessionStorage` objects to store data in the browser. Example: `localStorage.setItem('key', 'value');`.

7. **What is the `role` attribute in ARIA?**
   - The `role` attribute defines the role of an element in terms of accessibility, helping assistive technologies understand the purpose of the element.

8. **How do you create a custom data visualization using the `<canvas>` element?**
   - You can create custom data visualizations using the `<canvas>` element by drawing shapes, lines, and text using JavaScript's Canvas API.

9. **What is the `fetch` API and how does it relate to HTML?**
   - The `fetch` API is a modern way to make network requests in JavaScript, allowing you to retrieve resources and data from a server, which can then be displayed in HTML.

10. **How do you use the `<source>` element for audio and video?**
    - The `<source>` element allows you to specify multiple media sources for the `<audio>` or `<video>` elements, enabling the browser to choose the best format. Example:
    ```html
    <video controls>
      <source src="video.mp4" type="video/mp4">
      <source src="video.ogg" type="video/ogg">
      Your browser does not support the video tag.
    </video>
    ```

11. **What is the `itemprop` attribute in Microdata?**
    - The `itemprop` attribute is used in Microdata to specify properties of an item, allowing search engines to better understand the content of a webpage.

12. **How do you implement a service worker in HTML?**
    - A service worker can be implemented by registering it in JavaScript using `navigator.serviceWorker.register('service-worker.js')`, allowing for offline capabilities and caching.

13. **What is the `rel="noopener"` attribute in links?**
    - The `rel="noopener"` attribute is used to prevent the new page from being able to access the `window.opener` property, enhancing security when using `target="_blank"`.

14. **How do you create a web component using the Shadow DOM?**
    - A web component can be created using the Shadow DOM by attaching a shadow root to an element using `element.attachShadow({ mode: 'open' })`, allowing for encapsulated styles and markup.

15. **What is the `data-*` attribute and how is it used?**
    - The `data-*` attribute allows you to store custom data on HTML elements, which can be accessed via JavaScript using `element.dataset`.

16. **How do you implement the `<picture>` element for responsive images?**
    - The `<picture>` element allows you to specify different images for different screen sizes and resolutions, improving loading times and responsiveness. Example:
    ```html
    <picture>
      <source media="(min-width: 800px)" srcset="large.jpg">
      <source media="(min-width: 400px)" srcset="medium.jpg">
      <img src="small.jpg" alt="Responsive Image">
    </picture>
    ```

17. **What is the `async` attribute in `<script>` tags?**
    - The `async` attribute allows the script to be downloaded asynchronously without blocking the HTML parsing, executing as soon as it is available.

18. **How do you create a fallback for `<video>` and `<audio>` elements?**
    - You can provide fallback content within the `<video>` or `<audio>` tags that will be displayed if the browser does not support the media type. Example:
    ```html
    <video>
      <source src="video.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>
    ```

19. **What is the `defer` attribute in `<script>` tags?**
    - The `defer` attribute allows the script to be executed after the document has been fully parsed, ensuring that the script does not block rendering.

20. **How do you use the `<meta charset>` tag?**
    - The `<meta charset>` tag specifies the character encoding for the HTML document, ensuring that text is displayed correctly. Example: `<meta charset="UTF-8">`.

21. **What is the `target="_self"` attribute in links?**
    - The `target="_self"` attribute specifies that the linked document should open in the same frame as it was clicked (this is the default behavior).

22. **How do you create a sticky header in HTML?**
    - A sticky header can be created using CSS with `position: sticky;` and `top: 0;` to keep the header fixed at the top of the viewport when scrolling.

23. **What is the `aria-hidden` attribute?**
    - The `aria-hidden` attribute indicates whether an element is visible or hidden to assistive technologies, improving accessibility.

24. **How do you implement a responsive iframe?**
    - A responsive iframe can be created using CSS to set its width to 100% and height to auto, often using a wrapper with a specific aspect ratio.

25. **What is the `srcset` attribute in `<img>` tags?**
    - The `srcset` attribute allows you to specify different image sources for different display resolutions, enabling responsive images. Example:
    ```html
    <img src="small.jpg" srcset="medium.jpg 600w, large.jpg 1200w" alt="Responsive Image">
    ```

26. **How do you use the `<meta name="viewport">` tag?**
    - The `<meta name="viewport">` tag controls the layout on mobile browsers, allowing you to set the width and scaling of the viewport. Example: `<meta name="viewport" content="width=device-width, initial-scale=1.0">`.

27. **What is the `role="alert"` attribute?**
    - The `role="alert"` attribute is used to indicate that an element contains important information that should be communicated to the user immediately.

28. **How do you create a multi-column layout in HTML?**
    - A multi-column layout can be created using CSS with the `column-count` property or by using CSS Grid or Flexbox for more control.

29. **What is the `aria-live` attribute?**
    - The `aria-live` attribute indicates that an element will be updated dynamically, and assistive technologies should announce the changes to the user.

30. **How do you implement a fallback for unsupported HTML5 features?**
    - Fallbacks for unsupported HTML5 features can be implemented using feature detection libraries like Modernizr or by providing alternative content within the HTML structure.



