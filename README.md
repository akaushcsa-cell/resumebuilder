# 📄 Interactive Live Resume Builder

A sleek, responsive, and modern single-page web application that empowers users to create, customize, and generate professional resumes in real time. Features a live side-by-side editing canvas with an automatic A4 print layout engine.

---

## ✨ Features

- **⚡ Live Preview Sync:** See formatting changes and text updates instantly on an A4-simulated canvas as you type.
- **🎨 Custom Styling & Theme Engine:** - Dynamic **Theme Color** picker allows you to instantly alter the resume headings' accent color.
  - One-click **Light/Dark mode** toggle built for the application workspace interface.
- **🖼️ Profile Photo Upload:** Seamlessly upload, crop-fit, and preview your professional portrait instantly using the `FileReader` API.
- **➕ Dynamic Repeater Sections:** Add, modify, or delete multiple educational blocks and career milestones dynamically.
- **📝 Automatic List Formatting:** Input items in textareas (such as Skills, Projects, or Certificates) separated by line breaks, and they will automatically parse into structured bullet points (`<li>`).
- **🖨️ High-Fidelity Print Engine:** Optimized using custom `@media print` rules ensuring clean margins and pristine formatting, completely hiding interface buttons during your PDF download.

---

## 🛠️ Technologies Used

- **HTML5:** Pure semantic architecture, modern form validation controls, and structured document hierarchy.
- **CSS3:** Custom properties (CSS variables), responsive layouts via CSS Grid & Flexbox, and advanced print rule declarations.
- **JavaScript (Vanilla ES6+):** Responsive input synchronization listeners, DOM manipulation, structural component injection, and state toggles.
- **Typography & Assets:** FontAwesome v6 Icons and the crisp, readable 'Poppins' typeface from Google Fonts.

---

## 📂 Project Structure

```text
resume-builder/
├── index.html       # Structural layout and semantic input elements
├── style.css        # Interactive grid styling, theme variables, and print settings
├── script.js        # Core synchronization, file loading, and element repeater logic
└── README.md        # Comprehensive repository documentation
