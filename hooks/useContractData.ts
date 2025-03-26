import { useState, useCallback } from "react";
import { readContract, readContracts } from "@wagmi/core";
import { presaleContractABI } from "../config/abi/presaleContractABI";
import { erc20ContractABI } from "../config/abi/ERC20ABI";
import { PresaleConfig } from "../config/presaleConfig";
import { IPresale } from "../interface";
import {
  createPublicClient,
  formatUnits,
  http,
  parseEther,
  parseUnits,
} from "viem";
import { mainnet } from "viem/chains";
import { wagmiConfig } from "../pages/_app";

export const publicClient = createPublicClient({
  chain: mainnet,
  transport: http(),
});

export const fetchRaisedAmount = () => {
  const [raisedAmount, setRaisedAmount] = useState(0);

  const handleRaisedAmount = useCallback(async () => {
    try {
      const data = await publicClient.readContract({
        address: PresaleConfig.presaleAddress as `0x${string}`,
        abi: presaleContractABI,
        functionName: "overalllRaised",
      });
      setRaisedAmount(Number(data) / 10 ** 6);
    } catch (error) {
      console.error("Error fetching contract data:", error);
    }
    return false;
  }, []);
  return { onRaisedAmount: handleRaisedAmount, raisedAmount };
};

export const fetchPresale = () => {
  const [presale, setPresale] = useState<IPresale>();

  const handlePresale = useCallback(async (id: number) => {
    try {
      const data = await publicClient.readContract({
        address: PresaleConfig.presaleAddress as `0x${string}`,
        abi: presaleContractABI,
        functionName: "presale",
        args: [BigInt(id)],
      });
      setPresale({
        startTime: data[0],
        endTime: data[1],
        price: data[2],
        nextStagePrice: data[3],
        Sold: data[4],
        tokensToSell: data[5],
        UsdtHardcap: data[6],
        amountRaised: data[7],
        Active: data[8],
      });
    } catch (error) {
      console.error("Error fetching contract data:", error);
    }
    return false;
  }, []);

  return { presale, onPresale: handlePresale };
};

export const fetchEthToToken = () => {
  const [ethToToken, setEthToToken] = useState(0);

  const handleEthToToken = useCallback(async (id: number, amount: number) => {
    try {
      const data = await publicClient.readContract({
        address: PresaleConfig.presaleAddress as `0x${string}`,
        abi: presaleContractABI,
        functionName: "ethToTokens",
        args: [BigInt(id), parseEther(amount.toString())],
      });
      setEthToToken(Number(formatUnits(data, PresaleConfig.tokenDecimal)));
      return Number(formatUnits(data, PresaleConfig.tokenDecimal));
    } catch (error) {
      console.error("Error fetching contract data:", error);
    }
    return 0;
  }, []);

  return { ethToToken, onEthToToken: handleEthToToken };
};

export const fetchUsdToToken = () => {
  const [usdToToken, setUsdToToken] = useState(0);

  const handleUsdToToken = useCallback(async (id: number, amount: number) => {
    try {
      const data = await publicClient.readContract({
        address: PresaleConfig.presaleAddress as `0x${string}`,
        abi: presaleContractABI,
        functionName: "usdToTokens",
        args: [BigInt(id), parseUnits(amount.toString(), 6)],
      });
      setUsdToToken(Number(formatUnits(data, PresaleConfig.tokenDecimal)));
      return Number(formatUnits(data, PresaleConfig.tokenDecimal));
    } catch (error) {
      console.error("Error fetching contract data:", error);
    }
    return 0;
  }, []);

  return { usdToToken, onUsdToToken: handleUsdToToken };
};

export const fetchPresaleId = () => {
  const [presaleId, setPresaleId] = useState(0);
  const [currentPresale, setCurrentPresale] = useState(0);

  const handlePresaleId = useCallback(async () => {
    try {
      const data = await readContracts(wagmiConfig, {
        contracts: [
          {
            address: PresaleConfig.presaleAddress as `0x${string}`,
            abi: presaleContractABI,
            functionName: "presaleId",
          },
          {
            address: PresaleConfig.presaleAddress as `0x${string}`,
            abi: presaleContractABI,
            functionName: "currentSale",
          },
        ],
      });
      setPresaleId(Number(data[0].result));
      setCurrentPresale(Number(data[1].result));
    } catch (error) {
      console.error("Error fetching contract data:", error);
    }
    return false;
  }, []);

  return { presaleId, currentPresale, onPresaleId: handlePresaleId };
};

export const fetchUSDTBal = () => {
  const [usdtBal, setUSDBal] = useState(0);
  const handleUSDTBal = useCallback(async (address: any) => {
    if (address) {
      try {
        const data = await publicClient.readContract({
          address: PresaleConfig.usdtAddress as `0x${string}`,
          abi: erc20ContractABI,
          functionName: "balanceOf",
          args: [address as `0x${string}`],
        });

        setUSDBal(Number(data) / 10 ** 6);
      } catch (error) {
        console.error("Error fetching contract data:", error);
      }
    }
    return false;
  }, []);

  return { usdtBal, onUSDTBal: handleUSDTBal };
};

export const fetchTokenBal = () => {
  const [tokenBal, setTokenBal] = useState(0);
  const handleTokenBal = useCallback(async (address: any) => {
    if (address) {
      try {
        const data = await publicClient.readContract({
          address: PresaleConfig.tokenAddress as `0x${string}`,
          abi: erc20ContractABI,
          functionName: "balanceOf",
          args: [address as `0x${string}`],
        });

        setTokenBal(Number(data) / 10 ** PresaleConfig.tokenDecimal);
      } catch (error) {
        console.error("Error fetching contract data:", error);
      }
    }
    return false;
  }, []);

  return { tokenBal, onTokenBal: handleTokenBal };
};

export const fetchAllowance = () => {
  const [allowance, setAllowance] = useState(0);

  const handleAllowance = useCallback(async (address: any) => {
    if (address) {
      try {
        const data = await publicClient.readContract({
          address: PresaleConfig.usdtAddress as `0x${string}`,
          abi: erc20ContractABI,
          functionName: "allowance",
          args: [
            address as `0x${string}`,
            PresaleConfig.presaleAddress as `0x${string}`,
          ],
        });

        setAllowance(Number(data) / 10 ** 6);
      } catch (error) {
        console.error("Error fetching contract data:", error);
      }
    }
    return false;
  }, []);

  return { allowance, onAllowance: handleAllowance };
};

export const fetchUserData = () => {
  const [userData, setUserData] = useState({
    investedAmount: 0,
    claimableAmount: 0,
  });
  const handleUserData = useCallback(async (address: any) => {
    if (address) {
      try {
        const data = await publicClient.readContract({
          address: PresaleConfig.presaleAddress as `0x${string}`,
          abi: presaleContractABI,
          functionName: "userData",
          args: [address as `0x${string}`],
        });

        setUserData({
          investedAmount: Number(formatUnits(data[0], 6)),
          claimableAmount: Number(
            formatUnits(data[1], PresaleConfig.tokenDecimal)
          ),
        });
      } catch (error) {
        console.error("Error fetching contract data:", error);
      }
    }
    return false;
  }, []);

  return { userData, onUserData: handleUserData };
};

export const fetchIsBlack = () => {
  const [isBL, setBL] = useState(false);
  const handleIsBlack = useCallback(async (address: any) => {
    if (address) {
      try {
        const data = await publicClient.readContract({
          address: PresaleConfig.presaleAddress as `0x${string}`,
          abi: presaleContractABI,
          functionName: "isBlackList",
          args: [address as `0x${string}`],
        });

        setBL(data);
      } catch (error) {
        console.error("Error fetching contract data:", error);
      }
    }
    return false;
  }, []);

  return { isBL, onBL: handleIsBlack };
};
