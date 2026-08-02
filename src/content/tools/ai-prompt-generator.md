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

<style>

.prompt-generator{
margin:40px 0;
padding:30px;
border:1px solid #e5e7eb;
border-radius:20px;
background:#fff;
}

.form-group{
margin-bottom:20px;
}

.form-group label{
display:block;
font-weight:700;
margin-bottom:8px;
}

.prompt-generator input,
.prompt-generator select,
.prompt-generator textarea{
width:100%;
padding:14px;
border:1px solid #d1d5db;
border-radius:12px;
font-size:16px;
box-sizing:border-box;
}

.prompt-generator textarea{
height:260px;
resize:vertical;
}

#generatePrompt,
#copyPrompt{
width:100%;
padding:14px;
border:none;
border-radius:12px;
cursor:pointer;
font-weight:700;
font-size:16px;
margin-top:10px;
}

#generatePrompt{
background:#111827;
color:#fff;
}

#copyPrompt{
background:#f3f4f6;
color:#111827;
}

#generatePrompt:hover,
#copyPrompt:hover{
opacity:.9;
}

@media(max-width:768px){

.prompt-generator{
padding:20px;
border-radius:16px;
}

.prompt-generator textarea{
height:220px;
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
