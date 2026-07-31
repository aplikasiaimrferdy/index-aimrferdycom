---
title: "AI Image Generator"
description: "Generate image from text"
popular: true
---


<style is:global>>:root{--primary:#00d084;--primary-dark:#00a86b;--neutral-950:#07110d;--neutral-900:#0d1b15;--neutral-800:#14251d;--neutral-700:#294235;--neutral-400:#9db3a7;--neutral-200:#e0ece5;--surface:#102018;--accent:#ffd56a;--danger:#e14c4c;--shadow:0 12px 35px rgba(0,0,0,.32);--radius:12px;--radius-lg:18px;--font-family:Arial,Helvetica,sans-serif}*{box-sizing:border-box}html{scroll-behavior:smooth}body{margin:0;min-height:100vh;color:var(--neutral-200);background:radial-gradient( circle at top,rgba(0,208,132,.14),transparent 35% ),linear-gradient( 180deg,#07110d,#020805 );font-family:var(--font-family)}.app{width:min(1450px,96%);margin:25px auto}.header{padding:25px;margin-bottom:18px;border:1px solid rgba(0,208,132,.25);border-radius:var(--radius-lg);background:rgba(16,32,24,.95);box-shadow:var(--shadow)}.header h1{margin:0 0 10px;color:var(--primary);font-size:clamp( 25px,4vw,40px );letter-spacing:.5px}.header p{margin:0;color:var(--neutral-400);line-height:1.7}.warning{margin-top:15px;padding:14px;color:#f4e4ac;background:rgba(255,213,106,.08);border-left:4px solid var(--accent);border-radius:8px;line-height:1.7;font-size:14px}.toolbar{display:flex;flex-wrap:wrap;gap:10px;margin-bottom:15px}button{padding:12px 17px;border:0;border-radius:10px;background:var(--primary);color:#06110c;font-weight:700;cursor:pointer;transition:.2s ease}button:hover{transform:translateY(-1px);filter:brightness(1.12)}.secondary{background:var(--neutral-700);color:var(--neutral-200)}.danger{background:var(--danger);color:#fff}.status{min-height:25px;margin:10px 0;color:var(--primary);font-weight:700}.grid{display:grid;grid-template-columns:1fr 1fr;gap:18px}.panel{overflow:hidden;border:1px solid var(--neutral-700);border-radius:var(--radius-lg);background:rgba(16,32,24,.96);box-shadow:var(--shadow)}.panel-head{display:flex;align-items:center;justify-content:space-between;gap:10px;padding:14px 16px;border-bottom:1px solid var(--neutral-700)}.panel-head h2{margin:0;font-size:17px;color:var(--primary)}.counter{font-size:13px;color:var(--neutral-400)}textarea{display:block;width:100%;min-height:560px;padding:16px;resize:vertical;border:0;outline:none;background:#07130d;color:#dff7e9;font:13px/1.6 Consolas,"Courier New",monospace}textarea:focus{box-shadow:inset 0 0 0 1px var(--primary)}.result-list,.report{margin-top:18px;padding:18px;border:1px solid var(--neutral-700);border-radius:var(--radius);background:rgba(16,32,24,.96)}.result-list h2{margin-top:0;color:var(--primary)}.report{color:var(--neutral-400);line-height:1.7}.report strong{color:var(--primary)}code{padding:2px 5px;border-radius:5px;color:var(--accent);background:rgba(255,213,106,.08)}textarea::-webkit-scrollbar{width:8px}textarea::-webkit-scrollbar-track{background:#020805}textarea::-webkit-scrollbar-thumb{background:var(--neutral-700);border-radius:20px}@media(max-width:900px){.grid{grid-template-columns:1fr}textarea{min-height:420px}}@media(max-width:600px){.app{width:94%;margin:15px auto}.toolbar{display:grid;grid-template-columns:1fr 1fr}button{width:100%}.header{padding:18px}textarea{min-height:350px}}</style>
<main class="app"><header class="header"><h1>
UnJS Offline Full HTML Cleaner
</h1><p>
Membersihkan JavaScript yang kemungkinan tidak digunakan
tanpa merusak HTML dan CSS.
Semua proses berjalan langsung di browser.
</p><div class="warning"><strong>Penting:</strong>
Fungsi JavaScript yang dipanggil secara dinamis,
melalui file eksternal, framework,
atau event tertentu dapat terbaca sebagai tidak digunakan.
Selalu cek hasil sebelum dipasang ke website.
</div></header><div class="toolbar"><button
type="button"
onclick="analyzeAndRemove()">
Analisis & Hapus Otomatis
</button><button
type="button"
class="secondary"
onclick="copyResult()">
Copy HTML Lengkap
</button><button
type="button"
class="secondary"
onclick="downloadHTML()">
Download HTML
</button><button
type="button"
class="danger"
onclick="resetAll()">
Reset
</button></div><div class="status" id="status">
Siap digunakan.
</div><section class="grid"><div class="panel"><div class="panel-head"><h2>
HTML / JavaScript Asli
</h2><span
class="counter"
id="inputCount">
0 karakter
</span></div><textarea
id="inputCode"
spellcheck="false"
placeholder="Paste HTML lengkap di sini..."></textarea></div><div class="panel"><div class="panel-head"><h2>
Hasil HTML Bersih
</h2><span
class="counter"
id="outputCount">
0 karakter
</span></div><textarea
id="outputCode"
spellcheck="false"
placeholder="Hasil HTML lengkap muncul di sini..."></textarea></div></section><section
class="result-list"
id="candidateBox"><h2>
Fungsi Otomatis Dihapus
</h2><p>
Belum ada proses.
</p></section><section
class="report"
id="report"><strong>
Laporan:
</strong>
Belum ada analisis.
</section></main>

                   
<script is:inline>const inputCode=document.getElementById("inputCode");const outputCode=document.getElementById("outputCode");const statusBox=document.getElementById("status");const candidateBox=document.getElementById("candidateBox");const reportBox=document.getElementById("report");const inputCount=document.getElementById("inputCount");const outputCount=document.getElementById("outputCount");function updateCount(){inputCount.textContent=inputCode.value.length.toLocaleString("id-ID")+" karakter";outputCount.textContent=outputCode.value.length.toLocaleString("id-ID")+" karakter";}inputCode.addEventListener("input",updateCount);outputCode.addEventListener("input",updateCount);function getFunctionNames(js){let names=new Set();let match;let reg1=/function\s+([A-Za-z_$][\w$]*)\s*\(/g;while((match=reg1.exec(js))){names.add(match[1]);}let reg2=/(?:const|let|var)\s+([A-Za-z_$][\w$]*)\s*=\s*(?:async\s*)?(?:\([^)]*\)|[A-Za-z_$][\w$]*)\s*=>/g;while((match=reg2.exec(js))){names.add(match[1]);}let reg3=/(?:const|let|var)\s+([A-Za-z_$][\w$]*)\s*=\s*(?:async\s*)?function\s*\(/g;while((match=reg3.exec(js))){names.add(match[1]);}return[...names];}function countUsage(name,source){let regex=new RegExp("\\b"+name+"\\b","g");let result=source.match(regex);return result?result.length:0;}function checkEvent(name,html){return new RegExp("on[a-z]+\\s*=\\s*[\"'][^\"']*"+name+"\\s*\\(","i").test(html);}function findEnd(code,start){let depth=0;let quote=null;let escape=false;for(let i=start;i<code.length;i++){let c=code[i];if(quote){if(escape){escape=false;}else if(c=="\\"){escape=true;}else if(c===quote){quote=null;}continue;}if(c==="'" || c==='"' || c==="`"){quote=c;continue;}if(c==="{"){depth++;}if(c==="}"){depth--;if(depth===0){return i;}}}return-1;}function removeFunction(js,name){let patterns=[new RegExp("function\\s+"+name+"\\s*\\([^)]*\\)\\s*\\{","g"),new RegExp("(?:const|let|var)\\s+"+name+"\\s*=\\s*"+"(?:async\\s*)?"+"(?:\\([^)]*\\)|[A-Za-z_$][\\w$]*)"+"\\s*=>\\s*\\{","g"),new RegExp("(?:const|let|var)\\s+"+name+"\\s*=\\s*"+"(?:async\\s*)?function\\s*\\([^)]*\\)\\s*\\{","g")];patterns.forEach(regex=>{let match;while((match=regex.exec(js))){let start=match.index;let open=js.indexOf("{",start);let close=findEnd(js,open);if(close!==-1){js=js.substring(0,start)+js.substring(close+1);}}});return js;}function analyzeAndRemove(){let html=inputCode.value;if(!html.trim()){statusBox.textContent="Masukkan HTML terlebih dahulu.";return;}let removed=[];let total=0;html=html.replace(/(<script\b[^>]*>)([\s\S]*?)(<\/script>)/gi,function(full,start,js,end){if(/\bsrc\s*=/.test(start)){return full;}if(/type\s*=\s*["']application\/ld\+json["']/.test(start)){return full;}let names=getFunctionNames(js);total+=names.length;names.forEach(name=>{let usage=countUsage(name,html);let event=checkEvent(name,html);if(usage<=1 && !event){removed.push(name);js=removeFunction(js,name);}});return start+js+end;});outputCode.value=html;updateCount();candidateBox.innerHTML=`
<h2>Fungsi Otomatis Dihapus</h2>

<p>
${
removed.length
?
removed.map(
x=>"<code>"+x+"()</code>"
).join(", ")
:
"Tidak ada fungsi yang dihapus."
}
</p>
`;reportBox.innerHTML=`
<strong>Laporan:</strong>

<br>
Total fungsi ditemukan:
${total}

<br>
Fungsi dihapus:
${removed.length}
`;statusBox.textContent="Hasil HTML berhasil dibuat tanpa mengubah script.";}async function copyResult(){if(!outputCode.value){statusBox.textContent="Belum ada hasil.";return;}try{await navigator.clipboard.writeText(outputCode.value);}catch(e){outputCode.select();document.execCommand("copy");}statusBox.textContent="HTML berhasil dicopy.";}function downloadHTML(){if(!outputCode.value){statusBox.textContent="Belum ada hasil.";return;}let blob=new Blob([outputCode.value],{type:"text/html;charset=utf-8"});let url=URL.createObjectURL(blob);let a=document.createElement("a");a.href=url;a.download="unjs-clean.html";a.click();URL.revokeObjectURL(url);statusBox.textContent="Download selesai.";}function resetAll(){inputCode.value="";outputCode.value="";candidateBox.innerHTML=`
<h2>Fungsi Otomatis Dihapus</h2>
<p>Belum ada proses.</p>
`;reportBox.innerHTML=`
<strong>Laporan:</strong>
Belum ada analisis.
`;statusBox.textContent="Reset selesai.";updateCount();}updateCount();</script>
<script>function toggleMenu(button){const menu=document.getElementById("mainMenu");const isOpen=menu.classList.toggle("show");button.classList.toggle("active",isOpen);button.setAttribute("aria-expanded",isOpen);}document .querySelectorAll("#mainMenu a").forEach(function(link){link.addEventListener("click",function(){const menu=document.getElementById("mainMenu");const button=document.querySelector(".menu-toggle");menu.classList.remove("show");button.classList.remove("active");button.setAttribute("aria-expanded","false");});});</script>
</body></html>
