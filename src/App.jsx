import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

import './App.css';

// ---------- App: the top-level component ----------
function App() {
  return (
    <div>
      <h1>React Components: Practice Notes</h1>

      <h3>What is a component?</h3>
      <p>
        A component is a reusable piece of UI. In React it is a JavaScript
        function that starts with a capital letter and returns JSX.
      </p>

      <h3>What is App()?</h3>
      <p>
        App() is the top-level (root) component. Every other component goes
        inside it, and it is the one that finally gets rendered on the screen
        through main.jsx.
      </p>

      <h3>Rule 1: Return only ONE parent element</h3>
      <p>
        A component can return only one element. If you need more, wrap them
        in a single parent like a div or a fragment (&lt;&gt; ... &lt;/&gt;).
      </p>

      <h3>Rule 2: You can have multiple components inside another component</h3>
      <p>
        One big component can contain many small components. All of them go
        inside App, and App is rendered as it is.
      </p>

      <h3>Example: Page contains Header, Course and Footer</h3>
      <Page />
    </div>
  );
}

function Header() {
  return <h2>I am the Header component</h2>;
}

function Course() {
  return <p>I am the Course component: learning React</p>;
}

function Footer() {
  return <p>I am the Footer component</p>;
}

// ---------- A bigger component that contains other components ----------
function Page() {
  return (
    <div>
      <Header />
      <Course />
      <Footer />
    </div>
  );
}



export default App;

