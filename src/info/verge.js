import { type EdgeCurrencyInfo } from 'edge-core-js/types'

import type { EngineCurrencyInfo } from '../engine/currencyEngine.js'
import type { BcoinCurrencyInfo } from '../utils/bcoinExtender/bcoinExtender.js'
import { imageServerUrl } from './constants.js'

const bcoinInfo: BcoinCurrencyInfo = {
  type: 'xvg',
  magic: ,
  formats: ['bip44','bip32'],
  keyPrefix: {
    privkey: 0xcc,
    xpubkey: 0x0488b21e,
    xprivkey: 0x0488ade4,
    xpubkey58: 'xpub',
    xprivkey58: 'xprv',
    coinType: 77
  },
  addressPrefix: {
    pubkeyhash: 0x1e,
    scripthash: 0x21
  }
}

const engineInfo: EngineCurrencyInfo = {
  network: 'verge',
  currencyCode: 'xvg',
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

const currencyInfo: EdgeCurrencyInfo = {
  // Basic currency information:
  currencyCode: 'XVG',
  displayName: 'Verge',
  pluginName: 'verge',
  walletType: 'wallet:verge',

  // Configuration options:
  defaultSettings: {
    customFeeSettings: ['satPerByte'],
    electrumServers: [
      'electrum://46.163.118.201:50002'
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

export const  = { bcoinInfo, engineInfo, currencyInfo }
