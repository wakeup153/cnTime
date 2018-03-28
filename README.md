### 使用方法
1.download
```
  npm install --save cntime
```
2.import your node script
````JavaScript
const time = require('cntime');
let date = time.getCurrentDate()
console.log(data)
````
|methods|args|return|
|:---:|:---:|:---:|
|cntime.getCurrentDate(format)|[yyyy-mm-dd]/[yyyy/mm/dd]/[yyyy-mm-dd hh:mi:ss]/[yyyy/mm/dd hh:mi:ss]|string|
|cntime.getTimeObj()|null|Object|