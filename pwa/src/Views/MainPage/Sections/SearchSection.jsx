import { GridItem, IconButton, Input } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { area } from "../../../utils/area.constant";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchSection() {
  const navigator = useNavigate();
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    const { value } = e.target;

    setQuery(() => value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (query && query.length) {
        return navigator("/search?query=" + query);
      }

      return navigator("/");
    } catch (err) {
      console.log(err);
    }
  };

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
