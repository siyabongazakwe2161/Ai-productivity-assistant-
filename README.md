# WorkWise AI — Intelligent Workplace & HR Productivity Assistant

WorkWise AI is a modern web application that helps professionals, managers, and HR teams automate repetitive workplace tasks using Artificial Intelligence. From drafting emails to evaluating candidates, WorkWise AI turns raw input into structured, professional output in seconds.

---

## ✨ Overview

WorkWise AI is designed for:
- Office workers and team leaders
- Managers and administrators
- HR professionals and recruiters

It combines five focused AI tools inside a single, clean dashboard so users can save hours every week, make better decisions, and reduce bias in day-to-day work.

---

## 🚀 Features

### 1. Smart Email Generator
Draft polished, professional emails with the right tone (formal, friendly, persuasive, apologetic, etc.) in seconds.

### 2. Meeting Notes Summarizer
Turn raw meeting notes into a structured summary with:
- Key discussion points
- Decisions made
- Action items
- Responsible persons
- Deadlines

### 3. AI Task Planner
Prioritize your workload and generate a realistic daily schedule with time blocking and productivity recommendations.

### 4. AI Research Assistant
Extract executive summaries, insights, benefits, challenges, and recommendations from any topic or article.

### 5. Candidate Evaluation Assistant
Fair, skill-based hiring recommendations built from interview notes — strictly focused on skills, experience, and qualifications.

---

## 🎨 Design

- Modern, corporate UI with a **dark blue, light blue, and white** color palette
- Sidebar navigation with a centralized dashboard
- Responsive layout for desktop and mobile
- Elegant shadows, gradients, and glowing accents

---

## 🛡️ Responsible AI

WorkWise AI includes built-in notices to encourage responsible use:

- **Accuracy:** AI-generated content may contain inaccuracies. Users should verify information before making business or hiring decisions.
- **Privacy:** Do not upload confidential company information or sensitive personal data.
- **Bias & Fairness:** Candidate evaluations are intended to support human decision-making and should not replace professional judgment.

---

## 📈 Productivity Benefits

- ⏱️ **Save hours weekly** by automating repetitive writing and planning
- 🎯 **Better decisions** through structured, unbiased outputs
- ⚡ **Faster execution** from raw thoughts to polished deliverables
- 👥 **Fairer hiring** with skill-focused evaluations

---

## 🧰 Tech Stack

- **Framework:** TanStack Start (React 19 + Vite 7)
- **Styling:** Tailwind CSS v4 with a semantic design token system
- **UI Components:** shadcn/ui + Lucide icons
- **AI:** Lovable AI Gateway (Google Gemini)
- **Backend:** Lovable Cloud (server functions via `createServerFn`)
- **Language:** TypeScript (strict mode)

---

## 🏗️ Project Structure

```
src/
├── components/
│   ├── app-sidebar.tsx       # Main navigation
│   ├── tool-shell.tsx        # Reusable AI tool layout
│   └── disclaimers.tsx       # Responsible AI notices
├── lib/
│   ├── ai.functions.ts       # Server function calling the LLM
│   └── ai-gateway.server.ts  # Lovable AI Gateway provider
├── routes/
│   ├── index.tsx             # Dashboard
│   ├── email.tsx             # Email generator
│   ├── meetings.tsx          # Meeting summarizer
│   ├── tasks.tsx             # Task planner
│   ├── research.tsx          # Research assistant
│   └── candidate.tsx         # Candidate evaluation
└── styles.css                # Design tokens & theme
```

---

## ▶️ Getting Started

```bash
# Install dependencies
bun install

# Start the dev server
bun run dev
```

Then open the preview URL shown in the terminal.

---

## 🎤 How to Present This App

A suggested 2-minute pitch:

1. **The problem** — Office and HR teams spend hours every week on repetitive writing, summarizing, and evaluation tasks.
2. **The solution** — WorkWise AI centralizes five AI-powered tools in one professional dashboard.
3. **Live demo** — Show the dashboard, then run one tool end-to-end (e.g. paste raw meeting notes → get a structured summary with action items and owners).
4. **Responsible AI** — Highlight the built-in accuracy, privacy, and bias notices.
5. **Impact** — Save hours weekly, make better decisions, and support fairer hiring.

---

## 📄 License

Built with [Lovable](https://lovable.dev).
