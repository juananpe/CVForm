# CVForm

CVForm is a React application built with Next.js, Tailwind CSS, and `@shadcn/ui`. It features a form for creating and managing CVs.

## Getting Started

How to run locally a Claude generated project.

1. Install the necessary packages:

   ```bash
   npx create-next-app@latest cvform
   cd cvform
   npm install lucide-react @shadcn/ui tailwindcss classnames class-variance-authority
   ```

Select the following options:

- Use TypeScript: No
- Use ESLint: No
- Use Tailwind CSS: Yes
- Use src/ directory: Yes
- Use App Router: No
- Use Turbopack: No
- import alias: Yes
- what import alias: @/* 

Or use just:

```bash
npx create-next-app@latest cvform --javascript --no-eslint --tailwind --src-dir --pages --no-app-dir --no-turbo --import-alias "@/*" --yes
```

2. Run the Shadcn UI setup:

   ```bash
   npx @shadcn/ui add
   ```
Select the following options:
- alert
- card 

copy them to src/components/ui

### Development

To start the development server, run:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application in the browser. The page will reload if you make edits.

### Project Structure

- `src/components`: Contains the React components including `CVForm.js`.
- `src/pages`: Includes the Next.js pages.
- `src/lib`: Utility functions can be placed here, such as `utils.js`.

### Utilities

#### `src/lib/utils.js`

This file contains utility functions used across the application.

- **`cn(...classes)`:** This function takes any number of class name strings and returns a single string with all the classes joined by a space. It filters out any falsy values, which is useful for conditionally applying class names in your components.

  ```javascript
  export function cn(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  ```
## Add CVForm.js component

## Add index.js page

```javascript
import CVForm from "@/components/CVForm";

export default function Home() {
  return <CVForm />;
}
```

### Usage

You can modify the components and utilities to fit your CV form requirements. Start by editing `src/components/CVForm.js` and `src/pages/index.js`.

### Author

- [Your Name]

### License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Feel free to explore the components and build upon this template to suit your project needs.
