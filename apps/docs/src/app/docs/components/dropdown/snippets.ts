const importSnippet = `import { Button, Dropdown } from "@locus-ui/components";`;

export const indexSnippet = `${importSnippet}

<Dropdown.Root variant="outlined">
  <Dropdown.Trigger asChild>
    <Button variant="outlined">Actions</Button>
  </Dropdown.Trigger>

  <Dropdown.Content>
    <Dropdown.Item onSelect={() => console.log("edit")}>Edit</Dropdown.Item>
    <Dropdown.Item onSelect={() => console.log("duplicate")}>
      Duplicate
    </Dropdown.Item>
    <Dropdown.Separator />
    <Dropdown.Item destructive onSelect={() => console.log("delete")}>
      Delete
    </Dropdown.Item>
  </Dropdown.Content>
</Dropdown.Root>`;

export const anatomySnippet = `${importSnippet}

<Dropdown.Root>
  <Dropdown.Trigger />
  <Dropdown.Content>
    <Dropdown.Item />
    <Dropdown.Separator />
  </Dropdown.Content>
</Dropdown.Root>`;

export const nestedSnippet = `import {
  Button,
  ChevronRight,
  Dropdown,
} from "@locus-ui/components";

<Dropdown.Root variant="outlined">
  <Dropdown.Trigger asChild>
    <Button variant="outlined">Share</Button>
  </Dropdown.Trigger>

  <Dropdown.Content>
    <Dropdown.Item>Email link</Dropdown.Item>

    <Dropdown.Root>
      <Dropdown.Trigger asChild>
        <Dropdown.Item trailingIcon={<ChevronRight />}>Copy</Dropdown.Item>
      </Dropdown.Trigger>

      <Dropdown.Content>
        <Dropdown.Item>Copy URL</Dropdown.Item>

        <Dropdown.Root>
          <Dropdown.Trigger asChild>
            <Dropdown.Item trailingIcon={<ChevronRight />}>
              Advanced
            </Dropdown.Item>
          </Dropdown.Trigger>

          <Dropdown.Content>
            <Dropdown.Item>Copy debug URL</Dropdown.Item>
          </Dropdown.Content>
        </Dropdown.Root>
      </Dropdown.Content>
    </Dropdown.Root>
  </Dropdown.Content>
</Dropdown.Root>`;

export const variantsSnippet = `${importSnippet}

const variants = ["solid", "outlined", "muted"] as const;

return variants.map((variant) => (
  <Dropdown.Root key={variant} variant={variant}>
    <Dropdown.Trigger asChild>
      <Button variant={variant}>
        {variant.charAt(0).toUpperCase() + variant.slice(1)}
      </Button>
    </Dropdown.Trigger>

    <Dropdown.Content>
      <Dropdown.Item>Edit</Dropdown.Item>
      <Dropdown.Item>Duplicate</Dropdown.Item>
      <Dropdown.Separator />
      <Dropdown.Item destructive>Delete</Dropdown.Item>
    </Dropdown.Content>
  </Dropdown.Root>
));`;

export const customSnippet = `${importSnippet}
import { Box, Text } from "@locus-ui/components";

<Dropdown.Root variant="outlined">
  <Dropdown.Trigger asChild>
    <Button variant="outlined">Filters</Button>
  </Dropdown.Trigger>

  <Dropdown.Content mode="custom">
    <Box p="3" className="flex min-w-52 flex-col gap-2">
      <Text>Filter panel content</Text>
      <Button size="1">Apply</Button>
    </Box>
  </Dropdown.Content>
</Dropdown.Root>`;
