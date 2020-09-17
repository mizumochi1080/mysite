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
            最近覚えているweb系の言語の練習も兼ねて、何かサイトを作ってみたかったから。
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

const other = new Vue({
  el: "#app",
});
