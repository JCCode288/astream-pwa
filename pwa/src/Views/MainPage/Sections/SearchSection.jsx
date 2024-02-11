import { GridItem, IconButton, Input } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { area } from "../../../utils/area.constant";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSearchAnimes } from "../../../stores/animes/animes.action";
import AnimeStack from "../Components/AnimeStack";

export default function SearchSection() {
  const dispatcher = useDispatch();
  const { searchedAnimes, searchNext } = useSelector(({ animes }) => animes);

  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    const { value } = e.target;

    setQuery(() => value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await dispatcher(fetchSearchAnimes(query));
    } catch (err) {
      console.log(err);
    }
  };

  const handleNext = () => {
    try {
      alert("next called");
    } catch (err) {
      console.log(err);
    }
  };

  console.log({ searchedAnimes, searchNext });

  return (
    <GridItem
      onSubmit={handleSubmit}
      area={area.search}
      rounded="sm"
      display="flex"
      as="form"
    >
      <Input
        onChange={handleChange}
        placeholder="Search Anime Title here"
        bg="white"
        color="gray.800"
        rounded="sm"
      />
      <IconButton
        aria-label="Search database"
        icon={<SearchIcon />}
        rounded="0"
        type="submit"
      />
    </GridItem>
  );
}
