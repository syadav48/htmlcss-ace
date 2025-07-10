Here is a Markdown file containing 30 easy and intermediate level CSS interview questions along with their answers.

```markdown
# CSS Interview Questions

## Easy Level Questions

1. **What does CSS stand for?**
   - CSS stands for Cascading Style Sheets, which is used to style and layout web pages.

2. **What is the purpose of CSS?**
   - The purpose of CSS is to control the presentation of HTML elements, including layout, colors, fonts, and spacing.

3. **How do you include CSS in an HTML document?**
   - CSS can be included in an HTML document using three methods: inline styles, internal styles (within `<style>` tags), and external styles (linking to a `.css` file using the `<link>` tag).

4. **What is a CSS selector?**
   - A CSS selector is a pattern used to select the elements you want to style. Examples include element selectors, class selectors, and ID selectors.

5. **What is the difference between class selectors and ID selectors?**
   - Class selectors (e.g., `.classname`) can be used on multiple elements, while ID selectors (e.g., `#idname`) must be unique within a page and can only be used on one element.

6. **What is the box model in CSS?**
   - The box model describes the rectangular boxes generated for elements in the document tree, consisting of margins, borders, padding, and the actual content area.

7. **How do you center a block element horizontally?**
   - To center a block element, you can set its left and right margins to `auto`. Example:
   ```css
   .centered {
       width: 50%;
       margin: 0 auto;
   }
   ```

8. **What is the difference between `padding` and `margin`?**
   - `Padding` is the space between the content and the border of an element, while `margin` is the space outside the border of an element.

9. **How do you apply a background color to an element?**
   - You can apply a background color using the `background-color` property. Example:
   ```css
   .element {
       background-color: blue;
   }
   ```

10. **What is the purpose of the `z-index` property?**
    - The `z-index` property controls the stacking order of overlapping elements. Higher values are placed in front of lower values.

11. **How do you change the font size of an element?**
    - You can change the font size using the `font-size` property. Example:
    ```css
    .text {
        font-size: 16px;
    }
    ```

12. **What is a CSS pseudo-class?**
    - A CSS pseudo-class is a keyword added to selectors that specifies a special state of the selected elements. Examples include `:hover`, `:focus`, and `:nth-child()`.

13. **How do you create a CSS comment?**
    - CSS comments are created using `/* comment here */`.

14. **What is the difference between `inline`, `block`, and `inline-block` elements?**
    - `Inline` elements do not start on a new line and only take up as much width as necessary. `Block` elements start on a new line and take up the full width. `Inline-block` elements are similar to inline elements but can have width and height set.

15. **How do you apply styles to multiple classes in CSS?**
    - You can apply styles to multiple classes by separating them with commas. Example:
    ```css
    .class1, .class2 {
        color: red;
    }
    ```

## Intermediate Level Questions

16. **What is the `flexbox` layout model?**
    - The `flexbox` layout model is a one-dimensional layout method for arranging items in a container, allowing for flexible and responsive designs.

17. **How do you create a responsive design using media queries?**
    - Media queries allow you to apply different styles based on the viewport size. Example:
    ```css
    @media (max-width: 600px) {
        .responsive {
            font-size: 14px;
        }
    }
    ```

18. **What is the `grid` layout model in CSS?**
    - The `grid` layout model is a two-dimensional layout system that allows you to create complex layouts using rows and columns.

19. **How do you create a CSS transition?**
    - CSS transitions allow you to change property values smoothly over a specified duration. Example:
    ```css
    .box {
        transition: background-color 0.5s ease;
    }
    .box:hover {
        background-color: green;
    }
    ```

20. **What is the `position` property in CSS?**
    - The `position` property specifies the positioning method for an element. Values include `static`, `relative`, `absolute`, `fixed`, and `sticky`.

21. **How do you create a CSS animation?**
    - CSS animations can be created using the `@keyframes` rule and the `animation` property. Example:
    ```css
    @keyframes example {
        from {background-color: red;}
        to {background-color: yellow;}
    }
    .animated {
        animation: example 4s;
    }
    ```

22. **What is the `overflow` property in CSS?**
    - The `overflow` property controls what happens when content overflows an element's box. Values include `visible`, `hidden`, `scroll`, and `auto`.

23. **How do you use CSS variables?**
    - CSS variables (custom properties) are defined using the `--` prefix and can be reused throughout the stylesheet. Example:
    ```css
    :root {
        --main-color: blue;
    }
    .element {
        color: var(--main-color);
    }
    ```

24. **What is the `calc()` function in CSS?**
    - The `calc()` function allows you to perform calculations to set CSS property values. Example:
    ```css
    .element {
        width: calc(100% - 20px);
    }
    ```

25. **How do you create a CSS sprite?**
    - A CSS sprite is a single image that contains multiple images. You can use the `background-image` property and adjust the `background-position` to display specific images.

26. **What is the `display` property in CSS?**
    - The `display` property specifies how an element is displayed on the page. Common values include `block`, `inline`, `inline-block`, `flex`, and `grid`.

27. **How do you implement a sticky element in CSS?**
    - A sticky element can be implemented using `position: sticky;` along with a `top` value to specify the offset from the top of the viewport.

28. **What is the `:nth-child()` pseudo-class?**
    - The `:nth-child()` pseudo-class selects elements based on their position in a parent element. Example: `li:nth-child(2)` selects the second `<li>` element.

29. **How do you create a responsive image in CSS?**
    - A responsive image can be created using the `max-width` property set to `100%`, ensuring the image scales with the container. Example:
    ```css
    img {
        max-width: 100%;
        height: auto;
    }
    ```

30. **What is the `box-shadow` property in CSS?**
    - The `box-shadow` property adds shadow effects around an element's box. Example:
    ```css
    .box {
        box-shadow: 2px 2px 5px gray;
    }
    ```

```

Feel free to use this Markdown content for your CSS interview preparation!

[sprite.png] →  Contains 3 icons stacked horizontally:
+--------+--------+--------+
|  Home  | Search |  User  |
+--------+--------+--------+



<!-- Most 50 asked -->

# Intermediate and Hard Level CSS Questions

Here is a list of 50 intermediate and hard-level CSS questions frequently asked in MNCs, along with their answers.

## 1. What is the CSS Box Model?

The CSS Box Model describes the rectangular boxes generated for elements in the document tree and consists of margins, borders, padding, and the actual content area. Understanding the box model is crucial for layout design.

## 2. What is the difference between `margin` and `padding`?

- **Margin**: The space outside an element's border. It creates distance between the element and other elements.
- **Padding**: The space inside an element's border, between the border and the content. It creates space within the element.

## 3. Explain the concept of specificity in CSS.

Specificity determines which CSS rule is applied when multiple rules could apply to the same element. It is calculated based on the types of selectors used (inline styles, IDs, classes, etc.). The more specific a selector, the higher its specificity.

## 4. What are CSS preprocessors? Name a few.

CSS preprocessors are scripting languages that extend CSS with variables, nesting, and functions. They compile into standard CSS. Examples include:
- SASS (Syntactically Awesome Style Sheets)
- LESS
- Stylus

## 5. What is Flexbox and when would you use it?

Flexbox is a CSS layout model that allows for the arrangement of elements in a one-dimensional space (either a row or a column). It is used for responsive design, aligning items, and distributing space within a container.

## 6. What is CSS Grid and how does it differ from Flexbox?

CSS Grid is a two-dimensional layout system that allows for the creation of complex layouts using rows and columns. Unlike Flexbox, which is one-dimensional, Grid can handle both dimensions simultaneously, making it more suitable for complex layouts.

## 7. How do you center a block element horizontally?

To center a block element, you can set its width and use `margin: auto;`:

```css
.element {
    width: 50%;
    margin: 0 auto;
}
```

## 8. What is the `z-index` property and how does it work?

The `z-index` property controls the stacking order of overlapping elements. Elements with a higher `z-index` value are displayed in front of those with a lower value. It only works on positioned elements (i.e., those with `position` set to `relative`, `absolute`, `fixed`, or `sticky`).

## 9. Explain the difference between `absolute` and `fixed` positioning.

- **Absolute**: Positioned relative to the nearest positioned ancestor. It moves with the page when scrolled.
- **Fixed**: Positioned relative to the viewport and remains in the same place even when the page is scrolled.

## 10. What are media queries and how are they used?

Media queries are a CSS technique used to apply styles based on the viewport size or device characteristics. They enable responsive design by allowing different styles for different screen sizes.

```css
@media (max-width: 600px) {
    .element {
        background-color: blue;
    }
}
```

## 11. What is the difference between `inline`, `block`, and `inline-block` elements?

- **Inline**: Elements that do not start on a new line and only take up as much width as necessary (e.g., `<span>`).
- **Block**: Elements that start on a new line and take up the full width available (e.g., `<div>`).
- **Inline-block**: Elements that are inline but can have width and height set (e.g., `<img>`).

## 12. How do you create a responsive layout using CSS?

Responsive layouts can be created using:
- Media queries to adjust styles based on screen size.
- Flexbox or Grid for flexible layouts.
- Relative units like percentages, `em`, or `rem` for sizing.

## 13. What is the `overflow` property?

The `overflow` property controls what happens when content overflows an element's box. Possible values include:
- `visible`: Content is not clipped and may overflow.
- `hidden`: Content is clipped and not visible.
- `scroll`: Content is clipped, but scrollbars are added.
- `auto`: Scrollbars are added only if necessary.

## 14. Explain the concept of CSS transitions.

CSS transitions allow for smooth changes between property values over a specified duration. They are defined using the `transition` property.

```css
.element {
    transition: background-color 0.5s ease;
}
```

## 15. What are CSS animations?

CSS animations allow for more complex animations than transitions. They can change property values over time using keyframes.

```css
@keyframes example {
    from { background-color: red; }
    to { background-color: yellow; }
}

.element {
    animation: example 5s infinite;
}
```

## 16. How do you implement a CSS reset?

A CSS reset is used to remove default browser styles to ensure consistency across different browsers. A common reset is:

```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
```

## 17. What is the `box-sizing` property?

The `box-sizing` property defines how the width and height of an element are calculated. The default value is `content-box`, which does not include padding and borders. Setting it to `border-box` includes padding and borders in the element's total width and height.

```css
.element {
    box-sizing: border-box;
}
```

## 18. What is the difference between `rem` and `em` units?

- **rem**: Relative to the root element's font size. It is consistent across the document.
- **em**: Relative to the font size of the element itself or its parent. It can lead to compounding effects.

## 19. How do you create a CSS sprite?

A CSS sprite is a single image that contains multiple images. You can use `background-image` and `background-position` to display specific parts of the sprite.

```css
.sprite {
    background-image: url('sprite.png');
    width: 50px; /* Width of the individual image */
    height: 50px; /* Height of the individual image */
    background-position: -10px -20px; /* Position of the image in the sprite */
}
```

## 20. What is the `calc()` function in CSS?

The `calc()` function allows for dynamic calculations of CSS property values. It can combine different units.

```css
.element {
    width: calc(100% - 20px);
}
```

## 21. How do you create a responsive image?

To create a responsive image, set its width to 100% and height to auto:

```css
img {
    width: 100%;
    height: auto;
}
```

## 22. What is the `:nth-child()` selector?

The `:nth-child()` selector allows you to select elements based on their position in a parent element. It can take a formula or specific numbers.

```css
li:nth-child(2n) {
    background-color: lightgray; /* Selects every even list item */
}
```

## 23. Explain the `display` property values.

The `display` property controls how an element is displayed. Common values include:
- `block`: The element is a block-level element.
- `inline`: The element is an inline element.
- `inline-block`: The element is inline but can have width and height.
- `none`: The element is not displayed.

## 24. What is the `visibility` property?

The `visibility` property controls the visibility of an element. Unlike `display: none`, which removes the element from the document flow, `visibility: hidden` keeps the space occupied.

```css
.element {
    visibility: hidden; /* The element is hidden but still takes up space */
}
```

## 25. How do you create a CSS grid layout?

To create a CSS grid layout, set the `display` property to `grid` and define rows and columns using `grid-template-rows` and `grid-template-columns`.

```css
.grid-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* Three equal columns */
}
```

## 26. What is the `filter` property in CSS?

The `filter` property applies graphical effects like blurring or color shifting to an element. Common values include `blur()`, `brightness()`, and `grayscale()`.

```css
.element {
    filter: blur(5px);
}
```

## 27. How do you implement a sticky footer?

To create a sticky footer, you can use Flexbox on the body or a container:

```css
body {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

.footer {
    margin-top: auto; /* Pushes the footer to the bottom */
}
```

## 28. What is the `clip-path` property?

The `clip-path` property allows you to create complex shapes by clipping an element to a specific path. It can be used to create non-rectangular shapes.

```css
.element {
    clip-path: circle(50%); /* Clips the element to a circle */
}
```

## 29. How do you create a CSS tooltip?

A CSS tooltip can be created using the `:hover` pseudo-class and the `::after` pseudo-element.

```css
.tooltip {
    position: relative;
}

.tooltip::after {
    content: "Tooltip text";
    position: absolute;
    bottom: 100%; /* Position above the element */
    left: 50%;
    transform: translateX(-50%);
    visibility: hidden;
}

.tooltip:hover::after {
    visibility: visible; /* Show tooltip on hover */
}
```

## 30. What is the `transition` property?

The `transition` property allows you to change property values smoothly over a specified duration. It can be applied to various CSS properties.

```css
.element {
    transition: background-color 0.3s ease;
}
```

## 31. How do you create a CSS dropdown menu?

A CSS dropdown menu can be created using the `:hover` pseudo-class to show submenus.

```css
.menu {
    position: relative;
}

.submenu {
    display: none; /* Hide submenu */
    position: absolute;
}

.menu:hover .submenu {
    display: block; /* Show submenu on hover */
}
```

## 32. What is the `object-fit` property?

The `object-fit` property specifies how an `<img>` or `<video>` should be resized to fit its container. Common values include `cover`, `contain`, and `fill`.

```css
img {
    object-fit: cover; /* The image will cover the container */
}
```

## 33. How do you create a CSS grid with gaps?

You can create gaps between grid items using the `gap` property.

```css
.grid-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px; /* Space between grid items */
}
```

## 34. What is the `position: sticky` property?

The `position: sticky` property allows an element to toggle between `relative` and `fixed` positioning based on the user's scroll position. It is useful for headers that should remain visible until a certain scroll point.

```css
.sticky-header {
    position: sticky;
    top: 0; /* Sticks to the top of the viewport */
}
```

## 35. How do you create a CSS animation using keyframes?

You can create animations using the `@keyframes` rule to define the animation states.

```css
@keyframes slide {
    from { transform: translateX(0); }
    to { transform: translateX(100px); }
}

.element {
    animation: slide 2s infinite;
}
```

## 36. What is the `background-size` property?

The `background-size` property specifies the size of the background image. Common values include `cover`, `contain`, and specific dimensions.

```css
.element {
    background-image: url('image.jpg');
    background-size: cover; /* The image will cover the entire element */
}
```

## 37. How do you create a CSS grid layout with named areas?

You can create a grid layout with named areas using the `grid-template-areas` property.

```css
.grid-container {
    display: grid;
    grid-template-areas: 
        "header header"
        "main sidebar"
        "footer footer";
}
```

## 38. What is the `pointer-events` property?

The `pointer-events` property controls whether an element can be the target of mouse events. Common values include `auto`, `none`, and `visible`.

```css
.element {
    pointer-events: none; /* The element will not respond to mouse events */
}
```

## 39. How do you create a CSS image gallery?

A CSS image gallery can be created using Flexbox or Grid to arrange images in a responsive layout.

```css
.gallery {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 10px;
}
```

## 40. What is the `transition-delay` property?

The `transition-delay` property specifies a delay before the transition effect starts. It can be useful for creating staggered animations.

```css
.element {
    transition: background-color 0.5s ease 1s; /* 1 second delay */
}
```

## 41. How do you create a CSS card layout?

A CSS card layout can be created using Flexbox or Grid to arrange cards in a responsive manner.

```css
.card {
    border: 1px solid #ccc;
    padding: 20px;
    margin: 10px;
    border-radius: 5px;
}
```

## 42. What is the `display: flex` property?

The `display: flex` property enables a flex container, allowing for flexible layouts. It provides control over the alignment and distribution of space among items.

```css
.flex-container {
    display: flex;
    justify-content: space-between; /* Aligns items with space between */
}
```

## 43. How do you create a CSS breadcrumb navigation?

A CSS breadcrumb navigation can be created using an unordered list styled with Flexbox or inline-block.

```css
.breadcrumb {
    display: flex;
    list-style: none;
}

.breadcrumb li {
    margin-right: 10px;
}
```

## 44. What is the `text-shadow` property?

The `text-shadow` property adds shadow effects to text. It takes values for horizontal offset, vertical offset, blur radius, and color.

```css
.text {
    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
}
```

## 45. How do you create a CSS modal?

A CSS modal can be created using a hidden element that is displayed when a button is clicked. It typically includes a backdrop and a close button.

```css
.modal {
    display: none; /* Hidden by default */
}

.modal.show {
    display: block; /* Show modal */
}
```

## 46. What is the `line-height` property?

The `line-height` property specifies the height of a line box. It can be set using unitless values, percentages, or specific lengths.

```css
.element {
    line-height: 1.5; /* 1.5 times the font size */
}
```

## 47. How do you create a CSS accordion?

A CSS accordion can be created using the `:checked` pseudo-class to show/hide content based on user interaction.

```css
.accordion input:checked + .content {
    display: block; /* Show content when input is checked */
}
```

## 48. What is the `white-space` property?

The `white-space` property controls how whitespace is handled within an element. Common values include `normal`, `nowrap`, and `pre`.

```css
.element {
    white-space: nowrap; /* Prevents text from wrapping */
}
```

## 49. How do you create a CSS sticky sidebar?

A CSS sticky sidebar can be created using the `position: sticky` property.

```css
.sidebar {
    position: sticky;
    top: 0; /* Sticks to the top of the viewport */
}
```

## 50. What is the `grid-template-columns` property?

The `grid-template-columns` property defines the number and size of columns in a grid layout. It can use fixed sizes, percentages, or the `fr` unit.

```css
.grid-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* Three equal columns */
}
```

---

This concludes the list of 50 intermediate and hard-level CSS questions and their answers. You can save this content in a `.md` file for your reference.

A pseudo-element lets you style specific parts of an element without adding extra HTML. It's like targeting a "virtual" sub-part of an element.

| Pseudo-element   | Description                               |
| ---------------- | ----------------------------------------- |
| `::before`       | Inserts content **before** the element    |
| `::after`        | Inserts content **after** the element     |
| `::first-letter` | Targets the **first letter** of a block   |
| `::first-line`   | Targets the **first line** of a block     |
| `::placeholder`  | Styles the **placeholder text** in inputs |

A pseudo-class is a keyword added to a selector that targets an element in a specific state or under certain conditions — like hover, focus, first child, etc.
| Pseudo-Class     | What it targets                                  |
| ---------------- | ------------------------------------------------ |
| `:hover`         | When a user hovers over an element               |
| `:focus`         | When an element is focused (e.g., input field)   |
| `:active`        | While an element is being clicked                |
| `:first-child`   | If the element is the first child of its parent  |
| `:last-child`    | If the element is the last child of its parent   |
| `:nth-child(n)`  | Targets the nth child in a group                 |
| `:checked`       | When a checkbox or radio is selected             |
| `:disabled`      | Targets disabled inputs/buttons                  |
| `:not(selector)` | Targets everything except what's in the selector |
