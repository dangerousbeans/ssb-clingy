# ssb-clingy

![logo](https://bitboatassets.s3-ap-southeast-2.amazonaws.com/Screen+Shot+2019-07-12+at+7.06.14+PM.png)

Behaviour change plugin to ssb-server which makes it way more friendly to strangers, kind of like a search and rescue dog.

If it sees any connection, it checks if they already follow them. If not it just follows them so they’re not alone anymore.

## Install

```sh
ssb-server plugins.install ssb-clingy
```


```javascript
// add plugins
Server
  .use(require('ssb-clingy'))
  .use(require('ssb-gossip'))
  .use(require('ssb-replicate'))
  .use(require('ssb-friends'))
 ...

var server = Server(config)
```

## TODO

- [x] follow back strangers
- [ ] filter for blocks
- [ ] only follow people with no friends?


## License

MIT
