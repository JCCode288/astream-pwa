import { Box, Card, Heading, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function RecentCard({ anime }) {
  const navigator = useNavigate();

  const handleRoute = ({ to, id }) => {
    const route = `/${to}/${id}`;

    navigator(route);
  };

  return (
    <Card
      w={{ base: "100%", md: "fit-content" }}
      h="100%"
      overflow="hidden"
      rounded="3px"
      direction="column"
      className="group"
      cursor="pointer"
    >
      <Box
        as="a"
        background={`url(${anime.image}) center/cover no-repeat`}
        justifyContent="center"
        boxSize={{ base: "100%", md: "14rem" }}
        color="gray.900"
        display="flex"
        alignItems="center"
      >
        <Heading
          onClick={() => handleRoute({ id: anime.episodeId, to: "stream" })}
          size="md"
          w="100%"
          h="100%"
          alignItems="center"
          justifyContent="center"
          display="flex"
          whiteSpace="pretty"
          zIndex={2}
          p="0.5rem"
          textShadow="0px 0px 5px black"
          _groupHover={{
            base: {
              backdropFilter: "blur(2px)",
              fontStyle: "800",
              fontSize: "1.3rem",
            },
          }}
          transitionDuration="150ms"
          transitionTimingFunction="ease-in-out"
        >
          <Text h="1.2rem" color="white">
            {anime.title} - {anime.episodeNumber}
          </Text>
        </Heading>
      </Box>
    </Card>
  );
}
