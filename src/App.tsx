import React from "react";
import logo from "./logo.svg";
import "./App.css";

import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import {
  getLedgerWallet,
  getPhantomWallet,
  getSlopeWallet,
  getSolflareWallet,
  getSolletExtensionWallet,
  getSolletWallet,
  getTorusWallet,
} from "@solana/wallet-adapter-wallets";
import { clusterApiUrl } from "@solana/web3.js";
import MyWallet2 from "./MyWallet2.js";
import MyWallet from "./MyWallet";
import MyWallet3 from "./MyWallet3";
import {RiTwitterFill,RiDiscordFill } from 'react-icons/ri'

function App() {
  // Can be set to 'devnet', 'testnet', or 'mainnet-beta'
  const network = WalletAdapterNetwork.Mainnet;

  // You can also provide a custom RPC endpoint
  const endpoint = React.useMemo(() => clusterApiUrl(network), [network]);

  // @solana/wallet-adapter-wallets includes all the adapters but supports tree shaking --
  // Only the wallets you configure here will be compiled into your application
  const wallets = React.useMemo(
    () => [
      getPhantomWallet(),
      getSlopeWallet(),
      getSolflareWallet(),
      getLedgerWallet(),
      getSolletWallet({ network }),
      getSolletExtensionWallet({ network }),
    ],
    [network]
  );

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets}>
        <div style={{paddingTop: 40, paddingLeft: 30}}>
        <a  href='https://twitter.com/SolWorldCup2022'><RiTwitterFill style={{ color: 'white', fontSize: 30, cursor: 'pointer'}}/></a>
        <a  href='https://discord.gg/8RfTu6EkqB'> <RiDiscordFill style={{ color: 'white', fontSize: 30}}/></a> 
        </div>
        <div className="App">
          <header className="App-header">



            <MyWallet />
          </header>

          <header className="App-header2">



            <MyWallet2 />
          </header>
          <header className="App-header3">

            <MyWallet3 />


          </header>

        </div>
      </WalletProvider>
    </ConnectionProvider>
  );
}

export default App;
