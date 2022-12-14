import { ConnectWallet } from "@thirdweb-dev/react";
import "./styles/Home.css";
import React from 'react';
import Image1 from './/images/sr8.png'
import Image2 from './/images/sr9.png'
import Image3 from './/images/sr15.png'
import Image4 from './/images/TM16.png'
import Image5 from './/images/TM24.png'
import Image6 from './/images/TM52.png'

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
        <div class="dropdown">
          <button class="button button1">Sort by:</button>
          <div class="dropdown-content">
            <a href="#">Raffle</a>
            <a href="#">Whitelist</a>
            <a href="#">NFT</a>
          </div>
        </div>
      </div></><div class="row">
        <div class="column">
        <img src={Image1} class="img" height={350} width={350}></img>
          <h2>Raffle</h2>
          <h2>SpaceRider #6969</h2>
          <hr></hr>
          <h2>Max per wallet: 5</h2>
          <h2>Max avalible: 300</h2>
          <h2>Expires 12/20/2022</h2>
          <h2>4/300 Sold</h2>
          <button class="button button2">Add to cart</button>
        </div>
        <div class="column">
        <img src={Image5} class="img" height={350} width={350}></img>
          <h2>Raffle</h2>
          <h2>ToyMorie #1230</h2>       
          <hr></hr>
          <h2>Max per wallet: 5</h2>
          <h2>Max avalible: 300</h2>
          <h2>Expires 12/20/2022</h2>
          <h2>4/300 Sold</h2>
          <button class="button button2">Add to cart</button>
        </div>
        <div class="column">
        <img src={Image3} class="img" height={350} width={350}></img>
          <h2>Raffle</h2>
          <h2>SpaceRider #4200</h2>
          <hr></hr>
          <h2>Max per wallet: 5</h2>
          <h2>Max avalible: 300</h2>
          <h2>Expires 12/20/2022</h2>
          <h2>4/300 Sold</h2>
          <button class="button button2">Add to cart</button>
        </div>
        <div class="column">
        <img src={Image4} class="img" height={350} width={350}></img>
          <h2>Raffle</h2>
          <h2>ToyMorie #1230</h2>
          <hr></hr>
          <h2>Max per wallet: 5</h2>
          <h2>Max avalible: 300</h2>
          <h2>Expires 12/20/2022</h2>
          <h2>4/300 Sold</h2>
          <button class="button button2">Add to cart</button>
        </div>
        <div class="column">
        <img src={Image2} class="img" height={350} width={350}></img>
          <h2>Raffle</h2>
          <h2>SpaceRider #4848</h2>
          <hr></hr>
          <h2>Max per wallet: 5</h2>
          <h2>Max avalible: 300</h2>
          <h2>Expires 12/20/2022</h2>
          <h2>4/300 Sold</h2>
          <button class="button button2">Add to cart</button>
        </div>
        <div class="column">
        <img src={Image6} class="img" height={350} width={350}></img>
          <h2>Raffle</h2>
          <h2>ToyMorie #1230</h2>
          <hr></hr>
          <h2>Max per wallet: 5</h2>
          <h2>Max avalible: 300</h2>
          <h2>Expires 12/20/2022</h2>
          <h2>4/300 Sold</h2>
          <button class="button button2">Add to cart</button>
        </div>
        <div class="column">
        <img src={Image6} class="img" height={350} width={350}></img>
          <h2>Raffle</h2>
          <h2>ToyMorie #1230</h2>
          <hr></hr>
          <h2>Max per wallet: 5</h2>
          <h2>Max avalible: 300</h2>
          <h2>Expires 12/20/2022</h2>
          <h2>4/300 Sold</h2>
          <button class="button button2">Add to cart</button>
        </div>
        <div class="column">
        <img src={Image6} class="img" height={350} width={350}></img>
          <h2>Raffle</h2>
          <h2>ToyMorie #1230</h2>
          <hr></hr>
          <h2>Max per wallet: 5</h2>
          <h2>Max avalible: 300</h2>
          <h2>Expires 12/20/2022</h2>
          <h2>4/300 Sold</h2>
          <button class="button button2">Add to cart</button>
        </div>
        <div class="column">
        <img src={Image6} class="img" height={350} width={350}></img>
          <h2>Raffle</h2>
          <h2>ToyMorie #1230</h2>
          <hr></hr>
          <h2>Max per wallet: 5</h2>
          <h2>Max avalible: 300</h2>
          <h2>Expires 12/20/2022</h2>
          <h2>4/300 Sold</h2>
          <button class="button button2">Add to cart</button>
        </div>
        <div class="column">
        <img src={Image6} class="img" height={350} width={350}></img>
          <h2>Raffle</h2>
          <h2>ToyMorie #1230</h2>
          <hr></hr>
          <h2>Max per wallet: 5</h2>
          <h2>Max avalible: 300</h2>
          <h2>Expires 12/20/2022</h2>
          <h2>4/300 Sold</h2>
          <button class="button button2">Add to cart</button>
        </div>
      </div></>
      
  );
}
