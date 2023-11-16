# find-book

一个根据ISBN（国际标准图书编号）查询图书信息的库，返回书名、作者、副标题、语言、出版日期等关键信息。

A library for querying book information based on ISBN (International Standard Book Number).

# Install
```
npm install find-book -S
```
# Usage
```
import { find, findOne } from 'find-book';

findOne({
  isbn: "9787557677404",
})
  .then((result) => {
    console.log(result);
  })
  .catch((e) => {
    console.log("error", e);
  });
```