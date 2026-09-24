# Game Lab

A personal portfolio and game lab built with React, Vite, JavaScript, and Tailwind CSS.

The site showcases my web development projects, programming projects, and a small collection of browser-playable games.

**Live site:** https://endearing-vacherin-38954f.netlify.app/

## Features

* Responsive portfolio website
* Project showcase with screenshots and descriptions
* Interactive arcade page
* Browser-playable games
* Embedded HTML5 Canvas games
* Resume page
* GitHub and project links
* Dark, terminal-inspired interface

## Projects

### Worklog System

A full-stack time tracking application for recording and managing time spent on activities.

**Tech:** React, Vite, TypeScript, Tailwind CSS, Express, Node.js, PostgreSQL, Drizzle ORM, JWT

Features include user authentication, a working timer, time entry management, searching, editing, and deleting entries.

### Milky Way Defender

A 2D arcade-style space shooter where the player defends against incoming asteroids.

**Tech:** JavaScript, HTML5 Canvas

The game includes multiple game states, score tracking, shooting, collision detection, increasing difficulty, sound effects, music, and particle effects.

### Pixcraft

A 2D pixel art editor.

**Tech:** C++, raylib, raygui, CMake

Pixcraft includes multiple layers, drawing tools, erasing, color picking, canvas resizing, image import/export, undo functionality, canvas transformations, and a color palette.

### Tincan

A real-time chat application that runs in the terminal.

**Tech:** Java 21, TCP sockets

Tincan supports multiple clients, a multi-threaded server, chatrooms, colored text, and a simple command protocol.

## Arcade

The Arcade section contains browser-playable versions of some of my games.

Games are kept separate from the React application and are embedded into the site using iframes.

```text
public/
├── milkywaydefender/
│   └── game/
│       ├── index.html
│       ├── main.js
│       ├── player.js
│       ├── rock.js
│       ├── bullet.js
│       ├── particle.js
│       ├── ui.js
│       └── assets/
│
└── snake/
    └── index.html
```

The games use vanilla JavaScript and HTML5 Canvas and do not depend on React.

## Tech Stack

### Portfolio

* React
* Vite
* JavaScript
* Tailwind CSS
* React Router

### Browser Games

* JavaScript
* HTML5 Canvas
* Web Audio

### Deployment

* Netlify
* GitHub

## Running Locally

Clone the repository:

```bash
git clone https://github.com/Jeffmac95/game-lab.git
cd game-lab/game-lab
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Then open the local URL provided by Vite.

## Production Build

To create a production build:

```bash
npm run build
```

The production files will be generated in:

```text
dist/
```

To preview the production build locally:

```bash
npm run preview
```

## Project Structure

```text
game-lab/
├── public/
│   ├── milkywaydefender/
│   ├── snake/
│   ├── pixcraft/
│   ├── tincan/
│   ├── worklog/
│   ├── online-resume.pdf
│   └── ...
│
├── src/
│   ├── components/
│   ├── pages/
│   ├── App.jsx
│   └── ...
│
├── package.json
├── vite.config.js
└── README.md
```

## Deployment

The site is deployed through Netlify and connected directly to this GitHub repository.


## About

This project serves as both my personal portfolio and a place to experiment with different programming technologies.

I'm currently studying IT Web Programming and building projects across web development, game development, networking, and systems programming.

---

Built by **Jeffrey MacPherson**