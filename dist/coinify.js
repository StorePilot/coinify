'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Coinify = function Coinify() {
  _classCallCheck(this, Coinify);

  this.g = this.get = function (code) {
    if (typeof this.currencies[code] === 'undefined') {
      return {
        'symbol': code,
        'name': 'Unknown',
        'symbol_native': code,
        'decimal_digits': 0,
        'rounding': 0,
        'code': code,
        'name_plural': 'Unknown'
      };
    }
    return this.currencies[code];
  };
  this.s = this.symbol = function (code) {
    var native = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

    if (typeof this.currencies[code] === 'undefined') {
      return code;
    }
    return native ? this.currencies[code].symbol_native : this.currencies[code].symbol;
  };
  this.d = this.dec = this.decimals = function (code) {
    if (typeof this.currencies[code] === 'undefined') {
      return 0;
    }
    return this.currencies[code].decimal_digits;
  };
  this.r = this.rounding = function (code) {
    if (typeof this.currencies[code] === 'undefined') {
      return 0;
    }
    return this.currencies[code].rounding;
  };
  this.n = this.name = function (code) {
    var plural = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    if (typeof this.currencies[code] === 'undefined') {
      return 'Unknown';
    }
    return plural ? this.currencies[code].name_plural : this.currencies[code].name;
  };
  this.currencies = {
    'AED': {
      'symbol': 'AED',
      'name': 'United Arab Emirates Dirham',
      'symbol_native': 'د.إ.‏',
      'decimal_digits': 2,
      'rounding': 0,
      'code': 'AED',
      'name_plural': 'UAE dirhams'
    },
    'AFN': {
      'symbol': 'Af',
      'name': 'Afghan Afghani',
      'symbol_native': '؋',
      'decimal_digits': 0,
      'rounding': 0,
      'code': 'AFN',
      'name_plural': 'Afghan Afghanis'
    },
    'ALL': {
      'symbol': 'ALL',
      'name': 'Albanian Lek',
      'symbol_native': 'Lek',
      'decimal_digits': 0,
      'rounding': 0,
      'code': 'ALL',
      'name_plural': 'Albanian lekë'
    },
    'AMD': {
      'symbol': 'AMD',
      'name': 'Armenian Dram',
      'symbol_native': 'դր.',
      'decimal_digits': 0,
      'rounding': 0,
      'code': 'AMD',
      'name_plural': 'Armenian drams'
    },
    'ANG': {
      'symbol': 'ƒ',
      'name': 'Netherlands Antilles Guilder',
      'symbol_native': 'ƒ',
      'decimal_digits': 2,
      'rounding': 0,
      'code': 'ANG',
      'name_plural': 'Netherlands Antilles Guilder'
    },
    'AOA': {
      'symbol': 'Kz',
      'name': 'Angolan kwanza',
      'symbol_native': 'Kz',
      'decimal_digits': 2,
      'rounding': 0,
      'code': 'AOA',
      'name_plural': 'Angolan kwanza'
    },
    'ARS': {
      'symbol': 'AR$',
      'name': 'Argentine Peso',
      'symbol_native': '$',
      'decimal_digits': 2,
      'rounding': 0,
      'code': 'ARS',
      'name_plural': 'Argentine pesos'
    },
    'AUD': {
      'symbol': 'AU$',
      'name': 'Australian Dollar',
      'symbol_native': '$',
      'decimal_digits': 2,
      'rounding': 0,
      'code': 'AUD',
      'name_plural': 'Australian dollars'
    },
    'AWG': {
      'symbol': 'ƒ',
      'name': 'Aruban Guilder',
      'symbol_native': 'ƒ',
      'decimal_digits': 2,
      'rounding': 0,
      'code': 'AWG',
      'name_plural': 'Aruban Guilders'
    },
    'AFL': {
      'symbol': 'Afl.',
      'name': 'Aruban Florin',
      'symbol_native': 'Afl.',
      'decimal_digits': 2,
      'rounding': 0,
      'code': 'AFL',
      'name_plural': 'Aruban Florins'
    },
    'AZN': {
      'symbol': 'man.',
      'name': 'Azerbaijani Manat',
      'symbol_native': 'ман.',
      'decimal_digits': 2,
      'rounding': 0,
      'code': 'AZN',
      'name_plural': 'Azerbaijani manats'
    },
    'BAM': {
      'symbol': 'KM',
      'name': 'Bosnia-Herzegovina Convertible Mark',
      'symbol_native': 'KM',
      'decimal_digits': 2,
      'rounding': 0,
      'code': 'BAM',
      'name_plural': 'Bosnia-Herzegovina convertible marks'
    },
    'BDT': {
      'symbol': 'Tk',
      'name': 'Bangladeshi Taka',
      'symbol_native': '৳',
      'decimal_digits': 2,
      'rounding': 0,
      'code': 'BDT',
      'name_plural': 'Bangladeshi takas'
    },
    'BBD': {
      'symbol': 'Bds$',
      'name': 'Barbados dollar',
      'symbol_native': '$',
      'decimal_digits': 2,
      'rounding': 0,
      'code': 'BBD',
      'name_plural': 'Barbados dollar'
    },
    'BGN': {
      'symbol': 'BGN',
      'name': 'Bulgarian Lev',
      'symbol_native': 'лв.',
      'decimal_digits': 2,
      'rounding': 0,
      'code': 'BGN',
      'name_plural': 'Bulgarian leva'
    },
    'BHD': {
      'symbol': 'BD',
      'name': 'Bahraini Dinar',
      'symbol_native': 'د.ب.‏',
      'decimal_digits': 3,
      'rounding': 0,
      'code': 'BHD',
      'name_plural': 'Bahraini dinars'
    },
    'BIF': {
      'symbol': 'FBu',
      'name': 'Burundian Franc',
      'symbol_native': 'FBu',
      'decimal_digits': 0,
      'rounding': 0,
      'code': 'BIF',
      'name_plural': 'Burundian francs'
    },
    'BSD': {
      'symbol': '$',
      'name': 'Bahamas Dollar',
      'symbol_native': '$',
      'decimal_digits': 2,
      'rounding': 0,
      'code': 'BSD',
      'name_plural': 'Bahamas Dollar'
    },
    'BMD': {
      'symbol': '$',
      'name': 'Bermuda Dollar',
      'symbol_native': '$',
      'decimal_digits': 2,
      'rounding': 0,
      'code': 'BMD',
      'name_plural': 'Bermuda Dollars'
    },
    'BND': {
      'symbol': 'BN$',
      'name': 'Brunei Dollar',
      'symbol_native': '$',
      'decimal_digits': 2,
      'rounding': 0,
      'code': 'BND',
      'name_plural': 'Brunei dollars'
    },
    'BOB': {
      'symbol': 'Bs',
      'name': 'Bolivian Boliviano',
      'symbol_native': 'Bs',
      'decimal_digits': 2,
      'rounding': 0,
      'code': 'BOB',
      'name_plural': 'Bolivian bolivianos'
    },
    'BOV': {
      'symbol': '-',
      'name': 'Bolivian Mvdol',
      'symbol_native': '-',
      'decimal_digits': 2,
      'rounding': 0,
      'code': 'BOV',
      'name_plural': 'Bolivian Mvdol'
    },
    'BRL': {
      'symbol': 'R$',
      'name': 'Brazilian Real',
      'symbol_native': 'R$',
      'decimal_digits': 2,
      'rounding': 0,
      'code': 'BRL',
      'name_plural': 'Brazilian reals'
    },
    'BTN': {
      'symbol': 'Nu.',
      'name': 'Bhutanese ngultrum',
      'symbol_native': 'Nu.',
      'decimal_digits': 2,
      'rounding': 0,
      'code': 'BTN',
      'name_plural': 'Bhutanese ngultrum'
    },
    'BWP': {
      'symbol': 'BWP',
      'name': 'Botswanan Pula',
      'symbol_native': 'P',
      'decimal_digits': 2,
      'rounding': 0,
      'code': 'BWP',
      'name_plural': 'Botswanan pulas'
    },
    'BYN': {
      'symbol': 'Br',
      'name': 'Belarusian Ruble',
      'symbol_native': 'Br',
      'decimal_digits': 0,
      'rounding': 0,
      'code': 'BYR',
      'name_plural': 'Belarusian rubles'
    },
    'BZD': {
      'symbol': 'BZ$',
      'name': 'Belize Dollar',
      'symbol_native': '$',
      'decimal_digits': 2,
      'rounding': 0,
      'code': 'BZD',
      'name_plural': 'Belize dollars'
    },
    'CAD': {
      'symbol': 'CA$',
      'name': 'Canadian Dollar',
      'symbol_native': '$',
      'decimal_digits': 2,
      'rounding': 0,
      'code': 'CAD',
      'name_plural': 'Canadian dollars'
    },
    'CDF': {
      'symbol': 'CDF',
      'name': 'Congolese Franc',
      'symbol_native': 'FrCD',
      'decimal_digits': 2,
      'rounding': 0,
      'code': 'CDF',
      'name_plural': 'Congolese francs'
    },
    'CHE': {
      'symbol': '-',
      'name': 'WIR Euro (complementary currency)',
      'symbol_native': '-',
      'decimal_digits': 2,
      'rounding': 0,
      'code': 'CHE',
      'name_plural': 'WIR Euros (complementary currency)'
    },
    'CHF': {
      'symbol': 'CHF',
      'name': 'Swiss Franc',
      'symbol_native': 'CHF',
      'decimal_digits': 2,
      'rounding': 0.05,
      'code': 'CHF',
      'name_plural': 'Swiss francs'
    },
    'CHW': {
      'symbol': '-',
      'name': 'WIR Franc (complementary currency)',
      'symbol_native': '-',
      'decimal_digits': 2,
      'rounding': 0,
      'code': 'CHW',
      'name_plural': 'WIR Franc (complementary currency)'
    },
    'CLF': {
      'symbol': 'UF',
      'name': 'Unidad de Fomento (funds code)',
      'symbol_native': 'UF',
      'decimal_digits': 4,
      'rounding': 0,
      'code': 'CLF',
      'name_plural': 'Unidad de Fomento (funds code)'
    },
    'CLP': {
      'symbol': 'CL$',
      'name': 'Chilean Peso',
      'symbol_native': '$',
      'decimal_digits': 0,
      'rounding': 0,
      'code': 'CLP',
      'name_plural': 'Chilean pesos'
    },
    'CNY': {
      'symbol': 'CN¥',
      'name': 'Chinese Yuan',
      'symbol_native': 'CN¥',
      'decimal_digits': 2,
      'rounding': 0,
      'code': 'CNY',
      'name_plural': 'Chinese yuan'
    },
    'COP': {
      'symbol': 'CO$',
      'name': 'Colombian Peso',
      'symbol_native': '$',
      'decimal_digits': 0,
      'rounding': 0,
      'code': 'COP',
      'name_plural': 'Colombian pesos'
    },
    'COU': {
      'symbol': '-',
      'name': 'Unidad de Valor Real (UVR) (funds code)',
      'symbol_native': '-',
      'decimal_digits': 2,
      'rounding': 0,
      'code': 'COU',
      'name_plural': 'Unidad de Valor Real (UVR) (funds code)'
    },
    'CRC': {
      'symbol': '₡',
      'name': 'Costa Rican Colón',
      'symbol_native': '₡',
      'decimal_digits': 0,
      'rounding': 0,
      'code': 'CRC',
      'name_plural': 'Costa Rican colóns'
    },
    'CUC': {
      'symbol': 'CUC$',
      'name': 'Cuban convertible peso',
      'symbol_native': '$',
      'decimal_digits': 2,
      'rounding': 0,
      'code': 'CUP',
      'name_plural': 'Cuban convertible pesos'
    },
    'CUP': {
      'symbol': '₱',
      'name': 'Cuba Peso',
      'symbol_native': '₱',
      'decimal_digits': 0,
      'rounding': 0,
      'code': 'CUP',
      'name_plural': 'Cuba Pesos'
    },
    'CVE': {
      'symbol': 'CV$',
      'name': 'Cape Verdean Escudo',
      'symbol_native': 'CV$',
      'decimal_digits': 0,
      'rounding': 0,
      'code': 'CVE',
      'name_plural': 'Cape Verdean escudos'
    },
    'CZK': {
      'symbol': 'Kč',
      'name': 'Czech Republic Koruna',
      'symbol_native': 'Kč',
      'decimal_digits': 2,
      'rounding': 0,
      'code': 'CZK',
      'name_plural': 'Czech Republic korunas'
    },
    'DJF': {
      'symbol': 'Fdj',
      'name': 'Djiboutian Franc',
      'symbol_native': 'Fdj',
      'decimal_digits': 0,
      'rounding': 0,
      'code': 'DJF',
      'name_plural': 'Djiboutian francs'
    },
    'DKK': {
      'symbol': 'Dkr',
      'name': 'Danish Krone',
      'symbol_native': 'kr',
      'decimal_digits': 2,
      'rounding': 0,
      'code': 'DKK',
      'name_plural': 'Danish kroner'
    },
    'DOP': {
      'symbol': 'RD$',
      'name': 'Dominican Peso',
      'symbol_native': 'RD$',
      'decimal_digits': 2,
      'rounding': 0,
      'code': 'DOP',
      'name_plural': 'Dominican pesos'
    },
    'DZD': {
      'symbol': 'DA',
      'name': 'Algerian Dinar',
      'symbol_native': 'د.ج.‏',
      'decimal_digits': 2,
      'rounding': 0,
      'code': 'DZD',
      'name_plural': 'Algerian dinars'
    },
    'EEK': {
      'symbol': 'Ekr',
      'name': 'Estonian Kroon',
      'symbol_native': 'kr',
      'decimal_digits': 2,
      'rounding': 0,
      'code': 'EEK',
      'name_plural': 'Estonian kroons'
    },
    'EGP': {
      'symbol': 'EGP',
      'name': 'Egyptian Pound',
      'symbol_native': 'ج.م.‏',
      'decimal_digits': 2,
      'rounding': 0,
      'code': 'EGP',
      'name_plural': 'Egyptian pounds'
    },
    'ERN': {
      'symbol': 'Nfk',
      'name': 'Eritrean Nakfa',
      'symbol_native': 'Nfk',
      'decimal_digits': 2,
      'rounding': 0,
      'code': 'ERN',
      'name_plural': 'Eritrean nakfas'
    },
    'ETB': {
      'symbol': 'Br',
      'name': 'Ethiopian Birr',
      'symbol_native': 'Br',
      'decimal_digits': 2,
      'rounding': 0,
      'code': 'ETB',
      'name_plural': 'Ethiopian birrs'
    },
    'EUR': {
      'symbol': '€',
      'name': 'Euro',
      'symbol_native': '€',
      'decimal_digits': 2,
      'rounding': 0,
      'code': 'EUR',
      'name_plural': 'euros'
    },
    'FJD': {
      'symbol': '$',
      'name': 'Fiji Dollar',
      'symbol_native': '$',
      'decimal_digits': 2,
      'rounding': 0,
      'code': 'FJD',
      'name_plural': 'Fiji Dollars'
    },
    'FKP': {
      'symbol': '£',
      'name': 'Falkland Islands (Malvinas) Pound',
      'symbol_native': '£',
      'decimal_digits': 2,
      'rounding': 0,
      'code': 'FKP',
      'name_plural': 'Falkland Islands (Malvinas) Pound'
    },
    'GBP': {
      'symbol': '£',
      'name': 'British Pound Sterling',
      'symbol_native': '£',
      'decimal_digits': 2,
      'rounding': 0,
      'code': 'GBP',
      'name_plural': 'British pounds sterling'
    },
    'GEL': {
      'symbol': 'GEL',
      'name': 'Georgian Lari',
      'symbol_native': 'GEL',
      'decimal_digits': 2,
      'rounding': 0,
      'code': 'GEL',
      'name_plural': 'Georgian laris'
    },
    'GGP': {
      'symbol': '£',
      'name': 'Guernsey Pound',
      'symbol_native': '£',
      'decimal_digits': 2,
      'rounding': 0,
      'code': 'GGP',
      'name_plural': 'Guernsey Pounds'
    },
    'GHS': {
      'symbol': 'GH₵',
      'name': 'Ghanaian Cedi',
      'symbol_native': 'GH₵',
      'decimal_digits': 2,
      'rounding': 0,
      'code': 'GHS',
      'name_plural': 'Ghanaian cedis'
    },
    'GIP': {
      'symbol': '£',
      'name': 'Gibraltar Pound',
      'symbol_native': '£',
      'decimal_digits': 2,
      'rounding': 0,
      'code': 'GIP',
      'name_plural': 'Gibraltar Pounds'
    },
    'GMD': {
      'symbol': 'D',
      'name': 'Gambian dalasi',
      'symbol_native': 'D',
      'decimal_digits': 2,
      'rounding': 0,
      'code': 'GMD',
      'name_plural': 'Gambian dalasi'
    },
    'GNF': {
      'symbol': 'FG',
      'name': 'Guinean Franc',
      'symbol_native': 'FG',
      'decimal_digits': 0,
      'rounding': 0,
      'code': 'GNF',
      'name_plural': 'Guinean francs'
    },
    'GTQ': {
      'symbol': 'GTQ',
      'name': 'Guatemalan Quetzal',
      'symbol_native': 'Q',
      'decimal_digits': 2,
      'rounding': 0,
      'code': 'GTQ',
      'name_plural': 'Guatemalan quetzals'
    },
    'GYD': {
      'symbol': '$',
      'name': 'Guyana Dollar',
      'symbol_native': '$',
      'decimal_digits': 2,
      'rounding': 0,
      'code': 'GYD',
      'name_plural': 'Guyana Dollars'
    },
    'HKD': {
      'symbol': 'HK$',
      'name': 'Hong Kong Dollar',
      'symbol_native': '$',
      'decimal_digits': 2,
      'rounding': 0,
      'code': 'HKD',
      'name_plural': 'Hong Kong dollars'
    },
    'HNL': {
      'symbol': 'HNL',
      'name': 'Honduran Lempira',
      'symbol_native': 'L',
      'decimal_digits': 2,
      'rounding': 0,
      'code': 'HNL',
      'name_plural': 'Honduran lempiras'
    },
    'HRK': {
      'symbol': 'kn',
      'name': 'Croatian Kuna',
      'symbol_native': 'kn',
      'decimal_digits': 2,
      'rounding': 0,
      'code': 'HRK',
      'name_plural': 'Croatian kunas'
    },
    'HTG': {
      'symbol': 'G',
      'name': 'Haitian gourde',
      'symbol_native': 'G',
      'decimal_digits': 2,
      'rounding': 0,
      'code': 'HTG',
      'name_plural': 'Haitian gourde'
    },
    'HUF': {
      'symbol': 'Ft',
      'name': 'Hungarian Forint',
      'symbol_native': 'Ft',
      'decimal_digits': 0,
      'rounding': 0,
      'code': 'HUF',
      'name_plural': 'Hungarian forints'
    },
    'IDR': {
      'symbol': 'Rp',
      'name': 'Indonesian Rupiah',
      'symbol_native': 'Rp',
      'decimal_digits': 0,
      'rounding': 0,
      'code': 'IDR',
      'name_plural': 'Indonesian rupiahs'
    },
    'ILS': {
      'symbol': '₪',
      'name': 'Israeli New Sheqel',
      'symbol_native': '₪',
      'decimal_digits': 2,
      'rounding': 0,
      'code': 'ILS',
      'name_plural': 'Israeli new sheqels'
    },
    'IMP': {
      'symbol': '£',
      'name': 'Isle of Man Pound',
      'symbol_native': '£',
      'decimal_digits': 2,
      'rounding': 0,
      'code': 'IMP',
      'name_plural': 'Isle of Man Pounds'
    },
    'INR': {
      'symbol': 'Rs',
      'name': 'Indian Rupee',
      'symbol_native': 'টকা',
      'decimal_digits': 2,
      'rounding': 0,
      'code': 'INR',
      'name_plural': 'Indian rupees'
    },
    'IQD': {
      'symbol': 'IQD',
      'name': 'Iraqi Dinar',
      'symbol_native': 'د.ع.‏',
      'decimal_digits': 3,
      'rounding': 0,
      'code': 'IQD',
      'name_plural': 'Iraqi dinars'
    },
    'IRR': {
      'symbol': 'IRR',
      'name': 'Iranian Rial',
      'symbol_native': '﷼',
      'decimal_digits': 0,
      'rounding': 0,
      'code': 'IRR',
      'name_plural': 'Iranian rials'
    },
    'ISK': {
      'symbol': 'Ikr',
      'name': 'Icelandic Króna',
      'symbol_native': 'kr',
      'decimal_digits': 0,
      'rounding': 0,
      'code': 'ISK',
      'name_plural': 'Icelandic krónur'
    },
    'JEP': {
      'symbol': '£',
      'name': 'Jersey Pound',
      'symbol_native': '£',
      'decimal_digits': 2,
      'rounding': 0,
      'code': 'JEP',
      'name_plural': 'Jersey Pounds'
    },
    'JMD': {
      'symbol': 'J$',
      'name': 'Jamaican Dollar',
      'symbol_native': '$',
      'decimal_digits': 2,
      'rounding': 0,
      'code': 'JMD',
      'name_plural': 'Jamaican dollars'
    },
    'JOD': {
      'symbol': 'JD',
      'name': 'Jordanian Dinar',
      'symbol_native': 'د.أ.‏',
      'decimal_digits': 3,
      'rounding': 0,
      'code': 'JOD',
      'name_plural': 'Jordanian dinars'
    },
    'JPY': {
      'symbol': '¥',
      'name': 'Japanese Yen',
      'symbol_native': '￥',
      'decimal_digits': 0,
      'rounding': 0,
      'code': 'JPY',
      'name_plural': 'Japanese yen'
    },
    'KES': {
      'symbol': 'Ksh',
      'name': 'Kenyan Shilling',
      'symbol_native': 'Ksh',
      'decimal_digits': 2,
      'rounding': 0,
      'code': 'KES',
      'name_plural': 'Kenyan shillings'
    },
    'KGS': {
      'symbol': 'лв',
      'name': 'Kyrgyzstan Som',
      'symbol_native': 'лв',
      'decimal_digits': 2,
      'rounding': 0,
      'code': 'KGS',
      'name_plural': 'Kyrgyzstan Som'
    },
    'KHR': {
      'symbol': 'KHR',
      'name': 'Cambodian Riel',
      'symbol_native': '៛',
      'decimal_digits': 2,
      'rounding': 0,
      'code': 'KHR',
      'name_plural': 'Cambodian riels'
    },
    'KMF': {
      'symbol': 'CF',
      'name': 'Comorian Franc',
      'symbol_native': 'FC',
      'decimal_digits': 0,
      'rounding': 0,
      'code': 'KMF',
      'name_plural': 'Comorian francs'
    },
    'KPW': {
      'symbol': '₩',
      'name': 'North Korean Won',
      'symbol_native': '₩',
      'decimal_digits': 0,
      'rounding': 0,
      'code': 'KPW',
      'name_plural': 'North Korean Won'
    },
    'KRW': {
      'symbol': '₩',
      'name': 'South Korean Won',
      'symbol_native': '₩',
      'decimal_digits': 0,
      'rounding': 0,
      'code': 'KRW',
      'name_plural': 'South Korean won'
    },
    'KWD': {
      'symbol': 'KD',
      'name': 'Kuwaiti Dinar',
      'symbol_native': 'د.ك.‏',
      'decimal_digits': 3,
      'rounding': 0,
      'code': 'KWD',
      'name_plural': 'Kuwaiti dinars'
    },
    'KYD': {
      'symbol': '$',
      'name': 'Cayman Islands Dollar',
      'symbol_native': '$',
      'decimal_digits': 2,
      'rounding': 0,
      'code': 'KYD',
      'name_plural': 'Cayman Islands Dollars'
    },
    'KZT': {
      'symbol': 'KZT',
      'name': 'Kazakhstani Tenge',
      'symbol_native': 'тңг.',
      'decimal_digits': 2,
      'rounding': 0,
      'code': 'KZT',
      'name_plural': 'Kazakhstani tenges'
    },
    'LAK': {
      'symbol': '₭',
      'name': 'Laos Kip',
      'symbol_native': '₭',
      'decimal_digits': 2,
      'rounding': 0,
      'code': 'LAK',
      'name_plural': 'Laos Kip'
    },
    'LBP': {
      'symbol': 'LB£',
      'name': 'Lebanese Pound',
      'symbol_native': 'ل.ل.‏',
      'decimal_digits': 0,
      'rounding': 0,
      'code': 'LBP',
      'name_plural': 'Lebanese pounds'
    },
    'LKR': {
      'symbol': 'SLRs',
      'name': 'Sri Lankan Rupee',
      'symbol_native': 'SL Re',
      'decimal_digits': 2,
      'rounding': 0,
      'code': 'LKR',
      'name_plural': 'Sri Lankan rupees'
    },
    'LRD': {
      'symbol': '$',
      'name': 'Liberia Dollar',
      'symbol_native': '$',
      'decimal_digits': 2,
      'rounding': 0,
      'code': 'LRD',
      'name_plural': 'Liberia Dollars'
    },
    'LSL': {
      'symbol': 'L',
      'name': 'Lesotho loti',
      'symbol_native': 'L',
      'decimal_digits': 2,
      'rounding': 0,
      'code': 'LSL',
      'name_plural': 'Lesotho loti'
    },
    'LTL': {
      'symbol': 'Lt',
      'name': 'Lithuanian Litas',
      'symbol_native': 'Lt',
      'decimal_digits': 2,
      'rounding': 0,
      'code': 'LTL',
      'name_plural': 'Lithuanian litai'
    },
    'LVL': {
      'symbol': 'Ls',
      'name': 'Latvian Lats',
      'symbol_native': 'Ls',
      'decimal_digits': 2,
      'rounding': 0,
      'code': 'LVL',
      'name_plural': 'Latvian lati'
    },
    'LYD': {
      'symbol': 'LD',
      'name': 'Libyan Dinar',
      'symbol_native': 'د.ل.‏',
      'decimal_digits': 3,
      'rounding': 0,
      'code': 'LYD',
      'name_plural': 'Libyan dinars'
    },
    'MAD': {
      'symbol': 'MAD',
      'name': 'Moroccan Dirham',
      'symbol_native': 'د.م.‏',
      'decimal_digits': 2,
      'rounding': 0,
      'code': 'MAD',
      'name_plural': 'Moroccan dirhams'
    },
    'MDL': {
      'symbol': 'MDL',
      'name': 'Moldovan Leu',
      'symbol_native': 'MDL',
      'decimal_digits': 2,
      'rounding': 0,
      'code': 'MDL',
      'name_plural': 'Moldovan lei'
    },
    'MGA': {
      'symbol': 'MGA',
      'name': 'Malagasy Ariary',
      'symbol_native': 'MGA',
      'decimal_digits': 0,
      'rounding': 0,
      'code': 'MGA',
      'name_plural': 'Malagasy Ariaries'
    },
    'MKD': {
      'symbol': 'MKD',
      'name': 'Macedonian Denar',
      'symbol_native': 'MKD',
      'decimal_digits': 2,
      'rounding': 0,
      'code': 'MKD',
      'name_plural': 'Macedonian denari'
    },
    'MMK': {
      'symbol': 'MMK',
      'name': 'Myanma Kyat',
      'symbol_native': 'K',
      'decimal_digits': 0,
      'rounding': 0,
      'code': 'MMK',
      'name_plural': 'Myanma kyats'
    },
    'MNT': {
      'symbol': '₮',
      'name': 'Mongolia Tughrik',
      'symbol_native': '₮',
      'decimal_digits': 2,
      'rounding': 0,
      'code': 'MNT',
      'name_plural': 'Mongolia Tughrik'
    },
    'MOP': {
      'symbol': 'MOP$',
      'name': 'Macanese Pataca',
      'symbol_native': 'MOP$',
      'decimal_digits': 2,
      'rounding': 0,
      'code': 'MOP',
      'name_plural': 'Macanese patacas'
    },
    'MRO': {
      'symbol': 'UM',
      'name': 'Mauritanian ouguiya',
      'symbol_native': 'UM',
      'decimal_digits': 1,
      'rounding': 0,
      'code': 'MUR',
      'name_plural': 'Mauritanian ouguiya'
    },
    'MUR': {
      'symbol': 'MURs',
      'name': 'Mauritian Rupee',
      'symbol_native': 'MURs',
      'decimal_digits': 0,
      'rounding': 0,
      'code': 'MUR',
      'name_plural': 'Mauritian rupees'
    },
    'MVR': {
      'symbol': 'MRf',
      'name': 'Maldivian rufiyaa',
      'symbol_native': 'Rf',
      'decimal_digits': 2,
      'rounding': 0,
      'code': 'MVR',
      'name_plural': 'Maldivian rufiyaa'
    },
    'MWK': {
      'symbol': 'MK',
      'name': 'Malawian kwacha',
      'symbol_native': 'MK',
      'decimal_digits': 2,
      'rounding': 0,
      'code': 'MWK',
      'name_plural': 'Malawian kwacha'
    },
    'MXN': {
      'symbol': 'MX$',
      'name': 'Mexican Peso',
      'symbol_native': '$',
      'decimal_digits': 2,
      'rounding': 0,
      'code': 'MXN',
      'name_plural': 'Mexican pesos'
    },
    'MXV': {
      'symbol': '-',
      'name': 'Mexican Unidad de Inversion (UDI) (funds code)',
      'symbol_native': '-',
      'decimal_digits': 2,
      'rounding': 0,
      'code': 'MXV',
      'name_plural': 'Mexican Unidad de Inversion (UDI) (funds code)'
    },
    'MYR': {
      'symbol': 'RM',
      'name': 'Malaysian Ringgit',
      'symbol_native': 'RM',
      'decimal_digits': 2,
      'rounding': 0,
      'code': 'MYR',
      'name_plural': 'Malaysian ringgits'
    },
    'MZN': {
      'symbol': 'MTn',
      'name': 'Mozambican Metical',
      'symbol_native': 'MTn',
      'decimal_digits': 2,
      'rounding': 0,
      'code': 'MZN',
      'name_plural': 'Mozambican meticals'
    },
    'NAD': {
      'symbol': 'N$',
      'name': 'Namibian Dollar',
      'symbol_native': 'N$',
      'decimal_digits': 2,
      'rounding': 0,
      'code': 'NAD',
      'name_plural': 'Namibian dollars'
    },
    'NGN': {
      'symbol': '₦',
      'name': 'Nigerian Naira',
      'symbol_native': '₦',
      'decimal_digits': 2,
      'rounding': 0,
      'code': 'NGN',
      'name_plural': 'Nigerian nairas'
    },
    'NIO': {
      'symbol': 'C$',
      'name': 'Nicaraguan Córdoba',
      'symbol_native': 'C$',
      'decimal_digits': 2,
      'rounding': 0,
      'code': 'NIO',
      'name_plural': 'Nicaraguan córdobas'
    },
    'NOK': {
      'symbol': 'Nkr',
      'name': 'Norwegian Krone',
      'symbol_native': 'kr',
      'decimal_digits': 2,
      'rounding': 0,
      'code': 'NOK',
      'name_plural': 'Norwegian kroner'
    },
    'NPR': {
      'symbol': 'NPRs',
      'name': 'Nepalese Rupee',
      'symbol_native': 'नेरू',
      'decimal_digits': 2,
      'rounding': 0,
      'code': 'NPR',
      'name_plural': 'Nepalese rupees'
    },
    'PRB': {
      'symbol': 'руб',
      'name': 'Transnistrian ruble',
      'symbol_native': 'руб',
      'decimal_digits': 2,
      'rounding': 0,
      'code': 'PRB',
      'name_plural': 'Transnistrian rubles'
    },
    'NZD': {
      'symbol': 'NZ$',
      'name': 'New Zealand Dollar',
      'symbol_native': '$',
      'decimal_digits': 2,
      'rounding': 0,
      'code': 'NZD',
      'name_plural': 'New Zealand dollars'
    },
    'OMR': {
      'symbol': 'OMR',
      'name': 'Omani Rial',
      'symbol_native': 'ر.ع.‏',
      'decimal_digits': 3,
      'rounding': 0,
      'code': 'OMR',
      'name_plural': 'Omani rials'
    },
    'PAB': {
      'symbol': 'B/.',
      'name': 'Panamanian Balboa',
      'symbol_native': 'B/.',
      'decimal_digits': 2,
      'rounding': 0,
      'code': 'PAB',
      'name_plural': 'Panamanian balboas'
    },
    'PEN': {
      'symbol': 'S/.',
      'name': 'Peruvian Nuevo Sol',
      'symbol_native': 'S/.',
      'decimal_digits': 2,
      'rounding': 0,
      'code': 'PEN',
      'name_plural': 'Peruvian nuevos soles'
    },
    'PGK': {
      'symbol': 'K',
      'name': 'Papua New Guinean kina',
      'symbol_native': 'K',
      'decimal_digits': 2,
      'rounding': 0,
      'code': 'PGK',
      'name_plural': 'Papua New Guinean kina'
    },
    'PHP': {
      'symbol': '₱',
      'name': 'Philippine Peso',
      'symbol_native': '₱',
      'decimal_digits': 2,
      'rounding': 0,
      'code': 'PHP',
      'name_plural': 'Philippine pesos'
    },
    'PKR': {
      'symbol': 'PKRs',
      'name': 'Pakistani Rupee',
      'symbol_native': '₨',
      'decimal_digits': 0,
      'rounding': 0,
      'code': 'PKR',
      'name_plural': 'Pakistani rupees'
    },
    'PLN': {
      'symbol': 'zł',
      'name': 'Polish Zloty',
      'symbol_native': 'zł',
      'decimal_digits': 2,
      'rounding': 0,
      'code': 'PLN',
      'name_plural': 'Polish zlotys'
    },
    'PYG': {
      'symbol': '₲',
      'name': 'Paraguayan Guarani',
      'symbol_native': '₲',
      'decimal_digits': 0,
      'rounding': 0,
      'code': 'PYG',
      'name_plural': 'Paraguayan guaranis'
    },
    'QAR': {
      'symbol': 'QR',
      'name': 'Qatari Rial',
      'symbol_native': 'ر.ق.‏',
      'decimal_digits': 2,
      'rounding': 0,
      'code': 'QAR',
      'name_plural': 'Qatari rials'
    },
    'RON': {
      'symbol': 'RON',
      'name': 'Romanian Leu',
      'symbol_native': 'RON',
      'decimal_digits': 2,
      'rounding': 0,
      'code': 'RON',
      'name_plural': 'Romanian lei'
    },
    'RSD': {
      'symbol': 'din.',
      'name': 'Serbian Dinar',
      'symbol_native': 'дин.',
      'decimal_digits': 0,
      'rounding': 0,
      'code': 'RSD',
      'name_plural': 'Serbian dinars'
    },
    'RUB': {
      'symbol': 'RUB',
      'name': 'Russian Ruble',
      'symbol_native': 'руб.',
      'decimal_digits': 2,
      'rounding': 0,
      'code': 'RUB',
      'name_plural': 'Russian rubles'
    },
    'RWF': {
      'symbol': 'RWF',
      'name': 'Rwandan Franc',
      'symbol_native': 'FR',
      'decimal_digits': 0,
      'rounding': 0,
      'code': 'RWF',
      'name_plural': 'Rwandan francs'
    },
    'SAR': {
      'symbol': 'SR',
      'name': 'Saudi Riyal',
      'symbol_native': 'ر.س.‏',
      'decimal_digits': 2,
      'rounding': 0,
      'code': 'SAR',
      'name_plural': 'Saudi riyals'
    },
    'SBD': {
      'symbol': '$',
      'name': 'Solomon Islands Dollar',
      'symbol_native': '$',
      'decimal_digits': 2,
      'rounding': 0,
      'code': 'SBD',
      'name_plural': 'Solomon Islands Dollars'
    },
    'SCR': {
      'symbol': '₨',
      'name': 'Seychelles Rupee',
      'symbol_native': '₨',
      'decimal_digits': 2,
      'rounding': 0,
      'code': 'SCR',
      'name_plural': 'Seychelles Rupees'
    },
    'SDG': {
      'symbol': 'SDG',
      'name': 'Sudanese Pound',
      'symbol_native': 'SDG',
      'decimal_digits': 2,
      'rounding': 0,
      'code': 'SDG',
      'name_plural': 'Sudanese pounds'
    },
    'SEK': {
      'symbol': 'Skr',
      'name': 'Swedish Krona',
      'symbol_native': 'kr',
      'decimal_digits': 2,
      'rounding': 0,
      'code': 'SEK',
      'name_plural': 'Swedish kronor'
    },
    'SGD': {
      'symbol': 'S$',
      'name': 'Singapore Dollar',
      'symbol_native': '$',
      'decimal_digits': 2,
      'rounding': 0,
      'code': 'SGD',
      'name_plural': 'Singapore dollars'
    },
    'SHP': {
      'symbol': '£',
      'name': 'Saint Helena Pound',
      'symbol_native': '£',
      'decimal_digits': 2,
      'rounding': 0,
      'code': 'SHP',
      'name_plural': 'Saint Helena Pounds'
    },
    'SLL': {
      'symbol': 'Le',
      'name': 'Sierra Leonean leone',
      'symbol_native': 'Le',
      'decimal_digits': 2,
      'rounding': 0,
      'code': 'SLL',
      'name_plural': 'Sierra Leonean leone'
    },
    'SOS': {
      'symbol': 'Ssh',
      'name': 'Somali Shilling',
      'symbol_native': 'Ssh',
      'decimal_digits': 0,
      'rounding': 0,
      'code': 'SOS',
      'name_plural': 'Somali shillings'
    },
    'SRD': {
      'symbol': '$',
      'name': 'Suriname Dollar',
      'symbol_native': '$',
      'decimal_digits': 2,
      'rounding': 0,
      'code': 'SRD',
      'name_plural': 'Suriname Dollars'
    },
    'SSP': {
      'symbol': 'SSP',
      'name': 'South Sudanese pound',
      'symbol_native': 'SSP',
      'decimal_digits': 2,
      'rounding': 0,
      'code': 'SSP',
      'name_plural': 'South Sudanese pound'
    },
    'STD': {
      'symbol': 'Db',
      'name': 'São Tomé and Príncipe dobra',
      'symbol_native': 'Db',
      'decimal_digits': 2,
      'rounding': 0,
      'code': 'STD',
      'name_plural': 'São Tomé and Príncipe dobra'
    },
    'SVC': {
      'symbol': '$',
      'name': 'El Salvador Colon',
      'symbol_native': '$',
      'decimal_digits': 0,
      'rounding': 0,
      'code': 'SVC',
      'name_plural': 'El Salvador Colon'
    },
    'SYP': {
      'symbol': 'SY£',
      'name': 'Syrian Pound',
      'symbol_native': 'ل.س.‏',
      'decimal_digits': 0,
      'rounding': 0,
      'code': 'SYP',
      'name_plural': 'Syrian pounds'
    },
    'SZL': {
      'symbol': 'L',
      'name': 'Swazi lilangeni',
      'symbol_native': 'L',
      'decimal_digits': 2,
      'rounding': 0,
      'code': 'SZL',
      'name_plural': 'Swazi lilangeni'
    },
    'THB': {
      'symbol': '฿',
      'name': 'Thai Baht',
      'symbol_native': '฿',
      'decimal_digits': 2,
      'rounding': 0,
      'code': 'THB',
      'name_plural': 'Thai baht'
    },
    'TJS': {
      'symbol': '-',
      'name': 'Tajikistani somoni',
      'symbol_native': '-',
      'decimal_digits': 2,
      'rounding': 0,
      'code': 'TJS',
      'name_plural': 'Tajikistani somoni'
    },
    'TMT': {
      'symbol': 'T',
      'name': 'Turkmenistan manat',
      'symbol_native': 'T',
      'decimal_digits': 2,
      'rounding': 0,
      'code': 'TMT',
      'name_plural': 'Turkmenistan manat'
    },
    'TND': {
      'symbol': 'DT',
      'name': 'Tunisian Dinar',
      'symbol_native': 'د.ت.‏',
      'decimal_digits': 3,
      'rounding': 0,
      'code': 'TND',
      'name_plural': 'Tunisian dinars'
    },
    'TOP': {
      'symbol': 'T$',
      'name': 'Tongan Paʻanga',
      'symbol_native': 'T$',
      'decimal_digits': 2,
      'rounding': 0,
      'code': 'TOP',
      'name_plural': 'Tongan paʻanga'
    },
    'TRY': {
      'symbol': 'TL',
      'name': 'Turkish Lira',
      'symbol_native': 'TL',
      'decimal_digits': 2,
      'rounding': 0,
      'code': 'TRY',
      'name_plural': 'Turkish Lira'
    },
    'TTD': {
      'symbol': 'TT$',
      'name': 'Trinidad and Tobago Dollar',
      'symbol_native': '$',
      'decimal_digits': 2,
      'rounding': 0,
      'code': 'TTD',
      'name_plural': 'Trinidad and Tobago dollars'
    },
    'TVD': {
      'symbol': '$',
      'name': 'Tuvalu Dollar',
      'symbol_native': '$',
      'decimal_digits': 2,
      'rounding': 0,
      'code': 'TVD',
      'name_plural': 'Tuvalu Dollars'
    },
    'TWD': {
      'symbol': 'NT$',
      'name': 'New Taiwan Dollar',
      'symbol_native': 'NT$',
      'decimal_digits': 2,
      'rounding': 0,
      'code': 'TWD',
      'name_plural': 'New Taiwan dollars'
    },
    'TZS': {
      'symbol': 'TSh',
      'name': 'Tanzanian Shilling',
      'symbol_native': 'TSh',
      'decimal_digits': 0,
      'rounding': 0,
      'code': 'TZS',
      'name_plural': 'Tanzanian shillings'
    },
    'UAH': {
      'symbol': '₴',
      'name': 'Ukrainian Hryvnia',
      'symbol_native': '₴',
      'decimal_digits': 2,
      'rounding': 0,
      'code': 'UAH',
      'name_plural': 'Ukrainian hryvnias'
    },
    'UGX': {
      'symbol': 'USh',
      'name': 'Ugandan Shilling',
      'symbol_native': 'USh',
      'decimal_digits': 0,
      'rounding': 0,
      'code': 'UGX',
      'name_plural': 'Ugandan shillings'
    },
    'USD': {
      'symbol': '$',
      'name': 'US Dollar',
      'symbol_native': '$',
      'decimal_digits': 2,
      'rounding': 0,
      'code': 'USD',
      'name_plural': 'US dollars'
    },
    'USN': {
      'symbol': '$',
      'name': 'United States dollar (next day) (funds code)',
      'symbol_native': '$',
      'decimal_digits': 2,
      'rounding': 0,
      'code': 'USN',
      'name_plural': 'United States dollars (next day) (funds code)'
    },
    'UYI': {
      'symbol': 'UYI',
      'name': 'Uruguay Peso en Unidades Indexadas (URUIURUI) (funds code)',
      'symbol_native': 'UYI',
      'decimal_digits': 0,
      'rounding': 0,
      'code': 'UYU',
      'name_plural': 'Uruguay Peso en Unidades Indexadas (URUIURUI) (funds code)'
    },
    'UYU': {
      'symbol': '$U',
      'name': 'Uruguayan Peso',
      'symbol_native': '$',
      'decimal_digits': 2,
      'rounding': 0,
      'code': 'UYU',
      'name_plural': 'Uruguayan pesos'
    },
    'UZS': {
      'symbol': 'UZS',
      'name': 'Uzbekistan Som',
      'symbol_native': 'UZS',
      'decimal_digits': 0,
      'rounding': 0,
      'code': 'UZS',
      'name_plural': 'Uzbekistan som'
    },
    'VEF': {
      'symbol': 'Bs.F.',
      'name': 'Venezuelan Bolívar',
      'symbol_native': 'Bs.F.',
      'decimal_digits': 2,
      'rounding': 0,
      'code': 'VEF',
      'name_plural': 'Venezuelan bolívars'
    },
    'VND': {
      'symbol': '₫',
      'name': 'Vietnamese Dong',
      'symbol_native': '₫',
      'decimal_digits': 0,
      'rounding': 0,
      'code': 'VND',
      'name_plural': 'Vietnamese dong'
    },
    'VUV': {
      'symbol': 'VT',
      'name': 'Vanuatu vatu',
      'symbol_native': 'VT',
      'decimal_digits': 0,
      'rounding': 0,
      'code': 'VUV',
      'name_plural': 'Vanuatu vatu'
    },
    'WST': {
      'symbol': 'WS$',
      'name': 'Samoan tala',
      'symbol_native': '$',
      'decimal_digits': 2,
      'rounding': 0,
      'code': 'WST',
      'name_plural': 'Samoan tala'
    },
    'XAF': {
      'symbol': 'FCFA',
      'name': 'CFA Franc BEAC',
      'symbol_native': 'FCFA',
      'decimal_digits': 0,
      'rounding': 0,
      'code': 'XAF',
      'name_plural': 'CFA francs BEAC'
    },
    'XAG': {
      'symbol': 'XAG',
      'name': 'Silver (one troy ounce)',
      'symbol_native': 'XAG',
      'decimal_digits': 0,
      'rounding': 0,
      'code': 'XAG',
      'name_plural': 'Silver (one troy ounce)'
    },
    'XAU': {
      'symbol': 'XAU',
      'name': 'Gold (one troy ounce)',
      'symbol_native': 'XAU',
      'decimal_digits': 0,
      'rounding': 0,
      'code': 'XAU',
      'name_plural': 'Gold (one troy ounce)'
    },
    'XBA': {
      'symbol': 'XBA',
      'name': 'European Composite Unit (EURCO) (bond market unit)',
      'symbol_native': 'XBA',
      'decimal_digits': 0,
      'rounding': 0,
      'code': 'XBA',
      'name_plural': 'European Composite Unit (EURCO) (bond market unit)'
    },
    'XBB': {
      'symbol': 'XBB',
      'name': 'European Monetary Unit (E.M.U.-6) (bond market unit)',
      'symbol_native': 'XBB',
      'decimal_digits': 0,
      'rounding': 0,
      'code': 'XBB',
      'name_plural': 'European Monetary Unit (E.M.U.-6) (bond market unit)'
    },
    'XBC': {
      'symbol': 'XBC',
      'name': 'European Unit of Account 9 (E.U.A.-9) (bond market unit)',
      'symbol_native': 'XBC',
      'decimal_digits': 0,
      'rounding': 0,
      'code': 'XBC',
      'name_plural': 'European Unit of Account 9 (E.U.A.-9) (bond market unit)'
    },
    'XBD': {
      'symbol': 'XBD',
      'name': 'European Unit of Account 17 (E.U.A.-17) (bond market unit)',
      'symbol_native': 'XBD',
      'decimal_digits': 0,
      'rounding': 0,
      'code': 'XBD',
      'name_plural': 'European Unit of Account 17 (E.U.A.-17) (bond market unit)'
    },
    'XCD': {
      'symbol': '$',
      'name': 'East Caribbean Dollar',
      'symbol_native': '$',
      'decimal_digits': 0,
      'rounding': 0,
      'code': 'XCD',
      'name_plural': 'East Caribbean Dollars'
    },
    'XDR': {
      'symbol': 'XDR',
      'name': 'Special drawing rights',
      'symbol_native': 'XDR',
      'decimal_digits': 0,
      'rounding': 0,
      'code': 'XDR',
      'name_plural': 'Special drawing rights'
    },
    'XOF': {
      'symbol': 'CFA',
      'name': 'CFA Franc BCEAO',
      'symbol_native': 'CFA',
      'decimal_digits': 0,
      'rounding': 0,
      'code': 'XOF',
      'name_plural': 'CFA francs BCEAO'
    },
    'XPD': {
      'symbol': 'XPD',
      'name': 'Palladium (one troy ounce)',
      'symbol_native': 'XPD',
      'decimal_digits': 0,
      'rounding': 0,
      'code': 'XPD',
      'name_plural': 'Palladium (one troy ounce)'
    },
    'XPF': {
      'symbol': 'CFP',
      'name': 'CFP franc (franc Pacifique)',
      'symbol_native': 'CFP',
      'decimal_digits': 0,
      'rounding': 0,
      'code': 'XPF',
      'name_plural': 'CFP franc (franc Pacifique)'
    },
    'XPT': {
      'symbol': 'XPT',
      'name': 'Platinum (one troy ounce)',
      'symbol_native': 'XPT',
      'decimal_digits': 0,
      'rounding': 0,
      'code': 'XPT',
      'name_plural': 'Platinum (one troy ounce)'
    },
    'XSU': {
      'symbol': 'Sucre',
      'name': 'SUCRE',
      'symbol_native': 'Sucre',
      'decimal_digits': 0,
      'rounding': 0,
      'code': 'XSU',
      'name_plural': 'SUCRE'
    },
    'XTS': {
      'symbol': 'XTS',
      'name': 'Code reserved for testing purposes',
      'symbol_native': 'XTS',
      'decimal_digits': 0,
      'rounding': 0,
      'code': 'XTS',
      'name_plural': 'Code reserved for testing purposes'
    },
    'XUA': {
      'symbol': 'XUA',
      'name': 'ADB Unit of Account',
      'symbol_native': 'XUA',
      'decimal_digits': 0,
      'rounding': 0,
      'code': 'XUA',
      'name_plural': 'ADB Unit of Account'
    },
    'XXX': {
      'symbol': 'XXX',
      'name': 'No currency',
      'symbol_native': 'XXX',
      'decimal_digits': 0,
      'rounding': 0,
      'code': 'XTS',
      'name_plural': 'No currency'
    },
    'YER': {
      'symbol': 'YR',
      'name': 'Yemeni Rial',
      'symbol_native': 'ر.ي.‏',
      'decimal_digits': 0,
      'rounding': 0,
      'code': 'YER',
      'name_plural': 'Yemeni rials'
    },
    'ZAR': {
      'symbol': 'R',
      'name': 'South African Rand',
      'symbol_native': 'R',
      'decimal_digits': 2,
      'rounding': 0,
      'code': 'ZAR',
      'name_plural': 'South African rand'
    },
    'ZMK': {
      'symbol': 'ZK',
      'name': 'Zambian Kwacha',
      'symbol_native': 'ZK',
      'decimal_digits': 0,
      'rounding': 0,
      'code': 'ZMK',
      'name_plural': 'Zambian kwachas'
    },
    'ZMW': {
      'symbol': 'ZK',
      'name': 'Zambian kwacha',
      'symbol_native': 'ZK',
      'decimal_digits': 2,
      'rounding': 0,
      'code': 'ZMW',
      'name_plural': 'Zambian kwacha'
    },
    'ZWD': {
      'symbol': 'Z$',
      'name': 'Zimbabwe Dollar',
      'symbol_native': 'Z$',
      'decimal_digits': 2,
      'rounding': 0,
      'code': 'ZWD',
      'name_plural': 'Zimbabwe Dollars'
    },
    'ZWL': {
      'symbol': '$',
      'name': 'Zimbabwean dollar A/10',
      'symbol_native': '$',
      'decimal_digits': 2,
      'rounding': 0,
      'code': 'ZWL',
      'name_plural': 'Zimbabwean dollars A/10'
    }
  };
};

exports.default = new Coinify();