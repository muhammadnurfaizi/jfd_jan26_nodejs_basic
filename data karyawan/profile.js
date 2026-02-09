let Nama = "Muhammad Nur Faizi"
let Alamat ="Kembangan, Jakarta Barat"
let Umur = 24

function Biodata(Profesi){
    return `Nama: ${Nama}\n Alamat: ${Alamat}\n Umur: ${Umur} Pekerjaan: ${Profesi}` 
}

module.exports = {
    Nama,
    Alamat,
    Umur,
    cetakprofile: Biodata

}