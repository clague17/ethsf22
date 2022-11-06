import { ethers } from "ethers";
import { useEffect, useState } from "react";

const useFetchENS = (address?: string): any => {
  const provider = new ethers.providers.JsonRpcProvider(
    "https://eth-mainnet.g.alchemy.com/v2/mDGjPNspZwJVBVWK3lTpdolCLczs2IrD"
  );
  const [ens, setEns] = useState<string | null>(null);

  console.log("provider", provider);
  const fetchENS = async (address: string) => {
    const ens = await provider.resolveName(address);
    setEns(ens);
  };
  useEffect(() => {
    if (!address) return;
    fetchENS(address);
  }, [address]);
  return { ens };
};

export default useFetchENS;
