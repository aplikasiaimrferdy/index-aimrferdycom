---
title: "AI Prompt Generator"
description: "Generate prompt AI profesional untuk ChatGPT, Gemini, Claude, DeepSeek, dan AI lainnya."
icon: "🎨"
category: "AI Tools"
popular: true
---

# AI Prompt Generator

Buat prompt AI yang lebih efektif dalam hitungan detik.

<div class="prompt-generator">

<div class="form-group">
<label>Tujuan Prompt</label>

<input
id="promptInput"
type="text"
placeholder="Contoh: Buat artikel SEO tentang AI Prompt Generator"
/>

</div>

<div class="form-group">
<label>Gaya Penulisan</label>

<select id="promptStyle">
<option value="Professional">Professional</option>
<option value="Creative">Creative</option>
<option value="Marketing">Marketing</option>
<option value="Technical">Technical</option>
<option value="Friendly">Friendly</option>
</select>
</div>

<button id="generatePrompt">
Generate Prompt
</button>

<div class="form-group">
<label>Hasil Prompt</label>

<textarea
id="promptOutput"
readonly
></textarea>

</div>

<button id="copyPrompt">
Copy Prompt
</button>

</div>

<script>

const generateBtn =
document.getElementById(
'generatePrompt'
);

const copyBtn =
document.getElementById(
'copyPrompt'
);

generateBtn?.addEventListener(
'click',
() => {

const input =
document.getElementById(
'promptInput'
).value;

const style =
document.getElementById(
'promptStyle'
).value;

const output =
document.getElementById(
'promptOutput'
);

if(!input){
output.value =
'Masukkan tujuan prompt terlebih dahulu.';
return;
}

output.value =

`You are an expert ${style} AI assistant.

Task:
${input}

Requirements:

- Detailed answer
- Clear structure
- Practical examples
- Best practices
- Actionable insights

Please provide a complete response.`;

}
);

copyBtn?.addEventListener(
'click',
async () => {

const text =
document.getElementById(
'promptOutput'
).value;

if(!text) return;

await navigator.clipboard.writeText(text);

copyBtn.textContent =
'Copied!';

setTimeout(()=>{
copyBtn.textContent =
'Copy Prompt';
},2000);

}
);

</script>

<style is:global>
/* =========================
   PROMPT GENERATOR
========================= */

.prompt-generator{
  margin:40px 0;
  padding:30px;
  background:var(--card);
  color:var(--text);
  border:1px solid var(--border);
  border-radius:20px;
  backdrop-filter:blur(12px);
}

.form-group{
  margin-bottom:20px;
}

.form-group label{
  display:block;
  margin-bottom:8px;
  font-weight:700;
  color:var(--text);
}

.prompt-generator input,
.prompt-generator select,
.prompt-generator textarea{
  width:100%;
  padding:14px;
  box-sizing:border-box;

  background:transparent;
  color:var(--text);

  border:1px solid var(--border);
  border-radius:12px;

  font:inherit;
  transition:.2s ease;
}

.prompt-generator input::placeholder,
.prompt-generator textarea::placeholder{
  color:var(--soft);
}

.prompt-generator select{
  cursor:pointer;
}

.prompt-generator input:focus,
.prompt-generator select:focus,
.prompt-generator textarea:focus{
  outline:none;
  border-color:var(--accent,#3b82f6);
  box-shadow:0 0 0 3px rgba(59,130,246,.15);
}

.prompt-generator textarea{
  min-height:260px;
  resize:vertical;
  line-height:1.6;
}

/* =========================
   BUTTONS
========================= */

#generatePrompt,
#copyPrompt{
  width:100%;
  margin-top:10px;
  padding:14px;
  border-radius:12px;
  font-size:16px;
  font-weight:700;
  cursor:pointer;
  transition:.25s ease;
}

#generatePrompt{
  border:none;
  background:linear-gradient(135deg,var(--accent,#3b82f6),var(--accent-hover,#2563eb));
  color:#fff;
}

#copyPrompt{
  background:transparent;
  color:var(--text);
  border:1px solid var(--border);
}

#generatePrompt:hover,
#copyPrompt:hover{
  transform:translateY(-2px);
}

#generatePrompt:active,
#copyPrompt:active{
  transform:scale(.98);
}

/* =========================
   MOBILE
========================= */

@media (max-width:768px){

  .prompt-generator{
    padding:20px;
    border-radius:16px;
  }

  .prompt-generator textarea{
    min-height:220px;
  }

}
</style>

## Apa Itu AI Prompt Generator?

AI Prompt Generator adalah tool gratis yang membantu membuat prompt berkualitas tinggi untuk berbagai model AI seperti ChatGPT, Gemini, Claude, DeepSeek, dan lainnya.

## Cara Menggunakan

1. Masukkan tujuan prompt.
2. Pilih gaya penulisan.
3. Klik Generate Prompt.
4. Salin hasil prompt.
5. Gunakan pada AI favorit Anda.

## Manfaat

* Menghasilkan prompt lebih profesional.
* Mempercepat workflow.
* Cocok untuk SEO.
* Cocok untuk content creator.
* Cocok untuk marketer.
* Cocok untuk programmer.

## FAQ

### Apakah tool ini gratis?

Ya, AI Prompt Generator dapat digunakan secara gratis.

### Apakah prompt bisa digunakan di ChatGPT?

Ya, prompt yang dihasilkan kompatibel dengan ChatGPT, Gemini, Claude, DeepSeek, dan AI lainnya.

### Apakah perlu login?

Tidak. Tool dapat digunakan langsung tanpa registrasi.
