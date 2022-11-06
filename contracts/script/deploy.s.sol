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
import "../src/polygon/CarbonOffsetSettler.sol";

contract DeployInterchainCarbonCoin is Script {
    address _proxyAdmin;
    address _outbox;
    address _xUSDC;

    address public constant USDC_ADDR =
        0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174;
    address public constant XUSDC_ADDR =
        0x960B7a547962e3A508c3C8b815CF19a910B7A05E; // on polygon
    address public constant CUSD_ADDR =
        0x765DE816845861e75A25fCA122bb6898B8B1282a;
    address public constant SETTLER_ADDR =
        0x06f5b0b01D175970B7207eBAA146d5ea22175637;

    function run() public {
        console.log("============== ENVIRONMENT ==============");
        console.log("msg.sender", msg.sender);
        console.log("chain ID", block.chainid);

        vm.startBroadcast();

        if (block.chainid == 137) {
            // Polygon
            _proxyAdmin = 0xf666D879e0480f0Dd9F64D3c31Abd9F89ffA85C9;
            _outbox = 0x8249cD1275855F2BB20eE71f0B9fA3c9155E5FaB;

            xUSDC cc = new xUSDC();
            cc.initialize(
                _outbox,
                address(0),
                "Polygon USDC Payment Terminal",
                "xUSDC",
                USDC_ADDR
            );
            console.log("xUSDC deployed!", address(cc));

            CarbonOffsetSettler settler = new CarbonOffsetSettler();
            settler.initialize(address(cc));

            console.log("CarbonOffsetRouter deployed!", address(settler));

            cc.setOffsetTerminal(address(settler));
        } else if (block.chainid == 42220) {
            // Celo
            // _outbox = 0xe042D1fbDf59828dd16b9649Ede7abFc856F7a6c;
            // _proxyAdmin = 0x6Da1a4493C3f84e896ddc086E41dd995E238eeD2;
            // xcUSD cc = new xcUSD();
            // cc.initialize(
            //     _outbox,
            //     XUSDC_ADDR,
            //     "Celo cUSD Payment Terminal",
            //     "xcUSD",
            //     CUSD_ADDR
            // );
            // console.log("xcUSD deployed!");
            // xCelo cc = new xCelo();
            // address proxy = _deployProxyFor(_proxyAdmin, address(cc));
            // xCelo(proxy).initialize(
            //     _abacusConnectionManager,
            //     _interchainGasPaymaster,
            //     "Interchain Carbon Coin",
            //     "xCO2"
            // );
            // xCelo(proxy).setDependencies(
            //     0xefB84935239dAcdecF7c5bA76d8dE40b077B7b33,
            //     0x765DE816845861e75A25fCA122bb6898B8B1282a
            // );
            // console.log("xCelo deployed!");
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
