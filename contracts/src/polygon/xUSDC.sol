// SPDX-License-Identifier: Apache-2.0
// https://docs.soliditylang.org/en/v0.8.10/style-guide.html
pragma solidity 0.8.11;

import "../interfaces/xERC20.sol";
import "./CarbonOffsetSettler.sol";
import "forge-std/console.sol";

contract xUSDC is xERC20 {
    address public offsetTerminal;

    function handle(
        uint32,
        bytes32,
        bytes memory _message
    ) external {
        (
            address tCO2,
            uint256 amountXCO2,
            string memory entity,
            address beneficiary,
            string memory beneficiaryName,
            string memory _msg
        ) = abi.decode(
                _message,
                (address, uint256, string, address, string, string)
            );
        asset.transfer(offsetTerminal, amountXCO2);
        CarbonOffsetSettler(offsetTerminal).retire(
            tCO2,
            amountXCO2,
            entity,
            beneficiary,
            beneficiaryName,
            _msg
        );

        emit Offset(tCO2, amountXCO2, beneficiary);
    }

    function offset(
        address _tCO2,
        uint256 _amountXCO2,
        string calldata _entity,
        address _beneficiary,
        string calldata _beneficiaryName,
        string calldata _msg
    ) public {
        asset.transferFrom(msg.sender, offsetTerminal, _amountXCO2);
        CarbonOffsetSettler(offsetTerminal).retire(
            _tCO2,
            _amountXCO2,
            _entity,
            _beneficiary,
            _beneficiaryName,
            _msg
        );
    }

    function setOffsetTerminal(address _terminal) external onlyOwner {
        offsetTerminal = _terminal;
    }

    // Override as same-chain version
    function offsetX(
        address _tCO2,
        uint256 _amountXCO2,
        string calldata _entity,
        address _beneficiary,
        string calldata _beneficiaryName,
        string calldata _msg
    ) public payable override {
        offset(
            _tCO2,
            _amountXCO2,
            _entity,
            _beneficiary,
            _beneficiaryName,
            _msg
        );
    }

    function toUSD(uint256 amount) public pure override returns (uint256) {
        return amount;
    }

    function fromUSD(uint256 amount) public view override returns (uint256) {
        return amount;
    }
}
