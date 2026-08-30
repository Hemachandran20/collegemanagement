Act as a senior full-stack developer and UI/UX designer.

Build a complete, working, beginner-friendly web application called:

"College Complaint Management System"

GOAL:
Create a centralized digital platform where college students can submit complaints about campus issues, track complaint progress, and view the final resolution. Admins should be able to review complaints, assign them to departments/staff, update statuses, add comments, and manage the entire complaint lifecycle.

IMPORTANT:
- Build a REAL working application, not just a static UI.
- Frontend, backend, database, authentication, CRUD APIs, and deployment-ready configuration must work together.
- Keep the code clean, modular, readable, and beginner-friendly.
- Use responsive design for mobile, tablet, and desktop.
- Do not add unnecessary complex features.
- Focus first on all core features working correctly.

==================================================
1. USER ROLES
==================================================

Create two roles:

A. STUDENT
B. ADMIN

Student permissions:
- Register
- Login
- Logout
- View dashboard
- Submit complaints
- Upload complaint image/file
- View own complaints
- View complaint details
- Track complaint status
- View complaint history
- View admin comments/updates
- View resolution details
- Give feedback/rating after resolution

Admin permissions:
- Login
- View admin dashboard
- View all complaints
- Search complaints
- Filter complaints
- View complaint details
- Assign department
- Assign responsible staff
- Change priority
- Change complaint status
- Add comments/updates
- Add resolution details
- View statistics

Students must NEVER be able to access admin pages.

==================================================
2. TECHNOLOGY STACK
==================================================

Use a simple modern full-stack architecture.

Frontend:
- React
- React Router
- Tailwind CSS
- Responsive design
- Reusable components

Backend:
- Node.js
- Express.js
- REST APIs

Database:
- MongoDB

Authentication:
- JWT authentication
- Password hashing
- Role-based authorization

File uploads:
- Support image/file attachment for complaints.
- Validate file type and size.

Use environment variables for:
- Database URL
- JWT secret
- API URL
- Other sensitive configuration

Do not hardcode secrets.

==================================================
3. DESIGN / UI
==================================================

Create a professional college-management style interface.

Design requirements:
- Clean
- Modern
- Simple
- Beginner-friendly
- Professional
- Mobile responsive
- Good spacing
- Rounded cards
- Clear typography
- Accessible buttons
- Consistent colors
- Clear status badges
- Loading states
- Empty states
- Error messages
- Success messages

Create a responsive navbar/sidebar.

Student navigation:
- Dashboard
- Submit Complaint
- My Complaints
- Complaint History
- Profile
- Logout

Admin navigation:
- Dashboard
- All Complaints
- Pending
- In Progress
- Resolved
- Departments
- Staff
- Logout

==================================================
4. LANDING PAGE
==================================================

Create a public landing page.

Include:

Hero section:
Title:
"College Complaint Management System"

Subtitle:
"Report campus issues, track progress, and get problems resolved faster."

Buttons:
- Student Login
- Register
- Admin Login

Add sections explaining:
- Submit Complaints
- Track Status
- Quick Resolution
- Transparent Process

Add a simple footer.

==================================================
5. AUTHENTICATION
==================================================

Create:

Student Registration:
- Full name
- College email
- Student ID
- Department
- Year
- Phone number
- Password
- Confirm password

Login:
- Email
- Password

Admin login:
- Email
- Password

Implement:
- JWT authentication
- Password hashing
- Protected routes
- Role-based access
- Logout
- Proper validation
- Invalid login error handling

Do not allow users to select "admin" during normal student registration.

Create a secure way to create the initial admin account using a seed script or environment configuration.

==================================================
6. STUDENT DASHBOARD
==================================================

Create a dashboard showing:

Welcome message:
"Welcome, [Student Name]"

Statistics cards:
- Total Complaints
- Submitted
- In Progress
- Resolved
- Closed

Show:
"Recent Complaints"

Each complaint card/table should display:
- Complaint ID
- Title
- Category
- Priority
- Status
- Date
- View button

Add a prominent:
"+ Submit New Complaint"

button.

==================================================
7. COMPLAINT SUBMISSION
==================================================

Create a complaint form.

Fields:

- Complaint title
- Category
- Description
- Location
- Priority
- Image/file attachment

Categories:

1. Classroom
2. Laboratory
3. Hostel
4. Wi-Fi / Internet
5. Infrastructure
6. Transportation
7. Cleanliness
8. Library
9. Electrical
10. Water
11. Other

Priority:

- Low
- Medium
- High
- Critical

Validation:
- Title required
- Description required
- Category required
- Location required
- Valid priority
- File type validation
- File size validation

After successful submission:
Show:
"Complaint submitted successfully."

Generate a unique complaint ID.

Default status:

SUBMITTED

==================================================
8. COMPLAINT STATUS
==================================================

Use exactly this workflow:

Submitted
↓
Under Review
↓
Assigned
↓
In Progress
↓
Resolved
↓
Closed

Create a visual status tracker/timeline.

Example:

✓ Submitted
   |
✓ Under Review
   |
✓ Assigned
   |
● In Progress
   |
○ Resolved
   |
○ Closed

Display:
- Current status
- Status history
- Date/time of each status change
- Admin update/comment if available

Prevent invalid status transitions where appropriate.

==================================================
9. COMPLAINT DETAILS PAGE
==================================================

Create a detailed complaint page.

Display:

Complaint ID
Title
Category
Description
Location
Priority
Current Status
Created Date
Updated Date
Attached Image/File

Status timeline.

Department:
Assigned department

Staff:
Assigned staff member

Admin comments:
Show all updates chronologically.

Resolution:
- Resolution description
- Resolved date

Student feedback:
- Rating
- Feedback comment

Students can only view their own complaints.

==================================================
10. ADMIN DASHBOARD
==================================================

Create a professional admin dashboard.

Statistics:

- Total Complaints
- Submitted
- Under Review
- Assigned
- In Progress
- Resolved
- Closed
- Critical Complaints

Add charts if practical.

Show:
- Recent complaints
- High priority complaints
- Critical complaints
- Complaints waiting for assignment

Create a clear dashboard layout.

==================================================
11. ADMIN COMPLAINT MANAGEMENT
==================================================

Admin can:

- View all complaints
- Search complaints
- Filter by:
  - Status
  - Category
  - Priority
  - Department
  - Date
- Sort complaints
- Open complaint details

Admin can update:

Status
Priority
Department
Assigned staff
Admin comment
Resolution details

Every important update should be recorded in complaint history.

==================================================
12. DEPARTMENT / STAFF ASSIGNMENT
==================================================

Create departments such as:

- IT Department
- Hostel Department
- Transport Department
- Maintenance Department
- Electrical Department
- Library Department
- Administration
- Housekeeping

Admin can assign a complaint to:
- Department
- Responsible staff member

When assigning:

Status should become:

ASSIGNED

Record:
- Assigned department
- Assigned staff
- Assignment date
- Admin who assigned it

==================================================
13. ADMIN COMMENTS / UPDATES
==================================================

Admin can add updates.

Example:

"Technician has been assigned to inspect the Wi-Fi router."

Display updates chronologically:

Admin
↓
Comment
↓
Date and time

Students should be able to see these updates.

==================================================
14. RESOLUTION
==================================================

When the issue is fixed:

Admin changes status to:

RESOLVED

Admin must provide:

Resolution details

Example:
"Wi-Fi router in Block A was replaced and tested successfully."

Record:
- Resolution details
- Resolved date
- Resolved by

Then allow the student to provide feedback.

==================================================
15. CLOSING COMPLAINT
==================================================

After resolution:

Student can review the resolution.

Student can:
- Accept resolution
- Give rating
- Add feedback

Then complaint becomes:

CLOSED

If the student reports that the issue is not resolved, keep it in RESOLVED or reopen it based on a simple workflow.

==================================================
16. COMPLAINT HISTORY
==================================================

Create a complete history for every complaint.

Example:

Complaint Created
↓
Submitted
↓
Under Review
↓
Assigned to Maintenance Department
↓
Assigned to Staff
↓
In Progress
↓
Resolved
↓
Student Feedback
↓
Closed

Store:
- Action
- Previous status
- New status
- Comment
- User/admin
- Timestamp

==================================================
17. SEARCH AND FILTER
==================================================

Implement working search.

Search by:
- Complaint ID
- Title
- Student name
- Category
- Location

Filters:
- Status
- Priority
- Category
- Department
- Date

Use backend API filtering where appropriate.

==================================================
18. DATABASE MODELS
==================================================

Create suitable MongoDB models.

User:

- name
- email
- password
- role
- studentId
- department
- year
- phone
- createdAt

Department:

- name
- description
- createdAt

Staff:

- name
- email
- department
- phone
- createdAt

Complaint:

- complaintId
- title
- description
- category
- location
- priority
- attachment
- student
- department
- assignedStaff
- status
- adminComments
- resolution
- feedback
- rating
- createdAt
- updatedAt
- resolvedAt
- closedAt

ComplaintHistory:

- complaint
- action
- previousStatus
- newStatus
- comment
- performedBy
- createdAt

==================================================
19. REST API
==================================================

Create working REST APIs.

Authentication:

POST /api/auth/register
POST /api/auth/login
POST /api/auth/logout
GET /api/auth/me

Complaints:

POST /api/complaints
GET /api/complaints
GET /api/complaints/:id
PUT /api/complaints/:id
DELETE /api/complaints/:id

Admin:

PUT /api/complaints/:id/status
PUT /api/complaints/:id/assign
POST /api/complaints/:id/comments
POST /api/complaints/:id/resolve
POST /api/complaints/:id/feedback

Departments:

GET /api/departments
POST /api/departments

Staff:

GET /api/staff
POST /api/staff

Dashboard:

GET /api/dashboard/student
GET /api/dashboard/admin

Protect APIs using authentication and role authorization.

==================================================
20. ERROR HANDLING
==================================================

Handle:

- Invalid login
- Duplicate email
- Missing fields
- Invalid complaint
- Unauthorized access
- Invalid status transition
- Database errors
- File upload errors
- API errors
- Network errors

Show beginner-friendly error messages.

==================================================
21. RESPONSIVE DESIGN
==================================================

The application MUST work properly on:

Mobile:
320px+
375px+
414px+

Tablet:
768px+

Desktop:
1024px+
1440px+

Do not allow:
- Horizontal overflow
- Broken tables
- Overlapping cards
- Text overflowing buttons
- Broken navigation

For mobile:
- Convert desktop sidebar to mobile menu
- Make tables scrollable or convert them to cards
- Stack dashboard cards
- Make forms single-column
- Ensure buttons are touch-friendly

==================================================
22. SECURITY
==================================================

Implement basic security best practices:

- Hash passwords
- JWT authentication
- Protected routes
- Role-based authorization
- Validate request data
- Sanitize user input
- File upload validation
- Do not expose passwords
- Do not expose JWT secrets
- Use environment variables

==================================================
23. BONUS FEATURES
==================================================

Only implement these AFTER all core features work:

- Email notifications
- Real-time notifications
- Admin analytics
- Department-wise statistics
- Complaint resolution time
- Student feedback/rating
- Automatic escalation
- PWA support

Do NOT add AI features initially.

==================================================
24. PROJECT STRUCTURE
==================================================

Use a clean structure such as:

client/
  src/
    components/
    pages/
    layouts/
    services/
    hooks/
    context/
    utils/
    App.jsx
    main.jsx

server/
  controllers/
  models/
  routes/
  middleware/
  services/
  utils/
  config/
  server.js

Include:

.env.example
README.md

==================================================
25. IMPORTANT UI PAGES
==================================================

Create these pages:

Public:
- Landing Page
- Login
- Register
- Admin Login

Student:
- Student Dashboard
- Submit Complaint
- My Complaints
- Complaint Details
- Complaint History
- Profile

Admin:
- Admin Dashboard
- All Complaints
- Complaint Details
- Departments
- Staff Management
- Admin Profile

==================================================
26. FINAL TESTING
==================================================

Before considering the project complete, test the full workflow:

1. Student registers
2. Student logs in
3. Student submits complaint
4. Complaint appears in student dashboard
5. Admin logs in
6. Admin sees complaint
7. Admin changes status to Under Review
8. Admin assigns department
9. Admin assigns staff
10. Status becomes Assigned
11. Admin changes status to In Progress
12. Admin adds comment
13. Student sees the update
14. Admin resolves complaint
15. Admin adds resolution details
16. Student views resolution
17. Student gives rating/feedback
18. Complaint becomes Closed

Also test:
- Mobile responsiveness
- Authentication
- Role permissions
- Search
- Filters
- File upload
- CRUD APIs
- Database persistence
- Error handling

==================================================
27. DEPLOYMENT
==================================================

Make the application deployment-ready.

Frontend:
- Vercel

Backend:
- Render / Railway / another suitable platform

Database:
- MongoDB Atlas

Configure production environment variables.

Create a clear README containing:

- Project description
- Features
- Tech stack
- Installation
- Environment variables
- Database setup
- Running locally
- API information
- Deployment instructions
- Default admin setup

==================================================
FINAL REQUIREMENT
==================================================

Do not stop after creating the UI.

Build the complete functional application with:

Frontend
+
Backend
+
MongoDB
+
Authentication
+
Authorization
+
CRUD
+
Complaint workflow
+
File upload
+
Admin management
+
Student tracking
+
Responsive design

The most important workflow is:

Student
→ Submit Complaint
→ Under Review
→ Assigned
→ In Progress
→ Resolved
→ Student Feedback
→ Closed

Keep the interface professional but simple enough for a beginner to understand and maintain.