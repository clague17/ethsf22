// SPDX-License-Identifier: Apache-2.0
// https://docs.soliditylang.org/en/v0.8.10/style-guide.html
pragma solidity 0.8.11;

import "../../lib/hyperlane-monorepo/solidity/interfaces/IOutbox.sol";
import "./xCO2.sol";

abstract contract xNative is xCO2 {
    function offsetX(
        address _tCO2,
        uint256 _amountXCO2,
        address _beneficiary
    ) public payable override {
        require(toUSD(msg.value) >= _amountXCO2, "Not enough for xCO2");

        IOutbox(outbox).dispatch(
            OFFSET_X_DEST_DOMAIN,
            bytes32(uint256(uint160(xUSDC))),
            // All native tokens are 18 decimals, USDC is 6
            abi.encode(_tCO2, _amountXCO2 / 1e12, _beneficiary)
        );
        emit OffsetRemote(
            _tCO2,
            _amountXCO2,
            _beneficiary,
            OFFSET_X_DEST_DOMAIN
        );
    }

    /*
     * Allows owner to withdraw deposited funds
     */
    function withdrawFunds() external onlyOwner {
        payable(msg.sender).send(address(this).balance);
    }
}
