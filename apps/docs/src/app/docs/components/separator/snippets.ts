const importSnippet = `import { Separator } from "@locus-ui/components";`;

export const indexSnippet = `import { Flex, Panel, Separator, Text } from "@locus-ui/components";
import styles from "./styles.css";

<Panel px="4" py="2" variant="outlined">
  <Flex gap="2" direction="column">
    <Text>My Movie</Text>
    <Separator />
    <Text>A movie made by me</Text>
  </Flex>
</Panel>`;

export const styleSnippet = `.separator[data-direction] {
  &[data-direction="horizontal"] {
    width: 100%;
    height: 1px;
  }

  &[data-direction="vertical"] {
    height: 100%;
    width: 1px;
  }

  &[data-variant="solid"]:not([data-direction="vertical"]) {
    border-top: 1px solid rgb(var(--border-color));
  }
}`;

export const anatomySnippet = `${importSnippet}

<Separator />
`;

export const directionsSnippet = `import { Flex, Separator, Text } from "@locus-ui/components";

<Flex direction="column" gap="2">
  <Text>Top Text</Text>
  <Separator direction="horizontal" />
  <Text>Bottom Text</Text>
</Flex>

<Flex gap="2">
  <Text>Left Text</Text>
  <Separator direction="vertical" />
  <Text>Right Text</Text>
</Flex>`;

export const variantsSnippet = `${importSnippet}

const variants = ["solid", "dashed", "dotted"];

return variants.map((variant) => (
  <Flex key={variant} gap="4" align="center" className="flex-1">
    <Text>{variant.charAt(0).toUpperCase() + variant.slice(1)}</Text>
    <Separator variant={variant} />
  </Flex>
));`;
