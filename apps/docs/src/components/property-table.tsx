import { Box, Text } from "@locus-ui/components";

interface Property {
  name: string;
  type: string;
  values?: string;
  defaultValue?: string;
}

interface PropertyTableProps {
  properties: Property[];
}

const PropertyCell = ({ children }: { children: React.ReactNode }) => (
  <Text
    px="2"
    className="bg-[rgb(var(--background-color-2))] font-mono w-fit rounded-md text-sm"
  >
    {children}
  </Text>
);

export const PropertyTable = ({ properties }: PropertyTableProps) => {
  return (
    <Box className="border overflow-hidden border-[rgb(var(--background-color-1))] rounded-md mt-2">
      <Box
        px="4"
        py="2"
        radius="none"
        className="flex gap-2 bg-[rgb(var(--background-color-2))]"
      >
        <Box className="flex-1 font-bold">Property</Box>
        <Box className="flex-1 font-bold">Type</Box>
        <Box className="flex-2 font-bold">Values</Box>
        <Box className="flex-2 font-bold">Default</Box>
      </Box>

      {properties.map((property) => (
        <Box
          key={property.name}
          px="4"
          py="2"
          radius="none"
          className="flex gap-2 border-t"
        >
          <Box className="flex-1">
            <PropertyCell>{property.name}</PropertyCell>
          </Box>

          <Box className="flex-1">
            <PropertyCell>{property.type}</PropertyCell>
          </Box>

          <Box className="flex-2">
            {property.values && <PropertyCell>{property.values}</PropertyCell>}
          </Box>

          <Box className="flex-2">
            {property.defaultValue && (
              <PropertyCell>{property.defaultValue}</PropertyCell>
            )}
          </Box>
        </Box>
      ))}
    </Box>
  );
};
