**Install**

```.batch
npm i coinify -s
```

**Usage**

***ES6***
```.js
import Coinify from 'coinify'

let coinify = new Coinify()

console.log(coinify.symbol('USD')) // Prints '$'

```

***ES5***
```.js
var Coinify = require("coinify/dist/coinify")
var coinify = new Coinify.default()
console.log(coinify.symbol('USD'))
```

***Functions***
_____________________________________

coinify.get(code)

**Example**

```.js
coinify.get('USD')
```
*returns*

```.js
{
  'symbol': '$',
  'name': 'US Dollar',
  'symbol_native': '$',
  'decimal_digits': 2,
  'rounding': 0,
  'code': 'USD',
  'name_plural': 'US dollars'
}
```
_____________________________________

coinify.symbol(code, native = true)

**Example**

```.js
coinify.symbol('NOK')
```
*returns*
```.js
'kr'
```
&
```.js
coinify.symbol('NOK', false)
```
*returns*
```.js
'Nkr'
```
_____________________________________

coinify.decimals(code)

**Example**

```.js
coinify.decimals('USD')
```
*returns*
```.js
2
```
_____________________________________

coinify.rounding(code)

**Example**

```.js
coinify.rounding('USD')
```
*returns*
```.js
0
```
_____________________________________

coinify.name(code, plural = false)

**Example**

```.js
coinify.name('USD')
```
*returns*
```.js
'US Dollar'
```
&
```.js
coinify.name('USD', true)
```
*returns*
```.js
'US dollars'
```


***References:***

https://en.wikipedia.org/wiki/ISO_4217
http://www.iotafinance.com/en/ISO-4217-Currency-Codes.html
http://www.xe.com/symbols.php
https://gist.github.com/Fluidbyte/2973986
