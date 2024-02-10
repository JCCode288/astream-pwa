import { useDispatch } from "react-redux";
import {
  episodesNextPage,
  episodesPrevPage,
} from "../../../stores/details/detail.action";
import { Box, Button, ButtonGroup } from "@chakra-ui/react";

export default function PrevNextBtn({ isPrevPage, isNextPage }) {
  const dispatcher = useDispatch();

  const ComponentButton = ({ func, tag }) => (
    <Button onClick={func}>{tag}</Button>
  );

  const handleNextPage = () => {
    dispatcher(episodesNextPage());
  };
  const handlePrevPage = () => {
    dispatcher(episodesPrevPage());
  };

  return (
    <Box display="flex" justifyContent="center">
      <ButtonGroup justifyContent="space-around" maxW="sm">
        {isPrevPage && <ComponentButton func={handlePrevPage} tag="Previous" />}
        {isNextPage && <ComponentButton func={handleNextPage} tag="Next" />}
      </ButtonGroup>
    </Box>
  );
}
