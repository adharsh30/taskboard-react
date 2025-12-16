  # TaskBoard – React Task Management Application

TaskBoard is a single-page React application that allows users to register, log in, and manage their personal tasks efficiently.  
It demonstrates authentication, protected routes, CRUD operations, state management, persistence, testing, and a modern responsive UI.

---

## 🚀 Features

### 🔐 Authentication
- User Registration & Login
- Client-side password hashing using **bcryptjs**
- Session handling using mock authentication token
- Protected routes (unauthenticated users redirected to login)
- Logout functionality with session cleanup

### 📝 Task Management
- Create, View, Edit, and Delete tasks
- Tasks are **user-specific**
- Fields included:
  - Title
  - Description
  - Priority (Low / Medium / High)
  - Status (To Do / In Progress / Done)
  - Due Date
- Validation for required fields
- Validation to prevent past due dates

### 🔍 Search, Filter & Sort
- Search tasks by title or description
- Filter tasks by:
  - Status
  - Priority
- Sort tasks by:
  - Due date
  - Priority

### 💾 Data Persistence
- Data stored using **localStorage**
- Users, sessions, and tasks persist across page reloads
- No backend required (frontend-only assignment)

### 🎨 UI & UX
- Modern gradient-based user interface
- Fully responsive layout
- Active page highlighting in navbar
- User avatar with initials
- Dropdown menu for user actions
- Smooth hover effects and animations
- Clean spacing, typography, and color hierarchy

### 🧪 Testing
- Unit tests written using:
  - **Jest**
  - **React Testing Library**
- Authentication tests
- Task creation and deletion tests

---

## 🛠 Tech Stack

- **React** (Functional Components & Hooks)
- **React Router DOM**
- **Context API + Reducer**
- **CSS (Custom Styling)**
- **bcryptjs** – password hashing
- **uuid** – token generation
- **Jest & React Testing Library** – testing

---

## 📂 Project Structure

# TaskBoard – React Task Management Application

TaskBoard is a single-page React application that allows users to register, log in, and manage their personal tasks efficiently.  
It demonstrates authentication, protected routes, CRUD operations, state management, persistence, testing, and a modern responsive UI.

---

## 🚀 Features

### 🔐 Authentication
- User Registration & Login
- Client-side password hashing using **bcryptjs**
- Session handling using mock authentication token
- Protected routes (unauthenticated users redirected to login)
- Logout functionality with session cleanup

### 📝 Task Management
- Create, View, Edit, and Delete tasks
- Tasks are **user-specific**
- Fields included:
  - Title
  - Description
  - Priority (Low / Medium / High)
  - Status (To Do / In Progress / Done)
  - Due Date
- Validation for required fields
- Validation to prevent past due dates

### 🔍 Search, Filter & Sort
- Search tasks by title or description
- Filter tasks by:
  - Status
  - Priority
- Sort tasks by:
  - Due date
  - Priority

### 💾 Data Persistence
- Data stored using **localStorage**
- Users, sessions, and tasks persist across page reloads
- No backend required (frontend-only assignment)

### 🎨 UI & UX
- Modern gradient-based user interface
- Fully responsive layout
- Active page highlighting in navbar
- User avatar with initials
- Dropdown menu for user actions
- Smooth hover effects and animations
- Clean spacing, typography, and color hierarchy

### 🧪 Testing
- Unit tests written using:
  - **Jest**
  - **React Testing Library**
- Authentication tests
- Task creation and deletion tests

---

## 🛠 Tech Stack

- **React** (Functional Components & Hooks)
- **React Router DOM**
- **Context API + Reducer**
- **CSS (Custom Styling)**
- **bcryptjs** – password hashing
- **uuid** – token generation
- **Jest & React Testing Library** – testing

---

## 📂 Project Structure

src/                                                                                                     
├── components/                                                                                                                                                  
│ └── ProtectedRoute.jsx                                                                                       
├── context/                                                                                                                       
│ ├── AuthContext.jsx                                                                                                                                     
│ └── authReducer.js                                                                                                                                                               
├── hooks/                                                                                                                                                              
│ └── useAuth.js                                                                                                                                                                                 
├── pages/                                                                                               
│ ├── Login.jsx                                                                                                                        
│ ├── Register.jsx                                                                                                                                 
│ ├── TaskList.jsx                                                                                                                                               
│ ├── AddTask.jsx                                                                                                                                     
│ └── EditTask.jsx                                                                                                                                    
├── tests/                                                                                                                                         
│ ├── auth.test.jsx                                                                                                                            
│ └── tasks.test.jsx                                                                                                           
├── utils/                                                                                                
│ └── validators.js                                                                                                               
├── App.js                                                                                                                                    
├── App.css                                                                                                                                        
├── index.js                                                                                                                                                         
├── index.css                                                                                                                                                       
└── README.md                                                           

⭐ If you find this project useful, feel free to give it a star on GitHub!

