import { imageServerUrl } from './constants.js'

const bcoinInfo = {
  type: 'verge',
  magic: 0xd9b4bef9,
  formats: ['bip32'],
  keyPrefix: {
    privkey: 0x80,
    xpubkey: 0x0488b21e,
    xprivkey: 0x0488ade4,
    xpubkey58: 'xpub',
    xprivkey58: 'xprv',
    coinType: 77
  },
  addressPrefix: {
    pubkeyhash: 0x1e,
    scripthash: 0x21,
    scripthashLegacy: 0x05,
    witnesspubkeyhash: 0x06,
    witnessscripthash: 0x0a,
    bech32: 'xvg'
  }
}

const engineInfo = {
  network: 'verge',
  currencyCode: 'XVG',
  gapLimit: 10,
  maxFee: 100000,
  defaultFee: 10000,
  feeUpdateInterval: 60000,
  customFeeSettings: ['satPerByte'],
  simpleFeeSettings: {
    highFee: '300',
    lowFee: '100',
    standardFeeLow: '150',
    standardFeeHigh: '200',
    standardFeeLowAmount: '20000000',
    standardFeeHighAmount: '981000000'
  }
}

const currencyInfo = {
  // Basic currency information:
  currencyCode: 'XVG',
  displayName: 'Verge',
  pluginName: 'verge',
  denominations: [{ name: 'XVG', multiplier: '100000000', symbol: 'X' }],
  walletType: 'wallet:verge',

  // Configuration options:
  defaultSettings: {
    customFeeSettings: ['satPerByte'],
    electrumServers: [

      'electrum://electrum-verge.xyz:50003',
      'electrum://electrum-xvg.stream:50003',
      'electrum://electrum-xvg.party:50003',
      'electrum://e1.verge-electrum.com:50003',
      'electrum://e2.verge-electrum.com:50003',
      'electrum://e3.verge-electrum.com:50003',
    ],
    disableFetchingServers: false
  },
  metaTokens: [],

  // Explorers:
  blockExplorer: 'https://verge-blockchain.info/block/%s',
  addressExplorer: 'https://verge-blockchain.info/address/%s',
  transactionExplorer: 'https://verge-blockchain.info/tx/%s',

  // Images:
  symbolImage: `${imageServerUrl}/verge-logo-solo-64.png`,
  symbolImageDarkMono: `${imageServerUrl}/verge-logo-solo-64.png`
}

export const verge = { bcoinInfo, engineInfo, currencyInfo }
