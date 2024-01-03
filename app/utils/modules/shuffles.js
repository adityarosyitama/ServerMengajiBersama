// if (jmlhsoal < 30) {
//     var selisih = 30 - jmlhsoal;
//     var arr = [jmlhasionalisme, jmlhbahasa, jmlhcc];
//     var d = 0;
//     while (d < selisih) {
//       var randomVariable = Math.floor(Math.random() * 1);
//       d = d + randomVariable;
//       console.log("randomVariable", randomVariable);
//       console.log(d);
//       arr = shuffleArray(arr);
//       arr[0] = arr[0] + randomVariable;
//     }
//     // if(jmlhsoal + d == 30){
//      jmlhasionalisme = jmlhasionalisme- jmlhasionalisme + arr[0];
//      jmlhbahasa = jmlhbahasa- jmlhbahasa + arr[0];
//      jmlhcc = jmlhcc- jmlhcc + arr[0];
//     // }
//     // else {
//     //   jmlhasionalisme = jmlhasionalisme - jmlhasionalisme + arr[0]
//     //   jmlhbahasa = jmlhbahasa - jmlhbahasa + arr[0] + 30 - jmlhsoal + d
//     //   jmlhcc = jmlhcc - jmlhcc + arr[0]
//     // }
//   }

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

  //untuk membagi perbandingan banyak soal per jenis
  function getRandomInt32(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return (Math.floor(Math.random() * (max - min + 1)) + min) | 0;
  }

function dataacak(jawabanteracak, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10) {
  const dataTahun = jawabanteracak.filter((a) => a.tahun === year);

  var aa = [];
  var bb = [];
  var cc = [];
  var dd = [];
  var ee = [];
  var ff = [];
  var gg = [];
  var hh = [];
  var ii = [];
  var jj = [];

  for (var i = 0; i < dataTahun.length; i++) {
    if (dataTahun[i].jenis === a1) {
      aa.push(dataTahun[i]);
    } else if (dataTahun[i].jenis === a2) {
      bb.push(dataTahun[i]);
    } else if (dataTahun[i].jenis === a3) {
      cc.push(dataTahun[i]);
    } else if (dataTahun[i].jenis === a4) {
      dd.push(dataTahun[i]);
    } else if (dataTahun[i].jenis === a5) {
      ee.push(dataTahun[i]);
    } else if (dataTahun[i].jenis === a6) {
      ff.push(dataTahun[i]);
    } else if (dataTahun[i].jenis === a7) {
      gg.push(dataTahun[i]);
    } else if (dataTahun[i].jenis === a8) {
      hh.push(dataTahun[i]);
    } else if (dataTahun[i].jenis === a9) {
      ii.push(dataTahun[i]);
    } else if (dataTahun[i].jenis === a10) {
      jj.push(dataTahun[i]);
    }
  }

  //pilar negara 10-20
  var jmlhaa = getRandomInt32(10, 19); 
  var jmlhdd = getRandomInt32(1, 3);
  var jmlhsoal = parseInt(jmlhaa) + parseInt(jmlhdd);

  //ee
  var a = Math.floor((30 - jmlhsoal) / 2);
  var jmlhee = getRandomInt32(1, a);
  var jmlhbb = getRandomInt32(1, a);
  var jmlhcc = getRandomInt32(1, a);

  var jmlhsoal =
    jmlhsoal + parseInt(jmlhee) + parseInt(jmlhbb) + parseInt(jmlhcc);

  if (jmlhsoal < 30) {
    var selisih = 30 - jmlhsoal;
    jmlhaa = jmlhaa + selisih;
  }

  if (jmlhsoal > 30) {
    var lebih = jmlhsoal - 30;
    jmlhaa = jmlhaa - lebih;
  }

  var dataaa = aa.slice(1, jmlhaa + 1);
  var databb = bb.slice(1, jmlhbb + 1);
  var datacc = cc.slice(1, jmlhcc + 1);
  var datadd = dd.slice(1, jmlhdd + 1);
  var dataee = ee.slice(1, jmlhee + 1);
  var datagabungan = dataaa.concat(databb, datacc, datadd, dataee);
  var dataacak = shuffleArray(datagabungan);

  // var arr = [
  //   jmlhaa,
  //   jmlhbb,
  //   jmlhcc,
  //   jmlhdd,
  //   jmlhee,
  //   jmlhsoal,
  // ];
  // console.log(arr);
  // console.log([
  //   dataaa.length,
  //   databb.length,
  //   datacc.length,
  //   datadd.length,
  //   dataee.length,
  // ]);

  res.json(dataacak);
}

module.exports = shuffleArray;
