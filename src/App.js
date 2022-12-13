import { ConnectWallet } from "@thirdweb-dev/react";
import "./styles/Home.css";
import React from 'react';
import Image1 from '/images/sr8.png'
import Image2 from '/images/sr9.png'
import Image3 from '/images/sr15.png'
import Image4 from '/images/TM16.png'
import Image5 from '/images/TM24.png'
import Image6 from '/images/TM52.png'



// const Moralis = require('moralis').default;
// const {EvmChain} = require('@moralisweb3/evm-utils');
// const runApp = async () => {
//   await Moralis.start ({
//     apiKey: "LlKhkUaynkWzQL50B8IU2KwJSDyDn237DKX95kXSlSP92bdC94S71sAmD4G9H7i6",
//     });

//     const address = '0xd8da6bf26964af9d7eed9e03e53415d37aa96045';
//     const chain = EvmChain.ETHEREUM;
//     const response = await Moralis.EvmApi.token.getWalletTokenBalances({
//       address,
//       chain,
//     });

//     console.log(response.toJSON());
// }
// runApp();

export default function Home() {
  return (
    <><><><><div className="header">
    </div><div className="content">
        <h1 className="title"> Welcome to the ToyStore Market </h1>
        <p className="description">
          Get started by adding items to your cart and checking out!
        </p>
        <div className="connect"><ConnectWallet /></div>
      </div></><hr></hr></><div className="balance">
        <h2> You have 5001.07 $TOYS </h2>
        <button class="button button1">View cart</button>
        <div className="filter">
          <button class="button button3">Raffles</button>
          <button class="button button3">Whitelist</button>
          <button class="button button3">NFTs</button>
        </div>
      </div></><div class="row">
        <div class="column">
        <img src={Image1}  height={500} width={570}></img>
          <h2>Column 1</h2>
          <p>Some text..</p>
          <button class="button button2">Add to cart</button>
        </div>
        <div class="column">
        <img src={Image5}  height={500} width={570}></img>
          <h2>Column 2</h2>
          <p>Some text..</p>
          <button class="button button2">Add to cart</button>
        </div>
        <div class="column">
        <img src={Image3}  height={500} width={570}></img>
          <h2>Column 3</h2>
          <p>Some text..</p>
          <button class="button button2">Add to cart</button>
        </div>
        <div class="column">
        <img src={Image4}  height={500} width={570}></img>
          <h2>Column 4</h2>
          <p>Some text..</p>
          <button class="button button2">Add to cart</button>
        </div>
        <div class="column">
        <img src={Image2}  height={500} width={570}></img>
          <h2>Column 5</h2>
          <p>Some text..</p>
          <button class="button button2">Add to cart</button>
        </div>
        <div class="column">
        <img src={Image6}  height={500} width={570}></img>
          <h2>Column 6</h2>
          <p>Some text..</p>
          <button class="button button2">Add to cart</button>
        </div>
      </div></>
      
  );
}
