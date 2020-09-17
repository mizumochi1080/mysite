Vue.component("tetris-item", {
  template: `
  <main>
    <div class="container">
        <h1>テトリス</h1>
        <h2>Twitter</h2>
        <div class="containerTwitter">
        <a href="https://twitter.com/sko_ji">
            <img src="../images/sko_ji.png" alt="画像" width="100px" />
            <p>みずもち@テト</p>
        </a>
        </div>
        <h2>自己紹介？</h2>
        <p>
        のんびりテトリスで遊んでいます。
        <br>
        PC版対人テトリスのキーボード勢です。
        <br>
        ぷよテトや99はプレイしていません。
        <br>
        テトリスガチ勢には勝てません。
        <br>
        最近はほとんど触れていません。。
        </p>
        <h2>やってたもの</h2>
        <ul>
        <li>
            <a href="https://tetr.io/">tetrio</a> テトラリーグ2100~2300glk
        </li>
        <li>
            <a href="https://ja.jstris.jezevec10.com/">Jstris</a>
        </li>
        <li>
            <a href="http://tetrisonline.pl/">TOP</a>
        </li>
        </ul>
        <h2>40ラインとか</h2>
        <ul>
        <li>
            <a href="https://ja.jstris.jezevec10.com/replay/18366986">
            Jstris
            </a>
            31.941
        </li>
        <li>
            <a href="https://tetr.io/#R:4uk7oboVT">tetrio</a> 32.658
        </li>
        </ul>
    </div>
    </main>
  `,
});

const tetris = new Vue({
  el: "#app",
});
