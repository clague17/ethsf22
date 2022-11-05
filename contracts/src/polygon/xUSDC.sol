// SPDX-License-Identifier: Apache-2.0
// https://docs.soliditylang.org/en/v0.8.10/style-guide.html
pragma solidity 0.8.11;

import "../interfaces/xERC20.sol";
import "./CarbonOffsetTerminal.sol";

contract xUSDC is xERC20 {
    address public offsetTerminal;

    function _handle(
        uint32 _origin,
        bytes32,
        bytes memory _message
    ) internal {
        (address tCO2, uint256 amountXCO2, address beneficiary) = abi.decode(
            _message,
            (address, uint256, address)
        );
        asset.transfer(offsetTerminal, amountXCO2);
        CarbonOffsetTerminal(offsetTerminal).retire(
            tCO2,
            amountXCO2,
            beneficiary
        );
        emit Offset(tCO2, amountXCO2, beneficiary);
    }

    function offset(
        address _tCO2,
        uint256 _amountXCO2,
        address _beneficiary
    ) public {
        asset.transferFrom(msg.sender, address(this), _amountXCO2);
        CarbonOffsetTerminal(offsetTerminal).retire(
            _tCO2,
            _amountXCO2,
            _beneficiary
        );
    }

    function toUSD(uint256 amount) public pure override returns (uint256) {
        return amount;
    }

    function fromUSD(uint256 amount) public view override returns (uint256) {
        return amount;
    }
}
