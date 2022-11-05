// SPDX-License-Identifier: Apache-2.0
// https://docs.soliditylang.org/en/v0.8.10/style-guide.html
pragma solidity 0.8.11;

import "../interfaces/xNative.sol";
import "../oracles/Celo.sol";

contract xCelo is xNative {
    address public oracle;
    address public stableToken;

    function toUSD(uint256 amount) public view override returns (uint256) {
        (uint256 rateNumerator, uint256 rateDenominator) = ICeloOracle(oracle)
            .medianRate(stableToken);
        return (amount * rateNumerator) / rateDenominator;
    }

    function fromUSD(uint256 amount) public view override returns (uint256) {
        (uint256 rateNumerator, uint256 rateDenominator) = ICeloOracle(oracle)
            .medianRate(stableToken);
        return (amount * rateDenominator) / rateNumerator;
    }

    function setDependencies(address _oracle, address _stableToken)
        external
        onlyOwner
    {
        oracle = _oracle;
        stableToken = _stableToken;
    }
}
