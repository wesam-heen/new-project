// for select text by click button
const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");
const button4 = document.getElementById("button4");

const output = document.getElementById("output");

button1.addEventListener("click", () => {
  output.innerHTML = `           <p>
  Adopt a Family“ Projekt in Syrien Die Familien wurden sorgfältig
  durch unsere Partner ausgesucht.
</p>
<p>
  Die Lisen der Familein finden Sie auf unsrer Homeage. Mehrere
  Personen können die Patenschaft teilen.
</p>
<p>
  Auch einmalige Spenden sind willkommen! <br />
  Bei Fragen kontaktieren Sie uns per Mail:
  <span style="color: #28b30c">family@mhs-world.org</span>
</p>`;
});

button2.addEventListener("click", () => {
  output.innerHTML = `<p>  Suriye’de ,Adopt a Family“ projesi
  Aileler, çalışma arkadaşlarımız tarafından itina ile seçilmişlerdir.</p>
  <p>  Aileler isim ve adreslerine internet sayfamızdan ulaşabilmektedir.</p>
  <p> Bir ailenin bakımı birden fazla kişi tarafından paylaşılabilir.</p>
 <p>Tek seferlik bağışlar da kabul edilmektedir.</p>
 <p> Bağış yap, hayat kurtar, bir gülümseme hediye et.</p>
  <p>  Yardım et, yardım etmek isteyenlere ulaştır.</p>
<p> Sorularınız için bize Mail yoluyla ulaşabilirsiniz: <span style="color: #28b30c">family@mhs-world.org</span></p>

  
  `;
});

button3.addEventListener("click", () => {
  output.innerHTML = `
  <p>  Adopt a Family“ Projekt u Siriji
  Više osoba mogu dijeliti izdržavanje jedne porodice.</p>
  <p> Jednokratne pomoći su takodje dobro došle.</p>
 <p>  Listu porodica možete naći našoj internet stranici.</p>

  
  Za sva pitanja kontaktirajte nas preko E-Mail: <span style="color: #28b30c">family@mhs-world.org</span>
  
  `;
});
button4.addEventListener("click", () => {
  output.innerHTML = `
  <p style='direction:rtl'>  جمعية الأمل للدعم الطبي و الانساني تفتح باباً للخير فاغتنموه:
  – الكفالة تشمل الملبس و المشرب و المأكل و التعليم.</p>
  
 <p style='direction:rtl'>  – إمكانية اقتسام القيمة و الأجرمعا.
  
 – إمكانية التبرع مرة و احدة او بشكل منتظم.</p>
  
<p style='direction:rtl'>
للمزيد من المعلومات الرجاء التواصل معنا:
  
<span style="color: #28b30c">family@mhs-world.org</span>
</p>
  `;
});

let buttons = document.querySelectorAll(".multi-select .buttons button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    buttons.forEach((button) => {
      button.classList.remove("active");
    });
    button.classList.add("active");
  });
});
