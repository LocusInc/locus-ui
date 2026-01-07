"use client";

import { Box, Text, Theme, ThemeControl } from "locus-ui";
import Link from "next/link";
import { usePathname } from "next/navigation";

type ComponentsLayoutProps = React.PropsWithChildren & {};

export const ComponentsLayout = ({ children }: ComponentsLayoutProps) => {
  const pathname = usePathname();

  return (
    <Theme appearance="dark" radius="md" roundness="3">
      <div className="flex relative gap-4 h-[calc(100vh-0.5rem)] bg-[rgb(var(--background-color-1))] overflow-hidden">
        <div className="flex flex-col gap-2 mx-4 min-w-50 shrink-0">
          <Text className="font-bold text-lg" m="2">
            Components
          </Text>

          <div className="flex flex-col gap-2 ml-4">
            {components.map((component) => {
              const isActive = pathname === component.path;
              return (
                <Link key={component.name} href={component.path}>
                  <Box
                    radius="full"
                    className={`hover:bg-[rgb(var(--primary))] ${
                      isActive ? "bg-[rgb(var(--primary))]" : ""
                    }`}
                  >
                    <Text px="2">{component.name}</Text>
                  </Box>
                </Link>
              );
            })}
          </div>

          <Text className="font-bold text-lg" m="2">
            Properties
          </Text>

          <div className="flex flex-col gap-2 ml-4">
            {properties.map((property) => {
              const isActive = pathname === property.path;
              return (
                <Link key={property.name} href={property.path}>
                  <Box
                    radius="full"
                    className={`hover:bg-[rgb(var(--primary))] ${
                      isActive ? "bg-[rgb(var(--primary))]" : ""
                    }`}
                  >
                    <Text px="2">{property.name}</Text>
                  </Box>
                </Link>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col flex-1 min-w-0 h-full overflow-auto bg-[rgb(var(--background-color-2))]">
          {children}
        </div>

        <Box
          p="2"
          mb="2"
          className="flex flex-col gap-2 mx-4 min-w-50 shrink-0"
        >
          <ThemeControl />
        </Box>
      </div>
    </Theme>
  );
};

export default ComponentsLayout;

const components = [
  { name: "Box", path: "/docs/components/box" },
  { name: "Button", path: "/docs/components/button" },
  { name: "Checkbox", path: "/docs/components/checkbox" },
  { name: "Container", path: "/docs/components/container" },
  { name: "Portal", path: "/docs/components/portal" },
  { name: "Select", path: "/docs/components/select" },
  { name: "Text", path: "/docs/components/text" },
  { name: "Theme", path: "/docs/components/theme" },
];

const properties = [
  { name: "Radius", path: "/docs/properties/radius" },
  { name: "Spacing", path: "/docs/properties/spacing" },
];
