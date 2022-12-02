import { ConnectWallet } from "@thirdweb-dev/react";
import "./styles/Home.css";
import React from 'react';

const Moralis = require('moralis').default;
const {EvmChain} = require('@moralisweb3/evm-utils');
const runApp = async () => {
  await Moralis.start ({
    apiKey: "LlKhkUaynkWzQL50B8IU2KwJSDyDn237DKX95kXSlSP92bdC94S71sAmD4G9H7i6",
    });

    const address = '0xd8da6bf26964af9d7eed9e03e53415d37aa96045';
    const chain = EvmChain.ETHEREUM;
    const response = await Moralis.EvmApi.token.getWalletTokenBalances({
      address,
      chain,
    });

    console.log(response.toJSON());
}
runApp();

export default function Home() {
  return (
    <><><><><div className="header">
    </div><div className="content">
        <h1 className="title"> Welcome to the ToyStore Market </h1>
        <p className="description">
          Get started by adding items to your cart and checking out!
        </p>
        <div className="connect"><ConnectWallet /></div>
      </div></><hr></hr></><div className="filter">
        <p> You have 5001.07 $TOYS </p>
      </div></><div class="row">
        <div class="column">
          <h2>Column 1</h2>
          <p>Some text..</p>
        </div>
        <div class="column">
          <h2>Column 2</h2>
          <p>Some text..</p>
        </div>
        <div class="column">
          <h2>Column 3</h2>
          <p>Some text..</p>
        </div>
        <div class="column">
          <h2>Column 4</h2>
          <p>Some text..</p>
        </div>
        <div class="column">
          <h2>Column 5</h2>
          <p>Some text..</p>
        </div>
        <div class="column">
          <h2>Column 6</h2>
          <p>Some text..</p>
        </div>
      </div></>
      
  );
}
