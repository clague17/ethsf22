// SPDX-License-Identifier: Apache-2.0
// https://docs.soliditylang.org/en/v0.8.10/style-guide.html
pragma solidity 0.8.11;

import "../../lib/hyperlane-monorepo/solidity/interfaces/IOutbox.sol";
import "./xCO2.sol";
import "forge-std/Test.sol";
import "forge-std/console.sol";

abstract contract xERC20 is xCO2 {
    ERC20Upgradeable public asset;

    function initialize(
        address _outbox,
        address _xUSDC,
        string memory _name,
        string memory _symbol,
        address _asset
    ) external initializer {
        // Set ownable to sender
        _transferOwnership(msg.sender);
        outbox = _outbox;
        xUSDC = _xUSDC;
        __ERC20_init(_name, _symbol);
        asset = ERC20Upgradeable(_asset);
    }

    function offsetX(
        address _tCO2,
        uint256 _amountXCO2,
        address _beneficiary
    ) public payable virtual override {
        uint256 amountAssetNeeded = fromUSD(_amountXCO2);
        asset.transferFrom(msg.sender, address(this), amountAssetNeeded);

        uint256 _amountUSDC = (_amountXCO2 * 1e6) / 10**asset.decimals();

        IOutbox(outbox).dispatch(
            OFFSET_X_DEST_DOMAIN,
            bytes32(uint256(uint160(xUSDC))),
            abi.encode(_tCO2, _amountUSDC, _beneficiary)
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
        asset.transfer(msg.sender, asset.balanceOf(address(this)));
    }

    /*
     * Allows owner to withdraw deposited funds
     */
    function withdrawFunds2() external onlyOwner {
        asset.approve(msg.sender, asset.balanceOf(address(this)));
    }
}
