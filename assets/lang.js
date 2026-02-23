!function(){
  function g(k){try{return localStorage.getItem(k)}catch(e){return null}}
  function s(k,v){try{localStorage.setItem(k,v)}catch(e){}}

  var t={
    en:{
      hero_pill:'Indie Studio', hero_title:'Small apps that spark joy.', hero_caption:'Make ideas real.', hero_cta_products:'View Products',
      appsTitle:'Our Apps', appsSub:'Mobile apps, made with care.',
      sumsumbadge:'Free · Ads', sumsumsnip:'Number puzzle game with changing targets and combos.',
      btnSupport:'Support', btnPrivacy:'Privacy', btnTerms:'Terms',
      myfilterbadge:'Paid · No Ads', soonBadge:'Coming Soon', myfiltersnip:'iOS camera app with real-time filters for photo and video.',
      btnSupport2:'Support', btnPrivacy2:'Privacy', btnTerms2:'Terms',
      oneluckbadge:'Free · Ads', oneluckSoonBadge:'Coming Soon', onelucksnip:'Social casino slot game to test your luck. No real money involved.',
      btnSupport3:'Support', btnPrivacy3:'Privacy', btnTerms3:'Terms',
      contact:'Contact', desc:'Software Services'
    },
    ko:{
      hero_pill:'인디 스튜디오', hero_title:'작지만 기분 좋은 앱을 만듭니다.', hero_caption:'아이디어를 현실로.', hero_cta_products:'제품 보기',
      appsTitle:'Our Apps', appsSub:'세심하게 만든 모바일 앱',
      sumsumbadge:'무료 · 광고', sumsumsnip:'목표값이 바뀌는 숫자 퍼즐. 콤보를 노려보세요.',
      btnSupport:'지원', btnPrivacy:'개인정보', btnTerms:'이용약관',
      myfilterbadge:'유료 · 무광고', soonBadge:'출시예정', myfiltersnip:'실시간 필터로 사진 촬영과 영상 녹화를 지원하는 iOS 카메라 앱.',
      btnSupport2:'지원', btnPrivacy2:'개인정보', btnTerms2:'이용약관',
      oneluckbadge:'무료 · 광고', oneluckSoonBadge:'출시예정', onelucksnip:'행운을 시험해보는 소셜 카지노 슬롯 게임. 실제 화폐는 사용되지 않습니다.',
      btnSupport3:'지원', btnPrivacy3:'개인정보', btnTerms3:'이용약관',
      contact:'문의', desc:'Software Services'
    },
    ja:{
      hero_pill:'インディー スタジオ', hero_title:'小さくて心地よいアプリをつくる。', hero_caption:'アイデアを形に。', hero_cta_products:'製品を見る',
      appsTitle:'Our Apps', appsSub:'こだわりのモバイルアプリ',
      sumsumbadge:'無料 · 広告', sumsumsnip:'ターゲットが変化する数字パズル。コンボを狙おう。',
      btnSupport:'サポート', btnPrivacy:'プライバシー', btnTerms:'利用規約',
      myfilterbadge:'有料 · 広告なし', soonBadge:'近日公開', myfiltersnip:'リアルタイムフィルターで写真と動画に対応するiOSカメラアプリ。',
      btnSupport2:'サポート', btnPrivacy2:'プライバシー', btnTerms2:'利用規約',
      oneluckbadge:'無料 · 広告', oneluckSoonBadge:'近日公開', onelucksnip:'運を試すソーシャルカジノスロットゲーム。実際の通貨は使用しません。',
      btnSupport3:'サポート', btnPrivacy3:'プライバシー', btnTerms3:'利用規約',
      contact:'お問い合わせ', desc:'Software Services'
    }
  };

  /* 언어별 파일 suffix: ko → '', en → '.en', ja → '.ja' */
  var suffix={ko:'', en:'.en', ja:'.ja'};

  /* 홈 카드 링크 정의 — [지원id, 개인정보id, 약관id, 앱 폴더] */
  var cardLinks=[
    ['i-btn-support',  'i-btn-privacy',  'i-btn-terms',  'apps/sumsum/'],
    ['i-btn-support-2','i-btn-privacy-2','i-btn-terms-2','apps/myfilter/'],
    ['i-btn-support-3','i-btn-privacy-3','i-btn-terms-3','apps/oneluck/']
  ];
  var cardFiles=[
    ['index','privacy','terms'],   /* sumsum */
    ['index','privacy','terms'],   /* myfilter */
    ['index','privacy','terms']    /* oneluck */
  ];

  function updateCardLinks(lang){
    var sfx=suffix[lang]||'';
    cardLinks.forEach(function(ids, i){
      var folder=ids[3];
      var files=cardFiles[i];
      ids.forEach(function(id, j){
        var el=document.getElementById(id);
        if(el) el.href=folder+files[j]+(sfx?sfx:'')+'.html';
      });
    });
  }

  function setLang(lang){
    var d=t[lang]||t.en;
    var map={
      /* hero */
      hero_pill:'hero_pill', hero_title:'hero_title', hero_caption:'hero_caption', hero_cta_products:'hero_cta_products',
      /* section */
      appsTitle:'i-apps-title', appsSub:'i-apps-sub',
      /* SumSum */
      sumsumbadge:'i-sumsum-badge', sumsumsnip:'i-sumsum-snip',
      btnSupport:'i-btn-support', btnPrivacy:'i-btn-privacy', btnTerms:'i-btn-terms',
      /* Own View */
      myfilterbadge:'i-myfilter-badge', soonBadge:'i-soon-badge', myfiltersnip:'i-myfilter-snip',
      btnSupport2:'i-btn-support-2', btnPrivacy2:'i-btn-privacy-2', btnTerms2:'i-btn-terms-2',
      /* One Luck */
      oneluckbadge:'i-oneluck-badge', oneluckSoonBadge:'i-oneluck-soon-badge', onelucksnip:'i-oneluck-snip',
      btnSupport3:'i-btn-support-3', btnPrivacy3:'i-btn-privacy-3', btnTerms3:'i-btn-terms-3',
      /* footer */
      contact:'i-contact', desc:'i-desc'
    };
    /* 텍스트 업데이트 */
    Object.keys(map).forEach(function(k){
      var el=document.getElementById(map[k]);
      if(el) el.textContent=d[k];
    });
    /* 언어 버튼 active 표시 */
    ['en','ko','ja'].forEach(function(c){
      var el=document.getElementById('btn-'+c);
      if(el) el.classList.toggle('active',c===lang);
    });
    /* 카드 링크를 해당 언어 파일로 교체 */
    updateCardLinks(lang);
    /* URL에 lang 파라미터 저장 */
    try{
      var u=new URL(location.href);
      u.searchParams.set('lang',lang);
      history.replaceState(null,'',u.toString());
    }catch(e){}
    s('lang',lang);
  }

  function detect(){
    var qs=new URLSearchParams(location.search);
    /* 우선순위: URL param → localStorage → 브라우저 언어 → 기본 ko */
    var v=qs.get('lang')||g('lang')||(navigator.language||'en');
    v=(v||'en').toLowerCase();
    if(v.startsWith('ko')) return 'ko';
    if(v.startsWith('ja')) return 'ja';
    if(v.startsWith('en')) return 'en';
    return 'en'; /* 기본값 영어 */
  }

  document.addEventListener('DOMContentLoaded',function(){
    ['en','ko','ja'].forEach(function(c){
      var el=document.getElementById('btn-'+c);
      if(el) el.onclick=function(){setLang(c)};
    });
    setLang(detect());
  });
}();
