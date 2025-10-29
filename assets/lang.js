!function(){
  function g(k){try{return localStorage.getItem(k)}catch(e){return null}}
  function s(k,v){try{localStorage.setItem(k,v)}catch(e){}}
  var t={
    en:{title:'Hello, OAndH 👋',subtitle:'',apps:'Our Apps',about:'About O&H',contact:'Contact',legal:'Legal',company:'O&H (OandH)',desc:'Software Services',sumsumbadge:'Free · Ads',myfilterbadge:'Paid · No Ads',btnSupport:'Support',btnPrivacy:'Privacy',btnTerms:'Terms',btnSupport2:'Support',btnPrivacy2:'Privacy',btnTerms2:'Terms',soonBadge:'Coming Soon',sumsumsnip:'Number puzzle game with changing targets and combos.',myfiltersnip:'iOS camera app with real-time filters for photo and video.',hero_pill:'Indie Studio',hero_title:'Small apps that spark joy.',hero_caption:'Make ideas real.',hero_cta_products:'View Products',hero_cta_contact:'Contact'},
    ko:{title:'Hello, OAndH 👋',subtitle:'',apps:'제품',about:'회사 소개',contact:'문의',legal:'법적 고지',company:'O&H (OandH)',desc:'Software Services',sumsumbadge:'무료 · 광고',myfilterbadge:'유료 · 무광고',btnSupport:'지원',btnPrivacy:'개인정보',btnTerms:'이용약관',btnSupport2:'지원',btnPrivacy2:'개인정보',btnTerms2:'이용약관',soonBadge:'출시예정',sumsumsnip:'목표값이 바뀌는 숫자 퍼즐. 콤보를 노려보세요.',myfiltersnip:'실시간 필터로 사진 촬영과 영상 녹화를 지원하는 iOS 카메라 앱.',hero_pill:'인디 스튜디오',hero_title:'작지만 기분 좋은 앱을 만듭니다.',hero_caption:'아이디어를 현실로.',hero_cta_products:'제품 보기',hero_cta_contact:'문의하기'},
    ja:{title:'Hello, OAndH 👋',subtitle:'',apps:'製品',about:'会社情報',contact:'お問い合わせ',legal:'法的情報',company:'O&H (OandH)',desc:'Software Services',sumsumbadge:'無料 · 広告',myfilterbadge:'有料 · 広告なし',btnSupport:'サポート',btnPrivacy:'プライバシー',btnTerms:'利用規約',btnSupport2:'サポート',btnPrivacy2:'プライバシー',btnTerms2:'利用規約',soonBadge:'近日公開',sumsumsnip:'ターゲットが変化する数字パズル。コンボを狙おう。',myfiltersnip:'リアルタイムフィルターで写真と動画に対応するiOSカメラアプリ。',hero_pill:'インディー スタジオ',hero_title:'小さくて心地よいアプリをつくる。',hero_caption:'アイデアを形に。',hero_cta_products:'製品を見る',hero_cta_contact:'お問い合わせ'}
  };
  function setLang(lang){
    var d=t[lang]||t.en;
    var map={title:'i-title',subtitle:'i-sub',apps:'i-apps',about:'i-about',contact:'i-contact',legal:'i-legal',company:'i-company',desc:'i-desc',sumsumbadge:'i-sumsum-badge',myfilterbadge:'i-myfilter-badge',btnSupport:'i-btn-support',btnPrivacy:'i-btn-privacy',btnTerms:'i-btn-terms',btnSupport2:'i-btn-support-2',btnPrivacy2:'i-btn-privacy-2',btnTerms2:'i-btn-terms-2',soonBadge:'i-soon-badge',sumsumsnip:'i-sumsum-snip',myfiltersnip:'i-myfilter-snip',hero_pill:'hero_pill',hero_title:'hero_title',hero_caption:'hero_caption',hero_cta_products:'hero_cta_products',hero_cta_contact:'hero_cta_contact'};
    Object.keys(map).forEach(function(k){var el=document.getElementById(map[k]); if(el) el.textContent=d[k]});
    ['en','ko','ja'].forEach(function(c){var el=document.getElementById('btn-'+c); if(el) el.classList.toggle('active',c===lang)});
    try{var u=new URL(location.href);u.searchParams.set('lang',lang);history.replaceState(null,'',u.toString())}catch(e){}
    s('lang',lang);
  }
  function detect(){
    var qs=new URLSearchParams(location.search);
    var v=qs.get('lang')||g('lang')||(navigator.language||'en');
    v=(v||'en').toLowerCase();
    if(v.startsWith('ko')) return 'ko';
    if(v.startsWith('ja')) return 'ja';
    return ['en','ko','ja'].indexOf(v)>=0?v:'en';
  }
  document.addEventListener('DOMContentLoaded',function(){
    ['en','ko','ja'].forEach(function(c){var el=document.getElementById('btn-'+c); if(el) el.onclick=function(){setLang(c)}});
    setLang(detect());
  });
}();

