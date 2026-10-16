# Getting Started

## Installation

Install the package from npm. React 18 or 19 is required as a peer dependency.

```bash
npm install @locus-ui/components
```

## Quick Start

Import the stylesheet and wrap your app with the `Theme` provider to get started:

```tsx
import { Theme } from "@locus-ui/components";
import "@locus-ui/components/styles";

export default function App({ children }) {
  return (
    <Theme appearance="light" radius="md" spacing="md">
      {children}
    </Theme>
  );
}
```
