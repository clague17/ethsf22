import { Button } from "@chakra-ui/react";
import { ConnectKitButton } from "connectkit";

const ConnectWalletButton = () => {
  return (
    <ConnectKitButton.Custom>
      {({ isConnected, show, truncatedAddress, ensName }) => {
        return (
          <Button
            bg={"green.400"}
            color={"white"}
            rounded={"xl"}
            boxShadow={"0 5px 20px 0px rgb(72 187 120 / 43%)"}
            _hover={{
              bg: "green.500",
            }}
            onClick={show}
            fontSize={"md"}
          >
            {isConnected ? ensName ?? truncatedAddress : "Connect Wallet"}
          </Button>
        );
      }}
    </ConnectKitButton.Custom>
  );
};

export default ConnectWalletButton;
