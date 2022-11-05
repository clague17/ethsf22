// SPDX-License-Identifier: Apache-2.0
// https://docs.soliditylang.org/en/v0.8.10/style-guide.html
pragma solidity 0.8.11;

import "../interfaces/xERC20.sol";
import "../../lib/openzeppelin-contracts-upgradeable/contracts/token/ERC20/IERC20Upgradeable.sol";
import "../../lib/OffsetHelper/contracts/interfaces/IToucanPoolToken.sol";
import "../../lib/OffsetHelper/contracts/interfaces/IToucanCarbonOffsets.sol";
import "../interfaces/IUniswapV2Router02.sol";

contract xUSDC is xERC20 {
    address constant NCT = 0xD838290e877E0188a4A44700463419ED96c16107;
    address constant USDC = 0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174;
    address constant SUSHI_ROUTER = 0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506;

    function toUSD(uint256 amount) public pure override returns (uint256) {
        return amount;
    }

    /*
     * Called by other chain contracts that want to retire TCO2.
     */
    function xRetire(address _tco2, uint256 _amountToOffset) public {
        // 1. Swap USDC on contract into NCT.
        swap(_amountToOffset);

        address[] memory tco2s = new address[](1);
        tco2s[0] = _tco2;
        uint256[] memory amounts = new uint256[](1);
        amounts[0] = _amountToOffset;

        // 2. Redeem NCT into TCO2
        IToucanPoolToken(NCT).redeemMany(tco2s, amounts);

        // 3. Retire TCO2 and mint certificate!
        IToucanCarbonOffsets(_tco2).retireAndMintCertificate(
            "Spirals", // retiringEntity
            msg.sender, // beneficiary address
            "Doug Qian", // benficiary name
            "Healing the world @ ETH SF", // retirement message
            _amountToOffset
        );
    }

    /*
     * Given a specific TCO2 and amount, return the amount of xUSDC we would
     * need to burn after fees.
     */
    function getXUSDCNeeded(address _tco2, uint256 _amountToOffset)
        public
        view
        returns (uint256)
    {
        address[] memory tco2s = new address[](1);
        tco2s[0] = _tco2;
        uint256[] memory amounts = new uint256[](1);
        amounts[0] = _amountToOffset;

        uint256 totalFee = IToucanPoolToken(NCT).calculateRedeemFees(
            tco2s,
            amounts
        );

        address[] memory reversePath = generatePath(NCT, USDC);
        uint256[] memory expectedAmountsIn = IUniswapV2Router02(SUSHI_ROUTER)
            .getAmountsIn(totalFee + _amountToOffset, reversePath);
        return expectedAmountsIn[0];
    }

    /*
     * Only support USDC <-> NCT routes
     */
    function generatePath(address _from, address _to)
        internal
        pure
        returns (address[] memory)
    {
        address[] memory path = new address[](2);
        path[0] = _from;
        path[1] = _to;
        return path;
    }

    /**
     * Swap USDC on contract into NCT.
     */
    function swap(uint256 _amount) public {
        // instantiate router
        IUniswapV2Router02 routerSushi = IUniswapV2Router02(SUSHI_ROUTER);

        // generate path
        address[] memory path = generatePath(USDC, NCT);

        // estimate amountsIn
        uint256[] memory expectedAmountsIn = routerSushi.getAmountsIn(
            _amount,
            path
        );

        // approve router
        IERC20Upgradeable(USDC).approve(SUSHI_ROUTER, expectedAmountsIn[0]);

        // swap
        routerSushi.swapTokensForExactTokens(
            _amount,
            expectedAmountsIn[0],
            path,
            address(this),
            block.timestamp
        );
    }
}
