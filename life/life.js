const li = document.getElementById("life");
li.classList.add("active");

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
        →処理が速いから
        <br>
        →顔認証より指紋認証派です
        </p>
        <p>
        パソコンのディスプレイをマルチディスプレイにしてます(2枚)(狭いベゼル)
        <br>
        →作業しやすいから(3枚にしたいけど2枚でも十分かなって思ってる)
        </p>
        <p>
        無線・静音・赤外線LEDのマウスを使ってます(M-IR07DRBK)
        <br>
        →有線だとコードが邪魔だから
        <br>
        →静音じゃないとカチカチしてうるさいから
        <br>
        →可視光線だとマウスと机が離れるたびに光がでてうっとうしいから
        </p>
        <p>
        充電池を使ってます(エネループ)
        <br>
        →電池が切れるたびに買うのがめんどくさいから
        <br>
        →電池が切れるたびにゴミがたまるから
        </p>
        <p>
        テレビは基本見ないです
        <br>
        →Twitterやネットニュースの方が情報が速いから
        <br>
        →民放が広告だらけだから
        <br>
        →NHKのニュースかテレ東の経済ニュースくらいしか見ません
        </p>
        <h2>健康編</h2>
        <p>
        夜更かしはしない派です
        <br>
        →身体も心もボロボロになるから
        <br>
        →次の日に支障をきたしたくないから
        <br>
        →勉強したことが脳に定着しないから
        </p>
        <p>
        起床時はすぐ太陽の光を浴びるようにしてます
        <br>
        →脳に朝だと知らせないと、体内時計が一日一時間ずつずれて夜眠くならなくなるから
        </p>
        <p>
        寝具は良いのを使いたい派です(テイジンほこりが出にくい布団)
        <br>
        →一生の1/3を過ごす場所だから寝具にはお金をかけたい
        <br>
        →と書いたもののお金ないので安いの使ってます(ｵｲ
        <br>
        →布団は家の中で一番ダニが繁殖する場所なので、高密度生地の敷布団を使ってます
        </p>
        <p>
        水分は基本白湯を飲んでます
        <br>
        →お茶だと歯に茶渋が付くから
        <br>
        →ジュースだと虫歯になりそうだから
        </p>
        <p>
        食事は1日昼と夕の2食です
        <br>
        →もともとは朝も食べていましたが、1食抜くと、
        <ul>
        <li>
        時間が増える (用意する時間・食事の時間・片付けの時間)
        </li>
        <li>
        虫歯リスクが下がる (脱灰の回数が減る)
        </li>
        <li>
        支出が減る (買い出しの出費・光熱費)
        </li>
        <li>
        老けにくくなる(らしい) (サーチュイン遺伝子が活性するとかなんとか)
        </li>
        </ul>
        など、メリットが大きそうだったので、一番抜きやすい朝ごはんを抜いています
        <br>
        →今後、夕ごはんもなくして一日一食生活にしたいと思っています
        <br>
        →注) 食の細い女性、お年寄り、妊婦、成長期の人は食事制限はしない方が良いらしいです
        </p>
        <p>
        主食はパンよりご飯派です
        <br>
        →ご飯だとお米と水分で炊けるけど、パンだと小麦粉以外に添加物が入ってるから
        <br>
        →洋食より和食の方が健康に良さそうだから(洋食が嫌いなわけではないです)
        </p>
        <p>
        年に3回ほど歯科医院で歯のメンテナンス(予防歯科)をしてもらってます
        <br>
        →歯石を取ってくれるから
        <br>
        →虫歯などで歯を失いたくないから
        <br>
        →虫歯は血管経由で全身の健康に影響を及ぼすから
        <br>
        →歯1本100万円、口の中全体で約3000万円の資産価値があるから
        <br>
        →メンテナンス費用が3000万円の維持コストと考えればが安いと思うから
        </p>
        <p>
        歯磨き粉は発泡剤の無いのを使ってます(ジェルコートF)
        <br>
        →発泡剤があると口の中が泡だらけになるから
        </p>
        <p>
        デンタルフロスを使ってます(100均のやつ適当に買ってます)
        <br>
        →使わないと虫歯になりそうだから
        </p>
        <p>
        おかしは基本食べないです
        <br>
        →眠くなったり太ったり虫歯になったりで不健康そうだから
        <br>
        →ただ、ミックスナッツはよく食べてます
        <br>
        →高カカオチョコレートはたまに食べてます
        </p>
        <p>
        たばこは吸わないし、お酒は飲みません
        <br>
        →たばこもお酒も発がんリスクが高くなるから
        </p>
        <p>
        立甲をやってます
        <br>
        →立甲ができると肩こりにならないから
        <br>
        →将来四十肩とか五十肩とかになりたくないから
        </p>
        <p>
        アブローラーとバーピージャンプとハンドグリップをやってます
        <br>
        →家で楽に筋トレできるから
        </p>
        <h2>お金編</h2>
        <p>
        ネット銀行を使ってます(楽天銀行)
        <br>
        →リアルタイムで預金残高が更新されるから
        <br>
        →いつでもスマホやパソコンから残高が見れるから
        <br>
        →パソコン上で振り込みができるから
        <br>
        →家に泥棒が入っても盗まれようがないから
        <br>
        →普通預金の金利が微妙に高いから(楽天証券口座連携で金利0.1%)
        </p>
        <p>
        格安simを使ってます(楽天sim)(通話sim 3.1GBプラン)
        <br>
        →大手3キャリアだと料金が高いけど、格安simだと安いから(月1,800円いかないくらい)
        <br>
        →Gmailがあればキャリアメールを使わなくてもいいから
        <br>
        →外で動画を見ないため、格安simでも通信速度が気にならないから
        </p>
        <p>
        クレジットカードを使ってます(楽天クレジットカード)
        <br>
        →amazonや楽天市場を使うときに必要だから
        <br>
        →クレジットカードだと使った分のポイントが付くから(楽天だと基本1%)
        <br>
        →硬貨が増えると財布が重くなるから
        <br>
        →紙幣や硬貨に触ること自体が不衛生だから
        <br>
        →現金だと盗まれたときに足が付かないから
        </p>
        <p>
        QUICPayを使ってます(iPhoneと楽天クレジットカードの紐づけ)
        <br>
        →レジでiPhoneをかざすだけで楽天クレジットカードでの決済ができるから
        <br>
        →防犯上クレジットカードを持ち歩きたくないから
        </p>
        <p>
        ネットの証券口座を使ってます(楽天証券・SBI証券)
        <br>
        →窓口へ行くのが面倒くさいから
        <br>
        →20年くらいかけてVOOを買っていきたいから
        </p>
        <p>
        楽しいと思えるものにお金を使いたい派です
        <br>
        →人間にとって適切な浪費は必要だと思うから
        <br>
        →お金は使うためにあるから
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
