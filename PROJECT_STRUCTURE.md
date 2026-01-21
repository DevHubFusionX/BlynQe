# Dating App - Project Structure

## Folder Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navbar.jsx      # Navigation bar with responsive menu
│   └── Footer.jsx      # Footer with links and social media
│
├── pages/              # Page components (routes)
│   ├── Home.jsx        # Landing page with hero section
│   ├── Features.jsx    # Features showcase page
│   ├── About.jsx       # About us page
│   ├── Contact.jsx     # Contact form page
│   ├── Login.jsx       # User login page
│   └── SignUp.jsx      # User registration page
│
├── layouts/            # Layout wrappers
│   └── MainLayout.jsx  # Main layout with navbar and footer
│
├── routes/             # Routing configuration
│   └── AppRoutes.jsx   # All app routes defined here
│
├── utils/              # Utility functions (for future use)
│
├── assets/             # Static assets (images, icons)
│
├── App.jsx             # Main app component with router
├── main.jsx            # App entry point
└── index.css           # Global styles with Tailwind
```

## Available Routes

- `/` - Home page
- `/features` - Features page
- `/about` - About page
- `/contact` - Contact page
- `/login` - Login page
- `/signup` - Sign up page

## Technologies Used

- React 19
- React Router DOM
- Tailwind CSS 4
- Vite

## Run the App

```bash
npm run dev
```
