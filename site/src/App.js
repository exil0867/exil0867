import { Helmet, HelmetProvider } from "react-helmet-async";
import getGravatar from "gravatar-url";
import React, { useState } from "react";
import "@fontsource/inconsolata";
import "./style.css";

const baseInfo = {
  email: "exilvm@disroot.org",
};

const profileAvatar = getGravatar(baseInfo.email, { size: 600 });

const AboutMe = () => {
  const [secondBio, setSecondbio] = useState(false);
  return (
    <section>
      <h1>
        <a
          style={{
            textTransform: "uppercase",
            color: "#07d404",
            textDecoration: "none",
          }}
          target="_blank"
          title="The source code of this page"
          href="https://github.com/exilvm/exilvm/tree/site"
          rel="noreferrer"
        >
          3x!1
        </a>
      </h1>
      <img
        alt="Avatar"
        onClick={() => setSecondbio(!secondBio)}
        style={{
          marginTop: "1rem",
          marginBottom: "1.7rem",
          borderRadius: "50%",
          width: "150px",
          cursor: "pointer",
        }}
        src={profileAvatar}
      />
      <h4>exiluuuuuuu</h4>
      {secondBio && (
        <div style={{ fontWeight: "300" }}>
          <p>
            <small>{"	(・_・ヾ"}</small>
          </p>
        </div>
      )}
      <div style={{ padding: "0 38px" }}>
        <p>__sysadmin__</p>
        <p>__software_dev__</p>
        <p>__ui/ux_design__</p>
      </div>
    </section>
  );
};

const Socials = () => {
  const list = [
    {
      children: "Twitter",
      href: "https://twitter.com/exilvm",
      target: "_blank",
    },
    {
      children: "Telegram",
      href: "tg://resolve?domain=exilvm",
    },
    {
      children: "Github",
      href: "https://github.com/exilvm",
      target: "_blank",
    },
    // {
    //   children: "Tumblr",
    //   href: "https://exilvm.tumblr.com",
    //   target: "_blank",
    // },
    {
      children: "Steam",
      href: "https://steamcommunity.com/id/exilvm",
      target: "_blank",
    },
    {
      children: "AniList",
      href: "https://anilist.co/user/exilvm",
      target: "_blank",
    },
    {
      children: "Last.fm",
      href: "https://last.fm/user/exilvm",
      target: "_blank",
    },
  ];
  return (
    <section>
      <h4>My @'s</h4>
      <ul>
        {list.map((item, i) => (
          <li key={i}>
            <p>{React.createElement("a", item)}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

const Contact = () => {
  const email = "exilvm+9x01@disroot.org";
  return (
    <section>
      <h4>Contact</h4>
      <p>
        Email: <a href={`mailto:${email}`}>{email}</a>
      </p>
    </section>
  );
};

const Donate = () => {
  const list = [
    { name: "PGP key", address: <a target="_blank" rel="noreferrer" href="https://github.com/exilvm/exilvm/blob/master/key.pgp">96120B10AD05294F</a> },
    { name: "BTC", address: "17nFjdytthofdha6aSmBDSHnb9NcSAhd8Z" },
    {
      name: "BTC (Bech32)",
      address: "bc1q0rhwyzc8upxjzn0qddz2rhv86xh3qvsydjn865",
    },
    {
      name: "ETH",
      address: "0x677C5728D3E26152187Cc98E06CB47A58EF58eaA",
    },
    {
      name: "XMR",
      address:
        "46SXLx7PGvm4u7FnDvNvoPYu48AP4fUfbHwCDw6koxbhUrT1bSYvuHe7et7q8uSJ52NJApxXUyLmX7AaJP7ysXcLRyeZaaz",
    },
  ];
  return (
    <section>
      <h4>Cryptos</h4>
      <ul>
        {list.map((item, i) => {
          return (
            <li key={i}>
              <p>{item.name}:</p>
              <pre>{item.address}</pre>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

const Resources = () => {
  const list = [
    {
      children: "InstallGentoo Wiki",
      href: "https://wiki.installgentoo.com/wiki/Main_Page",
      target: "_blank",
    },
    {
      children: "/g/",
      href: "https://boards.4channel.org/g/#catalog",
      target: "_blank",
    },
    {
      children: "LAINCHAN",
      href: "https://lainchan.org",
      target: "_blank",
    },
    {
      children: "PrivacyGuides",
      href: "https://www.privacyguides.org",
      target: "_blank",
    },
    {
      children: "HackerNews",
      href: "https://news.ycombinator.com",
      target: "_blank",
    },
  ];
  return (
    <section>
      <h4>Good resources</h4>
      <ul>
        {list.map((item, i) => (
          <li key={i}>
            <p>{React.createElement("a", item)}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

const App = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <meta charSet="utf-8" />
          <meta name="theme-color" content="#000000" />
          <meta name="description" content="exilvm - Personal page" />
          <link rel="icon" href={profileAvatar} />
          <link rel="apple-touch-icon" href={profileAvatar} />
          <title>{`>Exil's Hideout`}</title>
        </Helmet>
      </HelmetProvider>
      <div style={{ width: "390px" }}>
        <AboutMe />
        <Socials />
        <Contact />
        <Donate />
        <Resources />
      </div>
    </>
  );
};

export default App;
