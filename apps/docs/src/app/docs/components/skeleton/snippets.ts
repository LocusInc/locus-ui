const importSnippet = `import { Skeleton } from "@locus-ui/components";`;

export const indexSnippet = `${importSnippet}

<Skeleton variant="solid" style={{ width: 200, height: 24 }} />`;

export const styleSnippet = `.skeleton[data-variant] {
  min-width: fit-content;
  min-height: fit-content;
  border-radius: min(32px, var(--lcs-radius, 0px));

  &[data-variant="solid"] {
    background-color: rgb(var(--border-1));
  }

  &[data-variant="pulse"] {
    /* add pulse animation */
  }

  &[data-variant="shimmer"] {
    /* add shimmer animation */
  }
}
`;

export const anatomySnippet = `${importSnippet}

<Skeleton />
`;

export const variantsSnippet = `${importSnippet}

const variants = ["solid", "pulse", "shimmer"];

return variants.map((variant) => (
  <Skeleton
    key={variant}
    variant={variant}
    style={{ width: 200, height: 24 }}
  />
));`;

export const loadingSnippet = `${importSnippet}
import { Grid, Text } from "@locus-ui/components";

<Grid columns="2" gap="2">
  <Text>Loading</Text>
  <Skeleton
    loading={true}
    variant="pulse"
  >
    <Text>This is the content</Text>
  </Skeleton>

  <Text>Loaded</Text>
  <Skeleton
    loading={false}
    variant="pulse"
  >
    <Text>This is the content</Text>
  </Skeleton>
</Grid>`;

export const compositionSnippet = `${importSnippet}
import { Flex } from "@locus-ui/components";

<Flex direction="column" gap="2">
  <Skeleton variant="pulse" style={{ width: 120, height: 12 }} />
  <Skeleton variant="pulse" style={{ width: 200, height: 12 }} />
  <Skeleton variant="pulse" style={{ width: 160, height: 12 }} />
</Flex>`;
