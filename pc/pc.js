const li = document.getElementById("pc");
li.classList.add("active");

Vue.component("pc-item", {
  template: `
  <main>
    <div class="container">
        <h1>自分のパソコン</h1>
        <h2>2020/10/15現在のPC環境</h2>
        <p>
        もうパソコン自体古くなりましたが、PC環境をまとめておきます
        </p>
        <ul>
          <li>Windows10 64bit</li>
          <li>CPU i7-4770S</li>
          <li>メモリ 16GB</li>
          <li>SSD 250GB(Cドライブ)(1TBのSSD買おうかな)</li>
          <li>HDD 4TB(Dドライブ)(データ消失防止に3つ積んでRAID5くらいで運用したい)</li>
          <li>グラボ GTX760</li>
          <li>電源750W</li>
          <li>フルHDノングレア デュアルモニタ</li>
          <li>無線静音マウス</li>
          <li>有線キーボード</li>
          <li>ヘッドホン Steelseries</li>
        </ul>
        <h2>よく使う無料ソフト</h2>
        <ul>
          <li>Google Chrome(ブラウザ)</li>
          <li>Dropbox(クラウド)</li>
          <li>Rainmeter(デスクトップガジェット)</li>
          <li>LINE(連絡)</li>
          <li>XMind(マインドマップ・勉強したことをまとめてる)</li>
          <li>Evernote(オンラインのメモ帳)</li>
          <li>MarketSpeed II(企業情報収集)</li>
          <li>Lhaplus(ファイルの圧縮解凍)</li>
          <li>VSCode(プログラミング用テキストエディタ)</li>
          <li>gimp(ラスタ系画像編集)</li>
          <li>Inkscape(ベクタ系画像編集)</li>
          <li>iTunes(音楽管理)</li>
          <li>Exact Audio Copy(CD取り込み)</li>
          <li>amarectv(録画)</li>
          <li>AviUtl(動画編集)</li>
          <li>VLC media player(動画再生)</li>
          <li>JQuake(地震感知)</li>
          <li>Anki(暗記)</li>
          <li>HiMacroEx(マクロ作成)</li>
          <li>CrystalDiskInfo(SSDとHDDの検査)</li>
        </ul>
        <h2>入れてるGoogleChromeアドオン</h2>
        <ul>
          <li>crxMouse Chrome™ Gestures(マウスでブラウザ操作)</li>
          <li>Adblock Plus - free ad blocker(広告非表示)</li>
          <li>Video Speed Controller(動画サイトの再生速度：0.07～16.00倍速間変更)</li>
        </ul>
        <h2>よく使うサイト</h2>
        <ul>
          <li>Feedly(ニュースサイトのカスタマイズ)</li>
          <li>TweetDeck(Twitterの複数カラム)</li>
          <li>Googleカレンダー(スケジュール)</li>
          <li>YouTube(動画とか配信を見る)</li>
          <li>ニコニコ動画(動画とか配信を見る)</li>
          <li>Amazon(買い物)</li>
          <li>Rakuten(買い物・銀行・投資)</li>
          <li>SBI(銀行・投資)</li>
        </ul>
        <h2>パスワード管理</h2>
        <p>
        セキュリティ上、ネットのパスワード作成系のサイトを使って複雑なパスワードを作って、
        Evernoteの暗号化機能でパスワードを暗号化して保存しています。
        会員登録系のサイトは全部別々のパスワードを使っていて、
        パスワードが必要なときはEvernoteからコピペしています。
        パスワードを頑張って覚えても2,3年使わなければいざ使う時に忘れてるだろうし、
        単語でパスワードを作っても辞書攻撃されたら解読されそうだし、
        現状はEvernoteに暗号化して保存でいいかなあと思ってる派です。
        パスワード管理ソフトでもいいかなと思ってますが、
        長年Evernoteで管理しているのでこのままでいいかなあと思っています。
        </p>
    </div>
    </main>
  `,
});

const pc = new Vue({
  el: "#app",
});
