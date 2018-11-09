/**
 * test.js
 * @authors liming.liu (liming.liu@71bird.com)
 * @date    2018-09-20 17:06:00
 * @version $Id$
 */

let zh = {
"dice2.win": "dice2.win - \u91c7\u7528\u4ee5\u592a\u5e63\u884c\u4ed8\u8d39\u7684\u516c\u5e73\u8d4c\u535a",
"components.ethers.currency-name": "\u4ee5\u592a\u5e63",
"components.footer.blockhain-friends": "\u533a\u5757\u94fe & \u670b\u53cb",
"components.footer.coin-flip": "\u629b\u786c\u5e01",
"components.footer.dice": "\u9ab0\u5b50",
"components.footer.email": "\u7535\u5b50\u90ae\u4ef6",
"components.footer.etheroll": "Etheroll \u4ee5\u592a\u5e63\u8fc7\u5c71\u8f66",
"components.footer.featured-on": "\u7279\u8272",
"components.footer.network": "\u7f51\u7edc\uff1a<1></1>",
"components.footer.our-games": "\u6211\u4eec\u7684\u6e38\u620f",
"components.footer.reach-out": "\u8054\u7cfb\u6211\u4eec",
"components.footer.smart-contract": "\u667a\u80fd\u5408\u7ea6",
"components.footer.telegram": "Telegram",
"components.footer.tos": "\u670d\u52a1\u6761\u6b3e",
"components.footer.twitter": "Twitter",
"components.footer.two-dices": "\u4e24\u4e2a\u9ab0\u5b50",
"components.footer.your-balance": "\u60a8\u7684\u4f59\u989d<1></1>",
"components.top-bar.fair-play": "\u5e38\u89c1\u95ee\u9898",
"components.top-bar.games": "\u6e38\u620f",
"containers.common.bet-return.winning-bet-pays": "<0>\u8d62\u5f97\u6295\u6ce8</0>",
"containers.common.bets.fee-structure": "<0>{{percentFee}}</0> \u8d39\u7528",
"containers.common.bets.fee-structure-with-jackpot": "<0>{{percentFee}}</0> \u8d39\u7528\uff0c<2></2>\u7d2f\u79ef\u5927\u5956",
"containers.common.bets.fees": "\u60a8\u7684\u8d4c\u6ce8",
"containers.common.bets.you-can-win": "<0>\u60a8\u5c06\u8d62\u5f97<1></1><3>\u4ee5\u592a\u5e63</3></0>",
"containers.common.game-play.bet-confirmed": "<0>\u6295\u6ce8\u5df2\u786e\u8ba4\uff01<1></1>\u7b49\u5f85\u5e84\u5bb6...... </0>",
"containers.common.game-play.bet-submitted": "<0>\u6295\u6ce8\u5df2\u63d0\u4ea4\uff01<1></1>\u7b49\u5f85\u4ee5\u592a\u574a...... </0>",
"containers.common.game-play.croupier-submitted": "<0>\u5e84\u5bb6\u5df2\u63d0\u4ea4\uff01<1></1>\u7b49\u5f85\u4ee5\u592a\u574a...... </0>",
"containers.common.game-play.croupier-to-settle": "<0>\u5e84\u5bb6\u8fdb\u884c\u7ed3\u7b97<1>(<1>\u4ece\u533a\u5757\u94fe\u4e0a\u8fdb\u884c\u67e5\u770b</1>)</1></0>",
"containers.common.game-play.ethereum-to-confirm-settling": "<0>\u4ee5\u592a\u574a\u786e\u8ba4\u7ed3\u7b97\u8d4c\u6ce8</0>",
"containers.common.game-play.ethereum-to-confirm-tx": "<0>\u4ee5\u592a\u574a\u786e\u8ba4\u4e0b\u6ce8<1>(<1>\u4ece\u533a\u5757\u94fe\u4e0a\u8fdb\u884c\u67e5\u770b</1>)</1></0>",
"containers.common.game-play.less-details": "<0>\u66f4\u5c11\u7ec6\u8282</0>",
"containers.common.game-play.more-details": "<0>\u66f4\u591a\u7ec6\u8282</0>",
"containers.common.game-play.outcome": "\u7ed3\u679c",
"containers.common.game-play.play-again": "\u518d\u73a9\u4e00\u6b21",
"containers.common.game-play.please-confirm-your-tx": "<0>\u8bf7\u786e\u8ba4\u6295\u6ce8\u4ea4\u6613</0>",
"containers.common.game-play.sign-bet-tx": "<0>\u7b7e\u7f72\u6295\u6ce8\u4ea4\u6613</0>",
"containers.common.game-play.you-lost": "\u60a8\u8f93\u4e86:(",
"containers.common.game-play.you-rejected-bet-request": "<0>\u60a8\u62d2\u7edd\u4e86\u4e0b\u6ce8\u8bf7\u6c42:(</0>",
"containers.common.game-play.you-won": "\u60a8\u8d62\u4e86\uff01",
"containers.common.game-play.you-won-jackpot": "\u60a8\u8d62\u4e86\u5927\u5956\uff01",
"containers.common.game-play.your-bet": "\u60a8\u5c06\u8d4c\u6ce8\u62bc\u5728",
"containers.common.game-play.your-bet-under": "\u60a8\u5c06\u8d4c\u6ce8\u62bc\u5728",
"containers.common.history.address": "\u5730\u5740",
"containers.common.history.bet": "\u8d4c\u6ce8",
"containers.common.history.bet-on": "\u5c06\u8d4c\u6ce8\u62bc\u5728",
"containers.common.history.header": "<0>\u6e38\u620f\u5386\u53f2<1>\u53ea\u6709\u6211</1></0>",
"containers.common.history.table-bet-on": "\u8d4c\u6ce8",
"containers.common.history.table-odds": "\u80dc\u7b97",
"containers.common.history.table-player": "\u73a9\u5bb6",
"containers.common.history.table-result": "\u7ed3\u679c",
"containers.common.history.wins": "\u83b7\u80dc",
"containers.common.jackpot.bet-to-qualify": "\u6295\u6ce8<1></1>\u4ee5\u83b7\u5f97\u8d44\u683c",
"containers.common.jackpot.chance": "0.1\uff05\u7684\u8d62\u5927\u5956\u673a\u4f1a\uff01",
"containers.common.jackpot.title": "\u5927\u5956\u5305\u62ec",
"containers.common.metamask-hint.title": "\u8bf7\u68c0\u67e5\u60a8\u7684Metamask\u5e76\u786e\u8ba4\u5f85\u5904\u7406\u7684\u4ea4\u6613\u3002",
"containers.common.odds.title": "\u83b7\u80dc\u673a\u4f1a",
"containers.common.place-bet.button": "\u4e0b\u6ce8\uff01",
"containers.common.web3-required.get-metamask": "\u83b7\u53d6MetaMask",
"containers.common.web3-required.install-metamask": "\u5b89\u88c5MetaMask",
"containers.common.web3-required.log-in-to-metamask": "\u767b\u5f55MetaMask",
"containers.common.web3-required.log-in-to-trust": "\u767b\u5f55Trust",
"containers.common.web3-required.open-in-trust-wallet": "\u5728Trust Wallet\u4e2d\u6253\u5f00",
"containers.common.web3-required.our-games-are-on-mainnet": "\u6211\u4eec\u7684\u6e38\u620f\u4ec5\u5728\u4e3b\u7f51\u4e0a\u63d0\u4f9b - \u8bf7\u901a\u8fc7Metamask\u8fdb\u884c\u5207\u6362",
"containers.common.web3-required.our-games-are-on-mainnet-settings": "\u6211\u4eec\u7684\u6e38\u620f\u4ec5\u5728\u4e3b\u7f51\u4e0a\u63d0\u4f9b - \u8bf7\u66f4\u6539\u60a8\u7684\u8bbe\u7f6e",
"containers.common.web3-required.please-log-in-to-metamask": "\u8bf7\u767b\u5f55MetaMask\u4ee5\u7ee7\u7eed",
"containers.common.web3-required.please-log-in-to-trust": "\u8bf7\u767b\u5f55Trust\u4ee5\u7ee7\u7eed",
"containers.common.web3-required.switch-to-mainnet": "\u5207\u6362\u5230\u4e3b\u7f51",
"containers.common.web3-required.use-trust-wallet": "\u4f7f\u7528Trust Wallet",
"containers.common.web3-required.we-recommend-trust-wallet": "\u60a8\u9700\u8981\u4e00\u4e2a\u4ee5\u592a\u574a\u5e94\u7528\u6765\u73a9\u6211\u4eec\u7684\u6e38\u620f - \u6211\u4eec\u63a8\u8350Trust Wallet",
"containers.common.web3-required.you-need-web3": "\u60a8\u9700\u8981\u4e00\u4e2a\u517c\u5bb9Web3\u7684\u94b1\u5305\u6765\u73a9\u6211\u4eec\u7684\u6e38\u620f",
"containers.fair-play.text": "<0>\u54ea\u79cd\u5728\u7ebf\u535a\u5f69\u6e38\u620f\u53ef\u4ee5\u8bc1\u660e\u5176\u516c\u5e73\u6027\uff1f</0><1>\u7b80\u5355\u6765\u8bf4\uff0c<1>\u53ef\u4ee5\u8bc1\u660e\u5176\u516c\u5e73\u6027</1>\u610f\u5473\u7740\u4efb\u4f55\u6295\u6ce8\u7ed3\u679c\u90fd\u53ef\u4ee5\u8fdb\u884c\u72ec\u7acb\u9a8c\u8bc1\uff0c\u5e76\u4e14\u8fd0\u8425\u5546\u6216\u5176\u4ed6\u73a9\u5bb6\u90fd\u6ca1\u6709\u529e\u6cd5\u6765\u7be1\u6539\u7ed3\u679c\u3002</1><2><1> dice2.win </1>\u662f\u5426\u53ef\u4ee5\u8bc1\u660e\u5176\u516c\u5e73\u6027\uff1f</2><3>\u662f\u7684\u3002 \u6574\u4e2a\u6e38\u620f\u73a9\u6cd5\u90fd\u7531\u4ee5\u592a\u574a<1>\u667a\u80fd\u5408\u7ea6</1>\u8fdb\u884c\u63a7\u5236\uff0c\u5b83\u4f1a\u6839\u636e\u8fd0\u8425\u5546\u7684\u8f93\u5165\u4ee5\u53ca\u533a\u5757\u94fe\u6570\u636e(\u533a\u5757\u54c8\u5e0c)\u8ba1\u7b97\u968f\u673a\u6570\u3002 \u4efb\u4f55\u4e00\u65b9\u90fd\u53ef\u4ee5\u5bf9\u5408\u7ea6\u8fdb\u884c\u5ba1\u6838\uff0c\u5e76\u68c0\u67e5\u4efb\u4f55\u4ea4\u6613\uff0c\u786e\u4fdddice2.win\u4ee5\u53ca\u6076\u610f\u73a9\u5bb6\u90fd\u4e0d\u4f1a\u5f71\u54cd\u7ed3\u679c\u3002</3><4>\u60a8\u4e0e\u5176\u4ed6\u535a\u5f69\u7f51\u7ad9\u6709\u4ec0\u4e48\u4e0d\u540c\uff1f</4><5>\u4e0e\u7ade\u4e89\u5bf9\u624b\u7684\u7f51\u7ad9\u76f8\u6bd4\uff0c\u5728<1> dice2.win </1>\u4e0a\u8fdb\u884c\u4e0b\u6ce8\u7684\u4ea4\u6613\u8d39\u7528\u8981\u4f4e\u5f97\u591a - \u5b83\u53ef\u4ee5\u63d0\u4f9b\u4f4e\u81f30.01 \u4ee5\u592a\u5e63\u7684\u6295\u6ce8\u3002 \u6211\u4eec\u7684\u6e38\u620f\u975e\u5e38\u7b80\u5355\u6613\u61c2\uff0c\u5c31\u50cf\u629b\u786c\u5e01\u6216\u63b7\u9ab0\u5b50\u4e00\u6837\u3002</5><6>\u5f53\u7136\uff0c\u6211\u4eec\u8fd8\u63d0\u4f9b\u5927\u5956\uff01</6><7>\u60a8\u660e\u767d\u4e86\u5417\uff1f \u8bf7\u5c3d\u53ef\u80fd\u7528\u901a\u4fd7\u6613\u61c2\u7684\u65b9\u5f0f\u5411\u6211\u89e3\u91ca\u4e00\u4e0b\u5b83\u662f\u5982\u4f55\u8fd0\u4f5c\u7684\u3002</7><8>\u5728\u8fd9\u4e2a\u95ee\u9898\u4e0a\uff0c\u6211\u4eec\u5fc5\u987b\u8981\u8bf4\u70b9\u6280\u672f\u6027\u7684\u4e1c\u897f\uff1a<1><0> dice2.win\u4f1a\u9009\u62e9\u4e00\u4e2a\u79d8\u5bc6\u7684\u968f\u673a\u6570\uff0c\u5e76\u4e3a\u60a8\u63d0\u4f9b\u5b83\u7684<1>\u54c8\u5e0c</1>\u3002</0><1>\u60a8\u628a\u4ee5\u592a\u7f51\u4ea4\u6613\u4e2d\u7684\u8d4c\u6ce8\u4e0e\u4e0a\u4e00\u6b65\u4e2d\u7684\u54c8\u5e0c\u4e00\u8d77\u53d1\u9001\u81f3\u6211\u4eec\u7684\u667a\u80fd\u5408\u7ea6\u3002</1><2>\u6b64\u65f6\uff0c\u5728\u60a8\u9009\u62e9\u7ed3\u679c\u4e4b\u524d\uff0cdice2.win\u5df2\u7ecf\u627f\u8bfa\u4e86\u4e00\u4e2a\u6570\u5b57\u3002</2><3>\u4e00\u65e6\u60a8\u7684\u4ea4\u6613\u88ab\u7f51\u7edc\u786e\u8ba4\uff0c\u8be5\u5408\u7ea6\u5c06\u4f1a\u5b58\u50a8\u54c8\u5e0c\u4ee5\u53ca\u6295\u6ce8\u8be6\u7ec6\u4fe1\u606f\u3002</3><4>\u6211\u4eec\u7684\u5e84\u5bb6\u673a\u5668\u4eba\u4f1a\u901a\u8fc7\u53d1\u9001\u6295\u6ce8\u7ed3\u7b97\u4ea4\u6613\u6765\u201c\u63ed\u6653\u201d\u8be5\u6570\u5b57\u3002</4><5>\u5f53\u4e14\u4ec5\u5f53\u63d0\u4f9b\u7684\u6570\u5b57\u7684\u54c8\u5e0c\u4e0e\u5b58\u50a8\u7684\u54c8\u5e0c\u76f8\u540c\u65f6\uff0c\u5408\u7ea6\u624d\u4f1a\u63a5\u53d7\u8be5\u4ea4\u6613\u3002</5><6>\u5408\u7ea6\u4f1a\u628a\u4e0b\u6ce8\u4ea4\u6613\u7684\u6570\u91cf\u548c\u533a\u5757\u54c8\u5e0c\u8fdb\u884c\u6df7\u5408\u4ee5\u83b7\u5f97\u4e00\u4e2a\u968f\u673a\u6570\u3002</6><7>\u5408\u7ea6\u4f1a\u51b3\u5b9a\u60a8\u662f\u8d62\u8fd8\u662f\u8f93\uff0c\u5e76\u5411\u60a8\u53d1\u9001\u60a8\u6240\u8d62\u53d6\u7684\u4ee5\u592a\u5e01\u3002</7></1>dice2.win\u662f\u5426\u53ef\u4ee5\u7be1\u6539\u7ed3\u679c\uff1f \u4e0d\u53ef\u4ee5\uff0c\u56e0\u4e3a\u5408\u7ea6\u8bb0\u5f55\u4e86\u79d8\u5bc6\u6570\u5b57\u7684\u54c8\u5e0c\uff0c\u8fd9\u5c31\u610f\u5473\u7740\u8fd0\u8425\u5546\u5728\u63a5\u53d7\u8d4c\u6ce8\u540e\u5c31\u65e0\u6cd5\u66f4\u6539\u6570\u5b57\u3002 \u5c06\u533a\u5757\u54c8\u5e0c\u4e0e\u6570\u5b57\u8fdb\u884c\u6df7\u5408\uff0c\u8fd9\u4f7f\u5f97\u5176\u7ed3\u679c\u5b8c\u5168\u662f\u968f\u673a\u7684\uff0c\u4e0d\u5141\u8bb8\u77ff\u5de5\u4eec\u800d\u82b1\u62db\u6765\u8d62\u53d6\u8d4c\u6ce8\u3002 \u53e6\u4e00\u65b9\u9762\uff0c\u7531\u4e8e\u533a\u5757\u54c8\u5e0c\u7ec4\u4ef6\uff0cdice2.win\u672c\u8eab\u65e0\u6cd5\u63a7\u5236\u6295\u6ce8\u7ed3\u679c\u3002 \u8fd9\u5c31\u662f\u4f17\u6240\u5468\u77e5\u7684<3>\u201c\u627f\u8bfa\u65b9\u6848\u201d</3>\uff0c\u5b83\u4f7fdice2.win\u80fd\u591f\u63d0\u4f9b\u535a\u5f69\u7ea7\u7684\u968f\u673a\u6570\u751f\u6210\uff0c\u53ef\u4ee5\u8fdb\u884c\u5927\u8d4c\u6ce8\u3001\u7d2f\u79ef\u5927\u5956\u4ee5\u53ca\u5feb\u901f\u7ed3\u7b97\uff0c\u540c\u65f6\u5b8c\u5168\u900f\u660e\u3002</8><9>\u5982\u679c\u6211<1>\u786e\u5b9e\u60f3\u8981</1>\u9a8c\u8bc1\u60a8\u6240\u8bf4\u7684\u4e00\u5207\u662f\u5426\u771f\u5b9e\uff0c\u8be5\u600e\u4e48\u505a\uff1f</9><10>\u8bf7\u968f\u610f\u7814\u7a76\u6211\u4eec\u7684\u667a\u80fd\u5408\u7ea6 - \u60a8\u53ef\u4ee5\u5728<1>Github\u4e0a\u627e\u5230\u5b83</1>\u3002 \u5982\u679c\u60a8\u6709\u4efb\u4f55\u7591\u95ee\u6216\u72b9\u8c6b\uff0c\u8bf7\u901a\u8fc7<3>Telegram</3>\u3001<5> Twitter </5>\u6216<7>\u7535\u5b50\u90ae\u4ef6</7>\u8054\u7cfb\u6211\u4eec\u3002</10><11>\u8d39\u7528\u662f\u591a\u5c11\uff1f</11><12>\u6bcf\u6b21\u4e0b\u6ce8\u65f6\uff0c<1> dice2.win </1>\u5747\u4f1a\u6263\u96641\uff05(\u4f46\u4e0d\u4f4e\u4e8e0.0003 \u4ee5\u592a\u5e63)\uff0c(\u4ee5\u5e2e\u52a9\u6211\u4eec\u652f\u4ed8\u8d26\u5355\u5e76\u4f7f\u6e38\u620f\u53ef\u4ee5\u8fd0\u884c\uff09\uff0c\u5e76\u4e14\uff0c0.1 \u4ee5\u592a\u5e63\u4ee5\u4e0a\u7684\u8d4c\u6ce8\u4f1a\u5728\u7d2f\u79ef\u5927\u5956\u4e2d\u7d2f\u79ef0.001 \u4ee5\u592a\u5e63\u4ee5\u4e0a\uff08\u8fd9\u4e5f\u4f7f\u5f97\u8fd9\u4e9b\u8d4c\u6ce8\u4f1a\u53c2\u4e0e\u7d2f\u79ef\u5927\u5956\uff01\uff09</12><13>\u795d\u60a8\u73a9\u5f97\u6109\u5feb\uff01</13>",
"containers.games.coin-flip.hint": "<0>\u9009\u62e9\u786c\u5e01\u7684\u4e00\u9762\u6765\u8fdb\u884c\u6295\u6ce8</0>",
"containers.games.coin-flip.title": "<0>\u629b\u786c\u5e01</0>",
"containers.games.dice.hint": "<0>\u9009\u62e9\u9ab0\u5b50\u6570\u6765\u8fdb\u884c\u6295\u6ce8</0>",
"containers.games.dice.title": "<0>\u9ab0\u5b50</0>",
"containers.games.etheroll.hint": "<0>\u8c03\u6574\u60a8\u7684\u80dc\u7387</0>",
"containers.games.etheroll.title": "<0>Etheroll \u4ee5\u592a\u5e63\u8fc7\u5c71\u8f66</0>",
"containers.games.two-dices.hint": "<0>\u9009\u62e9\u8981\u6295\u6ce8\u7684\u9ab0\u5b50\u603b\u548c</0>",
"containers.games.two-dices.title": "<0>\u4e24\u4e2a\u9ab0\u5b50</0>",
"containers.home.coin-flip": "<0>\u629b\u786c\u5e01</0><1>\u6b63\u9762\u6216\u80cc\u9762\uff1f\u4e00\u534a\u5bf9\u4e00\u534a</1><2>\u83b7\u80dc\u5c31\u80fd\u8d62\u5f971.98\u500d\u7684\u6295\u6ce8</2><3></3>",
"containers.home.dice": "<0>\u63b7\u9ab0\u5b50</0><1>\u5728\u6570\u5b571\u81f36\u4e4b\u95f4\u4e0b\u6ce8</1><2>\u83b7\u80dc\u5c31\u80fd\u8d62\u5f97\u9ad8\u8fbe5.94\u500d\u7684\u6295\u6ce8</2><3></3>",
"containers.home.etheroll": "<0>Etheroll</0><1>\u4ee5\u592a\u5e63\u8fc7\u5c71\u8f66</1><2>\u4efb\u4f55\u80dc\u7387\uff0c1\uff05\u523097\uff05</2><3>\u83b7\u80dc\u5c31\u80fd\u8d62\u5f97\u9ad8\u8fbe99\u500d\u7684\u6295\u6ce8</3>",
"containers.home.h1": "\u91c7\u7528\u4ee5\u592a\u5e63\u884c\u4ed8\u8d39\u7684\u516c\u5e73\u8d4c\u535a",
"containers.home.h2": "<0>\u53ef\u88ab\u8bc1\u660e\u7684\u516c\u5e73\u6027</0>\u535a\u5f69\u6e38\u620f\u7531\u7b80\u5355\u7684<2>\u5f00\u6e90\u5408\u7ea6\u63d0\u4f9b\u652f\u6301</2><3></3>\u65e0\u9700\u6ce8\u518c\u6216\u62bc\u91d1\uff0c\u53ea\u67091\uff05\u7684\u80dc\u8d1f\u8fb9\u7f18\u4ee5\u53ca\u5927\u5956\uff01<5></5>",
"containers.home.play-now": "\u73b0\u5728\u5f00\u59cb\u6e38\u620f",
"containers.home.two-dices": "<0>\u4e24\u4e2a\u9ab0\u5b50</0><1>\u5bf9\u603b\u548c\u8fdb\u884c\u6295\u6ce8\uff0c\u4ece\u6570\u5b572\u81f312\u4e2d\u9009\u62e9</1><2>\u83b7\u80dc\u5c31\u80fd\u8d62\u5f97\u9ad8\u8fbe35.64\u500d\u7684\u6295\u6ce8</2><3></3>",
"containers.terms-of-service.text": "<0>\u670d\u52a1\u6761\u6b3e</0><1><1> dice2.win </1>(<3>\u201c\u6211\u4eec\u201d</3>)\u7684\u7f51\u7ad9\u63d0\u4f9b\u4ee5\u592a\u574a\u533a\u5757\u94fe\u4e0a\u7684<5>\u667a\u80fd\u5408\u7ea6</5>\u754c\u9762\uff0c\u5b83\u4f1a\u6839\u636e\u5916\u90e8\u56e0\u7d20\u800c\u63a5\u6536\u4ee5\u592a\u5e01\u5e76\u8f6c\u8d26\u4e0d\u540c\u6570\u91cf\u7684\u4ee5\u592a\u5e01\u3002</1><2>\u6211\u4eec\u65e0\u6cd5\u9a8c\u8bc1\u5404\u8f96\u533a\u5185\u670d\u52a1\u7684\u5408\u6cd5\u6027\uff0c\u4e5f\u4e0d\u80fd\u4e3a\u60a8\u63d0\u4f9b\u4efb\u4f55\u6cd5\u5f8b\u610f\u89c1\u3002\u60a8\u5e94\u5f53\u6309\u7167\u4e0a\u8ff0\u65b9\u5f0f\u9075\u5b88\u60a8\u6240\u5728\u53f8\u6cd5\u7ba1\u8f96\u533a\u5185\u6709\u5173\u4f7f\u7528\u4ee5\u592a\u5e01\u7684\u4efb\u4f55\u76f8\u5173\u6cd5\u5f8b\u3001\u653f\u7b56\u548c\u6cd5\u89c4\uff0c\u5e76\u7531\u60a8\u4e2a\u4eba\u5b8c\u5168\u627f\u62c5\u76f8\u5173\u8d23\u4efb\u3002</2><3>\u73a9<1>\u57fa\u4e8e\u667a\u80fd\u5408\u7ea6</1>\u7684\u6e38\u620f\u53ef\u80fd\u4f1a\u4f7f\u73a9\u5bb6\u83b7\u5f97\u6216\u635f\u5931\u4ee5\u592a\u5e01\u3002\u6211\u4eec\u5bf9\u6240\u63d0\u4f9b\u6e38\u620f\u7684\u7ed3\u679c\u4e0d\u627f\u62c5\u4efb\u4f55\u8d23\u4efb\u3002</3><4>\u6211\u4eec\u4fdd\u7559\u4fee\u6539\u7f51\u7ad9\u53ca\u5176\u670d\u52a1\u4ee5\u53ca\u8fd9\u4e9b\u6761\u6b3e\u7684\u6743\u5229\uff0c\u6055\u4e0d\u53e6\u884c\u901a\u77e5\u3002",
"containers.home.24h.bets": "\u6295\u6ce8\u6570\u91cf<0>{{bets}}</0>",
"containers.home.24h.jackpot": "\u6700\u8fd1\u7684\u5927\u5956",
"containers.home.24h.jackpot-by": "\u4f18\u80dc\u8005 ",
"containers.home.24h.top-winnners": "24\u5c0f\u65f6\u5185\u6700\u5927\u7684\u8d62\u5bb6",
"containers.home.24h.wagers": "24\u5c0f\u65f6\u5185\u7684\u603b\u8d4c\u6ce8",
"containers.common.bets.max": "\u6700\u5927",
"containers.common.place-bet.gas-price": "\u5efa\u8bae\u7684\u6c7d\u6cb9\u4ef7\u683c(Gas Price): <1>{{gasPrice}}</1>"
}

let en ={
"dice2.win": "dice2.win - Fair games that pay Ether",
"containers.home.h1": "Fair games that pay Ether",
"containers.home.h2": "<0>Provably fair</0> bets backed by simple <2>open-sourced contract</2><3></3>No sign-ups or deposits, just 1% edge and jackpot!<5></5>",
"containers.home.coin-flip": "<0>Coin flip</0><1>Heads or tails? Fifty-fifty</1><2>Winning bet pays 1.98\xd7</2><3></3>",
"containers.home.dice": "<0>Roll a dice</0><1>Bet on numbers, 1 to 6</1><2>Winning bet pays up to 5.94\xd7</2><3></3>",
"containers.home.two-dices": "<0>Two dice</0><1>Bet on sum, 2 to 12</1><2>Winning bet pays up to 35.64\xd7</2><3></3>",
"containers.home.etheroll": "<0>Etheroll</0><2>ANY win chance, 1% to 97%</2><3>Winning bet pays up to 99\xd7</3><1></1>",
"containers.home.play-now": "Play now",
"containers.home.24h.bets": "<0>{{bets}}</0> bets",
"containers.home.24h.jackpot": "Recent jackpot",
"containers.home.24h.jackpot-by": "Won by ",
"containers.home.24h.top-winnners": "24h top winners",
"containers.home.24h.wagers": "24h wagers",
"components.top-bar.games": "Games",
"components.top-bar.fair-play": "FAQ",
"components.top-bar.refer-a-friend": "Bonus",
"components.ethers.currency-name": "ETH",
"components.footer.our-games": "Our games",
"components.footer.coin-flip": "Coin flip",
"components.footer.dice": "Dice",
"components.footer.two-dices": "Two dice",
"components.footer.etheroll": "Etheroll",
"components.footer.blockhain-friends": "Blockchain & friends",
"components.footer.your-balance": "Your balance <1></1>",
"components.footer.network": "Network: <1></1>",
"components.footer.smart-contract": "Smart contract",
"components.footer.featured-on": "Featured on",
"components.footer.reach-out": "Reach out to us",
"components.footer.telegram": "Telegram",
"components.footer.twitter": "Twitter",
"components.footer.email": "Good ol' email",
"components.footer.tos": "Terms of service",
"containers.games.coin-flip.title": "<0>Coin Flip</0>",
"containers.games.coin-flip.hint": "<0>Choose coin side to bet on</0>",
"containers.games.dice.title": "<0>Dice</0>",
"containers.games.dice.hint": "<0>Choose the dice number(s) to bet on</0>",
"containers.games.two-dices.title": "<0>Two Dice</0>",
"containers.games.two-dices.hint": "<0>Choose sum of dice to bet on</0>",
"containers.games.etheroll.title": "<0>Etheroll</0>",
"containers.games.etheroll.hint": "<0>Adjust you win chance</0>",
"containers.common.bet-return.winning-bet-pays": "<0>Winning bet pays</0>",
"containers.common.bets.you-can-win": "<0>You will win <1></1> <3>ETH</3></0>",
"containers.common.bets.fees": "Your bet",
"containers.common.bets.fee-structure-with-jackpot": "<0>{{percentFee}}</0> fee, <2></2> to jackpot",
"containers.common.bets.fee-structure": "<0>{{percentFee}}</0> fee",
"containers.common.history.header": "<0>Game history <1>Only me</1></0>",
"containers.common.history.table-player": "Player",
"containers.common.history.table-bet-on": "Bet",
"containers.common.history.table-result": "Result",
"containers.common.history.bet-on": "bet on",
"containers.common.history.wins": "wins",
"containers.common.history.address": "address",
"containers.common.history.bet": "bet",
"containers.common.bets.max": "max",
"containers.common.jackpot.title": "Jackpot contains",
"containers.common.jackpot.bet-to-qualify": "Bet <1></1> to qualify",
"containers.common.jackpot.chance": "0.1% jackpot chance!",
"containers.common.odds.title": "Winning chance",
"containers.common.metamask-hint.title": "Please check your Metamask and confirm a pending transaction.",
"containers.common.game-play.please-confirm-your-tx": "<0>Please confirm bet transaction</0>",
"containers.common.game-play.more-details": "<0>More details</0>",
"containers.common.game-play.less-details": "<0>Less details</0>",
"containers.common.game-play.sign-bet-tx": "<0>Sign bet transaction</0>",
"containers.common.game-play.ethereum-to-confirm-tx": "<0>Ethereum to confirm bet <1>(<1>view on blockchain</1>)</1></0>",
"containers.common.game-play.croupier-to-settle": "<0>Croupier to settle <1>(<1>view on blockchain</1>)</1></0>",
"containers.common.game-play.ethereum-to-confirm-settling": "<0>Ethereum to confirm settling bet</0>",
"containers.common.game-play.you-rejected-bet-request": "<0>You rejected bet request :(</0>",
"containers.common.game-play.play-again": "Play again",
"containers.common.game-play.bet-submitted": "<0>Bet submitted!<1></1>Waiting for Ethereum...</0>",
"containers.common.game-play.bet-confirmed": "<0>Bet confirmed!<1></1>Waiting for croupier...</0>",
"containers.common.game-play.croupier-submitted": "<0>Croupier submitted!<1></1>Waiting for Ethereum...</0>",
"containers.common.game-play.you-lost": "You lost :(",
"containers.common.game-play.you-won-jackpot": "You won jackpot!",
"containers.common.game-play.you-won": "You won!",
"containers.common.game-play.your-bet-under": "You bet under",
"containers.common.game-play.your-bet": "You bet on",
"containers.common.game-play.outcome": "Result",
"containers.common.place-bet.button": "Place bet!",
"containers.common.place-bet.gas-price": "Recommended gas price: <1>{{gasPrice}}</1>",
"containers.common.web3-required.install-metamask": "Install MetaMask",
"containers.common.web3-required.you-need-web3": "You need a Web3-compatible wallet to play our games",
"containers.common.web3-required.get-metamask": "Get MetaMask",
"containers.common.web3-required.use-trust-wallet": "Use Trust Wallet",
"containers.common.web3-required.we-recommend-trust-wallet": "Your need an Ethereum app to play our games \u2014 we recommend Trust Wallet",
"containers.common.web3-required.open-in-trust-wallet": "Open in Trust Wallet",
"containers.common.web3-required.log-in-to-metamask": "Log in to MetaMask",
"containers.common.web3-required.please-log-in-to-metamask": "Please log in to MetaMask to proceed",
"containers.common.web3-required.log-in-to-trust": "Log in to Trust",
"containers.common.web3-required.please-log-in-to-trust": "Please log in to Trust to proceed",
"containers.common.web3-required.our-games-are-on-mainnet": "Our games are available on mainnet only \u2013 please switch via Metamask",
"containers.common.web3-required.switch-to-mainnet": "Switch to Mainnet",
"containers.common.web3-required.our-games-are-on-mainnet-settings": "Our games are available on mainnet only \u2013 please change your settings",
"containers.fair-play.text": '<0>What is provably fair on-chain gambling?</0><1>Simply put, <1>provably fair</1> means that any bet outcome can be independently verified and that the operator or other players have no means of tampering with the result.</1><2>Is <1>dice2.win</1> provably fair?</2><3>Yes. The whole gameplay is controlled by Ethereum <1>Smart Contract</1> that computes random numbers based on operator inputs and blockchain data (block hashes). Any party can audit the contract as well as inspect any transaction to make sure that neither dice2.win nor malicious players are influencing the results.</3><4>How are you different from the other gambling sites?</4><5>Placing a bet on <1>dice2.win</1> has much lower transaction fee compared to competing websites \u2212 this allows supporting bets as low as 0.01 ETH. Our games are very simple & easily understandable, just like tossing a coin or rolling a dice.</5><6>And, of course, we have jackpot!</6><7>Is there any catch? Explain how it works like I\'m five.</7><8>This is where we have to get a bit technical:<1><0>dice2.win picks a secret random number and provides you with its <1>hash</1>.</0><1>You send your bet in Ethereum transaction to our smart contract along with the hash from previous step.</1><2>At this point dice2.win has already commited to a number, prior to you chosing an outcome.</2><3>Once your transaction is confirmed by the network, the contract stores the hash and bet details.</3><4>Our croupier bot "reveals" the number by sending a bet settling transaction.</4><5>The contract accepts the transaction if and only if the hash of provided number is the same as the stored one.</5><6>The contract mixes the number and block hash of the bet transaction to get a random number.</6><7>The contract decides whether you won or lost and sends you the winning amount of Ether.</7></1>Can dice2.win tamper with the results? Nope, as the contract keeps track of secret number\'s hash, meaning the operator cannot change the number after the bet has been accepted. Mixing the block hash with the numbers makes the result totally random yet disallows miners from crafting winning bets. On the other hand, dice2.win themselves cannot control bet outcomes either because of block hash component. This is a well-known <3>"commitment scheme"</3> which enables dice2.win to provide gambling-grade random number generation allowing for big bets, jackpots and quick settlements while being fully transparent.</8><9>What if I want to <1>really</1> verify that everything you say is actually true?</9><10>Feel free to study our Smart Contract - it\'s available on <1>Github</1>. In case you have any questions or hesitations, drop us a line via <3>Telegram</3>, <5>Twitter</5> or <7>e-mail</7>.</10><11>What are the fees?</11><12>Every bet is deducted 1% (but no less than 0.0003 ETH) in favour of the <1>dice2.win</1> (to help us pay the bills and keep the game running) and 0.001 ETH more gets accumulated in the jackpot for bets of 0.1 ETH and up (which also makes these bets participate in jackpot!)</12><13>Happy playing!</13>',
"containers.terms-of-service.text": '<0>Terms of service</0><1>The web site of <1>dice2.win</1> (<3>"we"</3>) provides interface to the <5>Smart Contract</5> on the Ethereum blockchain, which accepts ETH tokens and transfers varying amounts of ETH tokens in return, depending on external factors.</1><2>We are not able to verify the legality of the service in each jurisdiction and provide you with any legal advice. It is your sole responsibility to comply with any relevant laws, policies and regulations of your jurisdiction regarding the use of ETH tokens in the way described above.</2><3>Playing the games offered by the <1>Smart Contract</1> can lead to obtainment or loss of ETH tokens. We do not hold any responsibility for the results of the games we provide.</3><4>We reserve the right to modify the website and its services and these terms without any prior notice. We advise to check for updates on regular basis.</4>',
"containers.refer-a-friend.h1": "Earn Ether with <1>dice2.win</1>!",
"containers.refer-a-friend.h2": "Invite players to <1>dice2.win</1> and earn a share of bets they make. It's as easy as sharing a link!",
"containers.refer-a-friend.your-referral-link": "Your referral link",
"containers.refer-a-friend.your-referral-link-description": "Invite players using this link",
"containers.refer-a-friend.your-referral-revenue": "Referral's volume",
"components.refer-a-friend.currency-name": "ETH",
"containers.refer-a-friend.your-referral-revenue-description": "Total volume of bets over <1>{{referralCount}}</1> referrals",
"containers.refer-a-friend.your-profit": "Your reward (0.1%)",
"containers.refer-a-friend.your-profit-description": "Claim reward",
"containers.refer-a-friend.h4": "List of your referrals",
"containers.refer-a-friend.table.registered-at": "Registered at",
"containers.refer-a-friend.table.address": "Address",
"containers.refer-a-friend.table.bets": "Bets",
"containers.refer-a-friend.table.revenue": "Total amount",
"containers.refer-a-friend.table.last-at": "Last game"
}

var fs = require('fs')
var jsonfile = require('jsonfile')
var set = require('lodash.set')
var zhurl = './lang/zh.json'
var enurl = './lang/en.json'
var langtxt = './lang/lang.txt'
async function Doit() {
  for(let i in zh) {
    let file = i + `\n` + zh[i] + `\n` + en[i] + `\n\n` 
    fs.appendFileSync(langtxt, file)
    await writeTranslationsToDisk(i, zh[i], zhurl)
    await writeTranslationsToDisk(i, en[i], enurl)
  }
}

Doit()

function writeTranslationsToDisk (key, translation,translationFile) {
  return new Promise((resolve, reject) => {
    jsonfile.readFile(translationFile, (e, obj) => {
      obj = obj || {}
      set(obj, key, translation)
      jsonfile.writeFile(translationFile, obj, { spaces: 2 }, err => { reject(err) })
      resolve()
    })
  })
}