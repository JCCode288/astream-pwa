import { Box, HStack } from "@chakra-ui/react";
import NextButton from "../../../Components/NextButton";
import SearchCard from "./SearchCard";
import { useNavigate } from "react-router-dom";

export default function SearchStack({ animes, isNext }) {
  const navigator = useNavigate();
  const handleNavigate = (id) => {
    navigator("/animes/" + id);
  };
  return (
    <HStack zIndex="-1" display="flex">
      {animes.map((anime) => (
        <Box
          key={anime.id}
          width={{ base: "12rem", md: "100%" }}
          height="15rem"
          display="flex"
          justifyContent="center"
        >
          <SearchCard anime={anime} />
        </Box>
      ))}

      <Box
        width={{ base: "12rem", md: "100%" }}
        height="15rem"
        display="flex"
        justifyContent="center"
      >
        {isNext && <NextButton func={() => handleNavigate("")} />}
      </Box>
    </HStack>
  );
}
