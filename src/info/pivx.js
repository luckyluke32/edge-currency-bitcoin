import { type EdgeCurrencyInfo } from 'edge-core-js/types'

import type { EngineCurrencyInfo } from '../engine/currencyEngine.js'
import type { BcoinCurrencyInfo } from '../utils/bcoinExtender/bcoinExtender.js'
import { imageServerUrl } from './constants.js'

const bcoinInfo: BcoinCurrencyInfo = {
  type: 'pivx',
  magic: ,
  formats: ['bip44','bip32'],
  keyPrefix: {
    privkey: 0xcc,
    xpubkey: 0x02fe52cc,
    xprivkey: 0x02fe52f8,
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
  network: 'pivx',
  currencyCode: 'pivx',
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
  currencyCode: 'PIVX',
  displayName: 'PIVX',
  pluginName: 'pivx',
  walletType: 'wallet:pivx',

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
  blockExplorer: 'https://explorer.pivx.link/blocks/%s',
  addressExplorer: 'https://explorer.pivx.link/address/%s',
  transactionExplorer: 'https://explorer.pivx.link/tx/%s',

  // Images:
  symbolImage: `${imageServerUrl}/-logo-solo-64.png`,
  symbolImageDarkMono: `${imageServerUrl}/-logo-solo-64.png`
}

export const  = { bcoinInfo, engineInfo, currencyInfo }