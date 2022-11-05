// SPDX-License-Identifier: Apache-2.0
// https://docs.soliditylang.org/en/v0.8.10/style-guide.html
pragma solidity 0.8.11;

import "./xCO2.sol";

abstract contract xNative is xCO2 {
    function depositFor(address _receiver) public payable {
        _mint(_receiver, toUSD(msg.value));
    }

    function deposit() external payable {
        depositFor(msg.sender);
    }

    function withdrawFor(uint256 amount, address payable _receiver)
        public
        payable
    {
        _burn(msg.sender, toUSD(amount));
        _receiver.send(amount);
    }

    function withdraw(uint256 amount) external payable {
        withdrawFor(amount, payable(msg.sender));
    }
}
