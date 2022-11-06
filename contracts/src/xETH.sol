// SPDX-License-Identifier: Apache-2.0
// https://docs.soliditylang.org/en/v0.8.10/style-guide.html
pragma solidity 0.8.11;

import "./interfaces/xNative.sol";
import "./oracles/ETH.sol";

contract xETH is xNative {
    address public oracle;

    function toUSD(uint256 amount) public view override returns (uint256) {
        uint256 ethPriceUSD = uint256(IETHOracle(oracle).latestAnswer());
        return (ethPriceUSD * amount) / 10**IETHOracle(oracle).decimals();
    }

    function fromUSD(uint256 amount) public view override returns (uint256) {
        uint256 ethPriceUSD = uint256(IETHOracle(oracle).latestAnswer());
        return (amount * 10**IETHOracle(oracle).decimals()) / ethPriceUSD;
    }

    function setDependencies(address _oracle) external onlyOwner {
        oracle = _oracle;
    }
}
