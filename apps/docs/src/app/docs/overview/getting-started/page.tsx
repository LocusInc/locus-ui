import { Box, Container, Text } from "@locus-ui/components";

const installCode = `npm install @locus-ui/components`;

const quickStartCode = `import { Theme } from "@locus-ui/components";
import "@locus-ui/components/styles";

export default function App({ children }) {
  return (
    <Theme appearance="light" radius="md" spacing="md">
      {children}
    </Theme>
  );
}`;

export default function GettingStarted() {
  return (
    <Container className="flex flex-col gap-4 p-4 w-full min-h-full">
      <Text className="text-4xl font-bold">Getting Started</Text>

      <Text className="text-2xl font-bold mt-4">Installation</Text>
      <Text>
        Install the package from npm. React 18 or 19 is required as a peer
        dependency.
      </Text>
      <Box className="rounded-lg bg-[rgb(var(--background-color-2))] p-4 overflow-x-auto">
        <pre className="text-sm">
          <code>{installCode}</code>
        </pre>
      </Box>

      <Text className="text-2xl font-bold mt-4">Quick Start</Text>
      <Text>
        Import the stylesheet and wrap your app with the <code>Theme</code>{" "}
        provider to get started:
      </Text>
      <Box className="rounded-lg bg-[rgb(var(--background-color-2))] p-4 overflow-x-auto">
        <pre className="text-sm">
          <code>{quickStartCode}</code>
        </pre>
      </Box>
    </Container>
  );
}
