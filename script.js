'use strict';
// 실제 예식 정보가 정해지면 HTML과 아래 설정을 함께 변경하세요.
const wedding = {
  date: '2026-12-12T14:40:00+09:00',
  contacts: { '신랑': '010-2554-4742', '신부': '010-7508-9856' },
  accounts: { '신랑': '국민은행 700102-01-141000', '신부': '신한은행 110-383-580501' },
  photos: [
    { src: 'assets/final-gallery/02-01.jpg', alt: '김영빈과 장하연의 웨딩 사진 1' },
    { src: 'assets/final-gallery/02-02.jpg', alt: '김영빈과 장하연의 웨딩 사진 2' },
    { src: 'assets/final-gallery/02-03.jpg', alt: '김영빈과 장하연의 웨딩 사진 3' },
    { src: 'assets/final-gallery/03-01.jpg', alt: '김영빈과 장하연의 웨딩 사진 4' },
    { src: 'assets/final-gallery/03-02.jpg', alt: '김영빈과 장하연의 웨딩 사진 5' },
    { src: 'assets/final-gallery/03-03.jpg', alt: '김영빈과 장하연의 웨딩 사진 6' },
    { src: 'assets/final-gallery/04-01.jpg', alt: '김영빈과 장하연의 웨딩 사진 7' },
    { src: 'assets/final-gallery/04-02.jpg', alt: '김영빈과 장하연의 웨딩 사진 8' },
    { src: 'assets/final-gallery/04-03.jpg', alt: '김영빈과 장하연의 웨딩 사진 9' },
    { src: 'assets/final-gallery/04-04.jpg', alt: '김영빈과 장하연의 웨딩 사진 10' },
    { src: 'assets/final-gallery/05-01.jpg', alt: '김영빈과 장하연의 웨딩 사진 11' },
    { src: 'assets/final-gallery/05-02.jpg', alt: '김영빈과 장하연의 웨딩 사진 12' },
    { src: 'assets/final-gallery/07-01.jpg', alt: '김영빈과 장하연의 웨딩 사진 13' },
    { src: 'assets/final-gallery/07-02.jpg', alt: '김영빈과 장하연의 웨딩 사진 14' },
    { src: 'assets/final-gallery/08-01.jpg', alt: '김영빈과 장하연의 웨딩 사진 15' },
    { src: 'assets/final-gallery/08-02.jpg', alt: '김영빈과 장하연의 웨딩 사진 16' },
    { src: 'assets/final-gallery/08-03.jpg', alt: '김영빈과 장하연의 웨딩 사진 17' },
    { src: 'assets/final-gallery/09-01.jpg', alt: '김영빈과 장하연의 웨딩 사진 18' },
    { src: 'assets/final-gallery/09-02.jpg', alt: '김영빈과 장하연의 웨딩 사진 19' },
    { src: 'assets/final-gallery/09-03.jpg', alt: '김영빈과 장하연의 웨딩 사진 20' },
    { src: 'assets/final-gallery/09-04.jpg', alt: '김영빈과 장하연의 웨딩 사진 21' },
    { src: 'assets/final-gallery/09-05.jpg', alt: '김영빈과 장하연의 웨딩 사진 22' },
    { src: 'assets/final-gallery/10-01.jpg', alt: '김영빈과 장하연의 웨딩 사진 23' },
    { src: 'assets/final-gallery/10-02.jpg', alt: '김영빈과 장하연의 웨딩 사진 24' },
    { src: 'assets/final-gallery/10-03.jpg', alt: '김영빈과 장하연의 웨딩 사진 25' },
    { src: 'assets/final-gallery/12-01.jpg', alt: '김영빈과 장하연의 웨딩 사진 26' },
    { src: 'assets/final-gallery/12-02.jpg', alt: '김영빈과 장하연의 웨딩 사진 27' },
    { src: 'assets/final-gallery/12-03.jpg', alt: '김영빈과 장하연의 웨딩 사진 28' },
    { src: 'assets/final-gallery/12-04.jpg', alt: '김영빈과 장하연의 웨딩 사진 29' },
    { src: 'assets/final-gallery/13-01.jpg', alt: '김영빈과 장하연의 웨딩 사진 30' },
    { src: 'assets/final-gallery/13-02.jpg', alt: '김영빈과 장하연의 웨딩 사진 31' },
    { src: 'assets/final-gallery/13-03.jpg', alt: '김영빈과 장하연의 웨딩 사진 32' },
    { src: 'assets/final-gallery/13-04.jpg', alt: '김영빈과 장하연의 웨딩 사진 33' },
    { src: 'assets/final-gallery/13-05.jpg', alt: '김영빈과 장하연의 웨딩 사진 34' },
    { src: 'assets/final-gallery/14-01.jpg', alt: '김영빈과 장하연의 웨딩 사진 35' },
    { src: 'assets/final-gallery/14-02.jpg', alt: '김영빈과 장하연의 웨딩 사진 36' },
    { src: 'assets/final-gallery/15-01.jpg', alt: '김영빈과 장하연의 웨딩 사진 37' },
    { src: 'assets/final-gallery/15-02.jpg', alt: '김영빈과 장하연의 웨딩 사진 38' },
    { src: 'assets/final-gallery/17-01.jpg', alt: '김영빈과 장하연의 웨딩 사진 39' },
    { src: 'assets/final-gallery/17-02.jpg', alt: '김영빈과 장하연의 웨딩 사진 40' },
    { src: 'assets/final-gallery/18-01.jpg', alt: '김영빈과 장하연의 웨딩 사진 41' },
    { src: 'assets/final-gallery/18-02.jpg', alt: '김영빈과 장하연의 웨딩 사진 42' },
    { src: 'assets/final-gallery/18-03.jpg', alt: '김영빈과 장하연의 웨딩 사진 43' },
    { src: 'assets/final-gallery/18-04.jpg', alt: '김영빈과 장하연의 웨딩 사진 44' },
    { src: 'assets/final-gallery/18-05.jpg', alt: '김영빈과 장하연의 웨딩 사진 45' },
    { src: 'assets/final-gallery/19-01.jpg', alt: '김영빈과 장하연의 웨딩 사진 46' },
    { src: 'assets/final-gallery/19-02.jpg', alt: '김영빈과 장하연의 웨딩 사진 47' },
    { src: 'assets/final-gallery/20-01.jpg', alt: '김영빈과 장하연의 웨딩 사진 48' },
    { src: 'assets/final-gallery/20-02.jpg', alt: '김영빈과 장하연의 웨딩 사진 49' },
    { src: 'assets/final-gallery/20-03.jpg', alt: '김영빈과 장하연의 웨딩 사진 50' },
    { src: 'assets/final-gallery/20-04.jpg', alt: '김영빈과 장하연의 웨딩 사진 51' }
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

const guestbookApiUrl = 'https://our-day-guestbook-hayeon.yeoning1119.chatgpt.site/guestbook';
const photoApiUrl = 'https://our-day-guestbook-hayeon.yeoning1119.chatgpt.site';
const guestbookPreview = document.querySelector('#guestbook-preview');
const guestbookFullList = document.querySelector('#guestbook-full-list');
const guestbookStatus = document.querySelector('#guestbook-status');
const guestbookDialog = document.querySelector('#guestbook-dialog');
const guestbookListDialog = document.querySelector('#guestbook-list-dialog');
const guestbookEditDialog = document.querySelector('#guestbook-edit-dialog');
const guestbookForm = document.querySelector('#guestbook-form');
const guestbookEditForm = document.querySelector('#guestbook-edit-form');
let guestbookEntries = [];
let editingGuestbookId = null;
function formatGuestbookDate(value) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return '';
  return new Intl.DateTimeFormat('ko-KR', { month: 'numeric', day: 'numeric' }).format(date);
}
function createGuestbookCard(entry) {
  const article = document.createElement('article');
  article.className = 'guestbook-card';
  const header = document.createElement('div');
  header.className = 'guestbook-card-header';
  const name = document.createElement('strong');
  name.textContent = entry.name;
  const edit = document.createElement('button');
  edit.className = 'guestbook-edit-trigger';
  edit.type = 'button';
  edit.textContent = '⋯';
  edit.setAttribute('aria-label', `${entry.name}님 방명록 수정 또는 삭제`);
  edit.addEventListener('click', () => openEditGuestbook(entry.id));
  header.append(name, edit);
  const message = document.createElement('p');
  message.textContent = entry.message;
  const date = document.createElement('time');
  date.dateTime = entry.created_at || '';
  date.textContent = formatGuestbookDate(entry.created_at);
  article.append(header, message, date);
  return article;
}
function renderGuestbookEntries() {
  const previewEntries = guestbookEntries.slice(0, 2);
  guestbookPreview.replaceChildren();
  guestbookFullList.replaceChildren();
  if (!guestbookEntries.length) {
    const empty = document.createElement('p');
    empty.className = 'guestbook-empty';
    empty.textContent = '첫 번째 축하 메시지를 남겨주세요.';
    guestbookPreview.append(empty);
    guestbookFullList.append(empty.cloneNode(true));
    return;
  }
  previewEntries.forEach(entry => guestbookPreview.append(createGuestbookCard(entry)));
  guestbookEntries.forEach(entry => guestbookFullList.append(createGuestbookCard(entry)));
}
async function loadGuestbook(silent = false) {
  try {
    const response = await fetch(guestbookApiUrl, { headers: { accept: 'application/json' }, cache: 'no-store' });
    const payload = await response.json();
    if (!response.ok) throw new Error(payload.error || '방명록을 불러오지 못했어요.');
    guestbookEntries = Array.isArray(payload.entries) ? payload.entries : [];
    renderGuestbookEntries();
    if (guestbookStatus) guestbookStatus.textContent = '새 글이 올라오면 자동으로 보여요.';
  } catch (error) {
    if (guestbookStatus) guestbookStatus.textContent = silent ? '방명록을 잠시 불러오지 못했어요. 잠시 후 다시 시도해 주세요.' : '방명록을 불러오는 중이에요.';
  }
}
function openGuestbookDialog() {
  if (guestbookDialog?.showModal) guestbookDialog.showModal();
  document.querySelector('#guestbook-name')?.focus();
}
function closeGuestbookDialog() { guestbookDialog?.close(); }
function openGuestbookListDialog() { if (guestbookListDialog?.showModal) guestbookListDialog.showModal(); }
function closeGuestbookListDialog() { guestbookListDialog?.close(); }
function openEditGuestbook(id) {
  const entry = guestbookEntries.find(item => String(item.id) === String(id));
  if (!entry || !guestbookEditDialog) return;
  editingGuestbookId = entry.id;
  document.querySelector('#guestbook-edit-id').value = entry.id;
  document.querySelector('#guestbook-edit-name').value = entry.name;
  document.querySelector('#guestbook-edit-message').value = entry.message;
  document.querySelector('#guestbook-edit-password').value = '';
  guestbookEditDialog.showModal();
  document.querySelector('#guestbook-edit-password')?.focus();
}
function closeEditGuestbook() { guestbookEditDialog?.close(); editingGuestbookId = null; }
document.querySelector('[data-open-guestbook]')?.addEventListener('click', openGuestbookDialog);
document.querySelector('[data-open-guestbook-list]')?.addEventListener('click', openGuestbookListDialog);
document.querySelector('[data-close-guestbook]')?.addEventListener('click', closeGuestbookDialog);
document.querySelector('[data-close-guestbook-list]')?.addEventListener('click', closeGuestbookListDialog);
document.querySelector('[data-close-guestbook-edit]')?.addEventListener('click', closeEditGuestbook);
guestbookForm?.addEventListener('submit', async event => {
  event.preventDefault();
  const submit = guestbookForm.querySelector('button[type="submit"]');
  submit.disabled = true;
  try {
    const values = Object.fromEntries(new FormData(guestbookForm).entries());
    const response = await fetch(guestbookApiUrl, { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify(values) });
    const payload = await response.json();
    if (!response.ok) throw new Error(payload.error || '방명록을 저장하지 못했어요.');
    guestbookForm.reset(); closeGuestbookDialog(); notify('축하 메시지가 방명록에 남겨졌어요.'); await loadGuestbook();
  } catch (error) { notify(error.message || '방명록을 저장하지 못했어요.'); }
  finally { submit.disabled = false; }
});
guestbookEditForm?.addEventListener('submit', async event => {
  event.preventDefault();
  if (editingGuestbookId === null) return;
  const submit = guestbookEditForm.querySelector('button[type="submit"]');
  submit.disabled = true;
  try {
    const values = Object.fromEntries(new FormData(guestbookEditForm).entries());
    const response = await fetch(`${guestbookApiUrl}/${editingGuestbookId}`, { method: 'PATCH', headers: { 'content-type': 'application/json' }, body: JSON.stringify(values) });
    const payload = await response.json();
    if (!response.ok) throw new Error(payload.error || '방명록을 수정하지 못했어요.');
    closeEditGuestbook(); notify('방명록이 수정되었어요.'); await loadGuestbook();
  } catch (error) { notify(error.message || '방명록을 수정하지 못했어요.'); }
  finally { submit.disabled = false; }
});
document.querySelector('[data-delete-guestbook]')?.addEventListener('click', async () => {
  if (editingGuestbookId === null || !window.confirm('이 방명록을 삭제할까요?')) return;
  const password = document.querySelector('#guestbook-edit-password').value.trim();
  if (!password) { notify('비밀번호를 입력해 주세요.'); return; }
  try {
    const response = await fetch(`${guestbookApiUrl}/${editingGuestbookId}`, { method: 'DELETE', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ password }) });
    const payload = await response.json();
    if (!response.ok) throw new Error(payload.error || '방명록을 삭제하지 못했어요.');
    closeEditGuestbook(); notify('방명록이 삭제되었어요.'); await loadGuestbook();
  } catch (error) { notify(error.message || '방명록을 삭제하지 못했어요.'); }
});
loadGuestbook();
window.setInterval(() => loadGuestbook(true), 10000);

const photoFiles = document.querySelector('#photo-files');
const photoName = document.querySelector('#photo-uploader-name');
const photoFileCount = document.querySelector('#photo-file-count');
const photoUploadButton = document.querySelector('#photo-upload-button');
const photoUploadStatus = document.querySelector('#photo-upload-status');
photoFiles?.addEventListener('change', () => {
  const count = photoFiles.files.length;
  photoFileCount.textContent = count ? `${count}장 선택됨` : '선택된 사진이 없어요.';
});
photoUploadButton?.addEventListener('click', async () => {
  const files = [...(photoFiles?.files || [])];
  const name = photoName?.value.trim() || '';
  if (!name) { notify('이름을 입력해 주세요.'); photoName?.focus(); return; }
  if (!files.length) { notify('공유할 사진을 선택해 주세요.'); return; }
  if (files.length > 40) { notify('한 번에 최대 40장까지 올릴 수 있어요.'); return; }
  if (files.some(file => !file.type.startsWith('image/') || file.size > 10 * 1024 * 1024)) { notify('사진은 한 장당 10MB 이하의 이미지 파일만 올려 주세요.'); return; }
  const form = new FormData();
  form.append('name', name);
  files.forEach(file => form.append('photos', file));
  photoUploadButton.disabled = true;
  photoUploadStatus.textContent = '사진을 올리는 중이에요.';
  try {
    const response = await fetch(`${photoApiUrl}/photos`, { method: 'POST', body: form });
    const payload = await response.json();
    if (!response.ok) throw new Error(payload.error || '사진을 올리지 못했어요.');
    photoName.value = '';
    photoFiles.value = '';
    photoFileCount.textContent = '선택된 사진이 없어요.';
    photoUploadStatus.textContent = `${payload.count || files.length}장의 사진이 저장되었어요. 공개 목록에는 표시되지 않아요.`;
    notify('축하 사진이 비공개로 저장되었어요.');
  } catch (error) {
    photoUploadStatus.textContent = error.message || '사진을 올리지 못했어요.';
    notify(photoUploadStatus.textContent);
  } finally { photoUploadButton.disabled = false; }
});
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
for (let i = 0; i < 2; i++) calendar.append(document.createElement('span'));
for (let day = 1; day <= 31; day++) {
  const cell = document.createElement('span'); cell.textContent = day;
  if (day === 12) cell.className = 'wedding-day';
  calendar.append(cell);
}
let lastCountdownSecond = null;
function updateCountdown() {
  const target = Date.parse(wedding.date);
  const remaining = Math.max(0, target - Date.now());
  const days = Math.floor(remaining / 86400000);
  const hours = Math.floor((remaining % 86400000) / 3600000);
  const minutes = Math.floor((remaining % 3600000) / 60000);
  const seconds = Math.floor((remaining % 60000) / 1000);
  const pad = value => String(value).padStart(2, '0');
  document.querySelector('#countdown-days').textContent = days;
  document.querySelector('#countdown-hours').textContent = pad(hours);
  document.querySelector('#countdown-minutes').textContent = pad(minutes);
  const secondsElement = document.querySelector('#countdown-seconds');
  secondsElement.textContent = pad(seconds);
  if (lastCountdownSecond !== seconds) {
    secondsElement.classList.remove('countdown-tick');
    void secondsElement.offsetWidth;
    secondsElement.classList.add('countdown-tick');
    lastCountdownSecond = seconds;
  }
  document.querySelector('#countdown').textContent = days > 0 ? `영빈 하연의 결혼식까지 D-${days}` : days === 0 && remaining > 0 ? '오늘, 저희 결혼합니다.' : '함께해 주신 모든 분께 감사합니다.';
  const togetherStart = Date.parse('2019-09-09T00:00:00+09:00');
  const togetherDays = Math.max(0, Math.floor((Date.now() - togetherStart) / 86400000));
  document.querySelector('#together-days-value').textContent = `+ ${togetherDays.toLocaleString('ko-KR')}`;
}
updateCountdown(); setInterval(updateCountdown, 1000);
const dialog = document.querySelector('#photo-dialog');
let photoIndex = 0;
function showPhoto(index) {
  photoIndex = (index + wedding.photos.length) % wedding.photos.length;
  const photo = wedding.photos[photoIndex];
  document.querySelector('#expanded-photo').src = photo.src;
  document.querySelector('#expanded-photo').alt = photo.alt;
  document.querySelector('#photo-counter').textContent = `${photoIndex + 1} / ${wedding.photos.length}`;
}
let galleryIndex = 0;
let galleryImage;
function updateGalleryPhoto(index) {
  galleryIndex = (index + wedding.photos.length) % wedding.photos.length;
  const photo = wedding.photos[galleryIndex];
  if (galleryImage) {
    galleryImage.src = photo.src;
    galleryImage.alt = photo.alt;
  }
  const count = document.querySelector('#gallery-count');
  if (count) count.textContent = `${galleryIndex + 1} / ${wedding.photos.length}`;
}
function renderPhotos() {
  if (!wedding.photos.length) return;
  const hero = document.querySelector('#hero-image');
  if (hero) hero.src = wedding.photos[0].src;
  const grid = document.querySelector('#gallery-grid');
  const button = document.createElement('button');
  button.className = 'gallery-item is-visible';
  button.type = 'button';
  button.setAttribute('aria-label', '현재 사진 크게 보기');
  galleryImage = document.createElement('img');
  galleryImage.alt = wedding.photos[0].alt;
  galleryImage.src = wedding.photos[0].src;
  galleryImage.loading = 'eager';
  button.append(galleryImage);
  grid.append(button);
  const moveGallery = (step) => updateGalleryPhoto(galleryIndex + step);
  document.querySelector('[data-gallery-prev]')?.addEventListener('click', () => moveGallery(-1));
  document.querySelector('[data-gallery-next]')?.addEventListener('click', () => moveGallery(1));
  button.addEventListener('click', () => { showPhoto(galleryIndex); dialog.showModal(); document.body.style.overflow = 'hidden'; });
  let touchStartX = 0;
  button.addEventListener('touchstart', event => { touchStartX = event.changedTouches[0].clientX; }, { passive: true });
  button.addEventListener('touchend', event => {
    const delta = event.changedTouches[0].clientX - touchStartX;
    if (Math.abs(delta) > 45) moveGallery(delta < 0 ? 1 : -1);
  }, { passive: true });
  updateGalleryPhoto(0);
}

const venueMapImage = document.querySelector('#venue-map-image');
function openVenueMap() {
  document.querySelector('#expanded-photo').src = 'assets/venue-map-styled.svg';
  document.querySelector('#expanded-photo').alt = '빌라드지디 안양 약도';
  document.querySelector('#photo-counter').textContent = '약도';
  dialog.classList.add('map-open');
  dialog.showModal();
  document.body.style.overflow = 'hidden';
}
venueMapImage?.addEventListener('click', openVenueMap);
venueMapImage?.addEventListener('keydown', event => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); openVenueMap(); } });
document.querySelector('#close-photo').addEventListener('click', () => dialog.close());
document.querySelector('#prev-photo').addEventListener('click', () => showPhoto(photoIndex - 1));
document.querySelector('#next-photo').addEventListener('click', () => showPhoto(photoIndex + 1));
dialog.addEventListener('close', () => { document.body.style.overflow = ''; dialog.classList.remove('map-open'); });
dialog.addEventListener('click', event => { if (event.target === dialog) { const r = dialog.getBoundingClientRect(); if (event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom) dialog.close(); } });
dialog.addEventListener('keydown', event => {
  if (event.key === 'ArrowLeft') { event.preventDefault(); showPhoto(photoIndex - 1); }
  if (event.key === 'ArrowRight') { event.preventDefault(); showPhoto(photoIndex + 1); }
});
renderPhotos();

const heroSlides = [...document.querySelectorAll('.hero-slide')];
const heroDots = [...document.querySelectorAll('.hero-dots span')];
let heroSlideIndex = 0;
function showHeroSlide(index) {
  heroSlideIndex = (index + heroSlides.length) % heroSlides.length;
  heroSlides.forEach((slide, i) => slide.classList.toggle('is-active', i === heroSlideIndex));
  heroDots.forEach((dot, i) => dot.classList.toggle('is-active', i === heroSlideIndex));
}
if (heroSlides.length > 1) {
  window.setInterval(() => showHeroSlide(heroSlideIndex + 1), 5200);
}
