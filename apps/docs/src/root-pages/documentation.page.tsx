"use client";

import { TableOfContents } from "@/components/table-of-contents";
import {
  Box,
  Flex,
  Portal,
  Separator,
  Text,
  ThemeControl,
} from "@locus-ui/components";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

type DocsLayoutProps = React.PropsWithChildren & {};

const DocsLayout = ({ children }: DocsLayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const sidebar = (
    <>
      <SideBarLinks
        title="Overview"
        components={overview}
        onNavigate={() => setSidebarOpen(false)}
      />
      <SideBarLinks
        title="Layout"
        components={layout}
        onNavigate={() => setSidebarOpen(false)}
      />
      <SideBarLinks
        title="Components"
        components={components}
        onNavigate={() => setSidebarOpen(false)}
      />
      <SideBarLinks
        title="Properties"
        components={properties}
        onNavigate={() => setSidebarOpen(false)}
      />
    </>
  );

  return (
    <Flex gap="4" className="relative sm:px-20 px-4">
      {/* Mobile sidebar via Portal */}
      <Portal.Root open={sidebarOpen} onOpenChange={setSidebarOpen}>
        <Portal.Trigger asChild>
          <button
            aria-label="Open sidebar"
            className="md:hidden fixed bottom-4 left-4 z-50 p-2 rounded-lg bg-[rgb(var(--surface-1))] border border-[rgb(var(--surface-1))]"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <line x1="3" y1="5" x2="17" y2="5" />
              <line x1="3" y1="10" x2="17" y2="10" />
              <line x1="3" y1="15" x2="17" y2="15" />
            </svg>
          </button>
        </Portal.Trigger>
        <Portal.Backdrop variant="shadow" />
        <Portal.Content position="tl">
          <Flex
            gap="2"
            p="4"
            direction="column"
            className="h-dvh w-64 bg-[rgb(var(--bg-1))] overflow-y-auto"
          >
            {sidebar}
          </Flex>
        </Portal.Content>
      </Portal.Root>

      {/* Desktop sidebar */}
      <Flex
        gap="2"
        direction="column"
        className="flex-1 md:flex! hidden! sticky top-0 self-start max-h-screen overflow-y-auto"
      >
        {sidebar}
      </Flex>

      <Separator direction="vertical" className="sm:block hidden" />

      <Flex
        data-docs-content
        direction="column"
        className="flex-4 min-w-0 min-h-fit lg:px-8 bg-[rgb(var(--bg-1))]"
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
        className="flex-1 lg:flex! hidden! sticky top-0 self-start max-h-screen overflow-y-auto"
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
  onNavigate,
}: {
  title: string;
  components: Array<{ name: string; path: string }>;
  onNavigate?: () => void;
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
              onClick={onNavigate}
              className="focus:outline-0 focus:outline-[rgba(var(--primary),0.4)] focus:outline-border-[rgba(var(--primary),_0.4)] focus:bg-[rgba(var(--primary),0.2)] focus:border-[rgba(var(--primary),0.4)] rounded-r-lg"
            >
              <Box
                radius-r="lg"
                radius-l="none"
                className={`border-l-2 hover:border-[rgb(var(--primary))] hover:bg-[rgba(var(--primary),0.2)] pl-2 ${
                  isActive
                    ? "border-[rgb(var(--primary))]"
                    : "border-[rgb(var(--surface-1))]"
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

const layout = [
  { name: "Box", path: "/docs/layout/box" },
  { name: "Flex", path: "/docs/layout/flex" },
  { name: "Grid", path: "/docs/layout/grid" },
];

const components = [
  { name: "Accordion", path: "/docs/components/accordion" },
  { name: "Badge", path: "/docs/components/badge" },
  { name: "Button", path: "/docs/components/button" },
  { name: "Checkbox", path: "/docs/components/checkbox" },
  { name: "Panel", path: "/docs/components/panel" },
  { name: "Portal", path: "/docs/components/portal" },
  { name: "Progress Bar", path: "/docs/components/progress-bar" },
  { name: "Select", path: "/docs/components/select" },
  { name: "Separator", path: "/docs/components/separator" },
  { name: "Switch", path: "/docs/components/switch" },
  { name: "Theme", path: "/docs/components/theme" },
  { name: "Tooltip", path: "/docs/components/tooltip" },
];

const properties = [
  { name: "Color", path: "/docs/properties/color" },
  { name: "Margin", path: "/docs/properties/margin" },
  { name: "Padding", path: "/docs/properties/padding" },
  { name: "Radius", path: "/docs/properties/radius" },
  { name: "Size", path: "/docs/properties/size" },
  { name: "Spacing", path: "/docs/properties/spacing" },
];
