"use client";

import { Box, Separator, Text, ThemeControl } from "@locus-ui/components";
import Link from "next/link";
import { usePathname } from "next/navigation";

type DocsLayoutProps = React.PropsWithChildren & {};

const DocsLayout = ({ children }: DocsLayoutProps) => {
  return (
    <div className="flex relative gap-4 h-[calc(100vh-0.5rem)] bg-[rgb(var(--background-color-1))] overflow-hidden">
      <div className="flex flex-col gap-2 mx-4 min-w-50 shrink-0">
        <SideBarLinks title="Overview" components={overview} />
        <SideBarLinks title="Components" components={components} />
        <SideBarLinks title="Properties" components={properties} />
      </div>

      <Separator direction="vertical" />

      <div className="flex flex-col flex-1 min-w-0 h-full overflow-auto bg-[rgb(var(--background-color-1))]">
        {children}
      </div>

      <Separator direction="vertical" variant="dashed" className="opacity-20" />

      <Box pr="4" py="4" className="flex flex-col gap-2 mx-4 min-w-60 shrink-0">
        <ThemeControl />
      </Box>
    </div>
  );
};

const SideBarLinks = ({
  title,
  components,
}: {
  title: string;
  components: Array<{ name: string; path: string }>;
}) => {
  const pathname = usePathname();

  return (
    <>
      <Text className="font-bold text-lg" mt="2">
        {title}
      </Text>

      <div className="flex flex-col ml-4">
        {components.map((component) => {
          const isActive = pathname === component.path;
          return (
            <Link
              key={component.name}
              href={component.path}
              className="focus:outline-2 focus:outline-[rgba(var(--primary),0.4)] focus:outline-border-[rgba(var(--primary),_0.4)] focus:bg-[rgba(var(--primary),0.2)] focus:border-[rgba(var(--primary),0.4)] rounded-full"
            >
              <Box
                radius="full"
                className={`border-2 border-transparent hover:border-[rgba(var(--primary),0.4)] hover:bg-[rgba(var(--primary),0.2)] ${
                  isActive ? "bg-[rgba(var(--primary),0.6)]" : ""
                }`}
              >
                <Text px="2">{component.name}</Text>
              </Box>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default DocsLayout;

const overview = [
  { name: "About", path: "/docs/overview/about" },
  { name: "Getting Started", path: "/docs/overview/getting-started" },
];

const components = [
  { name: "Accordion", path: "/docs/components/accordion" },
  { name: "Badge", path: "/docs/components/badge" },
  { name: "Box", path: "/docs/components/box" },
  { name: "Button", path: "/docs/components/button" },
  { name: "Checkbox", path: "/docs/components/checkbox" },
  { name: "Panel", path: "/docs/components/panel" },
  { name: "Portal", path: "/docs/components/portal" },
  { name: "Progress Bar", path: "/docs/components/progress-bar" },
  { name: "Select", path: "/docs/components/select" },
  { name: "Separator", path: "/docs/components/separator" },
  { name: "Theme", path: "/docs/components/theme" },
];

const properties = [
  { name: "Radius", path: "/docs/properties/radius" },
  { name: "Spacing", path: "/docs/properties/spacing" },
];
