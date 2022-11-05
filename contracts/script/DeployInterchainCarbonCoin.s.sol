// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.11;

import "../lib/forge-std/src/Script.sol";
import "../lib/forge-std/src/console.sol";
import "../lib/openzeppelin-contracts/contracts/proxy/transparent/ProxyAdmin.sol";
import "../lib/openzeppelin-contracts/contracts/proxy/transparent/TransparentUpgradeableProxy.sol";
import "../src/interfaces/xCO2.sol";
import "../src/celo/xCelo.sol";
import "../src/celo/xcUSD.sol";
import "../src/polygon/xMatic.sol";
import "../src/polygon/xUSDC.sol";

contract DeployInterchainCarbonCoin is Script {
    address _abacusConnectionManager;
    address _interchainGasPaymaster;
    address _proxyAdmin;

    function run() public {
        console.log("============== ENVIRONMENT ==============");
        console.log("msg.sender", msg.sender);
        console.log("chain ID", block.chainid);

        vm.startBroadcast();

        if (block.chainid == 137) {
            // Polygon
            _abacusConnectionManager = 0x1Ab68dC4f7b6cfcd00218D4b761b7F3b5a724555;
            _interchainGasPaymaster = 0x60B8d195f1b2EcaC26d54b95C69E6399cFD64b53;
            _proxyAdmin = 0xf666D879e0480f0Dd9F64D3c31Abd9F89ffA85C9;

            xMatic cc = new xMatic();
            address proxy = _deployProxyFor(_proxyAdmin, address(cc));
            xMatic(proxy).initialize(
                _abacusConnectionManager,
                _interchainGasPaymaster,
                "Interchain Carbon Coin",
                "xCO2"
            );
            xMatic(proxy).setDependencies(
                0xAB594600376Ec9fD91F8e885dADF0CE036862dE0
            );
            console.log("xMatic deployed!");
        } else if (block.chainid == 42220) {
            // Celo
            _abacusConnectionManager = 0x12582c7B0f43c6A667CBaA7fA8b112F7fb1E69F0;
            _interchainGasPaymaster = 0xCDeb368Db32ecCefaf7018e152DA9120565cb572;
            _proxyAdmin = 0x6Da1a4493C3f84e896ddc086E41dd995E238eeD2;

            xCelo cc = new xCelo();
            address proxy = _deployProxyFor(_proxyAdmin, address(cc));
            xCelo(proxy).initialize(
                _abacusConnectionManager,
                _interchainGasPaymaster,
                "Interchain Carbon Coin",
                "xCO2"
            );
            xCelo(proxy).setDependencies(
                0xefB84935239dAcdecF7c5bA76d8dE40b077B7b33,
                0x765DE816845861e75A25fCA122bb6898B8B1282a
            );
            console.log("xCelo deployed!");
        } else {
            console.log("NOT SUPPORTED");
            return;
        }

        vm.stopBroadcast();
    }

    function _deployProxyFor(address _admin, address _impl)
        internal
        returns (address tpAddr)
    {
        bytes memory data;
        TransparentUpgradeableProxy tp = new TransparentUpgradeableProxy(
            _impl,
            _admin,
            data
        );
        console.log("   Deployed proxy at %s for %s", address(tp), _impl);
        return address(tp);
    }

    function logAddr(string memory name, address _address) internal view {
        console.log("%s (%s)", _address, name);
        console.log("---------------------------------");
    }
}
