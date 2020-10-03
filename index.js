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
            <li class="btn" id="home">
                <a href="/mysite">Home</a>
            </li>
            <li class="btn" id="prog">
                <a href="/mysite/programming">Programming</a>
            </li>
            <li class="btn" id="tetris">
                <a href="/mysite/tetris">Tetris</a>
            </li>
            <li class="btn" id="life">
                <a href="/mysite/life">Life</a>
            </li>
            <li class="btn" id="other">
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

const app = new Vue({
  el: "#app",
});
