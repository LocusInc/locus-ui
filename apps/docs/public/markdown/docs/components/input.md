# Input Component

A native text field with optional content at the start and end. Supports standard input attributes, events, form submission, controlled values, and refs.

## Usage

```tsx
import { Input } from "@locus-ui/components";

export default function InputExample() {
return (
  <Input.Root name="email" type="email" placeholder="you@example.com">
    <Input.Label position="left">Email</Input.Label>
  </Input.Root>
);
}
```

## Labels

Use an `Input.Label` child with `position="top"`, `"left"`, `"right"`, `"bottom"`, or `"inside"`, following the same pattern as Select and Checkbox. The default is `top`. Place the label directly inside `Input.Root`; it is automatically associated with the native input, including when you supply your own `id`.

```tsx
import { Input } from "@locus-ui/components";

export default function InputLabelsExample() {
return (
  <>
    <Input.Root name="email" type="email" placeholder="you@example.com">
      <Input.Label position="top">Email</Input.Label>
    </Input.Root>
    <Input.Root placeholder="Enter a name">
      <Input.Label position="left">Name</Input.Label>
    </Input.Root>
    <Input.Root placeholder="Enter a username">
      <Input.Label position="right">Username</Input.Label>
    </Input.Root>
    <Input.Root placeholder="Enter a city">
      <Input.Label position="bottom">City</Input.Label>
    </Input.Root>
    <Input.Root placeholder="Search…">
      <Input.Label position="inside">Search</Input.Label>
    </Input.Root>
  </>
);
}
```

## Slots

Use `startSlot` and `endSlot` for icons, text, or other components. Components inside slots retain their own spacing. Interactive slot content stays keyboard accessible. Give icon buttons an accessible name, use `type="button"` for actions that should not submit a form, and hide decorative icons with `aria-hidden="true"`.

```tsx
import { Badge, Button, Input } from "@locus-ui/components";

export default function InputSlotsExample() {
return (
  <>
    <Input.Root
      aria-label="Website"
      placeholder="example.com"
      startSlot={
        <Input.Slot px="2">
          <span aria-hidden="true">https://</span>
        </Input.Slot>
      }
      endSlot={
        <Input.Slot px="2">
          <Badge variant="muted">URL</Badge>
        </Input.Slot>
      }
    />
    <Input.Root
      aria-label="Search"
      placeholder="Search…"
      endSlot={
        <Input.Slot px="2">
          <Button type="button" size="sm" variant="muted">
            Go
          </Button>
        </Input.Slot>
      }
    />
  </>
);
}
```

### Slot Variants

Wrap either slot's content in `Input.Slot` to give it an independent `outlined`, `solid`, `muted`, or `clear` treatment. Slots inherit the `Input.Root` variant by default; set a slot’s `variant` to override it, including `variant="clear"` for an unstyled slot. Slots keep zero margin and padding by default; use spacing props such as `px="2"` when you want padding. Outlined slots draw only an inner divider in the field’s border color, and solid slots use the base solid background. Muted slots inherit the field’s accent color unless you set their own `color`. The field clips slot content to its outer rounded corners.

```tsx
import { Input } from "@locus-ui/components";

export default function InputSlotVariantsExample() {
const variants = ["outlined", "solid", "muted", "clear"] as const;

return variants.map((variant) => (
<Input.Root
key={variant}
aria-label={`${variant} slots`}
placeholder="example.com"
startSlot={
<Input.Slot variant={variant} px="2">
https://
</Input.Slot>
}
endSlot={
<Input.Slot variant={variant} px="2">
URL
</Input.Slot>
}
/>
));
}
```

### Inheriting the Field Variant

The start slot below inherits the field’s variant. The end slot explicitly uses `clear`.

```tsx
import { Input } from "@locus-ui/components";

export default function InheritedInputSlotsExample() {
const variants = ["outlined", "solid", "muted", "clear"] as const;

return variants.map((variant) => (
  <Input.Root
    key={variant}
    variant={variant}
    aria-label={variant + " inherited slot"}
    placeholder="example.com"
    startSlot={<Input.Slot px="2">https://</Input.Slot>}
    endSlot={
      <Input.Slot variant="clear" px="2">
        URL
      </Input.Slot>
    }
  />
));
}
```

### Custom Slot Styles

`Input.Slot` accepts `className`, `style`, standard div attributes, a forwarded ref, and the shared color, margin, and padding props. The `.input-slot-content` class styles the slot content; `.input-slot[data-side="start"]` and `.input-slot[data-side="end"]` identify the layout wrappers.

```tsx
import { Input } from "@locus-ui/components";

export default function CustomInputSlotsExample() {
return (
  <Input.Root
    aria-label="Price"
    placeholder="0.00"
    startSlot={
      <Input.Slot variant="muted" color="success" className="currency-slot" px="2">
        $
      </Input.Slot>
    }
    endSlot={
      <Input.Slot
        variant="clear"
        style={{ paddingInline: 12, fontWeight: 600, color: "tomato" }}
      >
        USD
      </Input.Slot>
    }
  />
);
}
```

## Variants

The default variant is `outlined`. Color, size, radius, margin, and padding use the same props as other components.

```tsx
import { Input } from "@locus-ui/components";

export default function InputVariantsExample() {
const variants = ["outlined", "solid", "muted", "clear"] as const;

return variants.map((variant) => (
<Input.Root
key={variant}
aria-label={variant}
variant={variant}
placeholder={variant.charAt(0).toUpperCase() + variant.slice(1)}
/>
));
}
```

## Sizes

Use `size="xs"`, `"sm"`, `"md"`, `"lg"`, or `"xl"` for the visual size. Use `htmlSize` to set the native input width in characters.

```tsx
import { Input } from "@locus-ui/components";

export default function InputSizesExample() {
const sizes = ["xs", "sm", "md", "lg", "xl"] as const;

return sizes.map((size) => (
<Input.Root
key={size}
aria-label={size}
size={size}
placeholder={size.toUpperCase()}
/>
));
}
```

## States

Use native `disabled` and `readOnly` props. Set `aria-invalid` and associate error text with `aria-describedby` for invalid values. Set `disabled` on any slot buttons separately when they should be disabled too.

```tsx
import { Input } from "@locus-ui/components";

export default function InputStatesExample() {
return (
  <>
    <Input.Root aria-label="Disabled" disabled defaultValue="Disabled" />
    <Input.Root aria-label="Read only" readOnly defaultValue="Read only" />
    <Input.Root
      aria-label="Email"
      aria-invalid="true"
      aria-describedby="email-error"
      defaultValue="invalid email"
    />
    <span id="email-error">Enter a valid email address.</span>
  </>
);
}
```

## Controlled Values and Refs

Use `value` with `onChange` for controlled inputs or `defaultValue` for uncontrolled inputs. The forwarded ref points to the native input.

```tsx
"use client";

import { useRef, useState } from "react";
import { Button, Input } from "@locus-ui/components";

export default function SearchField() {
const [value, setValue] = useState("");
const ref = useRef<HTMLInputElement>(null);

return (
  <Input.Root
    ref={ref}
    aria-label="Search"
    value={value}
    onChange={(event) => setValue(event.target.value)}
    endSlot={
      <Input.Slot>
        <Button
          type="button"
          variant="muted"
          radius="none"
          onClick={() => {
            setValue("");
            ref.current?.focus();
          }}
        >
          Clear
        </Button>
      </Input.Slot>
    }
  />
);
}
```
