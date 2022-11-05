// SPDX-License-Identifier: Apache-2.0
// https://docs.soliditylang.org/en/v0.8.10/style-guide.html
pragma solidity 0.8.11;

import "../interfaces/xERC20.sol";

contract xcUSD is xERC20 {
    function toUSD(uint256 amount) public pure override returns (uint256) {
        return amount;
    }
}
