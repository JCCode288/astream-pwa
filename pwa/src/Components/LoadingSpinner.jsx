import { Spinner } from "@chakra-ui/react";

export default function LoadingSpinner({ size = "sm" }) {
  return (
    <Spinner
      size={size}
      thickness="0.3rem"
      speed="0.75s"
      emptyColor="green.200"
      color="green.500"
    />
  );
}
