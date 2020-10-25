const li = document.getElementById("tetris");
li.classList.add("active");

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
            <a href="https://ch.tetr.io/u/mizumochi">tetrio</a>
        </li>
        <li>
            <a href="https://jstris.jezevec10.com/u/mizumochi">Jstris</a>
        </li>
        <li>
            <a href="http://tetrisonline.pl/top/profile.php?user=mizumochi">TOP</a>
        </li>
        </ul>
        <h2>40ラインとか</h2>
        <ul>
        <li>
            <a href="https://ja.jstris.jezevec10.com/replay/23387040">
            Jstris
            </a>
            30.975s
        </li>
        <li>
            <a href="https://tetr.io/#R:4uk7oboVT">tetrio</a> 32.658s
        </li>
        </ul>
        <h2>今までの経緯</h2>
        <p>
        (人名敬称略)
        <br />
        当時友達とポケモンをやっていた関係で、たけひこ(まめねこ)というポケモン生主の配信を見始める
        <br />
        たけひこはTOJのテトリス配信もしていたので、その配信も見始める
        <br />
        テトリスに興味を持ったので、たけひこ経由で知ったへぼまい、刑事ニコニコの配信を見始める
        <br />
        面白そうだったのでTOJを始めてオンラインで遊ぶ
        <br />
        へぼまい、サマフ、Blink、あじゃんば、aitsu_k、milk2の配信を見ながら火力の作り方とかを覚える
        <br />
        -- 数年が経過 --
        <br />
        久しぶりにテトリス界隈の配信を覗いてみると、テトリス界隈の強さがインフレしてることに気付く
        <br />
        PCテトでは、あじゃんば、Firestorm、Diao、Yakineのリプレイを見ながら掘り方とかドネイトとかを覚える
        <br />
        ぷよテトでは、ふれあ、kazu、あめみやたいようの配信を見ながら火力の作り方とかを覚える
        </p>
    </div>
    </main>
  `,
});

const tetris = new Vue({
  el: "#app",
});
