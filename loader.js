// === 以下放你原本的 SEAL 外掛主程式載入邏輯 ===
(function() {
    console.log("SEAL 放置希望外掛已成功載入！");
    // ... 原本的外掛代碼 ...
})();
fetch('https://raw.githubusercontent.com/jack1988520-pixel/SEAL/refs/heads/main/SEAL?t=' + Date.now())
  .then(r => r.text())
  .then(c => {
    var s = document.createElement('script');
    s.text = c;
    document.head.appendChild(s);
    console.log('✅ 希望 MOD 已啟動');
  })
  .catch(e => alert('❌ 載入失敗: ' + e));
