(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{439:function(e,t,r){"use strict";r.r(t);var a=r(27),o=Object(a.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("p",[e._v("We released a new BTCPay Server version 1.0.3.147. This release introduces abundance of under the hood and performance improvements, a new feature and a few minor bug fixes.")]),e._v(" "),r("p",[e._v("In this post, we'll guide you through the changes and what they mean for your BTCPay instances.")]),e._v(" "),r("figure",[r("img",{attrs:{src:"/images/Screenshot-2020-01-14-at-18.41.53.png",alt:""}})]),e._v(" "),r("p",[e._v("1.0.3.147 changelog")]),e._v(" "),r("h2",{attrs:{id:"migration-to-net-core-31"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#migration-to-net-core-31"}},[e._v("#")]),e._v(" Migration to .NET Core 3.1.")]),e._v(" "),r("p",[e._v("A long-awaited framework upgrade is finally here! Starting with this release, all BTCPay Servers are shipped with "),r("a",{attrs:{href:"https://dotnet.microsoft.com/download/dotnet-core/3.1",target:"_blank",rel:"noopener noreferrer"}},[e._v(".NET Core 3.1"),r("OutboundLink")],1),e._v(". Important benefits of running 3.1 are:")]),e._v(" "),r("ul",[r("li",[e._v("Native ARM64 image support")]),e._v(" "),r("li",[e._v("Performance improvements (BTCPay now consumes less RAM)")]),e._v(" "),r("li",[e._v("Easier manual deployment build ("),r("a",{attrs:{href:"https://github.com/dgarage/NBXplorer",target:"_blank",rel:"noopener noreferrer"}},[e._v("NBXplorer"),r("OutboundLink")],1),e._v(" and BTCPay are now depending on the same version of the framework)")])]),e._v(" "),r("h2",{attrs:{id:"bitcoinaverage-replaced-with-coingecko"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#bitcoinaverage-replaced-with-coingecko"}},[e._v("#")]),e._v(" BitcoinAverage replaced with CoinGecko")]),e._v(" "),r("p",[e._v("Prior to this release, BTCPay was using BitcoinAverage as a source for rates for many exchanges and also as a default rate provider. The structural changes in BitcoinAverage pricing plans meant that users have to pay to use their API. While we understand and respect BitcoinAverage decision (they've been a reliable and free provider for years) we can't expect all our users to pay for the API.")]),e._v(" "),r("p",[e._v("As a result, we've removed BitcoinAverage as a default provider and replaced it with CoinGecko. Some exchanges are still handled by BitcoinAverage. If you wish to use BitcoinAverage, you can still input your API keys upon purchasing a plan.")]),e._v(" "),r("p",[e._v("Because of the pricing changes (no more free plans) all BTCPay instances faced the risk of not being able to fetch the rates, which means the invoice couldn't be created.")]),e._v(" "),r("p",[e._v("In order to prevent such disruption in the future we plan later to:")]),e._v(" "),r("ol",[r("li",[e._v("Show a warning in users store if he did not configured the default rate provider and kept the default. This will means user gets the best rate for his jurisdiction, but also makes sure that less users depend on CoinGecko.")]),e._v(" "),r("li",[e._v("Improve the direct support with the rate API of exchanges. We currently only directly support: Binance, Bitbank, BitPay, Bittrex Bylls, CoinAverage, CoinGecko, Hitbtc, Kraken, Ndax and Poloniex.")]),e._v(" "),r("li",[e._v("Find alternative to CoinGecko and use those alternative automatically as fallback in case CoinGecko goes down.")])]),e._v(" "),r("p",[e._v('Many of you suggested we open source the rates API or "decentralize" it. This is sadly not the solution, since merchants want a specific rate and it would be safer to have a store out of service than being served with an incorrect rate.')]),e._v(" "),r("p",[e._v("The only way we can mitigate the impact of rate providers is by properly implementing direct integrations to the rate API of exchanges and having several fallbacks like CoinGecko for the rest.")]),e._v(" "),r("h3",{attrs:{id:"do-not-preemptively-fetch-rates-of-all-exchanges"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#do-not-preemptively-fetch-rates-of-all-exchanges"}},[e._v("#")]),e._v(" Do not preemptively fetch rates of all exchanges")]),e._v(" "),r("p",[e._v("Before this release, we would fetch rates for the 10 exchanges rate API's we are integrated with every 30s, so we already have the rate fetched locally at the time of creation of the invoice.")]),e._v(" "),r("p",[e._v("Not only this bring unnecessary traffic, but if any of the exchanges stopped responding, this would flood the logs. We now preemptively fetch rates only for the exchanges actually in use.")]),e._v(" "),r("h2",{attrs:{id:"hot-wallet"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#hot-wallet"}},[e._v("#")]),e._v(" Hot Wallet")]),e._v(" "),r("p",[e._v("As you're probably aware, BTCPay never requires your private keys. However, we've seen an increasing demand from developers building projects on top of BTCPay for a hot wallet that would allow them more flexibility.")]),e._v(" "),r("p",[e._v("Starting with 1.0.3.147, you can create and restore a wallet from a seed when setting up your derivation scheme. This feature is coupled with an option to import the private keys for the generated addresses directly inside Bitcoin Core. This makes it easy to spend the funds via FullyNoded, for example.")]),e._v(" "),r("p",[e._v("Your wallet is only exposed through Torv3 address, which are not discoverable. We plan adding Tor level authentication protection to make sure that, even if you leak your Torv3 by mistake, you would be safe.")]),e._v(" "),r("p",[e._v("Hot wallet warning")]),e._v(" "),r("p",[e._v("WARNING: A hot wallet means that anybody with an access to your RPC interface will have access to the funds. BTCPay Server bitcoind is configured with a well known fixed password, so only network access is protecting your wallet")]),e._v(" "),r("h2",{attrs:{id:"a-thank-you-to-our-contributors"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#a-thank-you-to-our-contributors"}},[e._v("#")]),e._v(" A thank you to our contributors")]),e._v(" "),r("p",[e._v("Huge thanks go to our contributors, supporters and community who made this release possible. We appreciate every single contribution, that comes in many different forms.")]),e._v(" "),r("p",[e._v("Special thanks to developers:")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"http://github.com/bolatovumar",target:"_blank",rel:"noopener noreferrer"}},[e._v("bolatovumar"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/Kukks/",target:"_blank",rel:"noopener noreferrer"}},[e._v("MrKukks"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/NicolasDorier/",target:"_blank",rel:"noopener noreferrer"}},[e._v("NicolasDorier"),r("OutboundLink")],1)])]),e._v(" "),r("p",[e._v("Upon releasing 1.0.3.147, we've quickly released 1.0.3.148 and 1.0.3.149 which fixed bugs introduced in 1.0.3.147.")]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("1.0.3.148")]),e._v(": Fixed a critical U2F auth bug which would lock a user out of the BTCPayServer if U2F was active.")]),e._v(" "),r("li",[r("strong",[e._v("1.0.3.149")]),e._v(": Fixed some broken pages and actions in our migration to 3.1")])]),e._v(" "),r("p",[e._v("How to update?")]),e._v(" "),r("p",[e._v("To "),r("a",{attrs:{href:"https://docs.btcpayserver.org/faq-and-common-issues/faq-serversettings#how-to-update-btcpay-server",target:"_blank",rel:"noopener noreferrer"}},[e._v("update"),r("OutboundLink")],1),e._v(" to the latest version, go to your BTCPay > Server Settings > Maintenance > "),r("em",[r("strong",[e._v("Update")])]),e._v(".")]),e._v(" "),r("p",[e._v("If you encounter any issues with this version, or need assistance, please report it on our "),r("a",{attrs:{href:"https://chat.btcpayserver.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("community chat"),r("OutboundLink")],1),e._v(" or on our "),r("a",{attrs:{href:"https://github.com/btcpayserver/btcpayserver/issues",target:"_blank",rel:"noopener noreferrer"}},[e._v("GitHub"),r("OutboundLink")],1),e._v(".")])])}),[],!1,null,null,null);t.default=o.exports}}]);