import { Box, Card, Heading, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function TopCard({ anime }) {
  const navigator = useNavigate();

  const handleRoute = (id) => {
    const route = `/animes/${id}`;

    navigator(route);
  };
  return (
    <Card
      w="12.5rem"
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
          <Box
            m="0.5rem"
            alignItems="start"
            gap="0.5rem"
            display="flex"
            flexDir="column"
          >
            <Text color="white">{anime.title}</Text>
            <Box display="flex" flexDir="column" gap="0.2rem">
              {anime.genres.map((genre, idx) => (
                <Box zIndex={2} key={idx}>
                  <Text fontSize="sm" color="white">
                    {genre}
                  </Text>
                </Box>
              ))}
            </Box>
          </Box>
        </Heading>
      </Box>
    </Card>
  );
}
