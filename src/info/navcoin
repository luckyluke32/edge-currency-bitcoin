import { imageServerUrl } from './constants.js'

const bcoinInfo = {
  type: 'monacoin',
  magic: 0xdb4775248b80fb57,
  formats: ['bip32'],
  keyPrefix: {
    privkey: 0xB0,
    xpubkey: 0x0488b21e,
    xprivkey: 0x0488ade4,
    xpubkey58: 'xpub',
    xprivkey58: 'xprv',
    coinType: 22
  },
  addressPrefix: {
    pubkeyhash: 0x30,
    scripthash: 0x32,
    scripthashLegacy: 0x05,
    witnesspubkeyhash: 0x06,
    witnessscripthash: 0x0a
  }
}

const engineInfo = {
  network: 'monacoin',
  currencyCode: 'MONA',
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
  currencyCode: 'MONA',
  displayName: 'MonaCoin',
  pluginName: 'monacoin',
  denominations: [{ name: 'MONA', multiplier: '100000000', symbol: 'X' }],
  walletType: 'wallet:monacoin',

  // Configuration options:
  defaultSettings: {
    customFeeSettings: ['satPerByte'],
    electrumServers: [

      'electrum://electrumx3.tamami-foundation.org:50001',
      'electrum://electrumx3.tamami-foundation.org:50002',
      'electrum://electrum-mona.bitbank.cc:50001',
      'electrum://electrumx.tamami-foundation.org:50002'
    ],
    disableFetchingServers: true
  },
  metaTokens: [],

  // Explorers:
  blockExplorer: 'https://bchain.info/MONA/block/%s',
  addressExplorer: 'https://bchain.info/MONA/addr/%s',
  transactionExplorer: 'https://bchain.info/MONA/tx/%s',

  // Images:
  symbolImage: `${imageServerUrl}/monacoin-logo-solo-64.png`,
  symbolImageDarkMono: `${imageServerUrl}/monacoin-logo-solo-64.png`
}

export const monacoin = { bcoinInfo, engineInfo, currencyInfo }
