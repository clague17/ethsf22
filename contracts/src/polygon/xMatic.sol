// SPDX-License-Identifier: Apache-2.0
// https://docs.soliditylang.org/en/v0.8.10/style-guide.html
pragma solidity 0.8.11;

import "../interfaces/xNative.sol";
import "../oracles/Matic.sol";

contract xMatic is xNative {
    address public oracle;

    function toUSD(uint256 amount) public view override returns (uint256) {
        uint256 maticPriceUSD = uint256(IMaticOracle(oracle).latestAnswer());
        return (maticPriceUSD * amount) / 10**IMaticOracle(oracle).decimals();
    }

    function fromUSD(uint256 amount) public view override returns (uint256) {
        uint256 maticPriceUSD = uint256(IMaticOracle(oracle).latestAnswer());
        return (amount * 10**IMaticOracle(oracle).decimals()) / maticPriceUSD;
    }

    function setDependencies(address _oracle) external onlyOwner {
        oracle = _oracle;
    }
}
