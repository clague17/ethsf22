// SPDX-License-Identifier: Apache-2.0
// https://docs.soliditylang.org/en/v0.8.10/style-guide.html
pragma solidity 0.8.11;

// Celo's mento protocol sorted oracle
interface ICeloOracle {
    function medianRate(address) external view returns (uint256, uint256);
}
