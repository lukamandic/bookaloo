const bcrypt = require('bcryptjs')

async function generate() {
    
    const hashedPassword = await new Promise((resolve, reject) => {
        bcrypt.hash('pass123', 10, function(err, hash) {
          if (err) reject(err)
          resolve(hash)
        });
      })
    

    return hashedPassword
}

generate().then(async (hash) => {
    console.log(hash)

    console.log(await bcrypt.compare(hash, 'pass123'))

})