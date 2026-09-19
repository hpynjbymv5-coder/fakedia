const modal=document.getElementById("modal"), content=document.getElementById("modalContent");

function openDocument(type){
  const isDriver=type.includes("Водитель");
  content.innerHTML=`
    <div class="eyebrow">${isDriver?"Водительское удостоверение":"Удостоверение личности"}</div>
    <div class="detail-card">
      <small>${isDriver?"DRIVING LICENCE":"IDENTITY CARD"}</small>
      <div class="big">Артём Ульянов</div>
      <div class="detail-row"><span>Номер</span><b>0000 0000</b></div>
      <div class="detail-row"><span>${isDriver?"Категория":"Дата рождения"}</span><b>${isDriver?"B":"03.06.2008"}</b></div>
      <div class="detail-row"><span>Статус</span><b>Действителен</b></div>
    </div>
    <div class="note">Учебный макет. Данные вымышленные и не являются официальным документом.</div>`;
  showModal();
}
function showQR(){
  let pattern="";
  const chars="01";
  for(let i=0;i<330;i++) pattern+=chars[Math.random()>0.5?1:0];
  content.innerHTML=`
    <div class="eyebrow">Проверка документа</div>
    <h2 style="margin:8px 0">Мой QR-код</h2>
    <div class="qr"><div class="qr-box">${pattern}</div><p class="note">Демонстрационный QR-код</p></div>
    <div class="note">Учебный макет — код не содержит настоящих персональных данных.</div>`;
  showModal();
}
function showProfile(){
  content.innerHTML=`
    <div class="eyebrow">Аккаунт</div>
    <h2 style="margin:8px 0 18px">Профиль</h2>
    <div class="detail-card">
      <small>ПОЛЬЗОВАТЕЛЬ</small>
      <div class="big">Артём Ульянов</div>
      <div class="detail-row"><span>Email</span><b>student@example.com</b></div>
      <div class="detail-row"><span>Документов</span><b>2</b></div>
    </div>
    <div class="note">Это учебное приложение, созданное для демонстрации интерфейса.</div>`;
  showModal();
}
function showModal(){modal.classList.remove("hidden")}
function hideModal(){modal.classList.add("hidden")}
function closeModal(e){if(e.target===modal)hideModal()}

if("serviceWorker" in navigator){
  window.addEventListener("load",()=>navigator.serviceWorker.register("sw.js").catch(()=>{}));
}