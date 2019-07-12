// Clingy Plugin
//
// Will follow any connecting id unless already following
exports.name = 'clingy'
exports.version = '1.1.0'
exports.manifest = {}

exports.init = (api, opts) => {
  api.connect.hook((connect, args) => {
    const address = args[0]
    const cb = args[1]
    const our_id = api.whoami().id

    connect(address, (err, x) => {
      if (err) return cb(err)

      const p = api.multiserver.parse(address)
      if (!Array.isArray(p)
          || p.length < 1
          || p[0].length < 2
          || !("key" in p[0][1]))
      {
        console.log("unexpected result when parsing address:", address, " result:", p)
        return cb(null, x)
      }

      const connecting_id = '@' + p[0][1].key.toString('base64') + '.ed25519'

      api.friends.isFollowing({source: our_id, dest: connecting_id}, (err, following) => {
        if (following) {
          console.log("already following:", connecting_id)
      	  cb(null, x)
        } else {
      	  // Yay more friendssss
          console.log("stranger! New friend :3", connecting_id)

          api.publish({
      		  type: "contact",
      		  contact: connecting_id,
      		  following: true
      	  }, () => {
            console.log("Followed", connecting_id)
            cb(null, x)
      	  })
        }
      })
    })
  })
}
