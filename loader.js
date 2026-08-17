fetch('https://raw.githubusercontent.com/jack1988520-pixel/SEAL/refs/heads/main/SEAL?t=' + Date.now())
  .then(r => r.text())
  .then(c => {
    var s = document.createElement('script');
    s.text = c;
    document.head.appendChild(s);
    console.log('✅ 希望 MOD 已啟動');
  })
  .catch(e => alert('❌ 載入失敗: ' + e));
