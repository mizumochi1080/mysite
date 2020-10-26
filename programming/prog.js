const li = document.getElementById("prog");
li.classList.add("active");

Vue.component("prog-item", {
  template: `
  <main>
    <div class="container">
        <h1>プログラミング</h1>
        <h2>Twitter</h2>
        <div class="containerTwitter">
        <a href="https://twitter.com/mizumochi1080">
        <img src="../images/mizumochi.png" alt="画像" width="100px" />
            <p>みずもち</p>
        </a>
        </div>
        <h2>自己紹介？</h2>
        <p>
        のんびりプログラミングの勉強をしています。
        <br>
        エディタはVSCodeを使っています。
        <br>
        競プロ・フルスタックエンジニア・人工知能に興味があります
        </p>
        <h2>やってたもの</h2>
        <ul>
        <li>
            <a href="https://atcoder.jp/users/mizumochi1080">AtCoder</a>
        </li>
        <li>
            <a href="https://twitter.com/mizumochi1080/status/1288725556012314624">paiza</a>
        </li>
        <li>
            <a href="https://twitter.com/mizumochi1080/status/1306215588470038529">Progate</a>
        </ul>
        <h2>練習で作ってみたもの</h2>
        <ul>
        <li>
            <a href="https://mizumochi1080.github.io/link/">
            自分がよく使うサイトまとめ
            </a>
        </li>
        <li>
            <a href="https://mizumochi1080.github.io/counter/">カウンタ</a>
        </li>
        <li>
            <a href="https://mizumochi1080.github.io/now/">現在時間</a>
        </li>
        <li>
            <a href="https://mizumochi1080.github.io/calc/">電卓</a>
        </li>
        <li>
            <a href="https://mizumochi1080.github.io/mysite/">このサイト</a>
        </li>
        </ul>
        <h2>使用言語とかフレームワークとか</h2>
        <h3>現在勉強してるもの</h3>
        <ul>
        <li>HTML/CSS</li>
        <li>JavaScript</li>
        <li>Vue.js</li>
        <li>React</li>
        <li>Python</li>
        <li>Flask</li>
        <li>Bootstrap</li>
        <li>Git/GitHub/Heroku</li>
        </ul>
        <h3>今後習得したいもの</h3>
        <ul>
        <li>Django</li>
        <li>Sass</li>
        <li>VSCodeのEmmet</li>
        <li>Node.js</li>
        <li>TypeScript</li>
        <li>VSCodeVim</li>
        </ul>
        <h3>少しかじったけどあまり触ってないもの</h3>
        <ul>
        <li>C</li>
        <li>jQuery</li>
        <li>Ruby</li>
        <li>RubyonRails</li>
        <li>SQL</li>
        <li>PHP</li>
        </ul>
        <h2>今までの経緯</h2>
        <p>
        学校でC言語を習う
        <br />
        web系の言語を習得したいと思い、HTML/CSS、JavaScriptをProgateで覚える
        <br />
        バックエンドも習得したいと思い、Ruby、Rails、MySQLをProgateで覚える
        <br />
        Rubyの知識を深めるために、YouTubeを見てたときにちょうど知ったpaizaを始める
        <br />
        paizaのランカーがPythonで書いていることが多く、Pythonに興味を持ったのでProgateで学習し、Pythonを使う人が多いAtCoderを始める
        <br />
        何かサイトやwebアプリを作ってみたいと思い、GitHub、Vue.JS、React、Flask、Herokuを覚える
        </p>
    </div>
    </main> 
  `,
});

const prog = new Vue({
  el: "#app",
});
