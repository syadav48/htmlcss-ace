+-------------------------------+
|           Navbar              |
+-------------------------------+
| Sidebar |     Main Content    |
|         |                     |
+-------------------------------+
|            Footer             |
+-------------------------------+

grid-template-columns: 250px 1fr 2fr;


fr means fractional unit of available space
First column: 250px (fixed)

Second column: takes 1 part of the remaining space

Third column: takes 2 parts of the remaining space

If the total remaining space after the fixed 250px is, say, 750px:

Second column = 1fr = 250px

Third column = 2fr = 500px

| Property                | Meaning                                         |
| ----------------------- | ----------------------------------------------- |
| `grid-template-areas`   | Defines the **visual layout** using named areas |
| `grid-template-columns` | Defines how **wide** each column is             |
| `grid-template-rows`    | Defines how **tall** each row is                |
| `grid-area`             | Assigns each child to a **named area**          |


"navbar navbar"  → Row 1: two columns, both occupied by `navbar`
"sidebar main"   → Row 2: first column is `sidebar`, second is `main`
"footer footer"  → Row 3: both columns occupied by `footer`


+---------+--------+
| navbar  | navbar | ← 60px height
+---------+--------+
| sidebar | main   | ← remaining height (1fr)
+---------+--------+
| footer  | footer | ← 50px height
+---------+--------+


