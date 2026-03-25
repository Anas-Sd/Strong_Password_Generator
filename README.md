# 🔐 Password Generator

**Secure & Customizable Password Generator**

*Select your criteria. Generate strong passwords. Stay secure.*

[![Live Demo](https://img.shields.io/badge/🔗_Live_Demo-Password_Generator-FF6B6B?style=for-the-badge)](https://password-chesko.vercel.app)
[![License: MIT](https://img.shields.io/badge/License-MIT-F59E0B?style=for-the-badge)](LICENSE)
[![GitHub Stars](https://img.shields.io/github/stars/Anas-Sd/Strong_Password_Generator?style=for-the-badge&color=gold)](https://github.com/Anas-Sd/Password-Generator)
[![GitHub Forks](https://img.shields.io/github/forks/Anas-Sd/Strong_Password_Generator?style=for-the-badge&color=8B5CF6)](https://github.com/Anas-Sd/Password-Generator)

![HTML](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)

---

## 🧬 What is Password Generator?

> Weak passwords are the #1 cause of security breaches. **Password Generator** makes strong passwords effortless.

A **lightweight, client-side tool** that creates secure, randomized passwords based on your preferences — no servers, no tracking, just pure cryptographic randomness.

```javascript
const passwordGenerator = {
    input: "User-defined criteria",
    output: "🔒 Secure random password",
    stack: ["HTML", "CSS", "JavaScript"],
    storage: "None — fully client-side",
    status: "🟢 Live"
};

function generatePassword(length, options) {
    const charset = buildCharset(options);
    return Array.from(crypto.getRandomValues(new Uint32Array(length)))
        .map(v => charset[v % charset.length])
        .join(''); // 🔐 Cryptographically secure
}
```

---

## ✨ Features

| | Feature | Description |
|:---:|:---|:---|
| 🔐 | **Secure Generation** | Cryptographically random password output |
| 📏 | **Custom Length** | Choose password length to match requirements |
| 🔠 | **Character Options** | Toggle uppercase, lowercase, numbers & symbols |
| ⚡ | **Instant Output** | One-click generation with zero delay |
| 🎨 | **Clean UI** | Minimal, distraction-free interface |
| 📱 | **Responsive** | Works seamlessly on desktop & mobile |

---

## 🛠️ Tech Stack

### 🌐 Frontend

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

> No frameworks. No dependencies. Pure vanilla web technologies.

---

## 🔄 How It Works

```
┌─────────────────┐     ┌──────────────────┐     ┌──────────────────┐     ┌─────────────────┐
│   User Input     │ ──▶ │  Select Criteria  │ ──▶ │ Generate Password │ ──▶ │  Display Output  │
│                 │     │                  │     │                  │     │                 │
│ • Set length    │     │ • Uppercase      │     │ • Random values  │     │ • Show password │
│ • Choose types  │     │ • Lowercase      │     │ • Build string   │     │ • Copy to clip  │
│                 │     │ • Numbers        │     │ • Apply filters  │     │                 │
│                 │     │ • Symbols        │     │                  │     │                 │
└─────────────────┘     └──────────────────┘     └──────────────────┘     └─────────────────┘
```

---

## 🎯 Learning Focus

| | Highlight |
|:---:|:---|
| 🎲 | **Random value generation** — Secure randomness for password creation |
| 🔀 | **Conditional logic handling** — Dynamic charset building based on user options |
| 🖱️ | **DOM manipulation** — Real-time UI updates without frameworks |
| 📥 | **User input handling** — Processing checkboxes, sliders & button events |

---

## 📁 Project Structure

<details>
<summary>🗂️ Click to expand file structure</summary>

```
Password-Generator/
├── 📄 index.html          # Main HTML structure
├── 📂 css/
│   └── 📄 style.css       # Styling & responsive design
├── 📂 js/
│   └── 📄 script.js       # Password generation logic
├── 📂 assets/
│   └── 📂 images/         # Icons & UI assets
├── 📄 LICENSE
└── 📄 README.md
```

</details>

---

## 🚀 Getting Started

### Prerequisites

- Any modern web browser (Chrome, Firefox, Edge, Safari)
- No Node.js, no npm, no build tools required

### Installation

```bash
# Clone the repository
git clone https://github.com/Anas-Sd/Password-Generator.git

# Navigate to the project
cd Password-Generator

# Open in browser
open index.html
# or simply double-click index.html
```

> 💡 **That's it!** No dependencies to install, no servers to start.

---

## 🤝 Contributing

Contributions are welcome! Here's how:

1. **Fork** the project
2. **Create** your feature branch (`git checkout -b feature/AmazingFeature`)
3. **Commit** your changes (`git commit -m 'Add AmazingFeature'`)
4. **Push** to the branch (`git push origin feature/AmazingFeature`)
5. **Open** a Pull Request

---

## 📬 Let's Connect!

<p align="center">
<a href="https://github.com/Anas-Sd"><img src="https://img.shields.io/badge/GitHub-Anas--Sd-181717?style=for-the-badge&logo=github&logoColor=white"/></a>
<a href="https://www.linkedin.com/in/syedanas-sd"><img src="https://img.shields.io/badge/LinkedIn-Syed_Anas-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white"/></a>
<a href="mailto:anasannu44455@gmail.com"><img src="https://img.shields.io/badge/Email-anasannu44455@gmail.com-EA4335?style=for-the-badge&logo=gmail&logoColor=white"/></a>
<a href="https://syedanas.me"><img src="https://img.shields.io/badge/Portfolio-syedanas.me-00D9FF?style=for-the-badge&logo=google-chrome&logoColor=white"/></a>
</p>

<p align="center">
📍 <strong>India</strong> | 🕐 <strong>IST (UTC+5:30)</strong> | ✅ <strong>Open for Opportunities</strong>
</p>

---

## ⚖️ License

Distributed under the **MIT License**. See [`LICENSE`](LICENSE) for details.

---

<p align="center">

### 💬 "Security starts with a strong password."

</p>

<p align="center">
<strong>⭐ If you found this useful, give it a star!</strong>
</p>

<p align="center">
<strong>From <a href="https://github.com/Anas-Sd">SYED ANAS</a> with ❤️</strong>
</p>
