const importSnippet = `import { Panel } from "@locus-ui/components";`;

export const indexSnippet = `${importSnippet}
import styles from "./styles.css";

<Panel variant="outlined" p="4">
  Outlined Panel
</Panel>`;

export const styleSnippet = `.panel[data-variant] {
  --panel-custom-color: var(--color, var(--panel-color));

  border-radius: min(32px, var(--lcs-radius, 0px));
  backdrop-filter: blur(var(--panel-blur, 0px));

  &[data-variant="outlined"] {
    background-color: rgba(var(--panel-custom-color), 0.8);
    border: 1px solid rgba(var(--color, var(--border-color)));
  }
}`;

export const anatomySnippet = `${importSnippet}

<Panel />
`;

export const variantsSnippet = `${importSnippet}

const variants = ["solid", "outlined", "muted"];

return variants.map((variant) => (
  <Panel key={variant} variant={variant} p="4">
    {variant.charAt(0).toUpperCase() + variant.slice(1)} Panel
  </Panel>
));`;

export const blurSnippet = `import { Box, Flex, Panel, Text } from "@locus-ui/components";

const blurs = ["0px", "2px", "4px"];

return (
  <Box className="relative">
    <Box className="absolute">
      <Text px="2" py="2">Test Text Test Text Test Text Test Text Test Test Text Test Text Test Text Test Text Test</Text>
    </Box>

    <Flex gap="3">
      {blurs.map((blur) => (
        <Panel key={blur} blur={blur} p="4" variant="muted">
          Blur: {blur}
        </Panel>
      ))}
    </Flex>
  </Box>
);`;

export const colorsSnippet = `${importSnippet}

const colors = [
  "primary", "secondary", "tertiary", "accent",
  "success", "danger", "warning", "info",
];

return colors.map((color) => (
  <Panel key={color} color={color} px="4" py="2" variant="muted">
    <Text color={color}>
      {color.charAt(0).toUpperCase() + color.slice(1)} Panel
    </Text>
  </Panel>
));`;
