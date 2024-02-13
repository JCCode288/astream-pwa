import { Box, Card, Heading, Text, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function SearchCard({ anime }) {
  const navigator = useNavigate();

  const handleRoute = (id) => {
    const route = `/animes/${id}`;

    navigator(route);
  };
  return (
    <Card
      w="13rem"
      h="100%"
      overflow="hidden"
      rounded="2px"
      direction="row"
      className="group"
      cursor="pointer"
      onClick={() => handleRoute(anime.id)}
    >
      <Box
        objectFit="cover"
        boxSize={{ base: "100%", sm: "15.7rem" }}
        background={`url(${anime.image}) center/cover no-repeat`}
        alt={anime.id}
        px="0.2rem"
        py="0.5rem"
      >
        <Heading
          size="md"
          w="100%"
          h="100%"
          textShadow="0px 0px 5px black"
          _groupHover={{
            backdropFilter: "blur(2px)",
            fontStyle: "800",
            fontSize: "1.3rem",
          }}
          transitionTimingFunction="linear"
          transitionDuration="150ms"
        >
          <VStack alignItems="start">
            <Text color="white">{anime.title}</Text>
          </VStack>
        </Heading>
      </Box>
    </Card>
  );
}
