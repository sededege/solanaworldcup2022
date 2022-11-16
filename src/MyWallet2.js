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
import { getAllFoodItems, saveItem, updateWorld } from './firebaseFunctions';
import { getAdditionalUserInfo } from 'firebase/auth';
import './App.css'
const MyWallet2 = () => {

    const { connection } = useConnection();
    let walletAddress = "";
    const [tx, setTx] = React.useState('')
    const yourRef = React.useRef();
    const [users, setUsers] = React.useState(false)
    const [user, setUser] = React.useState('')

    const save = () => {
   

        const data = {
            id: `${Date.now()}`,
            transaction: tx,
            wallet: walletAddress,
            status: 'waiting',
            usuario: 'Create an user and write it here',
        }
   

        saveItem(data)
        setTimeout(() => {
            window.location.reload()

        }, 2000); 
    }
    // if you use anchor, use the anchor hook instead
    // const wallet = useAnchorWallet();
    // const walletAddress = wallet?.publicKey.toString();

    const wallet = useWallet();
    if (wallet.connected && wallet.publicKey) {
        walletAddress = wallet.publicKey.toString()
    }

    React.useEffect(() => {
        if (walletAddress && user === '') {
            getAllFoodItems().then((data) => {
                setUser(data.filter(a => a.wallet === walletAddress))
            })

        }

        if (walletAddress) {

        }
    }, [user, walletAddress])


    const updatear = () => {
        const data = {
            id: user[0].id,
            usuario: tx
        }
        updateWorld(data)
       setTimeout(() => {
            window.location.reload()

        }, 2000); 

   

    }
    return (
        <>
            {/*  {wallet.connected &&
                <p>Your wallet is {walletAddress}</p> ||
                <p>Hello! Click the button to connect</p>
            } */}

            <div className="multi-wrapper div2 ">

                <WalletModalProvider>
                    <WalletMultiButton />
                </WalletModalProvider>
                {wallet.connected}

                {
                    walletAddress != "" ?
                        <div>
                            {
                                user != '' ? <div> <p>Status: <span>{user[0].status ? user[0].status : 'No data'}</span>
                                </p>
                                    <p>Tx: <span>{user ? (user[0].transaction) : 'No data'}</span>
                                    </p>

                                </div> : <div className='caja2'>
                                    <input onChange={(e) => setTx(e.target.value)} type='text' className='inputed' placeholder='Input the TX of your nft sent' />
                                    <button className='button' onClick={() => save()}>Send</button>

                                </div>
                            }




                        </div> :

                        <div>
                            <h2>Login with your wallet to see your status</h2>


                        </div>

                }
                {
                    user != '' && user[0].status === 'approved' && walletAddress ?
                        <div>
                            <p>
                                Join the Penka of ’Solana World Cup’ with the code <span style={{ fontSize: 'bold' }}>B94554</span> or following this link👇

                                <p>⚽️ iPhone: <a href='https://penka.io/id=B94554'>https://penka.io/id=B94554</a></p>

                                <p> ⚽️ Android:<a href='https://penka.io?id=B94554'>https://penka.io?id=B94554</a></p>
                            </p>
                            <input onChange={(e) => setTx(e.target.value)} type='text' className='inputed' placeholder={user[0].usuario} />
                            <button className='button' onClick={() => updatear()}>Update</button>

                        </div>
                        : <></>
                }


                {/*  <ul>
                    <li>
                        The points are calculated with the result of the 90 minutes of the game (plus discounts).
                        (does not include overtime or penalties)
                    </li>
                    <li>
                        In the event that the users tie in points, the one who has guessed the most exact results will win.
                    </li>
                    <li>
                        The Ranking of each Group will be updated minutes after the end of the match. The forecast can be entered up to 10 minutes before the start of each match.
                    </li>
                    <li>
                        <li>                            Points are credited based on the following rules:
                        </li>
                        <ul>
                            <li>
                                8 points for guessing the exact result!
                            </li>
                            <li>                    5 points for hitting the winner and goal difference!
                            </li>
                            <li>                    3 points for guessing the winning team or tie!
                            </li>
                        </ul>
                    </li>

                </ul> */}
            </div>
        </>
    );
};

export default MyWallet2;
