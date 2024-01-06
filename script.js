function kontrolEt() {
  let adsoyad = document.getElementById("adsoyad").value.trim();
  let numara = document.getElementById("numara").value.trim();

  if (adsoyad == "" || numara == "") {
    document.getElementById("sonuc").innerHTML =
      '<span class="error-message">Kutucukları Doldurunuz!</span>';
    return;
  }

  if (adsoyad.indexOf(" ") == -1) {
    document.getElementById("sonuc").innerHTML =
      '<span class="error-message">Ad soyad Hatalı! örn:Harun Acar</span>';
    return;
  }

  if (numara.length != 9) {
    document.getElementById("sonuc").innerHTML =
      '<span class="error-message">Öğrenci numarası 9 basamaklı olmalı!</span>';
    return;
  }

  let kayitYili = "20" + numara.substring(0, 2);
  let bitisYili = parseInt(kayitYili) + 4;
  let simdikiYil = new Date().getFullYear();

  if (bitisYili > simdikiYil) {
    document.getElementById("sonuc").innerHTML =
      '<span class="success-message">Azami bitiş tarihi: ' +
      bitisYili +
      "</span>";
  } else {
    document.getElementById("sonuc").innerHTML =
      '<span class="error-message">Kayıt Bulunamadı</span>';
  }
}
