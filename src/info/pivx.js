import { type EdgeCurrencyInfo } from 'edge-core-js/types'

import type { EngineCurrencyInfo } from '../engine/currencyEngine.js'
import type { BcoinCurrencyInfo } from '../utils/bcoinExtender/bcoinExtender.js'
import { imageServerUrl } from './constants.js'

const bcoinInfo: BcoinCurrencyInfo = {
  type: 'pivx',
  magic: ,
  formats: ['bip44','bip39'],
  keyPrefix: {
    privkey: ,
    xpubkey: ,
    xprivkey: ,
    xpubkey58: 'xpub',
    xprivkey58: 'xprv',
    coinType: 119
  },
  addressPrefix: {
    pubkeyhash: 0x1e,
    scripthash: 0x0d
  }
}

const engineInfo: EngineCurrencyInfo = {
  network: '',
  currencyCode: '',
  gapLimit: ,
  maxFee: ,
  defaultFee: ,
  feeUpdateInterval: ,
  customFeeSettings: ['satPerByte'],
  simpleFeeSettings: {
    highFee: '',
    lowFee: '',
    standardFeeLow: '',
    standardFeeHigh: '',
    standardFeeLowAmount: '',
    standardFeeHighAmount: ''
  }
}

const currencyInfo: EdgeCurrencyInfo = {
  // Basic currency information:
  currencyCode: '',
  displayName: '',
  pluginName: '',
  denominations: [
    { name: '', multiplier: '', symbol: '' },
    { name: 'm', multiplier: '', symbol: 'm' }
  ],
  walletType: 'wallet:',

  // Configuration options:
  defaultSettings: {
    customFeeSettings: ['satPerByte'],
    electrumServers: [
      '',
      'electrum://',
      'electrum://',
      'electrum://'
    ],
    disableFetchingServers: false
  },
  metaTokens: [],

  // Explorers:
  addressExplorer: '',
  blockExplorer: '',
  transactionExplorer: '',

  // Images:
  symbolImage: `${imageServerUrl}/-logo-solo-64.png`,
  symbolImageDarkMono: `${imageServerUrl}/-logo-solo-64.png`
}

export const  = { bcoinInfo, engineInfo, currencyInfo }
