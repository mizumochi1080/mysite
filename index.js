Vue.component("header-item", {
  template: `
    <header>
        <a href="/mysite">mizumochi web site β版</a>
    </header>`,
});

Vue.component("nav-item", {
  template: `
  <div>
    <input id="menu" type="checkbox" />
    <label for="menu" class="open">
        <span></span>
    </label>
    <label for="menu" class="back"></label>
    <nav>
        <ul>
            <li class="btn">
                <a href="/mysite">Home</a>
            </li>
            <li class="btn">
                <a href="/mysite/programming">Programming</a>
            </li>
            <li class="btn">
                <a href="/mysite/tetris">Tetris</a>
            </li>
            <li class="btn">
                <a href="/mysite/other">Other</a>
            </li>
        </ul>
        </nav>
    </div>
`,
});

Vue.component("home-item", {
  template: `
    <main>
        <div class="container">
        <h1>mizumochi</h1>
        <p>
            Vue.jsでこのサイトを作って、一応β版として公開しました。
            <br>
            時間があるときに更新していく予定です。
        </p>
        </div>
    </main>  
        `,
});

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
        <h2>取り組んだもの</h2>
        <ul>
        <li>
            <a href="https://atcoder.jp/users/mizumochi1080">AtCoder</a> 茶色
            440 (2020/07～)
        </li>
        <li>paiza A 2000台 (2020/06～)</li>
        <li>Progate Lv285</li>
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
        <li>git</li>
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
    </div>
    </main> 
        `,
});

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

Vue.component("other-item", {
  template: `
  <main>
    <div class="container">
        <h1>その他</h1>
        <h2>Twitterのアカウントの話とか</h2>
        <div>
        <p>
            私は興味のあるジャンルごとにツイッターアカウントを分けて呟いています。
            そうしないと、フォロワーさんに少し迷惑がかかるかもしれないと思ったからです。
        </p>
        <p>
            これは私の個人的な意見なのですが、1つのTwitterアカウントでいろいろなジャンルのツイートをすると、
            見る側にとってはあまり興味のないツイートもTLに流れてくることになると思います。
            世の中にはいろんな人がいて、Aのジャンルには興味あるけどBのジャンルには興味がない人もいれば、
            Cのジャンルは興味あるけどAのジャンルには興味ない人もいると思います。
        </p>
        <p>
            私はプログラミング・テトリス・資産運用などに興味があるのですが、
            それらを1つのアカウントで呟くと、フォロワーさんによっては興味のない内容のツイートを見せることになってしまいます。
            ですから、プログラミング関連のツイートはプログラミング用のアカウントで、
            テトリス関連のツイートはテトリス用のアカウントで…
            というように、ジャンルごとにアカウントを分けてツイートするようにしています。
        </p>
        <p>
            ただ、やみくもにTwitterアカウントを作ってしまうとアカウント停止になるようなので、その点は気を付けたいと思います。
        </p>
        </div>
        <h2>このサイトを作った理由とか</h2>
        <div>
        <ol>
            <li>
            最近覚えているReactの練習も兼ねて、何かサイトを作ってみたかったから。
            </li>
            <li>
            なにかしらの成果を出してこのサイトに載せることで、自分のモチベーションになるから。
            </li>
            <li>
            このサイトに細かいことを書いておくことで、Twitterのプロフィール欄をすっきりさせたかったから
            </li>
        </ol>
        </div>
    </div>
    </main>
  `,
});

const app = new Vue({
  el: "#app",
});
