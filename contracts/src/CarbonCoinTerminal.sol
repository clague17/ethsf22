// SPDX-License-Identifier: Apache-2.0
// https://docs.soliditylang.org/en/v0.8.10/style-guide.html
pragma solidity 0.8.11;

import "../lib/hyperlane-monorepo/solidity/contracts/Router.sol";
import "../lib/openzeppelin-contracts-upgradeable/contracts/token/ERC20/ERC20Upgradeable.sol";

// import "../lib/openzeppelin-contracts-upgradeable/contracts/access/OwnableUpgradeable.sol";

abstract contract CarbonCoinTerminal is
    Router,
    ERC20Upgradeable
    // OwnableUpgradeable
{
    /**
     * @dev Emitted on `transferRemote` when a transfer message is dispatched.
     * @param destination The identifier of the destination chain.
     * @param recipient The address of the recipient on the destination chain.
     * @param amount The amount of tokens burnt on the origin chain.
     */
    event SentTransferRemote(
        uint32 indexed destination,
        address indexed recipient,
        uint256 amount
    );

    /**
     * @dev Emitted on `_handle` when a transfer message is processed.
     * @param origin The identifier of the origin chain.
     * @param recipient The address of the recipient on the destination chain.
     * @param amount The amount of tokens minted on the destination chain.
     */
    event ReceivedTransferRemote(
        uint32 indexed origin,
        address indexed recipient,
        uint256 amount
    );

    /**
     * @notice Initializes the Hyperlane router, ERC20 metadata, and mints initial supply to deployer.
     * @param _abacusConnectionManager The address of the connection manager contract.
     * @param _interchainGasPaymaster The address of the interchain gas paymaster contract.
     * @param _totalSupply The initial supply of the token.
     * @param _name The name of the token.
     * @param _symbol The symbol of the token.
     */
    function initialize(
        address _abacusConnectionManager,
        address _interchainGasPaymaster,
        uint256 _totalSupply,
        string memory _name,
        string memory _symbol
    ) external initializer {
        // Set ownable to sender
        _transferOwnership(msg.sender);
        // Set ACM contract address
        _setAbacusConnectionManager(_abacusConnectionManager);
        // Set IGP contract address
        _setInterchainGasPaymaster(_interchainGasPaymaster);

        __ERC20_init(_name, _symbol);
        _mint(msg.sender, _totalSupply);
    }

    function toUSD(uint256 amount) public view virtual returns (uint256);

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

    /**
     * @notice Transfers `_amount` of tokens from `msg.sender` to `_recipient` on the `_destination` chain.
     * @dev Burns `_amount` of tokens from `msg.sender` on the origin chain and dispatches
     *      message to the `destination` chain to mint `_amount` of tokens to `recipient`.
     * @dev Emits `SentTransferRemote` event on the origin chain.
     * @param _destination The identifier of the destination chain.
     * @param _recipient The address of the recipient on the destination chain.
     * @param _amount The amount of tokens to be sent to the remote recipient.
     */
    function transferRemote(
        uint32 _destination,
        address _recipient,
        uint256 _amount
    ) external payable {
        _burn(msg.sender, _amount);
        _dispatchWithGas(
            _destination,
            abi.encode(_recipient, _amount),
            msg.value
        );
        emit SentTransferRemote(_destination, _recipient, _amount);
    }

    /**
     * @dev Mints tokens to recipient when router receives transfer message.
     * @dev Emits `ReceivedTransferRemote` event on the destination chain.
     * @param _origin The identifier of the origin chain.
     * @param _message The encoded remote transfer message containing the recipient address and amount.
     */
    function _handle(
        uint32 _origin,
        bytes32,
        bytes memory _message
    ) internal override {
        (address recipient, uint256 amount) = abi.decode(
            _message,
            (address, uint256)
        );
        _mint(recipient, amount);
        emit ReceivedTransferRemote(_origin, recipient, amount);
    }
}
