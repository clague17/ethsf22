// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.11;

import {MockInbox} from "./MockInbox.sol";
import "forge-std/console.sol";

contract MockOutbox {
    MockInbox inbox;

    constructor(address _inbox) {
        inbox = MockInbox(_inbox);
    }

    function dispatch(
        uint32 _destinationDomain,
        bytes32 _recipientAddress,
        bytes calldata _messageBody
    ) external {
        console.log("outbox - dispatching...");
        inbox.addPendingMessage(
            addressToBytes32(msg.sender),
            _recipientAddress,
            _messageBody
        );
        console.log("outbox - dispatched!");
    }

    function addressToBytes32(address _addr) internal pure returns (bytes32) {
        return bytes32(uint256(uint160(_addr)));
    }
}
