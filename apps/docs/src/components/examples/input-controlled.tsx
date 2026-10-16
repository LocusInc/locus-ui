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
