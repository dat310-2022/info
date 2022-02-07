# Bootstrap exercises

## Exercise #1: 960.gs

This is not an exercise about Bootstrap (yet).

Complete [exercise1.html](exercise1.html) such that that page displays as shown below:
![Exercise1](images/exercise1.png)

You need to create the boxes using the prepared CSS classes. See [this page](http://960.gs/demo.html) for an example.

Hint: the first (blue) box becomes:

```html
<div class="grid_6">
  <div class="blue"></div>
</div>
```

## Exercise #2a: Grid layout

Complete [exercise2a.html](exercise2a.html) to create the following layout using Bootstrap.


Hint: use [Rows and columns](https://getbootstrap.com/docs/5.0/layout/columns/) and [background colors](https://getbootstrap.com/docs/5.0/utilities/colors/#background-color)

![Exercise2a desktop](images/exercise2a.png)

## Exercise #2b: Responsive layout

Include breakpoints to make the design from exercise #2a responsive. 

Hint: use [grid system](https://getbootstrap.com/docs/5.0/layout/grid/) on rows and [display utility](https://getbootstrap.com/docs/5.0/utilities/display/)

Mobile view:
![Exercise2b mobile](images/exercise2b_mobile.png)

Desktop view:
![Exercise2b desktop](images/exercise2a.png)

## Exercise #2c: Spacing

Add spacing between columns and rows. This requires to add one level of nesting to the design.
Start from [exercise2c.html](exercise2c.html).

Hint: use [grid system](https://getbootstrap.com/docs/5.0/layout/grid/) on rows and [display utility](https://getbootstrap.com/docs/5.0/utilities/display/)

Mobile view:
![Exercise2b mobile](images/exercise2c_mobile.png)

Desktop view:
![Exercise2b desktop](images/exercise2c_desktop.png)

## Exercise #3: Tables

Add Bootstrap classes to [exercise3.html](exercise3.html) to create the following 4 tables:

![Tables](images/exercise3.png)


## Exercise #4: Simple form

Style the form given in [exercise4.html](exercise4.html) using Bootstrap. (You will also need to include the Bootstrap css file in the header.) See the [Bootstrap form documentation](https://getbootstrap.com/docs/5.0/forms/overview/) for help.
Add some margin between the groups using `mb-3`.


![Exercise4](images/exercise6.png)

## Exercise #5: Responsive form

Create a responsive form, as shown below. You can use the [form.html](../../examples/bootstrap/form.html) as starting point.
Remember to create new elements for nested rows.

Mobile view:
![Exercise 5 mobile view](images/exercise5_mobile.png)

Desktop view:
![Exercise 5 desktop view](images/exercise5_desktop.png)

## Exercise #6: Wild & Wacky Vegetables

Format and extend the given [starer html file](exercise6.html) using Bootstrap by following the steps below.

1) Use the [Bootstrap grids classes](https://getbootstrap.com/docs/5.0/layout/grid) to create a sidebar and main content.
Use a [card](https://getbootstrap.com/docs/5.0/components/card/#titles-text-and-links)  and [nav list](https://getbootstrap.com/docs/5.0/components/navs-tabs/#vertical) to style the sidebar.

![Exercise6/1](images/exercise6_1.png)

1)  Add a [quote](https://getbootstrap.com/docs/5.0/content/typography/#blockquotes), [table](https://getbootstrap.com/docs/5.0/content/tables/), and search form to the page:

![Exercise6/2](images/exercise6_2.png)

3) Use the [Bootstrap alert component](https://getbootstrap.com/docs/5.0/components/alerts) to add a danger alert. Use the [thumbnails classes](https://getbootstrap.com/docs/5.0/content/images) to give the images borders.

![Exercise6/3](images/exercise6_3.png)


## Exercise #7: Components

Try the some Bootstrap components in action by building the following page step-by-step. There is no starter file for this exercise, you need to code everything from scratch.

1) Add a navigation bar, a full-width element, and 3 columns with some content.
   - Use custom css only for background color `#e2e3e5`.
   - Use [text classes](https://getbootstrap.com/docs/5.0/content/typography/#display-headings)
   - Add appropriate padding

![Exercise7/1](images/exercise7_1.png)

2) Extend the navigation bar with the followings:
  - The navbar should always be fixed on the top of the screen.
  - Add three menu items plus a dropdown menu to the left. Mark the second menu item as active.
  - Add a sign-in form with email and passwords fields to the right.

![Exercise7/2](images/exercise7_2.png)
![Exercise7/2b](images/exercise7_2dropdown.png)

  - The navbar should collaps on mobile screens:

![Exercise7/2mobile](images/exercise7_2mobile.png)

3) Add some buttons, a dismissable alert, a "New" badge, and a small pill badge showing the number of contacts.

![Exercise7/3](images/exercise7_3.png)
