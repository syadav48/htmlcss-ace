# Flexbox Layout Model

The Flexbox Layout Model, or Flexible Box Layout, is a CSS layout mode designed to provide a more efficient way to lay out, align, and distribute space among items in a container, even when their size is unknown or dynamic. It is particularly useful for creating responsive web designs.

## Key Concepts

1. **Flex Container**: The parent element that holds the flex items. To create a flex container, you set the `display` property to `flex` or `inline-flex`.

   ```css
   .flex-container {
       display: flex;
   }
   ```

2. **Flex Items**: The direct children of a flex container. These items can be manipulated using various flex properties.

3. **Main Axis and Cross Axis**:
   - The **main axis** is the primary axis along which flex items are laid out (default is horizontal).
   - The **cross axis** is perpendicular to the main axis (default is vertical).

4. **Flex Properties**:
   - `flex-direction`: Defines the direction of the main axis (e.g., `row`, `column`, `row-reverse`, `column-reverse`).
   - `justify-content`: Aligns flex items along the main axis (e.g., `flex-start`, `flex-end`, `center`, `space-between`, `space-around`).
   - `align-items`: Aligns flex items along the cross axis (e.g., `flex-start`, `flex-end`, `center`, `baseline`, `stretch`).
   - `flex-wrap`: Controls whether flex items should wrap onto multiple lines (e.g., `nowrap`, `wrap`, `wrap-reverse`).

## Example

```html
<div class="flex-container">
    <div class="flex-item">Item 1</div>
    <div class="flex-item">Item 2</div>
    <div class="flex-item">Item 3</div>
</div>
```

```css
.flex-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.flex-item {
    flex: 1; /* Grow to fill space */
}
```

---

# Grid Layout Model

The Grid Layout Model is a two-dimensional layout system in CSS that allows developers to create complex layouts using rows and columns. It provides a more structured way to design web pages compared to Flexbox, which is primarily one-dimensional.

## Key Concepts

1. **Grid Container**: The parent element that holds the grid items. To create a grid container, you set the `display` property to `grid` or `inline-grid`.

   ```css
   .grid-container {
       display: grid;
   }
   ```

2. **Grid Items**: The direct children of a grid container. These items can be placed in specific grid areas.

3. **Grid Lines**: The lines that divide the grid into rows and columns. They can be referenced by their index.

4. **Grid Properties**:
   - `grid-template-columns`: Defines the number and size of columns in the grid.
   - `grid-template-rows`: Defines the number and size of rows in the grid.
   - `grid-area`: Specifies a grid item's location within the grid.
   - `gap`: Sets the space between rows and columns.

## Example

```html
<div class="grid-container">
    <div class="grid-item">Item 1</div>
    <div class="grid-item">Item 2</div>
    <div class="grid-item">Item 3</div>
    <div class="grid-item">Item 4</div>
</div>
```

```css
.grid-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr); /* Two equal columns */
    grid-template-rows: auto; /* Automatic row height */
    gap: 10px; /* Space between items */
}

.grid-item {
    background-color: lightblue;
}
```

---

## Comparison

| Feature          | Flexbox                          | Grid                             |
|------------------|----------------------------------|----------------------------------|
| Layout Type      | One-dimensional (row or column)  | Two-dimensional (rows and columns) |
| Use Case         | Best for aligning items in a single direction | Best for complex layouts with both rows and columns |
| Alignment        | Aligns items along a single axis | Aligns items in both axes        |
| Item Placement   | Items flow in the order they appear | Items can be placed in specific grid areas |

Both Flexbox and Grid are powerful layout models in CSS, and they can be used together to create responsive and complex web designs.