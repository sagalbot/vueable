# Vueable

![](https://img.shields.io/bundlephobia/min/@sagalbot/vueable.svg)
![](https://img.shields.io/bundlephobia/minzip/@sagalbot/vueable.svg)

> A lightweight set of Vue components for triggering 
  drop downs, modals, or any other toggleable content. 
  
Vueable ships with no css, and almost no markup. The components themselves render as 
a single, configurable tag with a scoped (or unscoped) slot.

Vueable serves to solve a common UX pattern: a trigger is clicked, and content is 
revealed. When the user clicks outside of the element, it is hidden again.

You can use Vueable to handle the logic and UX of creating drop downs, modals,
drawers, popovers, or tooltips. It integrates well with Popper.js if you
need calculated positioning.

# Install

#### Yarn

```bash
yarn add @sagalbot/vueable
```

#### NPM

```bash
npm install --save @sagalbot/vueable
```

## Use Case: Drop downs

The example below uses Bootstrap 4 classes to enable a dropdown.

```
import Vue from 'vue';
import Vueable from '@sagalbot/vueable';

Vue.component('toggle', Vueable.Toggle);
Vue.component('target', Vueable.Target);
```

```html
<toggle class="dropdown">
  <button class="btn btn-primary">Toggle Dropdown</button>

  <target tag="nav" class="dropdown-menu show">
    <li class="dropdown-item">Dropdown Content</li>
  </target>
</toggle>
```
