# UI Template

A simple and flexible UI template with essential features, including layout components, dark/light mode, navigation tabs, and test coverage.

## Features

- **Layout Components**: Includes Header and Footer for a structured UI.
- **Dark & Light Mode**: Easily switch between themes.
- **Navigation Tabs**: Pre-built tab navigation for seamless user experience.
- **Test Coverage**: Uses Vitest and React Testing Library for reliable tests.
- **Error Boundary**: Error boundry is added around main content

## Tech Stack

- **React** – Component-based UI framework
- **TypeScript** – Type safety and better developer experience
- **React Testing Library (RTL)** – For testing UI components
- **Vitest** – Fast unit testing framework
- **Biome** – Linting and formatting
- **Husky** – Git hooks for enforcing quality

## Installation

2. Install dependencies:
   npm install

3. Start the development server:
   npm run dev

## Testing

Run tests using Vitest and React Testing Library:
`npm run test`

Run test coverage
`npm run coverage`

## Pre-Push Checks

Before pushing changes, **Husky** ensures:
- Code is linted with **Biome** (`npm run lint`).
- Push command will fail if coverage is less than 90%, you can update the value if needed

## License

This project is licensed under the MIT License.
