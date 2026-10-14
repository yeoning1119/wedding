'use strict';
// 실제 예식 정보가 정해지면 HTML과 아래 설정을 함께 변경하세요.
const wedding = {
  date: '2026-12-12T14:40:00+09:00',
  accounts: { '신랑': '국민은행 700102-01-141000', '신랑-김현태': '국민은행 004 01 0475 964', '신랑-김길래': '농협 211031-56-071249', '신부': '신한은행 110-383-580501', '신부-장보영': '기업은행 01023889856' },
  photos: [
    { src: 'assets/new-gallery/photo-01.jpg', alt: '김영빈과 장하연의 웨딩 사진 1' },
    { src: 'assets/new-gallery/photo-02.jpg', alt: '김영빈과 장하연의 웨딩 사진 2' },
    { src: 'assets/new-gallery/photo-03.jpg', alt: '김영빈과 장하연의 웨딩 사진 3' },
    { src: 'assets/new-gallery/photo-04.jpg', alt: '김영빈과 장하연의 웨딩 사진 4' },
    { src: 'assets/new-gallery/photo-05.jpg', alt: '김영빈과 장하연의 웨딩 사진 5' },
    { src: 'assets/new-gallery/photo-06.jpg', alt: '김영빈과 장하연의 웨딩 사진 6' },
    { src: 'assets/new-gallery/photo-07.jpg', alt: '김영빈과 장하연의 웨딩 사진 7' },
    { src: 'assets/new-gallery/photo-08.jpg', alt: '김영빈과 장하연의 웨딩 사진 8' },
    { src: 'assets/new-gallery/photo-09.jpg', alt: '김영빈과 장하연의 웨딩 사진 9' },
    { src: 'assets/new-gallery/photo-10.jpg', alt: '김영빈과 장하연의 웨딩 사진 10' },
    { src: 'assets/new-gallery/photo-11.jpg', alt: '김영빈과 장하연의 웨딩 사진 11' },
    { src: 'assets/new-gallery/photo-12.jpg', alt: '김영빈과 장하연의 웨딩 사진 12' },
    { src: 'assets/new-gallery/photo-13.jpg', alt: '김영빈과 장하연의 웨딩 사진 13' },
    { src: 'assets/new-gallery/photo-14.jpg', alt: '김영빈과 장하연의 웨딩 사진 14' },
    { src: 'assets/new-gallery/photo-15.jpg', alt: '김영빈과 장하연의 웨딩 사진 15' },
    { src: 'assets/new-gallery/photo-16.jpg', alt: '김영빈과 장하연의 웨딩 사진 16' },
    { src: 'assets/new-gallery/photo-17.jpg', alt: '김영빈과 장하연의 웨딩 사진 17' },
    { src: 'assets/new-gallery/photo-18.jpg', alt: '김영빈과 장하연의 웨딩 사진 18' },
    { src: 'assets/new-gallery/photo-19.jpg', alt: '김영빈과 장하연의 웨딩 사진 19' },
    { src: 'assets/new-gallery/photo-20.jpg', alt: '김영빈과 장하연의 웨딩 사진 20' },
    { src: 'assets/new-gallery/photo-21.jpg', alt: '김영빈과 장하연의 웨딩 사진 21' },
    { src: 'assets/new-gallery/photo-22.jpg', alt: '김영빈과 장하연의 웨딩 사진 22' },
    { src: 'assets/new-gallery/photo-23.jpg', alt: '김영빈과 장하연의 웨딩 사진 23' },
    { src: 'assets/new-gallery/photo-24.jpg', alt: '김영빈과 장하연의 웨딩 사진 24' },
    { src: 'assets/new-gallery/photo-25.jpg', alt: '김영빈과 장하연의 웨딩 사진 25' },
    { src: 'assets/new-gallery/photo-26.jpg', alt: '김영빈과 장하연의 웨딩 사진 26' },
    { src: 'assets/new-gallery/photo-27.jpg', alt: '김영빈과 장하연의 웨딩 사진 27' },
    { src: 'assets/new-gallery/photo-28.jpg', alt: '김영빈과 장하연의 웨딩 사진 28' },
    { src: 'assets/new-gallery/photo-29.jpg', alt: '김영빈과 장하연의 웨딩 사진 29' },
    { src: 'assets/new-gallery/photo-30.jpg', alt: '김영빈과 장하연의 웨딩 사진 30' },
    { src: 'assets/new-gallery/photo-31.jpg', alt: '김영빈과 장하연의 웨딩 사진 31' },
    { src: 'assets/new-gallery/photo-32.jpg', alt: '김영빈과 장하연의 웨딩 사진 32' },
    { src: 'assets/new-gallery/photo-33.jpg', alt: '김영빈과 장하연의 웨딩 사진 33' },
    { src: 'assets/new-gallery/photo-34.jpg', alt: '김영빈과 장하연의 웨딩 사진 34' },
    { src: 'assets/new-gallery/photo-35.jpg', alt: '김영빈과 장하연의 웨딩 사진 35' },
    { src: 'assets/new-gallery/photo-36.jpg', alt: '김영빈과 장하연의 웨딩 사진 36' },
    { src: 'assets/new-gallery/photo-37.jpg', alt: '김영빈과 장하연의 웨딩 사진 37' },
    { src: 'assets/new-gallery/photo-38.jpg', alt: '김영빈과 장하연의 웨딩 사진 38' },
    { src: 'assets/new-gallery/photo-39.jpg', alt: '김영빈과 장하연의 웨딩 사진 39' },
    { src: 'assets/new-gallery/photo-40.jpg', alt: '김영빈과 장하연의 웨딩 사진 40' }
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
  const grid = document.querySelector('#gallery-grid');
  if (!grid) return;
  wedding.photos.slice(0, 9).forEach((photo, index) => {
    const button = document.createElement('button');
    button.className = 'gallery-item is-visible';
    button.type = 'button';
    button.setAttribute('aria-label', `${index + 1}번 사진 크게 보기`);
    const image = document.createElement('img');
    image.alt = photo.alt;
    image.src = photo.src;
    image.loading = index < 3 ? 'eager' : 'lazy';
    button.append(image);
    grid.append(button);
    button.addEventListener('click', () => {
      showPhoto(index);
      dialog.showModal();
      document.body.style.overflow = 'hidden';
    });
  });
  galleryImage = grid.querySelector('img');
}

const venueMapImage = document.querySelector('#venue-map-image');
function openVenueMap() {
  document.querySelector('#expanded-photo').src = 'assets/venue-map-user.png';
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

const revealTargets = document.querySelectorAll('.section > *, .hero-date > *, .cover-hero .scroll-cue, footer > *');
revealTargets.forEach((element, index) => {
  element.classList.add('reveal');
  element.style.setProperty('--reveal-delay', `${Math.min(index % 6, 5) * 70}ms`);
});
if ('IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    });
  }, { threshold: 0.14, rootMargin: '0px 0px -7% 0px' });
  revealTargets.forEach(element => revealObserver.observe(element));
} else {
  revealTargets.forEach(element => element.classList.add('is-visible'));
}

// Once the handwritten title finishes, let the opening photograph return to color.
const heroStage = document.querySelector('.hero-stage');
const reducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
if (heroStage) {
  if (reducedMotion) heroStage.classList.add('hero-revealed');
  else window.setTimeout(() => heroStage.classList.add('hero-revealed'), 2450);
}

// Background music is started by an explicit tap so it works with mobile browser autoplay rules.
const bgm = document.querySelector('#bgm');
const bgmToggle = document.querySelector('#bgm-toggle');
if (bgm && bgmToggle) {
  const updateBgmButton = () => {
    const isPlaying = !bgm.paused && !bgm.ended;
    bgmToggle.classList.toggle('is-playing', isPlaying);
    bgmToggle.setAttribute('aria-pressed', String(isPlaying));
    bgmToggle.setAttribute('aria-label', isPlaying ? '배경음악 일시정지' : '배경음악 재생');
    bgmToggle.querySelector('.bgm-label').textContent = isPlaying ? 'BGM ON' : 'BGM';
  };
  bgmToggle.addEventListener('click', async () => {
    if (bgm.paused) {
      try { await bgm.play(); }
      catch { notify('화면을 한 번 더 눌러 음악을 재생해 주세요.'); }
    } else {
      bgm.pause();
    }
    updateBgmButton();
  });
  bgm.addEventListener('play', updateBgmButton);
  bgm.addEventListener('pause', updateBgmButton);
  updateBgmButton();
}

// Use the phone's native share sheet so KakaoTalk appears as a real share target.
const kakaoShare = document.querySelector('[data-kakao-share]');const kakaoJavascriptKey = 'a7dab9fc4a97e4842924a8662d863adb';if (window.Kakao && !Kakao.isInitialized()) Kakao.init(kakaoJavascriptKey);
if (kakaoShare) {
  kakaoShare.addEventListener('click', async () => {
    const invitationUrl = kakaoShare.dataset.shareUrl || `${window.location.origin}${window.location.pathname}`;
    const shareData = { title: '김영빈 ❤️ 장하연', text: `김영빈 ❤️ 장하연의 결혼식에 초대합니다.\n${invitationUrl}`, url: invitationUrl };
    if (window.Kakao?.isInitialized()) {      try {        Kakao.Share.sendDefault({          objectType: 'feed',          content: {            title: '김영빈 ❤️ 장하연',            description: '2026년 12월 12일 토요일 오후 2시 40분 · 빌라드지디 안양',            imageUrl: 'https://yeoning1119.github.io/wedding/assets/hero-main/hero-01.jpg',            link: { mobileWebUrl: invitationUrl, webUrl: invitationUrl }          },          buttons: [{ title: '청첩장 보기', link: { mobileWebUrl: invitationUrl, webUrl: invitationUrl } }]        });        return;      } catch (error) {        console.warn('KakaoTalk share failed; using the browser share fallback.', error);      }    }    if (navigator.share) {
      try { await navigator.share(shareData); return; }
      catch (error) { if (error?.name === 'AbortError') return; }
    }
    try {
      await navigator.clipboard.writeText(invitationUrl);
      notify('초대장 링크를 복사했습니다. 카카오톡에 붙여넣어 주세요.');
    } catch {
      window.prompt('초대장 링크를 복사해 카카오톡에 붙여넣어 주세요.', invitationUrl);
    }
  });
}
