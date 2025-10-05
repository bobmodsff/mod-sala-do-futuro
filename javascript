javascript:(() => {
  // ===== ESTILO GLOBAL =====
  const style = document.createElement("style");
  style.innerHTML = `
    @keyframes neonGlow {0%,100%{box-shadow:0 0 8px #0f0,0 0 20px #0f0;}50%{box-shadow:0 0 20px #0f0,0 0 40px #0f0;}}
    body {margin:0;padding:0;font-family:sans-serif;}
    .lh-button {background:linear-gradient(45deg,#002200,#003300);color:#0f0;border:2px solid #0f0;padding:12px 15px;margin:8px 6px;font-weight:bold;border-radius:10px;cursor:pointer;min-width:140px;animation:neonGlow 1.5s infinite alternate;text-shadow:0 0 5px #0f0;}
    .lh-button:hover {filter:brightness(1.3);}
    .lh-close {position:absolute;top:8px;right:12px;color:#0f0;font-size:20px;font-weight:bold;cursor:pointer;text-shadow:0 0 6px #0f0;}
    .lh-floating {position:fixed;bottom:80px;right:20px;width:60px;height:60px;border-radius:50%;box-shadow:0 0 20px #0f0,0 0 35px #0f0;cursor:pointer;animation:neonGlow 2s infinite alternate;overflow:hidden;z-index:9999;}
    .lh-floating video {width:100%;height:100%;object-fit:cover;border-radius:50%;}
    .lh-overlay {position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.75);display:flex;justify-content:center;align-items:center;z-index:9998;flex-direction:column;padding:20px;box-sizing:border-box;}
    .lh-box {position:relative;background:rgba(0,34,0,0.65);padding:18px;border:2px solid #0f0;border-radius:12px;text-align:center;max-width:760px;width:100%;max-height:90vh;overflow:hidden;box-sizing:border-box;}
    .lh-box video {position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover;z-index:0;filter:brightness(0.45);border-radius:12px;}
    .lh-box-content {position:relative;z-index:1;display:flex;flex-direction:column;align-items:center;gap:10px;}
    .lh-box h2 {color:#0f0;margin:0 0 6px 0;text-shadow:0 0 6px #0f0;font-size:20px;}
    .lh-input {width:80%;padding:8px;margin:5px 0;border-radius:6px;border:1px solid #0f0;background:rgba(0,0,0,0.35);color:#0f0;}
    .lh-error {color:#f00;font-weight:bold;margin-top:5px;display:none;}
    .lh-section-title {font-size:16px;font-weight:bold;color:#0f0;margin:10px 0;text-shadow:0 0 5px #0f0;}
    .lh-btn-row {display:flex;gap:10px;flex-wrap:wrap;justify-content:center;width:100%;}
    @media(max-width:480px){ .lh-button{min-width:110px;padding:10px 12px;} .lh-box{padding:12px;} .lh-box h2{font-size:18px;} }
  `;
  document.head.appendChild(style);

  let loggedIn = false;

  // ===== INTRO COM BOTÕES APOIAR E COMEÇAR =====
  const showIntro = () => {
    if (document.getElementById("lhIntro")) return;
    const intro = document.createElement("div");
    intro.id = "lhIntro";
    intro.className = "lh-overlay";
    intro.innerHTML = `
      <div class="lh-box">
        <video autoplay loop muted src="https://motionbgs.com/media/5602/hacker-code.960x540.mp4"></video>
        <div class="lh-box-content">
          <h2>Bem-vindo ao LEO HUB V10 X</h2>
          <div class="lh-btn-row">
            <button class="lh-button" id="apoioBtn">APOIAR AQUI</button>
            <button class="lh-button" id="comecarBtn">COMEÇAR</button>
          </div>
        </div>
      </div>
    `;
    document.body.appendChild(intro);

    // Botão apoiar abre link
    document.getElementById("apoioBtn").onclick = () => {
      window.open("https://pixgg.com/LEO_MODS_OFC", "_blank");
    };

    // Botão começar fecha a intro e abre login
    document.getElementById("comecarBtn").onclick = () => {
      intro.remove();
      showLogin();
    };
  };

  // ===== LOGIN ===== (vídeo trocado conforme seu pedido)
  const showLogin = () => {
    if (document.getElementById("lhLogin")) return;
    const overlay = document.createElement("div");
    overlay.id = "lhLogin";
    overlay.className = "lh-overlay";
    overlay.innerHTML = `
      <div class="lh-box">
        <video autoplay loop muted src="https://motionbgs.com/media/5602/hacker-code.960x540.mp4"></video>
        <div class="lh-box-content">
          <h2>Login - LEO HUB V10 X</h2>
          <input class="lh-input" id="lhUser" placeholder="Usuário"/>
          <input class="lh-input" id="lhPass" type="password" placeholder="Senha"/>
          <button class="lh-button" id="lhLoginBtn">Entrar</button>
          <div class="lh-error" id="lhLoginError">Usuário ou senha incorretos!</div>
        </div>
      </div>
    `;
    document.body.appendChild(overlay);

    document.getElementById("lhLoginBtn").onclick = () => {
      const user = document.getElementById("lhUser").value.trim();
      const pass = document.getElementById("lhPass").value.trim();
      if (user === "LEO" && pass === "V10X") {
        overlay.remove();
        loggedIn = true;
        showMenu();
      } else {
        document.getElementById("lhLoginError").style.display = "block";
      }
    };
  };

  // ===== MENU =====
  const showMenu = () => {
    if (document.getElementById("lhMenu")) return;
    const menu = document.createElement("div");
    menu.id = "lhMenu";
    menu.className = "lh-overlay";
    menu.innerHTML = `
      <div class="lh-box">
        <video autoplay loop muted src="https://motionbgs.com/media/5856/huge-dark-dragon.960x540.mp4"></video>
        <div class="lh-box-content">
          <div style="width:100%;display:flex;justify-content:flex-end;"><div class="lh-close" id="lhCloseMenu">✖</div></div>
          <h2>LEO HUB V10 X</h2>
          <div id="lhMenuContent" style="width:100%;"></div>
        </div>
      </div>
    `;
    document.body.appendChild(menu);
    document.getElementById("lhCloseMenu").onclick = () => menu.remove();

    const content = document.getElementById("lhMenuContent");
    const addButton = (txt, func) => {
      const btn = document.createElement("button");
      btn.className = "lh-button";
      btn.innerText = txt;
      if (func) btn.onclick = func;
      content.appendChild(btn);
    };

    // ===== BOTOES PRINCIPAIS =====
    addButton("📚 KHAN ACADEMY", () => {
      fetch("https://raw.githubusercontent.com/Niximkk/Khanware/refs/heads/main/Khanware.js")
        .then(r => r.text()).then(eval)
        .catch(()=>window.open("https://www.khanacademy.org/","_blank"));
    });
    addButton("✅ TAREFA HACK V1", () => { window.open("https://taskitos.cupiditys.lol/", "_blank"); });
    addButton("📝 REDAÇÃO V2", () => { window.open("https://crimsonstrauss.xyz/redacao", "_blank"); });
    addButton("🎤 SPEAK V1", () => { window.open("https://speakify.cupiditys.lol/install", "_blank"); });

    // ===== APOSTILAS =====
    const titulo = document.createElement("div");
    titulo.className = "lh-section-title";
    titulo.innerText = "📘 Apostilas";
    content.appendChild(titulo);
    addButton("📚 Geografia & História - Volume 4", () => window.open("https://acervocmsp.educacao.sp.gov.br/143266/1340446.pdf", "_blank"));
    addButton("📚 Matemática & Português - Volume 4", () => window.open("https://acervocmsp.educacao.sp.gov.br/143257/1340145.pdf", "_blank"));
    addButton("📚 Ano Física, Biologia e Química - Volume 4", () => window.open("https://acervocmsp.educacao.sp.gov.br/143268/1340460.pdf", "_blank"));

    // ===== IA =====
    const tituloIA = document.createElement("div");
    tituloIA.className = "lh-section-title";
    tituloIA.innerText = "🤖 IA";
    content.appendChild(tituloIA);
    addButton("💬 LEO IA", () => window.open("https://www.google.com/search?udm=50&aep=11", "_blank"));
  };

  // ===== BOTÃO FLUTUANTE =====
  const floatingBtn = document.createElement("div");
  floatingBtn.className = "lh-floating";
  floatingBtn.title = "Abrir TAREFA TAS V1";
  floatingBtn.innerHTML = `<video autoplay loop muted src="https://motionbgs.com/media/2300/joker.960x540.mp4"></video>`;
  floatingBtn.onclick = () => loggedIn ? showMenu() : showIntro();
  document.body.appendChild(floatingBtn);

  // INICIA INTRO
  showIntro();
})();
