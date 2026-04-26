# SkillAdda 

**SkillAdda** is a full-stack, cloud-connected aggregator platform designed to connect tech enthusiasts with localized, high-quality workshops, bootcamps, and seminars. Built entirely on the modern Next.js App Router and powered by Firebase, the platform allows users to discover hands-on tech events, while giving verified instructors a secure dashboard to publish, manage, and update their own workshop listings in real time.

---

![alt text](<skill-adda-nine.vercel.app_ (1).png>)

## Key Features

- 🔐 **Secure Authentication:** Robust user authentication system supporting both Email/Password and Google OAuth, powered by Firebase Auth.
- 🗄️ **Complete CRUD Functionality:** Authenticated users can Create, Read, Update, and Delete their own workshop listings, with real-time syncing to a Firestore NoSQL database.
- 🔎 **Advanced Search & Filtering:** Dynamic, client-side filtering allowing users to instantly sort workshops by Title, Location, and Tech Category.
- 🚦 **Smart Protected Routing & Deep Linking:** Custom middleware-style components that secure sensitive routes and automatically redirect users back to their intended destination after logging in.
- 📱 **Fully Responsive UI/UX:** A highly polished, mobile-first design built with Tailwind CSS, featuring frosted-glass hero sections, custom Google Fonts (Righteous), and interactive dropdown menus.
- ⚡ **Optimized Performance:** Utilizes Next.js Server Components where appropriate, alongside client-side pagination to manage data fetching efficiently.

---

## 🛠️ Setup & Installation Instructions

Follow these steps to run SkillAdda locally on your machine.

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [Git](https://git-scm.com/)
- A [Firebase](https://firebase.google.com/) account and project

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/skilladda.git
cd skilladda
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a file named `.env.local` in the root directory of the project and add your Firebase configuration keys:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

### 4. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

## 🗺️ Route Summary

SkillAdda utilizes a hybrid routing architecture, keeping exploratory pages indexed and public, while strictly securing data-mutation routes.

```text
🌍 SkillAdda App Routing
│
├── 🟢 Public Routes (Accessible to Everyone)
│   ├── /                   # Landing Page (Hero, Trending, Testimonials)
│   ├── /about              # About Us (Mission & Guidelines)
│   ├── /contact            # Contact (Support & Inquiries)
│   ├── /login              # Authentication (Email/Google Auth)
│   └── /items              # Explore Grid (Search, Filter, Paginate)
│
└── 🔴 Protected Routes (Requires Authentication)
    └── /items
        ├── /[id]           # Workshop Details (Shareable,SEO-friendly)
        ├── /add            # Create Event (Secure publish form)
        ├── /manage         # Instructor Dashboard (View/Delete table)
        └── /edit 
            └── /[id]       # Update Event (Pre-filled Firestore data)

---

Built with Next.js, Tailwind CSS, and Firebase.