# Tilting Card With CSS Only

Welcome I am [Samir Ahmad](https://github.com/SamirAhmad5445) and this is a Tilting Effect using CSS only the main idea of using grid and the elements position to transform the card it came from Kevin Powell from this vide >[Create a tilting card on hover with CSS only](https://youtube.be/eOTj_mWjds)<, He is explaning who it works i just did it with SASS to be able to use @for loop and make the process faster with Bigger like 10\*10 grid instead of 3\*3 grid

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Open on Codepen](https://codepen.io/Samir-Ahmad/pen/rNrgdjp)
- [My Process](#my-process)
  - [HTML](#html)
  - [Javascript](#javascript)
  - [SASS](#sass)
- [My Accounts](#my-accounts)
  - [Gmaill](mailto:samirahmad5445@gmail.com)
  - [GitHub](https://github.com/SamirAhmad5445)
  - [Codepen](https://codepen.io/Samir-Ahmad/)

## Overview

### Screenshot

![Screenshot for my solution](./screen-shot.png)

### [Open on Codepen](https://codepen.io/Samir-Ahmad/pen/rNrgdjp)

## My Process

### HTML

for HTML there no need for complexity, all we need is a `<div>` and an `<img>` tag and give the div a class to select it with javascript

```html
<div class="card">
  <img class="card-image" src="./card.jpg" alt="Fight Club Poster" />
</div>
```

### Javascript

for the Javascript, we will need three variables:

- the card itself
- the image inside
- the gridDimension

and we can use the third one in the for loop

```js
for (let i = 0; i < gridDimension ** 2; i++) {
  let mouseTracker = document.createElement("div");
  mouseTracker.className = "mouse-tracker";
  mouseTracker.setAttribute("aria-hidden", "true");
  card.insertBefore(mouseTracker, cardImage);
}
```

_note: the aria-hidden attribute is there because the mouseTracker div has no semantic meaning_

### SASS

now the hard part, not the sass part but the mathematical logic, to make it easy we can split it to there step, from here you need to watch the [Kevin Powell Video](https://youtube.be/eOTj_mWjds) to follow along with us

#### Step-1: setup the grid-column for the tackers

first you need to make a variable calls `$grid-dimension` and get it the same value as the ja one and now we can use this variable in `@for` loop like this

```scss
@for $i from 0 to $grid-dimension {
  &:nth-of-type(#{$grid-dimension}n - #{$i}) {
    grid-column: #{$grid-dimension - $i} / #{$grid-dimension - $i + 1};
  }
}
```

#### Step-2: setup the grid-row for the trackers

as the grid-column we are using the `$grid-dimension` variable in `@for` loop but with some changes in the selector this time

```scss
@for $i from 0 to $grid-dimension {
  &:nth-of-type(n + #{$i * $grid-dimension + 1}):nth-of-type(
      -n + #{$i * $grid-dimension + $grid-dimension}
    ) {
    grid-row: #{$i + 1} / #{$i + 2};
  }
}
```

to make range using the `nth-child()` pseudo class or the `:nth-of-type()` from A to B you just do this

```scss
.my-div:nth-child(n + #{$start}):nth-child(-n + #{$end}) {
  // props here
}
```

#### Step-3: setup the transform functions on the card-image on hover

to do thet we need some mathematics:

- to make something goes in range of 1 to -1 use the sin() because the max value of it is 1 and the min value is -1.
- the grid we did has a dimension of n\*n and the n is the value of the `$grid-dimension` variable, but what is this mean? this means that we had n of columns and rows like a matrix and to loop over a matrix it's like two dimensional array so we need 2 loops one to loop over the rows and one for the columns, if we suppose that the grid is like XY Axis the rows loop goes in the x direction and we can use it to determine the rotation of X by the sin($angle) and the same thing for the columns.
- the $angle must goes from -90deg to 90deg cause sin(-90deg) = -1 and sin(90deg) = 1.
- we will be using `$index` variable and increase it every loop in the second `@for` loop so we can use it in the `:nth-of-type()`.
- to add equal values each time for the rotation angle we divide the angle by n so the same amount get added every time.

```scss
$index: 1;
@for $i from 0 to $grid-dimension {
  @for $j from 0 to $grid-dimension {
    &:nth-of-type(#{$index}):hover ~ .card-image {
      transform: perspective(var(--perspective))
        rotateX(
          calc(
            math.sin(-90deg + $i * calc(180deg / $grid-dimension)) *
              var(--angle) *
              -1
          )
        )
        rotateY(
          calc(
            math.sin(-90deg + $j * calc(-180deg / $grid-dimension)) *
              var(--angle)
          )
        );
    }
    $index: $index + 1;
  }
}
```

_note: using `calc()` is best practice in dart-sass cause we can't use the divition out of the `calc()` or `div()` functions any more_

and by that we can say it is done and you can change the value of the there sass variables to what ever you like but make sure when changing the `$grid-dimension` in sass use the same value in `gridDimension` javascript, nad if you did not understand from this markdown file you can contact me on my gmail.

## My Accounts

- Gmaill - [samirahmad5445@gmail.com](samirahmad5445@gmail.com)
- GitHub - [@SamirAhmad5445](https://github.com/SamirAhmad5445)
- Codepen - [@SamirAhmad5445](https://codepen.io/Samir-Ahmad/)
