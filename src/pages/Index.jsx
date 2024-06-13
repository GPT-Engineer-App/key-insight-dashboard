import { Box, Container, SimpleGrid, Stat, StatLabel, StatNumber, VStack, Text, Heading } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={4} align="stretch">
        <Heading as="h1" size="xl" textAlign="center" mb={6}>
          Business Dashboard
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={4}>
          <Stat>
            <StatLabel>Sales</StatLabel>
            <StatNumber>$50,000</StatNumber>
          </Stat>
          <Stat>
            <StatLabel>Revenue</StatLabel>
            <StatNumber>$120,000</StatNumber>
          </Stat>
          <Stat>
            <StatLabel>Customers</StatLabel>
            <StatNumber>1,200</StatNumber>
          </Stat>
        </SimpleGrid>
        <Box p={4} bg="gray.100" borderRadius="md">
          <Text fontSize="lg">Additional metrics and charts can be added here.</Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;