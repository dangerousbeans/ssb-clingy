# ssb-clingy

Behaviour change plugin for scuttlebutt - follows back anyone who manages to connect

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