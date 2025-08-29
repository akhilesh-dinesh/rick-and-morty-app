# Author: Akhilesh Dinesh

# Rick and Morty Character Explorer

Find the Live demo for this project at https://akhilesh-dinesh-rick-and-morty.vercel.app/

This is a React + TypeScript application built with Vite that allows users to explore characters from the Rick and Morty universe. It features a paginated character list, detailed character information, and a responsive design.

## Features

- **Character List**: Browse through a paginated list of characters.
- **Character Details**: View detailed information about each character, including their status, species, origin, and location.
- **Search and Navigation**: Navigate between pages and persist the current page using local storage.
- **Loading States**: Display loading spinners for better user experience during data fetching.
- **Refresh Data**: Refresh the character list with a single click.
- **Error Handling**: Gracefully handle API errors and display appropriate messages.

## Tech Stack

- **React**: Frontend library for building user interfaces.
- **TypeScript**: Static typing for better code quality and maintainability.
- **Vite**: Fast build tool for modern web applications.
- **TanStack Router**: For routing and navigation.
- **TanStack Query**: For data fetching and caching.
- **TanStack Table**: For rendering the character table.
- **CSS**: Custom styles for components.

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd rick-and-morty-app


2. Install dependencies:
npm install
npm run dev

Open your browser and navigate to http://localhost:5173.

npm run build to build project for production

Project Structure

src/
├── components/          # Reusable UI components
├── hooks/               # Custom React hooks
├── pages/               # Page components for routing
├── routes/              # Route definitions
├── types/               # TypeScript type definitions
├── utils/               # Utility functions
├── App.tsx              # Main application component
├── main.tsx             # Application entry point


Workspace
(rerun without)
Collecting workspace information

bash
Install dependencies:
npm install
Development
Start the development server:

npm run dev
Open your browser and navigate to http://localhost:5173.

Build
To build the project for production:

npm run build
Preview
To preview the production build:

Linting
To run ESLint and check for code quality issues:

Project Structure
API
This project uses the Rick and Morty API to fetch character data.

License
This project is licensed under the MIT License. See the LICENSE file for details.

Acknowledgments
Rick and Morty API
TanStack
Vite