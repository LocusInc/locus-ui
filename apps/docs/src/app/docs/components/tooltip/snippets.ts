const importSnippet = `import { Button, Tooltip } from "@locus-ui/components";`;

export const indexSnippet = `${importSnippet}
import styles from "./styles.css";

<Tooltip.Root>
  <Tooltip.Trigger>
    <Button variant="muted">Help</Button>
  </Tooltip.Trigger>

  <Tooltip.Content variant="outlined">
    This is the help
  </Tooltip.Content>
</Tooltip.Root>`;

export const styleSnippet = `.tooltip-content[data-variant] {
  position: relative;
  border-radius: min(32px, var(--lcs-radius, 0px));
  padding: calc(4px * var(--lcs-spacing, 1)) calc(8px * var(--lcs-spacing, 1));

  &[data-variant="solid"] {
    background-color: rgb(var(--surface-1));
    border: 1px solid transparent;
  }

  &[data-variant="outlined"] {
    background-color: rgba(var(--surface-1), 0.8);
    border: 1px solid rgba(var(--color, var(--border-1)));
  }

  &[data-variant="muted"] {
    background-color: rgba(var(--surface-1), 0.6);
    border: 1px solid transparent;
  }
}`;

export const anatomySnippet = `${importSnippet}

<Tooltip.Root>
  <Tooltip.Trigger />
  <Tooltip.Content />
</Tooltip.Root>
`;

export const variantsSnippet = `${importSnippet}

const variants = ["solid", "outlined", "muted"];

return variants.map((variant) => (
  <Tooltip.Root key={variant}>
    <Tooltip.Trigger>
      <Button variant="muted">
        {variant.charAt(0).toUpperCase() + variant.slice(1)}
      </Button>
    </Tooltip.Trigger>
    <Tooltip.Content variant={variant}>
      {variant.charAt(0).toUpperCase() + variant.slice(1)} Tooltip
    </Tooltip.Content>
  </Tooltip.Root>
));`;

export const sidesSnippet = `${importSnippet}

const sides = ["top", "right", "bottom", "left"];

return sides.map((side) => (
  <Tooltip.Root key={side} side={side}>
    <Tooltip.Trigger>
      <Button variant="muted">
        {side.charAt(0).toUpperCase() + side.slice(1)}
      </Button>
    </Tooltip.Trigger>
    <Tooltip.Content variant="outlined">
      {side.charAt(0).toUpperCase() + side.slice(1)} Tooltip
    </Tooltip.Content>
  </Tooltip.Root>
));`;

export const openOnClickSnippet = `${importSnippet}

<Tooltip.Root openOnHover={false} openOnClick>
  <Tooltip.Trigger>
    <Button variant="muted">Click Me</Button>
  </Tooltip.Trigger>
  <Tooltip.Content variant="outlined">
    Opened by click
  </Tooltip.Content>
</Tooltip.Root>`;

export const delaySnippet = `${importSnippet}

const delays = [0, 300, 1000];

return delays.map((delay) => (
  <Tooltip.Root key={delay} delay={delay}>
    <Tooltip.Trigger>
      <Button variant="muted">{delay}ms</Button>
    </Tooltip.Trigger>
    <Tooltip.Content variant="outlined">
      {delay}ms delay
    </Tooltip.Content>
  </Tooltip.Root>
));`;
