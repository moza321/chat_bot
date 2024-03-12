const qrcode = require('qrcode-terminal');
const { Client } = require('whatsapp-web.js');
const client = new Client({
  puppeteer: {
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage',
    ],
  },
});
const mongoose = require('mongoose');


//untuk perintah mongo db
const uri = "mongodb+srv://MOZAACHMADDANI:02188881019@cluster0.q9565ii.mongodb.net/violet";

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose.connect(uri, options)



// untuk komentar
// Create a schema for storing VCF data
const akun_karyawan_violet = new mongoose.Schema({
    username:String,
    password:String,
    nama: String,
    nik: String,
    nomer_telfon:String,
    divisi:String,
    lokasi_kerja:String,
    jumlah_login:String
  });
  
  const kirim_akun_karyawan_violet = mongoose.model('akun_karyawan_violets', akun_karyawan_violet);
  
  const input_akun_karyawan_violet = new kirim_akun_karyawan_violet({
    username:"adi",
    password: "adi123123",
    nama: "adi suryadi",
    nik: "005",
    nomer_telfon:"085779336158",
    divisi:"editor",
    lokasi_kerja:"grand wisata",
    jumlah_login:"1"
  });
  


//   async function getData() {

// }

// getData();

  
  // input_akun_karyawan_violet.save();

// fungsi untuk wa

// async function sendMessage(chatId, message) {
//     return await client.sendMessage(chatId, message);
//   }
  
  client.on('qr', qr => {
    qrcode.generate(qr, { small: true });
  });
  
// Event saat klien siap
// client.on('ready', async () => {
//     console.log('Client is ready!');

//     try {
//         const data = await kirim_akun_karyawan_violet.find({}, 'nama');
//         // Mencetak nama dari setiap dokumen
//         data.forEach(async (item) => {
//             const number = "+6281932240030"; // Nomor telepon penerima
            
//             // Pesan yang akan dikirim
//             const text = item.nama;
            
//             // Format ID chat
//             const chatId = number.substring(1) + "@c.us";
            
//             try {
//                 // Mengirim pesan
//                 await client.sendMessage(chatId, text);
//                 console.log("Pesan terkirim:", text);
//             } catch (sendErr) {
//                 console.error("Gagal mengirim pesan:", sendErr);
//             }
//         });
//     } catch (err) {
//         console.error(err);
//     }
// });

  // Event saat klien siap
  client.on('ready', async () => {
    console.log('Client is ready!');

//   try {
//       const data = await kirim_akun_karyawan_violet.find({}, 'nama divisi lokasi_kerja username password nomer_telfon');
//       // Mencetak nama dari setiap dokumen
//       data.forEach( async (item) => {
          
//           const number = `+62${item.nomer_telfon}`;
//             // Your message.
//           const text = `
// Hay Assalamualaikum Wr Wb *${item.nama}*
            
// Mohon maaf atas ketidaknyamananya atas gangguan Absesnsi Absen Karyawan Violet : 
// https://absen.karyawanviolet.my.id

// dikarenakan adanya maslaah di server pusat mohon pengertianya untuk kemungkinan sementara akan di alihkan ke server sementara :
// https://vgx8xrfr-3000.asse.devtunnels.ms/
            
// Dengan login ulang akun ada di:
            
// - Nama: ${item.nama}
// - Jabatan: ${item.divisi}
// - Lokasi Kerja: ${item.lokasi_kerja}
// - Username: ${item.username}
// - Password: ${item.password}
// - Nomor Telepon: ${item.nomer_telfon}

// ----link----
// -link : https://vgx8xrfr-3000.asse.devtunnels.ms/
            
// Mohon diingat bahwa login hanya berlaku sekali saja. Untuk penggunaan Absen Karyawan Violet :
// https://absen.karyawanviolet.my.id
// akan diinfo lebih lanjut via chat bot ini. Mohon membalas pesan ini dengan *ya* untuk akses link lebih mudah.
            
// Untuk cara penggunaan linknya sama seperti biasanya, namun untuk pertama kali akan ada info web pengembangan makan peneka *continue*, maka akan ke tampilan login. Mohon isi sesuai data login yang telah diberikan pada pesan ini. Link ini akan dinonaktifkan jam 9:10 WIB untuk shift siang, akan diinfokan kembali. Terima kasih.
            
// Chat bot Moza Achmad Dani
//             `;
            
          
//            const chatId = number.substring(1) + "@c.us";
           
//            client.sendMessage(chatId, text);
//           console.log(item.nama);
//       });
//   } catch (err) {
//       console.error(err);
//   }
 
  // Sending message.
 });


 client.on('message_create', message => {
	if (message.body === 'ya') {
		// send back "pong" to the chat the message was sent in
		client.sendMessage(message.from, 'linknya : https://vgx8xrfr-3000.asse.devtunnels.ms/');
	} else	if (message.body === 'Ya') {
		// send back "pong" to the chat the message was sent in
		client.sendMessage(message.from, 'linknya : https://vgx8xrfr-3000.asse.devtunnels.ms/');
	}
});
  

   client.initialize();