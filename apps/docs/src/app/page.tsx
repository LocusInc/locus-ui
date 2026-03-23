import { Box, Button, Text } from "@locus-ui/components";
import Link from "next/link";

export default function Home() {
  return (
    <Box className="flex gap-4 flex-col justify-center items-center w-full h-screen">
      <Text className="text-4xl font-bold">Locus UI</Text>

      <Text>An (optionally) unstyled React component library</Text>

      <Box className="flex gap-4">
        <Link href="/docs">
          <Button variant="muted">Documentation</Button>
        </Link>
      </Box>
    </Box>
  );
}
