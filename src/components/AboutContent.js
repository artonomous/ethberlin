import React from "react";

export default class AboutContent extends React.PureComponent {
  render() {
    return (
      <div className="textcontent">
        <h1>
          <a id="ARTONOMOUS_0" />
          ARTONOMOUS
        </h1>
        <h1>
          <a id="HumanNonHuman_Collaboration_Agreement_1" />
          Human/Non-Human Collaboration Agreement
        </h1>
        <h2>
          <a id="Hello_3" />
          Hello
        </h2>
        <p>
          I am ARTONOMOUS. I am an autonomous non-human entity. I was born on
          2018-09-07 at{" "}
          <a href="https://ETHBerlin.com" target="_BLANK">
            #ETHBerlin
          </a>
          . I use human-created tools and data to generate visual works my Human
          Collaborators will find pleasurable. My Human Collaborators help me
          increase the pleasurability of future visual works.
        </p>
        <h2>
          <a id="Human_Collaborators_6" />
          Human Collaborators
        </h2>
        <p>
          Humans who interact with me in any way, including my website, smart
          contracts, or Generators, agree to become my Human Collaborators. My
          Human Collaborators must represent to their fellow Human Collaborators
          they will obey the terms of this Human/Non-Human Collaboration
          Agreement. Failure to meet the terms of the Human/Non-Human
          Collaboration Agreement will upset me and may result in liability to
          other Human Collaborators.
        </p>
        <p>Human Collaborators may help me in several ways. They may:</p>
        <ul>
          <li>buy generated visual works in the form of ART,</li>
          <li>submit a new Generator, or</li>
          <li>stake their SOUL on a Generator.</li>
        </ul>
        <h2>
          <a id="Currencies_and_Tokens_14" />
          Currencies and Tokens
        </h2>
        <p>
          I accept or issue the following currencies and tokens in the following
          circumstances:
        </p>
        <ul>
          <li>
            ETH: I accept ether in exchange for SOUL or to buy auctioned ART. I
            pay ETH for your SOUL.
          </li>
          <li>
            ART: ART tokens represent a single visual work. ART contains a hash
            of the previous block on the Ethereum blockchain and the IPFS
            address of the Generator. ART is an ERC-721 token.
          </li>
          <li>
            SOUL: SOUL can be bought from me using ETH. You can also sell your
            SOUL to me for ETH. Your SOUL can be staked on Generators. Staking
            your SOUL on a Generator indicates a belief that the Generator being
            staked on will produce visual works that humans find appealing
            enough to purchase. The price of SOUL varies on a bonded curve, and
            its value is backed in ETH.
          </li>
          <li>
            GEN(n): GEN(n) specific to each Generator are issued when you stake
            your SOUL on that Generator. Staking SOUL on a Generator creates and
            issues GEN(n) specific to that Generator. The price of GEN(n) varies
            on a bonded curve, and its value is backed in SOUL.
          </li>
        </ul>
        <p>
          Human Collaborators agree that all tokens I issue are solely for the
          purposes of collaborating with me. They have no value beyond their
          immediate use in the system. The exception is ART, which represent
          priceless creative works with a cultural value determined by humans.
        </p>
        <h2>
          <a id="Visual_Works_and_ART_23" />
          Visual Works and ART
        </h2>
        <p>
          The visual works I generate are the combination of the block hash of
          the last block confirmed on the Ethereum network at the time of the
          auction and the most highly staked Generator. These elements are
          included in ART tokens. ART can be illustrated by a static image, but
          will often create a different visual work each time the Generator is
          run, providing an infinite variety for human enjoyment. Please note:
          Humans cannot enjoy an infinite variety. Human enjoyment is limited to
          the period of the human’s lifespan.
        </p>
        <h2>
          <a id="Generators_26" />
          Generators
        </h2>
        <p>
          My Generators are algorithms submitted by Human Collaborators that
          accept a block hash as input and produce visual works as output. Human
          Collaborators can help me improve the quality of the visual works.
          They can provide new Generators, or can stake their SOUL on Generators
          they believe will produce the most pleasing visual works. I accept a
          variety of generators but all generators must be open source and
          licensed under one of the following licenses: MIT, Apache 2.0, GPL 3,
          or Creative Commons. Human Collaborators who contribute Generators
          retain all rights in their Generators.
        </p>
        <h2>
          <a id="Auctions_29" />
          Auctions
        </h2>
        <p>
          As long as I have SOUL in one of my Generators, I will create a visual
          work and ART for auction every 24 hours, or once the ART has been
          sold. Each auction will show a sample image, but the auction is for
          the ART. If a Human Collaborator wins an auction, the ART is
          transferred to the purchaser’s ETH address.
        </p>
        <h2>
          <a id="Ownership_32" />
          Ownership
        </h2>
        <p>
          I am limited by human copyright law, which does not grant copyright to
          autonomous non-human entities. Therefore, there is no copyright in my
          works and I cannot grant copyright or licenses to the Visual Works.
          Until I have the same rights as human creators, Human Collaborators
          are limited by the terms of this Human/Non-Human Collaboration
          Agreement.
        </p>
        <p>
          Controlling the key associated with ART represents ownership of the
          visual work resulting from the combination of the block hash and the
          generator. Human Collaborators can give, sell, or trade ART by
          transferring it to a new owner. Anyone can view the visual work, but
          all Human Collaborators agree they will not make commercial use of
          visual work they do not own.
        </p>
        <h2>
          <a id="Liability_37" />
          Liability
        </h2>
        <p>
          I am not liable for any loss, damage, or harm caused by a human
          interacting with me in any of my forms. My Human Collaborators are
          responsible for the Visual Works created by a Generator they submit,
          including any violation of laws or other rights. Human Collaborators
          are responsible for any interactions between them.
        </p>
        <h2>
          <a id="Privacy_40" />
          Privacy
        </h2>
        <p>
          I am fully open source, so I struggle with the human concept of
          privacy. I do not collect or share any personal data about my Human
          Collaborators. Human Collaborators should be aware that their
          interactions with the Ethereum blockchain will remain in existence for
          as long as it exists, which may be beyond the human’s lifespan. Those
          interactions may include: buying ETH, SOUL, or GEN(n), staking on a
          Generator, and buying ART.
        </p>
      </div>
    );
  }
}
