import type { Config } from 'tailwindcss';
import { join } from 'path';

// 1 install plugins
import typography from '@tailwindcss/typography';
import { skeleton } from '@skeletonlabs/tw-plugin';

const config = {
  // 2. Opt for dark mode to be handled via the class method
  darkMode: 'class',
  content: [
    './src/**/*.{html,js,svelte,ts}',
    // 3. Append the path to the Skeleton package
    join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}'),
  ],
  theme: {
    extend: {},
  },
  plugins: [
    // 4. Append the Skeleton plugin (after other plugins)
    typography,
    skeleton({
      themes: { preset: ['wintry'] },
    }),
  ],
} satisfies Config;

export default config;
