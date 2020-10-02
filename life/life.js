Vue.component("life-item", {
  template: `
  <main>
    <div class="container">
        <h1>生活面で個人的にやってることと、その理由・補足</h1>
        <p>
        (自分が使ってるものは括弧内に記載)
        </p>
        <h2>作業編</h2>
        <p>
        スマホはandroidよりiPhone派です(iPhone8)
        <br>
        →操作が速いから
        </p>
        <p>
        パソコンのディスプレイをマルチディスプレイにしてます(2枚)(狭いベゼル)
        <br>
        →作業しやすいから(3枚にしたいけど2枚でも十分かなって思ってる)
        </p>
        <p>
        マウスは無線・静音・赤外線LEDがあるを使ってます(M-IR07DRBK)
        <br>
        →有線だとコードが邪魔だから
        <br>
        →静音じゃないとカチカチしてうるさいから
        <br>
        →可視光線だとマウスと机が離れるたびに光がでてうっとうしいから
        </p>
        <p>
        充電池使ってます(エネループ)
        <br>
        →電池切れるたびに買うのめんどくさいから
        <br>
        →電池切れるたびにゴミがたまるから
        </p>
        <h2>健康編</h2>
        <p>
        水分はほとんど白湯で飲んでます
        <br>
        →お茶だと歯に茶渋が付くから
        <br>
        →ジュースだと虫歯になりそうだから
        </p>
        <p>
        主食はパンよりご飯派です
        <br>
        →ご飯だとお米と水分で炊けるけど、パンだと小麦粉以外に添加物が入ってるから
        </p>
        <p>
        歯磨き粉は発泡剤の無いのを使ってます(ジェルコートF)
        <br>
        →発泡剤があると口の中泡だらけになるから
        </p>
        <p>
        デンタルフロス使ってます(100均のやつ適当に買ってます)
        <br>
        →使わないと虫歯になりそうだから
        </p>
        <p>
        おかしは基本食べないです
        <br>
        →眠くなったり太ったり虫歯になったりで不健康そうだから
        <br>
        →ただミックスナッツはよく食べてます
        <br>
        →高カカオチョコレートはたまに食べてます
        </p>
        <p>
        立甲やってます
        <br>
        →立甲ができると肩こりにならないから。
        <br>
        →将来四十肩とか五十肩とかになりたくないから
        </p>
        <p>
        アブローラーとバーピージャンプとハンドグリップやってます
        <br>
        →家で楽に筋トレできるから
        </p>
        <h2>お金編</h2>
        <p>
        ネット銀行使ってます(楽天銀行)
        <br>
        →リアルタイムで預金残高が更新されるから
        <br>
        →いつでも残高が見れるから
        <br>
        →パソコン上で振り込みができるから
        <br>
        →普通預金の金利が微妙に高いから(楽天証券口座連携で金利0.1%)
        </p>
        <p>
        格安sim使ってます(楽天sim)
        <br>
        →大手3キャリアだと高いけど、格安simだと安いから(月1,800円いかないくらい)
        <br>
        →Gmailで十分でキャリアメール使わないから
        <br>
        →外で動画を見ないため、格安simでも通信速度気にならないから
        </p>
        <p>
        クレジットカード使ってます(楽天クレジットカード)
        <br>
        →現金だと盗まれたら足が付かないから
        <br>
        →現金払いだとポイントが付かないから
        <br>
        →硬貨を使ってると財布が重くなるから
        <br>
        →紙幣や硬貨に触ること自体が不衛生だから
        </p>
        <p>
        QUICPay使ってます(iPhoneと楽天クレジットカードの紐づけ)
        <br>
        →レジでiPhoneをかざすだけで楽天クレジットカードの決済ができるから
        <br>
        →防犯上クレジットカードを持ち歩きたくないから
        </p>
        <h2>やったことないし、これからもやりたくないもの</h2>
        <ul>
          <li>タバコ</li>
          <li>リボ払い</li>
          <li>パチンコ</li>
          <li>
            ギャンブル
            <ul>
              <li>宝くじ</li>
              <li>競馬</li>
              <li>競輪</li>
              <li>競艇</li>
              <li>オートレース</li>
            </ul>
          </li>
        </ul>
    </div>
    </main>
  `,
});

const life = new Vue({
  el: "#app",
});
