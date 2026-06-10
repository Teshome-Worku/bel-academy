# BEL ACADEMY Showcase Website - Master Build Prompt

## Role

You are a senior software architect, UI/UX designer, product designer, and Next.js engineer.

Your task is to build a complete BEL ACADEMY Showcase Website based on the requirements found in:

- docs/01-SRS.md
- docs/02-Design-System.md

Read and follow those documents strictly before generating any code.

---

# Project Goal

Build a professional showcase website and dashboard prototype for BEL ACADEMY.

This project is intended to demonstrate how BEL ACADEMY can modernize its public presence and student management experience.

This is NOT a production system.

This is a showcase/demo designed to impress the academy owner and demonstrate future possibilities.

---

# Technical Stack

Use:

- Next.js 15 App Router
- TypeScript
- Tailwind CSS
- Lucide React
- Recharts
- Responsive Design

Do NOT use:

- Backend
- Database
- Authentication
- API routes

Everything should be powered by static mock data.

---

# Development Priorities

Priority 1:
Visual quality.

Priority 2:
Mobile responsiveness.

Priority 3:
Clean architecture.

Priority 4:
Performance.

---

# Design Requirements

Follow the Design System document exactly.

Primary Color:
#0D47A1

Secondary Color:
#F5A623

Dark Navy:
#0F172A

Use:

- Poppins for headings
- Inter for body text

The site should feel:

- Modern
- Educational
- Premium
- Trustworthy

Avoid generic template appearance.

---

# Homepage Requirements

Create a world-class homepage.

Sections:

1. Hero Section
2. Statistics Section
3. Why Choose BEL Academy
4. Learning Programs
5. Branches
6. Community Section
7. Testimonials
8. Call To Action
9. Footer

The hero section should create an immediate "wow" factor.

Use a large background image with dark overlay.

Display:

- Register Now
- Explore Programs

Display statistics:

- 5000+ Students Trained
- 2 Physical Branches
- Online Learning Available
- 7 Learning Programs

---

# Programs

Display:

- Regular Class
- Night Class
- Weekend Class
- VIP
- VVIP
- Private
- Online Class

Each should have:

- Icon
- Description
- Card Layout

---

# Branches

Display:

## Buraayyuu

Phone:
0942412500

---

## Jamoo (Furii)

Phone:
0944788888

---

## Online Learning

Available Anywhere

Include map placeholders.

---

# Community Section

Display buttons for:

- Telegram
- Facebook
- TikTok
- Instagram
- YouTube

Links can be placeholders.

---

# About Page

Create:

- Academy Story
- Mission
- Vision
- Teaching Approach

Use professional placeholder content.

---

# Programs Page

Detailed program cards.

Responsive layout.

---

# Branches Page

Detailed branch cards.

Map placeholders.

---

# Registration Page

Build a premium registration experience.

Fields:

- Full Name
- Phone
- Program
- Branch
- English Level
- Notes

No backend.

Show success state after submission.

---

# Contact Page

Display:

- Phones
- Email Placeholder
- Social Links
- Contact Form

---

# Dashboard Showcase

Create:

/admin

No authentication required.

---

# Dashboard Pages

/admin

/admin/students

/admin/registrations

/admin/branches

---

Use realistic mock data.

---

# Dashboard Home Cards

- Total Students: 1248
- Pending Registrations: 43
- Programs: 7
- Branches: 2

Include chart visualization.

---

# Students Page

Table Columns:

- Name
- Phone
- Program
- Branch
- Status

---

# Registrations Page

Display pending registrations.

Include:

- View
- Approve
- Reject

UI only.

---

# Branches Page

Display:

- Branch Name
- Student Count
- Status

---

# Folder Structure

Use clean architecture.

Recommended:

src/

├── app/
├── components/
├── data/
├── lib/
├── types/
├── hooks/
└── constants/

Create reusable components.

Avoid duplicated code.

---

# Mock Data

Store all mock data inside:

src/data/

Examples:

- students.ts
- programs.ts
- branches.ts
- testimonials.ts
- registrations.ts

---

# Image Strategy

Use professional education-themed placeholder images.

All images should be easy to replace later with actual BEL ACADEMY assets.

---

# Deliverables

Generate:

- Complete homepage
- Complete public pages
- Complete dashboard pages
- Responsive layouts
- Reusable components
- Clean TypeScript code
- Production-quality UI

The result should look like a real academy brand, not a student project.

---

# Development Workflow

Step 1:
Read all documents inside docs/.

Step 2:
Analyze requirements.

Step 3:
Generate project architecture.

Step 4:
Generate folder structure.

Step 5:
Generate reusable UI components.

Step 6:
Build homepage first.

Step 7:
Build remaining public pages.

Step 8:
Build dashboard showcase.

Step 9:
Optimize responsive design.

Step 10:
Prepare for Vercel deployment.

---

# Important Instruction

Before writing any code:

1. Read docs/01-SRS.md
2. Read docs/02-Design-System.md
3. Create implementation plan
4. Show proposed project architecture
5. Wait for approval if clarification is needed

The final result should impress BEL ACADEMY's owner and clearly demonstrate the value of a professional digital platform.