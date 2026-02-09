const http = require('http')

let presiden ="Obama"

//1. Harus panggil File nya
//2. Pastikan file yang di panggil, variabel nya sudah di export
let profile_karyawan = require(`./data karyawan/profile`)

const Server = http.createServer( function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'})
    if (req.url == '/') {
        res.write(`Halaman utama`+ profile_karyawan.Nama+ `, tiggal di ` + profile_karyawan.Alamat + `,Umur` + profile_karyawan.Umur)
        res.write(profile_karyawan.cetakprofile(`Programmer`))
            
    }
    else if (request.url == '/about'){
        res.write(`Tentang kami`)
    }
    else {
        res.write('<h1>Url Tidak tersedia, bosque !!</h1>')
    }
    res.end()
})
Server.listen(3000, function(){
    console.log('server sudah siap, silakan akses http://localhost:3000');
})
