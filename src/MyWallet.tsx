import React from 'react';
import {
    useAnchorWallet,
    useConnection,
    useWallet,
} from '@solana/wallet-adapter-react';
import {
    WalletModalProvider,
    WalletDisconnectButton,
    WalletMultiButton,
} from '@solana/wallet-adapter-react-ui';
import { getAllProductsItems } from './firebaseFunctions';






const MyWallet: React.FC = () => {
    const { connection } = useConnection();
    let walletAddress = "";

    // if you use anchor, use the anchor hook instead
    // const wallet = useAnchorWallet();
    // const walletAddress = wallet?.publicKey.toString();

    const wallet = useWallet();
    if (wallet.connected && wallet.publicKey) {
        walletAddress = wallet.publicKey.toString()
    }


    return (
        <>
            {/*  {wallet.connected &&
                <p>Your wallet is {walletAddress}</p> ||
                <p>Hello! Click the button to connect</p>
            } */}

            <div className="multi-wrapper">
                <span className="button-wrapper">
                    <h2>How to play?</h2>
                    <ul>
                        <li>Buy a “Solana World Cup 2022” ticket on <a href='https://magiceden.io/marketplace/sol_world_cup'>Magic Eden.</a></li>
                        <li>Send it to the next burn wallet:<span className='bold'> 2Ny7....cwQy</span>  <button onClick={() => navigator.clipboard.writeText('2Ny7ohSDgFynTXcGxsBRPFjCruLtLcqiLmg6eut2cwQy')}>Copy</button>, Connect here with your wallet & post the Tx link in the form on the right.</li> 
                        <li>Check the status soon & wait for our approval.</li>
                        <li>When it appears, entry in the link below, download the App & entry on <span className='bold'>“Solana World Cup 2022”</span> group with the code showed.</li>
                        <li>Create an account & put your username in the input box on the right.</li>
                        <li>After that you will be could bet your predictions for the worlds cup 2022!</li>
                        <li>The user who makes the most points by predicting the World Cup matches will be the winner of our prizes!</li>
                    </ul>
                    <h2>Prizes</h2>
                    <ul>
                        <li>150 SOL for the 1st place.</li>
                        <li>75 SOL for the 2nd place. </li>
                        <li>15 SOL per cup fase (1st,2nd,3rd,round of 16,quarter finals, semifinal, final) </li>
                    </ul>
                    <h2>FAQ</h2>
                    <ul>
                        <li>Total supply: 333</li>
                        <li>Price: 2.5 SOL</li>
                        <li className='bold'>If I am the winner of any of the prizes, how do I receive it? </li>
                        <li>I will be checking all the phases and points in the App. Then I will verify if you really sent your nft and your wallet. To then send you the corresponding prize. </li>

                    </ul>

                </span>

            </div>
        </>
    );
};

export default MyWallet;
