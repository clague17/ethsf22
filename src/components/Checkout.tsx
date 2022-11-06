import { Box } from "@chakra-ui/react";
import useTokenStore from "../store/useTokenStore";

const Checkout = () => {
  const { tokenSelection } = useTokenStore();
  const str = JSON.stringify(tokenSelection, null, 2);
  return <Box color="white">{str}</Box>;
};

export default Checkout;
