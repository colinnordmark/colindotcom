import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";
import { withUt } from "uploadthing/tw";
 
export default withUt({
  // Your existing Tailwind config
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
      },
    },
  }, // Add a closing parenthesis here
  plugins: [],
  content: ["./src/**/*.{ts,tsx,mdx}"],
});
