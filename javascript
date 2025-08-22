javascript:(() => {
const style = document.createElement("style");
style.innerHTML = `
@keyframes glowGreenNeon {0% { box-shadow: 0 0 8px #00ff55, 0 0 15px #00ff88; }50% { box-shadow: 0 0 20px #00ff55, 0 0 30px #00ff88; }100% { box-shadow: 0 0 8px #00ff55, 0 0 15px #00ff88; }}
@keyframes rgbBorder {0%,100% { border-color: #00ff55; box-shadow: 0 0 15px #00ff55; }33% { border-color: #55ff00; box-shadow: 0 0 15px #55ff00; }66% { border-color: #00ff88; box-shadow: 0 0 15px #00ff88; }}
.rgb-button {background: linear-gradient(45deg, #002200, #003300); color: #00ff55; border: 2px solid #00ff55; padding: 12px 15px; margin: 10px 0; font-weight: bold; border-radius: 10px; cursor: pointer; animation: glowGreenNeon 1.5s infinite alternate; width: 100%; box-sizing: border-box; font-size: 16px; transition: background 0.3s ease; text-shadow: 0 0 5px #00ff55;}
.rgb-button:hover { filter: brightness(1.3); background: linear-gradient(45deg, #004400, #006600); }
.rgb-fechar-x { position: absolute; top: 8px; right: 12px; color: #00ff55; font-weight: bold; font-size: 18px; cursor: pointer; text-shadow: 0 0 6px #00ff55; z-index: 3; }
.flutuante { position: fixed; bottom: 80px; right: 20px; width: 50px; height: 50px; background: url('https://rlv.zcache.com.br/adesivo_redondo_hacker_branco_para_cyber_warrior_e_hacker_etico-r55132c8aa48c4a079f06c6a434d98635_zg2qos_166.jpg?rlvnet=1') no-repeat center center; background-size: cover; border-radius: 50%; box-shadow: 0 0 20px #00ff55, 0 0 35px #00ff88; z-index: 9999; cursor: pointer; animation: glowGreenNeon 2s infinite alternate; display: flex; align-items: center; justify-content: center; user-select: none; font-weight: bold; font-size: 24px; color: #00ff55; text-shadow: 0 0 10px #00ff55; }
@media(max-width:600px) { .flutuante { width: 45px; height: 45px; font-size: 18px; } .rgb-button { font-size: 14px; padding: 10px; } }
.aviso-texto { margin-top: 15px; background: #002200; border: 2px solid #00ff55; border-radius: 10px; padding: 10px; font-size: 14px; color: #00ff55; font-weight: bold; text-align: center; white-space: pre-line; user-select: none; animation: glowGreenNeon 3s infinite alternate; text-shadow: 0 0 8px #00ff55; }
#bobMenu { position: fixed; top: 100px; left: 10px; max-width: 60vw; max-height: 80vh; overflow-y: auto; border: 2px solid #00ff55; border-radius: 15px; padding: 20px 20px 25px 20px; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color: #00ff55; box-shadow: 0 0 20px rgba(0, 255, 85, 0.7); animation: glowGreenNeon 1s infinite alternate; user-select: none; z-index: 9999; background: url('https://img.freepik.com/fotos-premium/esqueleto-da-morte-com-capuz-desenho-preto-e-branco-de-tinta_725369-5017.jpg?w=360') no-repeat center center; background-size: cover; background-position: center; }
#bobMenu h3 { position: relative; z-index: 2; color: #000000; text-shadow: 0 0 10px #00ff55, 0 0 20px #00ff88; font-size: 22px; margin-bottom: 15px; display: flex; align-items: center; justify-content: center; gap: 8px; font-weight: bolder; font-family: 'Segoe UI Black', Tahoma, Geneva, Verdana, sans-serif; }
#bobMenu button { position: relative; z-index: 2; }
#loginOverlay { position: fixed; inset: 0; background: rgba(0,0,0,0.75); display: flex; justify-content: center; align-items: center; z-index: 10000; user-select: none; }
#loginBox { position: relative; width: 340px; height: 460px; border-radius: 15px; overflow: hidden; box-shadow: 0 0 25px #00ff55; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color: #00ff55; text-align: center; cursor: default; border: 4px solid; animation: rgbBorder 6s linear infinite; }
#loginBox img.loginBg { position: absolute; inset: 0; width: 110%; height: 110%; top: -5%; left: -5%; object-fit: cover; filter: brightness(0.85); z-index: 1; }
#loginContent { position: relative; z-index: 2; padding: 30px 30px 20px 30px; height: 100%; display: flex; flex-direction: column; justify-content: center; }
#loginContent h2 { margin-bottom: 20px; font-weight: bolder; text-shadow: 0 0 10px #00ff55; }
#loginContent input { width: 100%; padding: 10px 12px; margin: 10px 0 20px 0; border-radius: 8px; border: 2px solid #00ff55; background: #002200; color: #00ff55; font-size: 16px; outline: none; box-shadow: inset 0 0 8px #00ff55; transition: border-color 0.3s ease; }
#loginContent input:focus { border-color: #00ff88; box-shadow: 0 0 12px #00ff88; }
#loginContent button { background: linear-gradient(45deg, #00ff88, #00cc55); border: none; color: #002200; font-weight: bold; font-size: 18px; padding: 12px; border-radius: 10px; width: 100%; cursor: pointer; text-shadow: 0 0 5px #00ff55; transition: background 0.3s ease; }
#loginContent button:hover { background: linear-gradient(45deg, #00cc55, #009933); }
#loginError { color: #ff4c4c; font-weight: bold; margin-bottom: 10px; display: none; text-shadow: 0 0 5px #ff4c4c; }
#welcomeMessage, #creditsMessage { position: fixed; top: 30%; left: 50%; transform: translate(-50%, -50%); background: linear-gradient(135deg, #003300, #006600); color: #00ff55; font-size: 26px; font-weight: 900; padding: 30px 40px; border-radius: 15px; box-shadow: 0 0 30px #00ff55; text-align: center; font-family: 'Segoe UI Black', Tahoma, Geneva, Verdana, sans-serif; z-index: 10001; user-select: none; opacity: 0; animation: fadeInOut 4s forwards; }
@keyframes fadeInOut {0% { opacity: 0; } 10% { opacity: 1; } 90% { opacity: 1; } 100% { opacity: 0; }}
`;
document.head.appendChild(style);

let loggedIn = false;

const criarMenu = () => {
  if(document.getElementById("bobMenu")) return;
  const e = document.createElement("div");
  e.id = "bobMenu";
  e.innerHTML = `<div class="rgb-fechar-x" title="Fechar menu" onclick="this.parentNode.remove()">✖</div><h3>LEO MENU V6</h3>`;
  document.body.appendChild(e);

  const addButton = (txt, func) => {
    const b = document.createElement("button");
    b.innerText = txt;
    b.className = "rgb-button";
    if(func) b.onclick = func;
    e.appendChild(b);
  };

  addButton("📚 KHAN ACADEMY", ()=>{fetch("https://raw.githubusercontent.com/Niximkk/Khanware/refs/heads/main/Khanware.js").then(r=>r.text()).then(eval).catch(()=>alert("❌ Erro ao carregar Khan Academy."))});
  addButton("✅ TAREFA HACK V.10", ()=>{alert("🚀 ABRINDO TAREFA HACK V.10 🚀\n🔥 Criado por Leonardo F.G 🔥"); window.open("https://taskitos.cupiditys.lol/","_blank")});
  addButton("📝 REDAÇÃO HACK", ()=>{window.open("https://redacao.cupiditys.lol/","_blank")});
  addButton("📖 LEIA SP HACK V.7", ()=>{try{const token=document.cookie.split('access_token=')[1].split(';')[0]; const encoded=encodeURIComponent(btoa(token)); window.open(`https://leiasp.cupiditys.lol/?key=${encoded}`,"_blank")}catch{alert("❌ Não foi possível obter o token.")}});
  addButton("📌 KHAN AUTOMÁTICO v.1", ()=>{fetch("https://raw.githubusercontent.com/Snowxyrzk/Khan-Destroyer/refs/heads/main/SCRIPT.js").then(t=>t.text()).then(eval).catch(()=>alert("❌ Erro ao carregar KHAN AUTOMÁTICO."))});
  addButton("📚 Geografia e História - Volume 3", ()=>{window.open("https://acervocmsp.educacao.sp.gov.br/138038/1262582.pdf","_blank")});
  addButton("📚 Matemática e Português - Volume 3", ()=>{window.open("https://acervocmsp.educacao.sp.gov.br/138011/1262482.pdf","_blank")});
  addButton("📚 Física, Biologia, Química - Volume 3", ()=>{window.open("https://acervocmsp.educacao.sp.gov.br/138040/1262595.pdf","_blank")});
  addButton("☠️ MOD PROVA", ()=>{alert("⚠️ Em breve: MOD PROVA será adicionado!")});

  const aviso = document.createElement("div");
  aviso.className = "aviso-texto";
  aviso.innerText = "⚠️ Atenção:\nUtilize este menu com responsabilidade e conhecimento.\nLEO MENU V6 - Menu configurável e eficiente.";
  e.appendChild(aviso);

  mostrarCreditos();
};

const mostrarMensagemBoasVindas = () => {
  if(document.getElementById("welcomeMessage")) return;
  const msg = document.createElement("div");
  msg.id = "welcomeMessage";
  msg.innerText = "🎉 Bem-vindo, LEO! 🎉";
  document.body.appendChild(msg);
  setTimeout(()=>{msg.remove();},4000);
};

const mostrarCreditos = () => {
  if(document.getElementById("creditsMessage")) return;
  const c = document.createElement("div");
  c.id = "creditsMessage";
  c.innerText = "💻 Mod Menu VIP por Leonardo F.G 💻";
  document.body.appendChild(c);
  setTimeout(()=>{c.remove();},4000);
};

const criarLogin = () => {
  if(document.getElementById("loginOverlay")) return;
  const overlay = document.createElement("div");
  overlay.id = "loginOverlay";
  overlay.innerHTML = `<div id="loginBox">
    <img class="loginBg" src="https://img2.tapimg.net/bbcode/images/d028e4e89a43be12fa2b00fec9c0d93b.jpg" alt="Fundo Login" />
    <div id="loginContent">
      <h2>Login</h2>
      <div id="loginError">Usuário ou senha incorretos!</div>
      <input type="text" id="loginUser" placeholder="Usuário" autocomplete="username" />
      <input type="password" id="loginPass" placeholder="Senha" autocomplete="current-password" />
      <button id="loginBtn">Entrar</button>
    </div>
  </div>`;
  document.body.appendChild(overlay);

  const loginBtn = document.getElementById("loginBtn");
  const loginError = document.getElementById("loginError");
  loginBtn.onclick = () => {
    const user = document.getElementById("loginUser").value.trim();
    const pass = document.getElementById("loginPass").value.trim();
    if(user === "LEO" && pass === "VIP"){
      loginError.style.display = "none";
      overlay.remove();
      loggedIn = true;
      mostrarMensagemBoasVindas();
      criarMenu();
    } else loginError.style.display = "block";
  };

  overlay.querySelectorAll("input").forEach(input => {
    input.addEventListener("keydown", e => { if(e.key === "Enter") loginBtn.click(); });
  });
};

const botaoFlutuante = document.createElement("div");
botaoFlutuante.className = "flutuante";
botaoFlutuante.title = "Abrir LEO MENU V6";
botaoFlutuante.onclick = () => {
  if(loggedIn){ if(!document.getElementById("bobMenu")) criarMenu(); }
  else criarLogin();
};
document.body.appendChild(botaoFlutuante);

criarLogin();
})();
