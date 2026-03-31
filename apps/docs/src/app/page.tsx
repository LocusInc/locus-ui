import Locus from "@/components/locus";
import { Box, Button, Flex, Text } from "@locus-ui/components";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <Box>
      <Image
        src="/background.svg"
        alt="Background"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 z-0"
      />

      <Flex
        gap="4"
        px="4"
        direction="column"
        justify="center"
        align="center"
        className="relative w-full min-h-screen h-screen"
      >
        <Locus className="w-40 h-40 -mt-20" />

        <Text className="text-4xl font-bold">Locus UI</Text>

        <Text>An (optionally) unstyled React component library</Text>

        <Link href="/docs/overview/about">
          <Button variant="muted">Documentation</Button>
        </Link>
      </Flex>
    </Box>
  );
}
