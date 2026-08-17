// 在 loader.js / user.js 頂部注入
window.__SEAL_INSTALLED = true;

// 回應 Launcher 頁面的動態檢測請求
window.addEventListener('SEAL_PING_REQUEST', () => {
    window.dispatchEvent(new CustomEvent('SEAL_PING_RESPONSE', {
        detail: { version: '2.0', ready: true }
    }));
});
fetch('https://raw.githubusercontent.com/jack1988520-pixel/SEAL/refs/heads/main/SEAL?t=' + Date.now())
  .then(r => r.text())
  .then(c => {
    var s = document.createElement('script');
    s.text = c;
    document.head.appendChild(s);
    console.log('✅ 希望 MOD 已啟動');
  })
  .catch(e => alert('❌ 載入失敗: ' + e));
