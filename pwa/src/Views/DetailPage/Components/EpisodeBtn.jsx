import { Button, Text } from "@chakra-ui/react";
import { useId } from "react";
import { useNavigate } from "react-router-dom";
import idToName from "../../../utils/id-to-name";

export default function EpisodeBtn({ eps }) {
  const epsId = useId();
  const navigator = useNavigate();
  const handleNavigate = (id) => {
    navigator("stream/" + id);
  };

  return (
    <Button onClick={() => handleNavigate(eps.id)} key={epsId} p="0.25rem">
      <Text whiteSpace="pre-line">{idToName(eps.id)}</Text>
    </Button>
  );
}
