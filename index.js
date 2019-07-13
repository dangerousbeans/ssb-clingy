// Clingy Plugin
//
// Will follow any connecting id unless already following
exports.name = 'clingy'
exports.version = '1.1.0'
exports.manifest = {}

exports.init = (api, opts) => {
  api.on('rpc:connect', function (rpc, args) {
    console.log("connection from: ", rpc.id)

    var our_id = api.whoami().id
    var connecting_id = rpc.id

    api.friends.isFollowing({source: our_id, dest: connecting_id}, (err, following) => {
      if (following) {
        console.log("already following:", connecting_id)
      } else {
       // Yay more friendssss
        console.log("stranger! New friend :3", connecting_id)

        api.publish({
         type: "contact",
         contact: connecting_id,
         following: true
       }, () => {
          console.log("Followed", connecting_id)
       })
      }
    })
  })
}
