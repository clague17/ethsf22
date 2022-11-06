// SPDX-License-Identifier: MIT
pragma solidity 0.8.11;

// IChainlinkEACAggregator oracle
interface IETHOracle {
    function latestAnswer() external view returns (int256);

    function decimals() external view returns (uint256);
}
