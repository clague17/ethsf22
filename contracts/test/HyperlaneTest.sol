// SPDX-License-Identifier: UNLICENSEDCONVERSION
pragma solidity ^0.8.10;

import "../src/polygon/CarbonOffsetSettler.sol";
import "../lib/openzeppelin-contracts-upgradeable/contracts/token/ERC20/IERC20Upgradeable.sol";
import "../src/polygon/xUSDC.sol";
import "../src/celo/xcUSD.sol";
import "forge-std/Test.sol";
import "../lib/OffsetHelper/contracts/interfaces/IToucanPoolToken.sol";
import "./MockInbox.sol";
import "./MockOutbox.sol";

contract CarbonOffsetTest is Test {
    xcUSD sender;
    xUSDC receiver;
    CarbonOffsetSettler settler;

    address constant NCT = 0xD838290e877E0188a4A44700463419ED96c16107;
    address constant USDC = 0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174;

    address owner = 0x64beA9B3960A928758A8708078CB57405C75343f;

    MockOutbox outbox;
    MockInbox inbox;

    function setUp() public {
        changePrank(owner);

        inbox = new MockInbox();
        outbox = new MockOutbox(address(inbox));

        receiver = new xUSDC();
        receiver.initialize(
            address(outbox), // outbox
            address(0), // recipient
            "Receiver",
            "recv",
            USDC
        );

        sender = new xcUSD();
        sender.initialize(
            address(outbox), // outbox
            address(receiver), // recipient
            "Sender",
            "send",
            USDC
        );

        settler = new CarbonOffsetSettler();
        settler.initialize(address(receiver));

        console.log("outbox", address(outbox));
        console.log("receiver", address(receiver));
        console.log("sender", address(sender));
        console.log("sender outbox", address(sender.outbox()));
        console.log("sender USDC", address(sender.xUSDC()));
        console.log("NCT terminal", address(settler));

        receiver.setOffsetTerminal(address(settler));
    }

    function disabled_test_bridge() public {
        address tCO2Target = 0x463de2a5c6E8Bb0c87F4Aa80a02689e6680F72C7;
        uint256 amount = 1e6 * 100;

        changePrank(owner);
        deal(USDC, owner, amount);
        IERC20Upgradeable(USDC).approve(address(sender), amount);
        console.log("offsetX...");
        sender.offsetX(
            tCO2Target,
            amount,
            "Spirals",
            owner,
            "Luis Clague",
            "Touch grass"
        );
        console.log("offset done!");

        console.log("processing...");
        inbox.processNextPendingMessage();
    }
}
