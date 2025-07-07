# 🧪 React Event Handling Example

This is a simple React project built to understand and demonstrate **event handling**.  
Event handling in React allows developers to respond to user interactions such as **clicks**, **form submissions**, and **input changes**, making the app interactive and dynamic.

---

## 🔗 Live Demo

👉 [Click here to view the live app]([https://react-event-handling-rho.vercel.app/])

---

## 🧠 Types of Events Demonstrated

- 🖱️ **Click Events (`onClick`)** – Trigger actions when elements like buttons are clicked  
- ⌨️ **Input Events (`onChange`)** – Track and respond to changes in input fields  
- 📨 **Form Events (`onSubmit`)** – Handle full form submissions and prevent page reloads  
- ❌ **Prevent Default Behavior** – Use `e.preventDefault()` to stop default form actions  

---

## 🔍 How Events Work in This Project

- In `ButtonClick.jsx`, we handle a simple click event:

```jsx
function ButtonClick() {
  const handleClick = () => {
    alert("Button clicked!");
  };

  return <button onClick={handleClick}>Click Me</button>;
}
