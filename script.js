'use strict';
// 실제 예식 정보가 정해지면 HTML과 아래 설정을 함께 변경하세요.
const wedding = {
  date: '2027-05-22T14:00:00+09:00',
  contacts: { '신랑': '', '신부': '' },
  accounts: { '신랑': '', '신부': '' },
  photos: [
    { src: 'https://images.unsplash.com/photo-1640654454819-34e53d3ef40a?auto=format&fit=crop&w=1400&q=85', alt: '서로를 안고 있는 커플의 예시 웨딩 사진' },
    { src: 'https://images.unsplash.com/photo-1654553030633-163db92b2456?auto=format&fit=crop&w=1400&q=85', alt: '함께 춤추는 커플의 예시 웨딩 사진' },
    { src: 'https://images.unsplash.com/photo-1769050350292-f990b8fc9e3b?auto=format&fit=crop&w=1400&q=85', alt: '손을 잡고 걷는 커플의 예시 웨딩 사진' }
  ]
};
const toast = document.querySelector('#toast');
let toastTimer;
function notify(message) {
  toast.textContent = message;
  toast.classList.add('visible');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('visible'), 3200);
}
async function copyText(value) {
  try {
    if (navigator.clipboard && window.isSecureContext) await navigator.clipboard.writeText(value);
    else {
      const field = document.createElement('textarea');
      field.value = value; field.style.position = 'fixed'; field.style.opacity = '0';
      document.body.append(field); field.select();
      const success = document.execCommand('copy'); field.remove();
      if (!success) throw new Error('copy failed');
    }
    notify('복사되었습니다.');
  } catch { window.prompt('아래 내용을 길게 눌러 복사해 주세요.', value); }
}
document.querySelectorAll('[data-copy]').forEach(button => button.addEventListener('click', () => copyText(button.dataset.copy)));
document.querySelectorAll('[data-contact]').forEach(button => button.addEventListener('click', () => {
  const phone = wedding.contacts[button.dataset.contact];
  if (phone) window.location.href = `tel:${phone}`;
  else notify('연락처 등록 후 이용할 수 있어요.');
}));
document.querySelectorAll('[data-account]').forEach(button => button.addEventListener('click', () => {
  const account = wedding.accounts[button.dataset.account];
  if (account) copyText(account); else notify('계좌번호 등록 후 이용할 수 있어요.');
}));
const calendar = document.querySelector('#calendar-days');
for (let i = 0; i < 6; i++) calendar.append(document.createElement('span'));
for (let day = 1; day <= 31; day++) {
  const cell = document.createElement('span'); cell.textContent = day;
  if (day === 22) cell.className = 'wedding-day';
  calendar.append(cell);
}
function updateCountdown() {
  const today = new Intl.DateTimeFormat('en-CA', {timeZone:'Asia/Seoul',year:'numeric',month:'2-digit',day:'2-digit'}).format(new Date());
  const days = Math.round((Date.parse('2027-05-22T00:00:00+09:00') - Date.parse(`${today}T00:00:00+09:00`)) / 86400000);
  document.querySelector('#countdown').textContent = days > 0 ? `민준 ♥ 서연의 결혼식까지 ${days}일` : days === 0 ? '오늘, 저희 결혼합니다.' : '함께해 주신 모든 분께 감사합니다.';
}
updateCountdown(); setInterval(updateCountdown, 60000);
const dialog = document.querySelector('#photo-dialog');
let photoIndex = 0;
function showPhoto(index) {
  photoIndex = (index + wedding.photos.length) % wedding.photos.length;
  const photo = wedding.photos[photoIndex];
  document.querySelector('#expanded-photo').src = photo.src;
  document.querySelector('#expanded-photo').alt = photo.alt;
  document.querySelector('#photo-counter').textContent = `${photoIndex + 1} / ${wedding.photos.length}`;
}
function renderPhotos() {
  if (!wedding.photos.length) return;
  document.querySelector('#hero-image').src = wedding.photos[0].src;
  wedding.photos.forEach((photo, index) => {
    const button = document.createElement('button'); button.className = 'gallery-item';
    button.setAttribute('aria-label', `${index + 1}번째 사진 크게 보기`);
    const img = document.createElement('img'); img.src = photo.src; img.alt = photo.alt; img.loading = 'lazy';
    button.append(img);
    button.addEventListener('click', () => { showPhoto(index); dialog.showModal(); document.body.style.overflow = 'hidden'; });
    document.querySelector('#gallery-grid').append(button);
  });
}
document.querySelector('#close-photo').addEventListener('click', () => dialog.close());
document.querySelector('#prev-photo').addEventListener('click', () => showPhoto(photoIndex - 1));
document.querySelector('#next-photo').addEventListener('click', () => showPhoto(photoIndex + 1));
dialog.addEventListener('close', () => { document.body.style.overflow = ''; });
dialog.addEventListener('click', event => { if (event.target === dialog) { const r = dialog.getBoundingClientRect(); if (event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom) dialog.close(); } });
dialog.addEventListener('keydown', event => {
  if (event.key === 'ArrowLeft') { event.preventDefault(); showPhoto(photoIndex - 1); }
  if (event.key === 'ArrowRight') { event.preventDefault(); showPhoto(photoIndex + 1); }
});
renderPhotos();
