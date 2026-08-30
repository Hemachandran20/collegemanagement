# College Complaint Management System

A full-stack, centralized digital campus governance and complaint management web application. Built with **React, Node.js, Express, and MongoDB (with Mongoose)**, styled using **Tailwind CSS**.

---

## 🌟 Key Features

### 🎓 Student Portal
- **Secure Registration & Login**: Validated student registration (Full Name, College Email, Student ID, Department, Year, Phone, Password).
- **Interactive Dashboard**: Real-time stats (Total Submitted, In Progress, Resolved, Closed) and recent complaints list.
- **Complaint Submission Form**:
  - 11 Categorized domains (Classroom, Laboratory, Hostel, Wi-Fi / Internet, Infrastructure, Transportation, Cleanliness, Library, Electrical, Water, Other).
  - Priority levels (Low, Medium, High, Critical).
  - File upload with instant preview (Images, PDF, Word documents).
  - Auto-generated unique tracking ticket IDs (e.g. `CMP-2026-0001`).
- **Milestone Progress Tracker**: Visual 6-step lifecycle tracker (`Submitted` → `Under Review` → `Assigned` → `In Progress` → `Resolved` → `Closed`).
- **Interactive Resolution Feedback**: Students review technician resolution notes and provide star ratings (1-5) and feedback comments to close the ticket.
- **Direct Communication**: Students and admins can post comments and updates directly on tickets.

### 🛡️ Admin Command Center
- **Administrative Overview**: Real-time stats, urgent critical alert queue, unassigned complaints triage queue, and recent complaints master table.
- **Department & Staff Assignment**: Route complaints to specific departments (IT, Hostel, Maintenance, Electrical, Transport, Library, etc.) and assign responsible staff officers.
- **Status & Priority Controls**: Transition tickets across lifecycle states with internal audit trail logs.
- **Resolution Formulation**: Submit formal resolution descriptions and technician reports.
- **Departments & Staff Management**: CRUD interfaces to manage college departments, designated department heads, and active staff members.

---

## 🛠️ Technology Stack

| Layer | Technology |
|---|---|
| **Frontend** | React 18, Vite, React Router 6, Tailwind CSS, Lucide Icons, Canvas Confetti |
| **Backend** | Node.js, Express.js (REST API, MVC Architecture) |
| **Database** | MongoDB & Mongoose ORM |
| **Authentication** | JWT (JSON Web Tokens), Bcrypt.js Password Hashing |
| **File Storage** | Multer disk storage with static serving |

---

## 🚀 Quick Start & Running Locally

### 1. Prerequisites
- **Node.js** (v18 or newer)
- **MongoDB** (Local MongoDB server or MongoDB Atlas URI)

### 2. Setup & Installation
Clone the repository and install all dependencies:

```bash
# Install root, backend and frontend dependencies
npm install --prefix server
npm install --prefix client
```

### 3. Environment Configuration
Create `server/.env` (an example is provided in `server/.env.example`):

```env
PORT=5000
MONGODB_URI=mongodb://127.0.0.1:27017/college_complaint_db
JWT_SECRET=your_jwt_secret_key_here
NODE_ENV=development
```

### 4. Seed Demo Data
To populate the database with the default administrator, sample departments, staff, and demo complaints across all workflow stages:

```bash
npm run seed --prefix server
```

### 5. Launch the Application

In terminal 1 (Start backend API):
```bash
npm run server
# or: node server.js inside server/
```

In terminal 2 (Start frontend client):
```bash
npm run client
# or: npm run dev inside client/
```

- **Frontend App**: `http://localhost:3000`
- **Backend API**: `http://localhost:5000`

---

## 🔑 Default Demo Credentials

| Role | Email | Password | Access |
|---|---|---|---|
| **System Admin** | `admin@college.edu` | `admin123` | `/admin-login` |
| **Demo Student** | `student@college.edu` | `student123` | `/login` |

---

## 📡 REST API Reference

### Authentication
- `POST /api/auth/register` - Student registration
- `POST /api/auth/login` - User login (Student / Admin)
- `GET /api/auth/me` - Current logged-in user profile
- `PUT /api/auth/profile` - Update user details

### Complaints
- `POST /api/complaints` - Submit new complaint with file upload
- `GET /api/complaints` - List complaints (scoped by role, with search & filters)
- `GET /api/complaints/:id` - Get complaint details & complete milestone history
- `PUT /api/complaints/:id/status` - (Admin) Update complaint status & priority
- `PUT /api/complaints/:id/assign` - (Admin) Assign department & staff officer
- `POST /api/complaints/:id/resolve` - (Admin) Submit resolution summary
- `POST /api/complaints/:id/comments` - Post comment / update
- `POST /api/complaints/:id/feedback` - (Student) Submit 1-5 star rating & feedback to close
- `DELETE /api/complaints/:id` - Delete complaint record

### Departments & Staff
- `GET /api/departments` & `POST /api/departments` - List / Create departments
- `PUT /api/departments/:id` & `DELETE /api/departments/:id` - Edit / Delete departments
- `GET /api/staff` & `POST /api/staff` - List / Create staff members
- `PUT /api/staff/:id` & `DELETE /api/staff/:id` - Edit / Delete staff members

### Analytics Dashboard
- `GET /api/dashboard/student` - Student metrics & recent submissions
- `GET /api/dashboard/admin` - Administrative triage metrics, alerts, and queue data
