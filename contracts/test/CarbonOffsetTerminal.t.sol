// SPDX-License-Identifier: UNLICENSEDCONVERSION
pragma solidity ^0.8.10;

import "../src/polygon/CarbonOffsetSettler.sol";
import "../lib/openzeppelin-contracts-upgradeable/contracts/token/ERC20/IERC20Upgradeable.sol";
import "../src/polygon/xUSDC.sol";
import "forge-std/Test.sol";
import "../lib/OffsetHelper/contracts/interfaces/IToucanPoolToken.sol";

contract CarbonOffsetTest is Test {
    xUSDC payment;
    CarbonOffsetSettler settler;

    address constant NCT = 0xD838290e877E0188a4A44700463419ED96c16107;
    address constant USDC = 0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174;

    address owner = 0x64beA9B3960A928758A8708078CB57405C75343f;

    function setUp() public {
        changePrank(owner);
        payment = new xUSDC();
        payment.initialize(
            0x8249cD1275855F2BB20eE71f0B9fA3c9155E5FaB, // outbox
            address(0), // self
            "Polygon USDC Offset Payment Terminal",
            "xUSDC",
            USDC
        );
        // settler = new CarbonOffsetSettler();
        // settler.initialize(address(payment));

        payment.setOffsetTerminal(0x06f5b0b01D175970B7207eBAA146d5ea22175637);
    }

    function test_success() public {
        address tCO2Target = 0x463de2a5c6E8Bb0c87F4Aa80a02689e6680F72C7;
        uint256 amount = 1e6 * 100;

        console.log("tons offset", settler.tonsOffsetByAddress(owner));

        console.log(
            "tco2 pre ",
            IToucanPoolToken(settler.NCT()).tokenBalances(tCO2Target)
        );

        changePrank(owner);
        deal(settler.USDC(), owner, amount);
        IERC20Upgradeable(USDC).approve(address(payment), amount);
        payment.offset(tCO2Target, amount, owner);

        console.log(
            "tco2 post",
            IToucanPoolToken(settler.NCT()).tokenBalances(tCO2Target)
        );

        console.log("tons offset", settler.tonsOffsetByAddress(owner));
    }

    function test_deployed() public {
        xUSDC cc = xUSDC(0x960B7a547962e3A508c3C8b815CF19a910B7A05E);
        console.log(cc.offsetTerminal());
        return;
        uint32 origin;
        bytes32 msg;
        cc.handle(
            origin,
            msg,
            abi.encode(0x463de2a5c6E8Bb0c87F4Aa80a02689e6680F72C7, 1e6, owner)
        );
    }

    function test_mix() public {
        return;

        deal(USDC, address(payment), 5e6);
        uint32 origin;
        bytes32 msg;
        payment.handle(
            origin,
            msg,
            abi.encode(0x463de2a5c6E8Bb0c87F4Aa80a02689e6680F72C7, 1e6, owner)
        );
    }
}
