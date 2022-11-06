// SPDX-License-Identifier: Apache-2.0
// https://docs.soliditylang.org/en/v0.8.10/style-guide.html
pragma solidity 0.8.11;

import "../../lib/openzeppelin-contracts-upgradeable/contracts/token/ERC20/ERC20Upgradeable.sol";
import "../../lib/openzeppelin-contracts-upgradeable/contracts/access/OwnableUpgradeable.sol";

abstract contract xCO2 is ERC20Upgradeable, OwnableUpgradeable {
    error NotImplemented();

    uint32 constant OFFSET_X_DEST_DOMAIN = 0x706f6c79; // polygon
    address public outbox;
    address public xUSDC;

    event OffsetRemote(
        address indexed tCO2,
        uint256 indexed amountXCO2,
        address indexed beneficiary,
        uint32 destination
    );

    event Offset(
        address indexed tCO2,
        uint256 indexed amountXCO2,
        address indexed beneificiary
    );

    /**
     * @notice Initializes the Hyperlane router, ERC20 metadata, and mints initial supply to deployer.
     * @param _outbox The Hyperlane outbox.
     * @param _xUSDC The Polygon xUSDC contract.
     * @param _name The name of the token.
     * @param _symbol The symbol of the token.
     */
    function initialize(
        address _outbox,
        address _xUSDC,
        string memory _name,
        string memory _symbol
    ) external initializer {
        // Set ownable to sender
        transferOwnership(msg.sender);
        outbox = _outbox;
        xUSDC = _xUSDC;
        __ERC20_init(_name, _symbol);
    }

    function setXUSDC(address _xUSDC) external onlyOwner {
        xUSDC = _xUSDC;
    }

    function setOutbox(address _outbox) external onlyOwner {
        outbox = _outbox;
    }

    /**
     * @notice Offset cross-chain using amount xCO2.
     * @param _tCO2 Address of TCO2 token to redeem into.
     * @param _amountXCO2 Amount of xCO2 to burn to offset.
     * @param _beneficiary Beneficiary address of offset.
     */
    function offsetX(
        address _tCO2,
        uint256 _amountXCO2,
        string calldata _entity,
        address _beneficiary,
        string calldata _beneficiaryName,
        string calldata _msg
    ) public payable virtual;

    /**
     * @notice Convert accepted asset to USD value.
     */
    function toUSD(uint256 amount) public view virtual returns (uint256);

    /**
     * @notice Convert USD value to amount of accepted asset.
     */
    function fromUSD(uint256 amount) public view virtual returns (uint256);
}
