/**
 * Coinify
 *
 * References:
 * https://en.wikipedia.org/wiki/ISO_4217
 * http://www.iotafinance.com/en/ISO-4217-Currency-Codes.html
 * http://www.xe.com/symbols.php
 * https://gist.github.com/Fluidbyte/2973986
 */
class Coinify {

  constructor () {
    this.g = this.get = function (code) {
      if (typeof this.currencies[code] === 'undefined') {
        return this.readable({
          s: code,
          n: 'Unknown',
          sn: code,
          d: 0,
          r: 0,
          c: code,
          np: 'Unknown'
        })
      }
      return this.readable(this.currencies[code])
    }
    this.readable = function (currency) {
      return {
        symbol: currency.s,
        name: currency.n,
        symbol_native: currency.sn,
        decimal_digits: currency.d,
        rounding: currency.r,
        code: currency.c,
        name_plural: currency.np
      }
    }
    this.s = this.symbol = function (code, native = true) {
      if (typeof this.currencies[code] === 'undefined') {
        return code
      }
      return native ? this.currencies[code].symbol_native : this.currencies[code].symbol
    }
    this.d = this.dec = this.decimals = function (code) {
      if (typeof this.currencies[code] === 'undefined') {
        return 0
      }
      return this.currencies[code].decimal_digits
    }
    this.r = this.rounding = function (code) {
      if (typeof this.currencies[code] === 'undefined') {
        return 0
      }
      return this.currencies[code].rounding
    }
    this.n = this.name = function (code, plural = false) {
      if (typeof this.currencies[code] === 'undefined') {
        return 'Unknown'
      }
      return plural ? this.currencies[code].name_plural : this.currencies[code].name
    }
    this.currencies = {
      'AED': {
        s: 'AED',
        n: 'United Arab Emirates Dirham',
        sn: 'د.إ.‏',
        d: 2,
        r: 0,
        c: 'AED',
        np: 'UAE dirhams'
      },
      'AFN': {
        s: 'Af',
        n: 'Afghan Afghani',
        sn: '؋',
        d: 0,
        r: 0,
        c: 'AFN',
        np: 'Afghan Afghanis'
      },
      'ALL': {
        s: 'ALL',
        n: 'Albanian Lek',
        sn: 'Lek',
        d: 0,
        r: 0,
        c: 'ALL',
        np: 'Albanian lekë'
      },
      'AMD': {
        s: 'AMD',
        n: 'Armenian Dram',
        sn: 'դր.',
        d: 0,
        r: 0,
        c: 'AMD',
        np: 'Armenian drams'
      },
      'ANG': {
        s: 'ƒ',
        n: 'Netherlands Antilles Guilder',
        sn: 'ƒ',
        d: 2,
        r: 0,
        c: 'ANG',
        np: 'Netherlands Antilles Guilder'
      },
      'AOA': {
        s: 'Kz',
        n: 'Angolan kwanza',
        sn: 'Kz',
        d: 2,
        r: 0,
        c: 'AOA',
        np: 'Angolan kwanza'
      },
      'ARS': {
        s: 'AR$',
        n: 'Argentine Peso',
        sn: '$',
        d: 2,
        r: 0,
        c: 'ARS',
        np: 'Argentine pesos'
      },
      'AUD': {
        s: 'AU$',
        n: 'Australian Dollar',
        sn: '$',
        d: 2,
        r: 0,
        c: 'AUD',
        np: 'Australian dollars'
      },
      'AWG': {
        s: 'ƒ',
        n: 'Aruban Guilder',
        sn: 'ƒ',
        d: 2,
        r: 0,
        c: 'AWG',
        np: 'Aruban Guilders'
      },
      'AFL': {
        s: 'Afl.',
        n: 'Aruban Florin',
        sn: 'Afl.',
        d: 2,
        r: 0,
        c: 'AFL',
        np: 'Aruban Florins'
      },
      'AZN': {
        s: 'man.',
        n: 'Azerbaijani Manat',
        sn: 'ман.',
        d: 2,
        r: 0,
        c: 'AZN',
        np: 'Azerbaijani manats'
      },
      'BAM': {
        s: 'KM',
        n: 'Bosnia-Herzegovina Convertible Mark',
        sn: 'KM',
        d: 2,
        r: 0,
        c: 'BAM',
        np: 'Bosnia-Herzegovina convertible marks'
      },
      'BDT': {
        s: 'Tk',
        n: 'Bangladeshi Taka',
        sn: '৳',
        d: 2,
        r: 0,
        c: 'BDT',
        np: 'Bangladeshi takas'
      },
      'BBD': {
        s: 'Bds$',
        n: 'Barbados dollar',
        sn: '$',
        d: 2,
        r: 0,
        c: 'BBD',
        np: 'Barbados dollar'
      },
      'BGN': {
        s: 'BGN',
        n: 'Bulgarian Lev',
        sn: 'лв.',
        d: 2,
        r: 0,
        c: 'BGN',
        np: 'Bulgarian leva'
      },
      'BHD': {
        s: 'BD',
        n: 'Bahraini Dinar',
        sn: 'د.ب.‏',
        d: 3,
        r: 0,
        c: 'BHD',
        np: 'Bahraini dinars'
      },
      'BIF': {
        s: 'FBu',
        n: 'Burundian Franc',
        sn: 'FBu',
        d: 0,
        r: 0,
        c: 'BIF',
        np: 'Burundian francs'
      },
      'BSD': {
        s: '$',
        n: 'Bahamas Dollar',
        sn: '$',
        d: 2,
        r: 0,
        c: 'BSD',
        np: 'Bahamas Dollar'
      },
      'BMD': {
        s: '$',
        n: 'Bermuda Dollar',
        sn: '$',
        d: 2,
        r: 0,
        c: 'BMD',
        np: 'Bermuda Dollars'
      },
      'BND': {
        s: 'BN$',
        n: 'Brunei Dollar',
        sn: '$',
        d: 2,
        r: 0,
        c: 'BND',
        np: 'Brunei dollars'
      },
      'BOB': {
        s: 'Bs',
        n: 'Bolivian Boliviano',
        sn: 'Bs',
        d: 2,
        r: 0,
        c: 'BOB',
        np: 'Bolivian bolivianos'
      },
      'BOV': {
        s: '-',
        n: 'Bolivian Mvdol',
        sn: '-',
        d: 2,
        r: 0,
        c: 'BOV',
        np: 'Bolivian Mvdol'
      },
      'BRL': {
        s: 'R$',
        n: 'Brazilian Real',
        sn: 'R$',
        d: 2,
        r: 0,
        c: 'BRL',
        np: 'Brazilian reals'
      },
      'BTN': {
        s: 'Nu.',
        n: 'Bhutanese ngultrum',
        sn: 'Nu.',
        d: 2,
        r: 0,
        c: 'BTN',
        np: 'Bhutanese ngultrum'
      },
      'BWP': {
        s: 'BWP',
        n: 'Botswanan Pula',
        sn: 'P',
        d: 2,
        r: 0,
        c: 'BWP',
        np: 'Botswanan pulas'
      },
      'BYN': {
        s: 'Br',
        n: 'Belarusian Ruble',
        sn: 'Br',
        d: 0,
        r: 0,
        c: 'BYR',
        np: 'Belarusian rubles'
      },
      'BZD': {
        s: 'BZ$',
        n: 'Belize Dollar',
        sn: '$',
        d: 2,
        r: 0,
        c: 'BZD',
        np: 'Belize dollars'
      },
      'CAD': {
        s: 'CA$',
        n: 'Canadian Dollar',
        sn: '$',
        d: 2,
        r: 0,
        c: 'CAD',
        np: 'Canadian dollars'
      },
      'CDF': {
        s: 'CDF',
        n: 'Congolese Franc',
        sn: 'FrCD',
        d: 2,
        r: 0,
        c: 'CDF',
        np: 'Congolese francs'
      },
      'CHE': {
        s: '-',
        n: 'WIR Euro (complementary currency)',
        sn: '-',
        d: 2,
        r: 0,
        c: 'CHE',
        np: 'WIR Euros (complementary currency)'
      },
      'CHF': {
        s: 'CHF',
        n: 'Swiss Franc',
        sn: 'CHF',
        d: 2,
        r: 0.05,
        c: 'CHF',
        np: 'Swiss francs'
      },
      'CHW': {
        s: '-',
        n: 'WIR Franc (complementary currency)',
        sn: '-',
        d: 2,
        r: 0,
        c: 'CHW',
        np: 'WIR Franc (complementary currency)'
      },
      'CLF': {
        s: 'UF',
        n: 'Unidad de Fomento (funds code)',
        sn: 'UF',
        d: 4,
        r: 0,
        c: 'CLF',
        np: 'Unidad de Fomento (funds code)'
      },
      'CLP': {
        s: 'CL$',
        n: 'Chilean Peso',
        sn: '$',
        d: 0,
        r: 0,
        c: 'CLP',
        np: 'Chilean pesos'
      },
      'CNY': {
        s: 'CN¥',
        n: 'Chinese Yuan',
        sn: 'CN¥',
        d: 2,
        r: 0,
        c: 'CNY',
        np: 'Chinese yuan'
      },
      'COP': {
        s: 'CO$',
        n: 'Colombian Peso',
        sn: '$',
        d: 0,
        r: 0,
        c: 'COP',
        np: 'Colombian pesos'
      },
      'COU': {
        s: '-',
        n: 'Unidad de Valor Real (UVR) (funds code)',
        sn: '-',
        d: 2,
        r: 0,
        c: 'COU',
        np: 'Unidad de Valor Real (UVR) (funds code)'
      },
      'CRC': {
        s: '₡',
        n: 'Costa Rican Colón',
        sn: '₡',
        d: 0,
        r: 0,
        c: 'CRC',
        np: 'Costa Rican colóns'
      },
      'CUC': {
        s: 'CUC$',
        n: 'Cuban convertible peso',
        sn: '$',
        d: 2,
        r: 0,
        c: 'CUP',
        np: 'Cuban convertible pesos'
      },
      'CUP': {
        s: '₱',
        n: 'Cuba Peso',
        sn: '₱',
        d: 0,
        r: 0,
        c: 'CUP',
        np: 'Cuba Pesos'
      },
      'CVE': {
        s: 'CV$',
        n: 'Cape Verdean Escudo',
        sn: 'CV$',
        d: 0,
        r: 0,
        c: 'CVE',
        np: 'Cape Verdean escudos'
      },
      'CZK': {
        s: 'Kč',
        n: 'Czech Republic Koruna',
        sn: 'Kč',
        d: 2,
        r: 0,
        c: 'CZK',
        np: 'Czech Republic korunas'
      },
      'DJF': {
        s: 'Fdj',
        n: 'Djiboutian Franc',
        sn: 'Fdj',
        d: 0,
        r: 0,
        c: 'DJF',
        np: 'Djiboutian francs'
      },
      'DKK': {
        s: 'Dkr',
        n: 'Danish Krone',
        sn: 'kr',
        d: 2,
        r: 0,
        c: 'DKK',
        np: 'Danish kroner'
      },
      'DOP': {
        s: 'RD$',
        n: 'Dominican Peso',
        sn: 'RD$',
        d: 2,
        r: 0,
        c: 'DOP',
        np: 'Dominican pesos'
      },
      'DZD': {
        s: 'DA',
        n: 'Algerian Dinar',
        sn: 'د.ج.‏',
        d: 2,
        r: 0,
        c: 'DZD',
        np: 'Algerian dinars'
      },
      'EEK': {
        s: 'Ekr',
        n: 'Estonian Kroon',
        sn: 'kr',
        d: 2,
        r: 0,
        c: 'EEK',
        np: 'Estonian kroons'
      },
      'EGP': {
        s: 'EGP',
        n: 'Egyptian Pound',
        sn: 'ج.م.‏',
        d: 2,
        r: 0,
        c: 'EGP',
        np: 'Egyptian pounds'
      },
      'ERN': {
        s: 'Nfk',
        n: 'Eritrean Nakfa',
        sn: 'Nfk',
        d: 2,
        r: 0,
        c: 'ERN',
        np: 'Eritrean nakfas'
      },
      'ETB': {
        s: 'Br',
        n: 'Ethiopian Birr',
        sn: 'Br',
        d: 2,
        r: 0,
        c: 'ETB',
        np: 'Ethiopian birrs'
      },
      'EUR': {
        s: '€',
        n: 'Euro',
        sn: '€',
        d: 2,
        r: 0,
        c: 'EUR',
        np: 'euros'
      },
      'FJD': {
        s: '$',
        n: 'Fiji Dollar',
        sn: '$',
        d: 2,
        r: 0,
        c: 'FJD',
        np: 'Fiji Dollars'
      },
      'FKP': {
        s: '£',
        n: 'Falkland Islands (Malvinas) Pound',
        sn: '£',
        d: 2,
        r: 0,
        c: 'FKP',
        np: 'Falkland Islands (Malvinas) Pound'
      },
      'GBP': {
        s: '£',
        n: 'British Pound Sterling',
        sn: '£',
        d: 2,
        r: 0,
        c: 'GBP',
        np: 'British pounds sterling'
      },
      'GEL': {
        s: 'GEL',
        n: 'Georgian Lari',
        sn: 'GEL',
        d: 2,
        r: 0,
        c: 'GEL',
        np: 'Georgian laris'
      },
      'GGP': {
        s: '£',
        n: 'Guernsey Pound',
        sn: '£',
        d: 2,
        r: 0,
        c: 'GGP',
        np: 'Guernsey Pounds'
      },
      'GHS': {
        s: 'GH₵',
        n: 'Ghanaian Cedi',
        sn: 'GH₵',
        d: 2,
        r: 0,
        c: 'GHS',
        np: 'Ghanaian cedis'
      },
      'GIP': {
        s: '£',
        n: 'Gibraltar Pound',
        sn: '£',
        d: 2,
        r: 0,
        c: 'GIP',
        np: 'Gibraltar Pounds'
      },
      'GMD': {
        s: 'D',
        n: 'Gambian dalasi',
        sn: 'D',
        d: 2,
        r: 0,
        c: 'GMD',
        np: 'Gambian dalasi'
      },
      'GNF': {
        s: 'FG',
        n: 'Guinean Franc',
        sn: 'FG',
        d: 0,
        r: 0,
        c: 'GNF',
        np: 'Guinean francs'
      },
      'GTQ': {
        s: 'GTQ',
        n: 'Guatemalan Quetzal',
        sn: 'Q',
        d: 2,
        r: 0,
        c: 'GTQ',
        np: 'Guatemalan quetzals'
      },
      'GYD': {
        s: '$',
        n: 'Guyana Dollar',
        sn: '$',
        d: 2,
        r: 0,
        c: 'GYD',
        np: 'Guyana Dollars'
      },
      'HKD': {
        s: 'HK$',
        n: 'Hong Kong Dollar',
        sn: '$',
        d: 2,
        r: 0,
        c: 'HKD',
        np: 'Hong Kong dollars'
      },
      'HNL': {
        s: 'HNL',
        n: 'Honduran Lempira',
        sn: 'L',
        d: 2,
        r: 0,
        c: 'HNL',
        np: 'Honduran lempiras'
      },
      'HRK': {
        s: 'kn',
        n: 'Croatian Kuna',
        sn: 'kn',
        d: 2,
        r: 0,
        c: 'HRK',
        np: 'Croatian kunas'
      },
      'HTG': {
        s: 'G',
        n: 'Haitian gourde',
        sn: 'G',
        d: 2,
        r: 0,
        c: 'HTG',
        np: 'Haitian gourde'
      },
      'HUF': {
        s: 'Ft',
        n: 'Hungarian Forint',
        sn: 'Ft',
        d: 0,
        r: 0,
        c: 'HUF',
        np: 'Hungarian forints'
      },
      'IDR': {
        s: 'Rp',
        n: 'Indonesian Rupiah',
        sn: 'Rp',
        d: 0,
        r: 0,
        c: 'IDR',
        np: 'Indonesian rupiahs'
      },
      'ILS': {
        s: '₪',
        n: 'Israeli New Sheqel',
        sn: '₪',
        d: 2,
        r: 0,
        c: 'ILS',
        np: 'Israeli new sheqels'
      },
      'IMP': {
        s: '£',
        n: 'Isle of Man Pound',
        sn: '£',
        d: 2,
        r: 0,
        c: 'IMP',
        np: 'Isle of Man Pounds'
      },
      'INR': {
        s: 'Rs',
        n: 'Indian Rupee',
        sn: 'টকা',
        d: 2,
        r: 0,
        c: 'INR',
        np: 'Indian rupees'
      },
      'IQD': {
        s: 'IQD',
        n: 'Iraqi Dinar',
        sn: 'د.ع.‏',
        d: 3,
        r: 0,
        c: 'IQD',
        np: 'Iraqi dinars'
      },
      'IRR': {
        s: 'IRR',
        n: 'Iranian Rial',
        sn: '﷼',
        d: 0,
        r: 0,
        c: 'IRR',
        np: 'Iranian rials'
      },
      'ISK': {
        s: 'Ikr',
        n: 'Icelandic Króna',
        sn: 'kr',
        d: 0,
        r: 0,
        c: 'ISK',
        np: 'Icelandic krónur'
      },
      'JEP': {
        s: '£',
        n: 'Jersey Pound',
        sn: '£',
        d: 2,
        r: 0,
        c: 'JEP',
        np: 'Jersey Pounds'
      },
      'JMD': {
        s: 'J$',
        n: 'Jamaican Dollar',
        sn: '$',
        d: 2,
        r: 0,
        c: 'JMD',
        np: 'Jamaican dollars'
      },
      'JOD': {
        s: 'JD',
        n: 'Jordanian Dinar',
        sn: 'د.أ.‏',
        d: 3,
        r: 0,
        c: 'JOD',
        np: 'Jordanian dinars'
      },
      'JPY': {
        s: '¥',
        n: 'Japanese Yen',
        sn: '￥',
        d: 0,
        r: 0,
        c: 'JPY',
        np: 'Japanese yen'
      },
      'KES': {
        s: 'Ksh',
        n: 'Kenyan Shilling',
        sn: 'Ksh',
        d: 2,
        r: 0,
        c: 'KES',
        np: 'Kenyan shillings'
      },
      'KGS': {
        s: 'лв',
        n: 'Kyrgyzstan Som',
        sn: 'лв',
        d: 2,
        r: 0,
        c: 'KGS',
        np: 'Kyrgyzstan Som'
      },
      'KHR': {
        s: 'KHR',
        n: 'Cambodian Riel',
        sn: '៛',
        d: 2,
        r: 0,
        c: 'KHR',
        np: 'Cambodian riels'
      },
      'KMF': {
        s: 'CF',
        n: 'Comorian Franc',
        sn: 'FC',
        d: 0,
        r: 0,
        c: 'KMF',
        np: 'Comorian francs'
      },
      'KPW': {
        s: '₩',
        n: 'North Korean Won',
        sn: '₩',
        d: 0,
        r: 0,
        c: 'KPW',
        np: 'North Korean Won'
      },
      'KRW': {
        s: '₩',
        n: 'South Korean Won',
        sn: '₩',
        d: 0,
        r: 0,
        c: 'KRW',
        np: 'South Korean won'
      },
      'KWD': {
        s: 'KD',
        n: 'Kuwaiti Dinar',
        sn: 'د.ك.‏',
        d: 3,
        r: 0,
        c: 'KWD',
        np: 'Kuwaiti dinars'
      },
      'KYD': {
        s: '$',
        n: 'Cayman Islands Dollar',
        sn: '$',
        d: 2,
        r: 0,
        c: 'KYD',
        np: 'Cayman Islands Dollars'
      },
      'KZT': {
        s: 'KZT',
        n: 'Kazakhstani Tenge',
        sn: 'тңг.',
        d: 2,
        r: 0,
        c: 'KZT',
        np: 'Kazakhstani tenges'
      },
      'LAK': {
        s: '₭',
        n: 'Laos Kip',
        sn: '₭',
        d: 2,
        r: 0,
        c: 'LAK',
        np: 'Laos Kip'
      },
      'LBP': {
        s: 'LB£',
        n: 'Lebanese Pound',
        sn: 'ل.ل.‏',
        d: 0,
        r: 0,
        c: 'LBP',
        np: 'Lebanese pounds'
      },
      'LKR': {
        s: 'SLRs',
        n: 'Sri Lankan Rupee',
        sn: 'SL Re',
        d: 2,
        r: 0,
        c: 'LKR',
        np: 'Sri Lankan rupees'
      },
      'LRD': {
        s: '$',
        n: 'Liberia Dollar',
        sn: '$',
        d: 2,
        r: 0,
        c: 'LRD',
        np: 'Liberia Dollars'
      },
      'LSL': {
        s: 'L',
        n: 'Lesotho loti',
        sn: 'L',
        d: 2,
        r: 0,
        c: 'LSL',
        np: 'Lesotho loti'
      },
      'LTL': {
        s: 'Lt',
        n: 'Lithuanian Litas',
        sn: 'Lt',
        d: 2,
        r: 0,
        c: 'LTL',
        np: 'Lithuanian litai'
      },
      'LVL': {
        s: 'Ls',
        n: 'Latvian Lats',
        sn: 'Ls',
        d: 2,
        r: 0,
        c: 'LVL',
        np: 'Latvian lati'
      },
      'LYD': {
        s: 'LD',
        n: 'Libyan Dinar',
        sn: 'د.ل.‏',
        d: 3,
        r: 0,
        c: 'LYD',
        np: 'Libyan dinars'
      },
      'MAD': {
        s: 'MAD',
        n: 'Moroccan Dirham',
        sn: 'د.م.‏',
        d: 2,
        r: 0,
        c: 'MAD',
        np: 'Moroccan dirhams'
      },
      'MDL': {
        s: 'MDL',
        n: 'Moldovan Leu',
        sn: 'MDL',
        d: 2,
        r: 0,
        c: 'MDL',
        np: 'Moldovan lei'
      },
      'MGA': {
        s: 'MGA',
        n: 'Malagasy Ariary',
        sn: 'MGA',
        d: 0,
        r: 0,
        c: 'MGA',
        np: 'Malagasy Ariaries'
      },
      'MKD': {
        s: 'MKD',
        n: 'Macedonian Denar',
        sn: 'MKD',
        d: 2,
        r: 0,
        c: 'MKD',
        np: 'Macedonian denari'
      },
      'MMK': {
        s: 'MMK',
        n: 'Myanma Kyat',
        sn: 'K',
        d: 0,
        r: 0,
        c: 'MMK',
        np: 'Myanma kyats'
      },
      'MNT': {
        s: '₮',
        n: 'Mongolia Tughrik',
        sn: '₮',
        d: 2,
        r: 0,
        c: 'MNT',
        np: 'Mongolia Tughrik'
      },
      'MOP': {
        s: 'MOP$',
        n: 'Macanese Pataca',
        sn: 'MOP$',
        d: 2,
        r: 0,
        c: 'MOP',
        np: 'Macanese patacas'
      },
      'MRO': {
        s: 'UM',
        n: 'Mauritanian ouguiya',
        sn: 'UM',
        d: 1,
        r: 0,
        c: 'MUR',
        np: 'Mauritanian ouguiya'
      },
      'MUR': {
        s: 'MURs',
        n: 'Mauritian Rupee',
        sn: 'MURs',
        d: 0,
        r: 0,
        c: 'MUR',
        np: 'Mauritian rupees'
      },
      'MVR': {
        s: 'MRf',
        n: 'Maldivian rufiyaa',
        sn: 'Rf',
        d: 2,
        r: 0,
        c: 'MVR',
        np: 'Maldivian rufiyaa'
      },
      'MWK': {
        s: 'MK',
        n: 'Malawian kwacha',
        sn: 'MK',
        d: 2,
        r: 0,
        c: 'MWK',
        np: 'Malawian kwacha'
      },
      'MXN': {
        s: 'MX$',
        n: 'Mexican Peso',
        sn: '$',
        d: 2,
        r: 0,
        c: 'MXN',
        np: 'Mexican pesos'
      },
      'MXV': {
        s: '-',
        n: 'Mexican Unidad de Inversion (UDI) (funds code)',
        sn: '-',
        d: 2,
        r: 0,
        c: 'MXV',
        np: 'Mexican Unidad de Inversion (UDI) (funds code)'
      },
      'MYR': {
        s: 'RM',
        n: 'Malaysian Ringgit',
        sn: 'RM',
        d: 2,
        r: 0,
        c: 'MYR',
        np: 'Malaysian ringgits'
      },
      'MZN': {
        s: 'MTn',
        n: 'Mozambican Metical',
        sn: 'MTn',
        d: 2,
        r: 0,
        c: 'MZN',
        np: 'Mozambican meticals'
      },
      'NAD': {
        s: 'N$',
        n: 'Namibian Dollar',
        sn: 'N$',
        d: 2,
        r: 0,
        c: 'NAD',
        np: 'Namibian dollars'
      },
      'NGN': {
        s: '₦',
        n: 'Nigerian Naira',
        sn: '₦',
        d: 2,
        r: 0,
        c: 'NGN',
        np: 'Nigerian nairas'
      },
      'NIO': {
        s: 'C$',
        n: 'Nicaraguan Córdoba',
        sn: 'C$',
        d: 2,
        r: 0,
        c: 'NIO',
        np: 'Nicaraguan córdobas'
      },
      'NOK': {
        s: 'Nkr',
        n: 'Norwegian Krone',
        sn: 'kr',
        d: 2,
        r: 0,
        c: 'NOK',
        np: 'Norwegian kroner'
      },
      'NPR': {
        s: 'NPRs',
        n: 'Nepalese Rupee',
        sn: 'नेरू',
        d: 2,
        r: 0,
        c: 'NPR',
        np: 'Nepalese rupees'
      },
      'PRB': {
        s: 'руб',
        n: 'Transnistrian ruble',
        sn: 'руб',
        d: 2,
        r: 0,
        c: 'PRB',
        np: 'Transnistrian rubles'
      },
      'NZD': {
        s: 'NZ$',
        n: 'New Zealand Dollar',
        sn: '$',
        d: 2,
        r: 0,
        c: 'NZD',
        np: 'New Zealand dollars'
      },
      'OMR': {
        s: 'OMR',
        n: 'Omani Rial',
        sn: 'ر.ع.‏',
        d: 3,
        r: 0,
        c: 'OMR',
        np: 'Omani rials'
      },
      'PAB': {
        s: 'B/.',
        n: 'Panamanian Balboa',
        sn: 'B/.',
        d: 2,
        r: 0,
        c: 'PAB',
        np: 'Panamanian balboas'
      },
      'PEN': {
        s: 'S/.',
        n: 'Peruvian Nuevo Sol',
        sn: 'S/.',
        d: 2,
        r: 0,
        c: 'PEN',
        np: 'Peruvian nuevos soles'
      },
      'PGK': {
        s: 'K',
        n: 'Papua New Guinean kina',
        sn: 'K',
        d: 2,
        r: 0,
        c: 'PGK',
        np: 'Papua New Guinean kina'
      },
      'PHP': {
        s: '₱',
        n: 'Philippine Peso',
        sn: '₱',
        d: 2,
        r: 0,
        c: 'PHP',
        np: 'Philippine pesos'
      },
      'PKR': {
        s: 'PKRs',
        n: 'Pakistani Rupee',
        sn: '₨',
        d: 0,
        r: 0,
        c: 'PKR',
        np: 'Pakistani rupees'
      },
      'PLN': {
        s: 'zł',
        n: 'Polish Zloty',
        sn: 'zł',
        d: 2,
        r: 0,
        c: 'PLN',
        np: 'Polish zlotys'
      },
      'PYG': {
        s: '₲',
        n: 'Paraguayan Guarani',
        sn: '₲',
        d: 0,
        r: 0,
        c: 'PYG',
        np: 'Paraguayan guaranis'
      },
      'QAR': {
        s: 'QR',
        n: 'Qatari Rial',
        sn: 'ر.ق.‏',
        d: 2,
        r: 0,
        c: 'QAR',
        np: 'Qatari rials'
      },
      'RON': {
        s: 'RON',
        n: 'Romanian Leu',
        sn: 'RON',
        d: 2,
        r: 0,
        c: 'RON',
        np: 'Romanian lei'
      },
      'RSD': {
        s: 'din.',
        n: 'Serbian Dinar',
        sn: 'дин.',
        d: 0,
        r: 0,
        c: 'RSD',
        np: 'Serbian dinars'
      },
      'RUB': {
        s: 'RUB',
        n: 'Russian Ruble',
        sn: 'руб.',
        d: 2,
        r: 0,
        c: 'RUB',
        np: 'Russian rubles'
      },
      'RWF': {
        s: 'RWF',
        n: 'Rwandan Franc',
        sn: 'FR',
        d: 0,
        r: 0,
        c: 'RWF',
        np: 'Rwandan francs'
      },
      'SAR': {
        s: 'SR',
        n: 'Saudi Riyal',
        sn: 'ر.س.‏',
        d: 2,
        r: 0,
        c: 'SAR',
        np: 'Saudi riyals'
      },
      'SBD': {
        s: '$',
        n: 'Solomon Islands Dollar',
        sn: '$',
        d: 2,
        r: 0,
        c: 'SBD',
        np: 'Solomon Islands Dollars'
      },
      'SCR': {
        s: '₨',
        n: 'Seychelles Rupee',
        sn: '₨',
        d: 2,
        r: 0,
        c: 'SCR',
        np: 'Seychelles Rupees'
      },
      'SDG': {
        s: 'SDG',
        n: 'Sudanese Pound',
        sn: 'SDG',
        d: 2,
        r: 0,
        c: 'SDG',
        np: 'Sudanese pounds'
      },
      'SEK': {
        s: 'Skr',
        n: 'Swedish Krona',
        sn: 'kr',
        d: 2,
        r: 0,
        c: 'SEK',
        np: 'Swedish kronor'
      },
      'SGD': {
        s: 'S$',
        n: 'Singapore Dollar',
        sn: '$',
        d: 2,
        r: 0,
        c: 'SGD',
        np: 'Singapore dollars'
      },
      'SHP': {
        s: '£',
        n: 'Saint Helena Pound',
        sn: '£',
        d: 2,
        r: 0,
        c: 'SHP',
        np: 'Saint Helena Pounds'
      },
      'SLL': {
        s: 'Le',
        n: 'Sierra Leonean leone',
        sn: 'Le',
        d: 2,
        r: 0,
        c: 'SLL',
        np: 'Sierra Leonean leone'
      },
      'SOS': {
        s: 'Ssh',
        n: 'Somali Shilling',
        sn: 'Ssh',
        d: 0,
        r: 0,
        c: 'SOS',
        np: 'Somali shillings'
      },
      'SRD': {
        s: '$',
        n: 'Suriname Dollar',
        sn: '$',
        d: 2,
        r: 0,
        c: 'SRD',
        np: 'Suriname Dollars'
      },
      'SSP': {
        s: 'SSP',
        n: 'South Sudanese pound',
        sn: 'SSP',
        d: 2,
        r: 0,
        c: 'SSP',
        np: 'South Sudanese pound'
      },
      'STD': {
        s: 'Db',
        n: 'São Tomé and Príncipe dobra',
        sn: 'Db',
        d: 2,
        r: 0,
        c: 'STD',
        np: 'São Tomé and Príncipe dobra'
      },
      'SVC': {
        s: '$',
        n: 'El Salvador Colon',
        sn: '$',
        d: 0,
        r: 0,
        c: 'SVC',
        np: 'El Salvador Colon'
      },
      'SYP': {
        s: 'SY£',
        n: 'Syrian Pound',
        sn: 'ل.س.‏',
        d: 0,
        r: 0,
        c: 'SYP',
        np: 'Syrian pounds'
      },
      'SZL': {
        s: 'L',
        n: 'Swazi lilangeni',
        sn: 'L',
        d: 2,
        r: 0,
        c: 'SZL',
        np: 'Swazi lilangeni'
      },
      'THB': {
        s: '฿',
        n: 'Thai Baht',
        sn: '฿',
        d: 2,
        r: 0,
        c: 'THB',
        np: 'Thai baht'
      },
      'TJS': {
        s: '-',
        n: 'Tajikistani somoni',
        sn: '-',
        d: 2,
        r: 0,
        c: 'TJS',
        np: 'Tajikistani somoni'
      },
      'TMT': {
        s: 'T',
        n: 'Turkmenistan manat',
        sn: 'T',
        d: 2,
        r: 0,
        c: 'TMT',
        np: 'Turkmenistan manat'
      },
      'TND': {
        s: 'DT',
        n: 'Tunisian Dinar',
        sn: 'د.ت.‏',
        d: 3,
        r: 0,
        c: 'TND',
        np: 'Tunisian dinars'
      },
      'TOP': {
        s: 'T$',
        n: 'Tongan Paʻanga',
        sn: 'T$',
        d: 2,
        r: 0,
        c: 'TOP',
        np: 'Tongan paʻanga'
      },
      'TRY': {
        s: 'TL',
        n: 'Turkish Lira',
        sn: 'TL',
        d: 2,
        r: 0,
        c: 'TRY',
        np: 'Turkish Lira'
      },
      'TTD': {
        s: 'TT$',
        n: 'Trinidad and Tobago Dollar',
        sn: '$',
        d: 2,
        r: 0,
        c: 'TTD',
        np: 'Trinidad and Tobago dollars'
      },
      'TVD': {
        s: '$',
        n: 'Tuvalu Dollar',
        sn: '$',
        d: 2,
        r: 0,
        c: 'TVD',
        np: 'Tuvalu Dollars'
      },
      'TWD': {
        s: 'NT$',
        n: 'New Taiwan Dollar',
        sn: 'NT$',
        d: 2,
        r: 0,
        c: 'TWD',
        np: 'New Taiwan dollars'
      },
      'TZS': {
        s: 'TSh',
        n: 'Tanzanian Shilling',
        sn: 'TSh',
        d: 0,
        r: 0,
        c: 'TZS',
        np: 'Tanzanian shillings'
      },
      'UAH': {
        s: '₴',
        n: 'Ukrainian Hryvnia',
        sn: '₴',
        d: 2,
        r: 0,
        c: 'UAH',
        np: 'Ukrainian hryvnias'
      },
      'UGX': {
        s: 'USh',
        n: 'Ugandan Shilling',
        sn: 'USh',
        d: 0,
        r: 0,
        c: 'UGX',
        np: 'Ugandan shillings'
      },
      'USD': {
        s: '$',
        n: 'US Dollar',
        sn: '$',
        d: 2,
        r: 0,
        c: 'USD',
        np: 'US dollars'
      },
      'USN': {
        s: '$',
        n: 'United States dollar (next day) (funds code)',
        sn: '$',
        d: 2,
        r: 0,
        c: 'USN',
        np: 'United States dollars (next day) (funds code)'
      },
      'UYI': {
        s: 'UYI',
        n: 'Uruguay Peso en Unidades Indexadas (URUIURUI) (funds code)',
        sn: 'UYI',
        d: 0,
        r: 0,
        c: 'UYU',
        np: 'Uruguay Peso en Unidades Indexadas (URUIURUI) (funds code)'
      },
      'UYU': {
        s: '$U',
        n: 'Uruguayan Peso',
        sn: '$',
        d: 2,
        r: 0,
        c: 'UYU',
        np: 'Uruguayan pesos'
      },
      'UZS': {
        s: 'UZS',
        n: 'Uzbekistan Som',
        sn: 'UZS',
        d: 0,
        r: 0,
        c: 'UZS',
        np: 'Uzbekistan som'
      },
      'VEF': {
        s: 'Bs.F.',
        n: 'Venezuelan Bolívar',
        sn: 'Bs.F.',
        d: 2,
        r: 0,
        c: 'VEF',
        np: 'Venezuelan bolívars'
      },
      'VND': {
        s: '₫',
        n: 'Vietnamese Dong',
        sn: '₫',
        d: 0,
        r: 0,
        c: 'VND',
        np: 'Vietnamese dong'
      },
      'VUV': {
        s: 'VT',
        n: 'Vanuatu vatu',
        sn: 'VT',
        d: 0,
        r: 0,
        c: 'VUV',
        np: 'Vanuatu vatu'
      },
      'WST': {
        s: 'WS$',
        n: 'Samoan tala',
        sn: '$',
        d: 2,
        r: 0,
        c: 'WST',
        np: 'Samoan tala'
      },
      'XAF': {
        s: 'FCFA',
        n: 'CFA Franc BEAC',
        sn: 'FCFA',
        d: 0,
        r: 0,
        c: 'XAF',
        np: 'CFA francs BEAC'
      },
      'XAG': {
        s: 'XAG',
        n: 'Silver (one troy ounce)',
        sn: 'XAG',
        d: 0,
        r: 0,
        c: 'XAG',
        np: 'Silver (one troy ounce)'
      },
      'XAU': {
        s: 'XAU',
        n: 'Gold (one troy ounce)',
        sn: 'XAU',
        d: 0,
        r: 0,
        c: 'XAU',
        np: 'Gold (one troy ounce)'
      },
      'XBA': {
        s: 'XBA',
        n: 'European Composite Unit (EURCO) (bond market unit)',
        sn: 'XBA',
        d: 0,
        r: 0,
        c: 'XBA',
        np: 'European Composite Unit (EURCO) (bond market unit)'
      },
      'XBB': {
        s: 'XBB',
        n: 'European Monetary Unit (E.M.U.-6) (bond market unit)',
        sn: 'XBB',
        d: 0,
        r: 0,
        c: 'XBB',
        np: 'European Monetary Unit (E.M.U.-6) (bond market unit)'
      },
      'XBC': {
        s: 'XBC',
        n: 'European Unit of Account 9 (E.U.A.-9) (bond market unit)',
        sn: 'XBC',
        d: 0,
        r: 0,
        c: 'XBC',
        np: 'European Unit of Account 9 (E.U.A.-9) (bond market unit)'
      },
      'XBD': {
        s: 'XBD',
        n: 'European Unit of Account 17 (E.U.A.-17) (bond market unit)',
        sn: 'XBD',
        d: 0,
        r: 0,
        c: 'XBD',
        np: 'European Unit of Account 17 (E.U.A.-17) (bond market unit)'
      },
      'XCD': {
        s: '$',
        n: 'East Caribbean Dollar',
        sn: '$',
        d: 0,
        r: 0,
        c: 'XCD',
        np: 'East Caribbean Dollars'
      },
      'XDR': {
        s: 'XDR',
        n: 'Special drawing rights',
        sn: 'XDR',
        d: 0,
        r: 0,
        c: 'XDR',
        np: 'Special drawing rights'
      },
      'XOF': {
        s: 'CFA',
        n: 'CFA Franc BCEAO',
        sn: 'CFA',
        d: 0,
        r: 0,
        c: 'XOF',
        np: 'CFA francs BCEAO'
      },
      'XPD': {
        s: 'XPD',
        n: 'Palladium (one troy ounce)',
        sn: 'XPD',
        d: 0,
        r: 0,
        c: 'XPD',
        np: 'Palladium (one troy ounce)'
      },
      'XPF': {
        s: 'CFP',
        n: 'CFP franc (franc Pacifique)',
        sn: 'CFP',
        d: 0,
        r: 0,
        c: 'XPF',
        np: 'CFP franc (franc Pacifique)'
      },
      'XPT': {
        s: 'XPT',
        n: 'Platinum (one troy ounce)',
        sn: 'XPT',
        d: 0,
        r: 0,
        c: 'XPT',
        np: 'Platinum (one troy ounce)'
      },
      'XSU': {
        s: 'Sucre',
        n: 'SUCRE',
        sn: 'Sucre',
        d: 0,
        r: 0,
        c: 'XSU',
        np: 'SUCRE'
      },
      'XTS': {
        s: 'XTS',
        n: 'Code reserved for testing purposes',
        sn: 'XTS',
        d: 0,
        r: 0,
        c: 'XTS',
        np: 'Code reserved for testing purposes'
      },
      'XUA': {
        s: 'XUA',
        n: 'ADB Unit of Account',
        sn: 'XUA',
        d: 0,
        r: 0,
        c: 'XUA',
        np: 'ADB Unit of Account'
      },
      'XXX': {
        s: 'XXX',
        n: 'No currency',
        sn: 'XXX',
        d: 0,
        r: 0,
        c: 'XTS',
        np: 'No currency'
      },
      'YER': {
        s: 'YR',
        n: 'Yemeni Rial',
        sn: 'ر.ي.‏',
        d: 0,
        r: 0,
        c: 'YER',
        np: 'Yemeni rials'
      },
      'ZAR': {
        s: 'R',
        n: 'South African Rand',
        sn: 'R',
        d: 2,
        r: 0,
        c: 'ZAR',
        np: 'South African rand'
      },
      'ZMK': {
        s: 'ZK',
        n: 'Zambian Kwacha',
        sn: 'ZK',
        d: 0,
        r: 0,
        c: 'ZMK',
        np: 'Zambian kwachas'
      },
      'ZMW': {
        s: 'ZK',
        n: 'Zambian kwacha',
        sn: 'ZK',
        d: 2,
        r: 0,
        c: 'ZMW',
        np: 'Zambian kwacha'
      },
      'ZWD': {
        s: 'Z$',
        n: 'Zimbabwe Dollar',
        sn: 'Z$',
        d: 2,
        r: 0,
        c: 'ZWD',
        np: 'Zimbabwe Dollars'
      },
      'ZWL': {
        s: '$',
        n: 'Zimbabwean dollar A/10',
        sn: '$',
        d: 2,
        r: 0,
        c: 'ZWL',
        np: 'Zimbabwean dollars A/10'
      }
    }
  }
}
export default new Coinify()
