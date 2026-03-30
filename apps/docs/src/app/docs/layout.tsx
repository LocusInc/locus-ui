"use client";

import { Box, Flex, Separator, Text, ThemeControl } from "@locus-ui/components";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { TableOfContents } from "../../components/table-of-contents";

type DocsLayoutProps = React.PropsWithChildren & {};

const DocsLayout = ({ children }: DocsLayoutProps) => {
  return (
    <Flex gap="4" className="relative sm:px-20 px-4">
      <Flex
        gap="2"
        direction="column"
        className="flex-1 sm:flex hidden  sticky top-0 self-start max-h-screen overflow-y-auto"
      >
        <SideBarLinks title="Overview" components={overview} />
        <SideBarLinks title="Components" components={components} />
        <SideBarLinks title="Properties" components={properties} />
      </Flex>

      <Separator direction="vertical" className="sm:block hidden" />

      <Flex
        data-docs-content
        direction="column"
        className="flex-4 min-w-0 min-h-fit px-8 bg-[rgb(var(--background-color-1))]"
      >
        {children}
      </Flex>

      <Separator
        direction="vertical"
        variant="dashed"
        className="lg:flex hidden opacity-20"
      />

      <Flex
        px="4"
        pt="8"
        className="flex-1 lg:flex hidden sticky top-0 self-start max-h-screen overflow-y-auto"
      >
        <TableOfContents />
      </Flex>

      <ThemeControl />
    </Flex>
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

      <Flex direction="column">
        {components.map((component) => {
          const isActive = pathname === component.path;

          return (
            <Link
              key={component.name}
              href={component.path}
              className="focus:outline-0 focus:outline-[rgba(var(--primary),0.4)] focus:outline-border-[rgba(var(--primary),_0.4)] focus:bg-[rgba(var(--primary),0.2)] focus:border-[rgba(var(--primary),0.4)] rounded-r-lg"
            >
              <Box
                radius-r="lg"
                radius-l="none"
                className={`border-l-2 hover:border-[rgb(var(--primary))] hover:bg-[rgba(var(--primary),0.2)] pl-2 ${
                  isActive
                    ? "border-[rgb(var(--primary))]"
                    : "border-[rgb(var(--panel-color))]"
                }`}
              >
                <Text
                  px="2"
                  style={{ color: isActive ? "rgb(var(--primary))" : "" }}
                >
                  {component.name}
                </Text>
              </Box>
            </Link>
          );
        })}
      </Flex>
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
  { name: "Flex", path: "/docs/components/flex" },
  { name: "Panel", path: "/docs/components/panel" },
  { name: "Portal", path: "/docs/components/portal" },
  { name: "Progress Bar", path: "/docs/components/progress-bar" },
  { name: "Select", path: "/docs/components/select" },
  { name: "Separator", path: "/docs/components/separator" },
  { name: "Switch", path: "/docs/components/switch" },
  { name: "Theme", path: "/docs/components/theme" },
];

const properties = [
  { name: "Radius", path: "/docs/properties/radius" },
  { name: "Spacing", path: "/docs/properties/spacing" },
];
