// SPDX-License-Identifier: Apache-2.0
// https://docs.soliditylang.org/en/v0.8.10/style-guide.html
pragma solidity 0.8.11;

import "./xCO2.sol";

abstract contract xERC20 is xCO2 {
    ERC20Upgradeable public asset;

    function initialize(
        address _abacusConnectionManager,
        address _interchainGasPaymaster,
        string memory _name,
        string memory _symbol,
        address _asset
    ) external initializer {
        // Set ownable to sender
        _transferOwnership(msg.sender);
        // Set ACM contract address
        _setAbacusConnectionManager(_abacusConnectionManager);
        // Set IGP contract address
        _setInterchainGasPaymaster(_interchainGasPaymaster);

        __ERC20_init(_name, _symbol);
        asset = ERC20Upgradeable(_asset);
    }

    function initialize(
        address _abacusConnectionManager,
        address _interchainGasPaymaster,
        string memory _name,
        string memory _symbol
    ) external override initializer {}

    function depositFor(address _receiver, uint256 _amount) public {
        asset.transferFrom(msg.sender, _receiver, _amount);
        _mint(_receiver, toUSD(_amount));
    }

    function deposit(uint256 _amount) external {
        depositFor(msg.sender, _amount);
    }

    function withdrawFor(uint256 _amount, address _receiver) public payable {
        _burn(msg.sender, toUSD(_amount));
        asset.transfer(_receiver, _amount);
    }

    function withdraw(uint256 amount) external payable {
        withdrawFor(amount, msg.sender);
    }
}
