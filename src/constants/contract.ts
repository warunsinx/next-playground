import { addressList } from "./addressList";
import { ChainId } from "./chainList";
import { PancakeV3FacotryABI } from "../../abi/PancakeV3FactoryABI";
import { SwapRouterV3ABI } from "../../abi/SwapRouterV3ABI";
import { QuoterV2ABI } from "../../abi/QuoterV2ABI";

export const pancakeFactoryContract = (chainId: ChainId) => ({
  address: addressList.pancakeV3Factory[chainId],
  abi: PancakeV3FacotryABI,
});

export const swapRouterContract = (chainId: ChainId) => ({
  address: addressList.swapRouterV3[chainId],
  abi: SwapRouterV3ABI,
});

export const quoterContract = (chainId: ChainId) => ({
  address: addressList.QuoterV2[chainId],
  abi: QuoterV2ABI,
});
