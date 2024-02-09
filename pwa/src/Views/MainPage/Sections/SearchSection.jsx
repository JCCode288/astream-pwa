import { GridItem, IconButton, Input } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { area } from "../../../utils/area.constant";
import { useState } from "react";

export default function SearchSection() {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    const { value } = e.target;

    setQuery(() => value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(query);
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
        placeholder="Search Anime Title"
        bg="white"
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
