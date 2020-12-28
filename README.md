# vanilla-message

> Size < 1kb

## Install

```sh
$ npm install --save vanilla-message
```

## Use

```js
import Message from "vanilla-message";

Message.error("hello");
Message.success("hello");
Message.info("hello", "Ok");
Message.info("hello", "Ok", "Cancel");

Message("hello", {
  ok: "确定",
  cancel: "取消",
  timeOut: 5000,
  style: {
    background: "#f55",
  },
});
```
