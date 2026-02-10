cat <<EOF > README.md
# **URL Shortener - MERN Stack**

A powerful and secure **URL Shortener** application built with the **MERN** stack (MongoDB, Express.js, React, Node.js). This tool allows users to transform long, cumbersome URLs into neat, shareable links while providing detailed click analytics and secure user management.

**Live Demo:** [View Project](https://url-shortener-eight-bice.vercel.app/login)

---

## **Key Features**

* **Secure Authentication:** Robust user login and registration powered by **JWT (JSON Web Tokens)**.
* **Custom Shortened Links:** Effortlessly convert long URLs into short, manageable links.
* **Analytics Dashboard:** Real-time tracking of click counts to monitor link performance.
* **Personal Dashboard:** A secure space for users to view, manage, and delete their generated links.
* **Responsive UI:** A clean, modern interface built with **Tailwind CSS** that works seamlessly across all devices.

---

## **Technologies Used**

### **Frontend**
* **React.js:** For building a dynamic and responsive user interface.
* **Tailwind CSS:** For modern, utility-first styling.
* **Axios:** For making seamless API requests to the backend.

### **Backend**
* **Node.js & Express.js:** For building a scalable and efficient RESTful API.
* **MongoDB:** For flexible and reliable data storage.
* **JWT:** For handling secure user authentication and authorization.

---

## **Getting Started**

### **Prerequisites**
* Node.js (v14 or higher)
* MongoDB Atlas account or local MongoDB instance

## **Installation**

1.  **Clone the Repository:**
    \`\`\`bash
    git clone https://github.com/Akshay1267/url-shortener.git
    cd url-shortener
    \`\`\`

2.  **Setup Backend:**
    * Navigate to the \`backend\` folder.
    * Install dependencies: \`npm install\`.
    * Create a \`.env\` file and add your \`MONGO_URI\` and \`JWT_SECRET\`.
    * Start the server: \`npm start\`.

3.  **Setup Frontend:**
    * Navigate to the \`frontend\` folder.
    * Install dependencies: \`npm install\`.
    * Start the development server: \`npm run dev\`.

---

## **Project Structure**

* **\`/backend\`**: Contains the Express server, MongoDB models, and authentication controllers.
* **\`/frontend\`**: Contains the React application, components, and dashboard logic.

---

## **Contributing**

Contributions are welcome! If you have suggestions for new features or improvements, feel free to fork the repository and submit a pull request.

---

## **Author**

**Akshay Jain**
* GitHub: [@Akshay1267](https://github.com/Akshay1267)
EOF
