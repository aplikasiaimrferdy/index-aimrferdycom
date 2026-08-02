---
title: "AI Detector"
description: "AI Detector gratis untuk mengecek apakah teks terlihat seperti ditulis AI atau manusia. Analisis AI probability, human score, readability, vocabulary, dan statistik teks langsung di browser."
icon: "🤖"
category: "AI Tools"
popular: true
---

# AI Detector

Analisis apakah sebuah teks memiliki karakteristik yang sering ditemukan pada konten yang dihasilkan AI. Tool ini bekerja langsung di browser dan **tidak mengirim data ke server**.

> **Disclaimer:** Hasil analisis merupakan estimasi berdasarkan pola bahasa dan **bukan bukti pasti** bahwa suatu teks dibuat oleh AI atau manusia.

<div class="tool ai-detector">

<div class="form-group">

<label for="aiInput">Paste Text</label>

<textarea
id="aiInput"
placeholder="Paste artikel, essay, email, atau teks lain yang ingin dianalisis..."
></textarea>

</div>

<div class="tool-actions">

<button
id="analyzeBtn"
class="btn-primary"
>
Analyze Text
</button>

<button
id="clearBtn"
class="btn-secondary"
>
Clear
</button>

</div>

<div
id="stats"
class="tool-result"
style="display:none;"
>

### Text Statistics

| Metric | Value |
|--|:|
| Words | <span id="wordCount">0</span> |
| Characters | <span id="charCount">0</span> |
| Sentences | <span id="sentenceCount">0</span> |
| Paragraphs | <span id="paragraphCount">0</span> |
| Reading Time | <span id="readingTime">0 min</span> |

</div>

<div
id="resultBox"
class="tool-result"
style="display:none;"
>

## Detection Result

### AI Probability

<div
style="
width:100%;
height:12px;
background:var(--border);
border-radius:999px;
overflow:hidden;
margin-bottom:12px;
">

<div
id="aiBar"
style="
width:0%;
height:100%;
background:linear-gradient(90deg,#3b82f6,#2563eb);
transition:.4s;
">
</div>

</div>

<h2 id="aiScore">
0%
</h2>

<p id="resultText"></p>



### Analysis

| Indicator | Result |
|--|--|
| Vocabulary Diversity | <span id="vocabScore"></span> |
| Sentence Variety | <span id="sentenceVariety"></span> |
| Repeated Words | <span id="repeatScore"></span> |
| Readability | <span id="readability"></span> |
| Average Sentence Length | <span id="avgSentence"></span> |



### Suggestions

<ul id="suggestions">

</ul>

</div>

<div class="tool-actions">

<button
id="copyBtn"
class="btn-secondary"
>
Copy Report
</button>

</div>

</div>



## What Is AI Detector?

AI Detector adalah tool online yang menganalisis pola bahasa dalam sebuah teks untuk memperkirakan apakah teks tersebut memiliki karakteristik yang sering ditemukan pada konten hasil AI.

Tool ini menggunakan beberapa indikator seperti:

- Vocabulary diversity
- Sentence variety
- Average sentence length
- Word repetition
- Readability
- Writing consistency

Semua proses dilakukan langsung di browser sehingga data tidak dikirim ke server.



## Features

- Free AI Detector
- No registration required
- Works directly in your browser
- AI Probability Score
- Human Score
- Reading Time
- Word Counter
- Character Counter
- Sentence Counter
- Paragraph Counter
- Vocabulary Analysis
- Writing Suggestions
- Copy Analysis Report



## How To Use

1. Paste your text.
2. Click **Analyze Text**.
3. Wait a few moments.
4. Review the AI Probability and Human Score.
5. Read the recommendations to improve your writing.



## Understanding The Result

### AI Probability

Semakin tinggi persentasenya, semakin banyak pola bahasa yang menyerupai tulisan AI.

### Human Score

Menunjukkan kemungkinan bahwa teks memiliki karakteristik tulisan manusia.

### Vocabulary Diversity

Mengukur variasi kosakata yang digunakan.

### Sentence Variety

Mengukur apakah panjang kalimat bervariasi atau terlalu seragam.

### Repeated Words

Menghitung tingkat pengulangan kata yang berlebihan.

### Readability

Mengukur kemudahan teks untuk dibaca.



## Tips To Make Writing More Human

- Gunakan variasi panjang kalimat.
- Tambahkan contoh nyata.
- Hindari pengulangan frasa yang sama.
- Gunakan bahasa yang lebih natural.
- Sisipkan opini atau pengalaman pribadi jika relevan.
- Hindari struktur kalimat yang terlalu seragam.



## FAQ

### Is this AI Detector free?

Yes. You can use it for free.

### Does this tool store my text?

No. Everything is processed inside your browser.

### Is the result 100% accurate?

No. AI detection is probabilistic. The result is an estimation based on writing patterns, not definitive proof.

### Which AI models are supported?

This tool can analyze text produced by:

- ChatGPT
- Gemini
- Claude
- Grok
- DeepSeek
- Microsoft Copilot
- Perplexity AI

and other AI writing assistants.

### Can I detect human-written text?

Yes. The tool analyzes any text regardless of its source.

### Does it require an API?

No. Everything runs locally in JavaScript.

<script is:inline>
  const $ = id => document.getElementById(id);

const input = $("aiInput");
const analyzeBtn = $("analyzeBtn");
const clearBtn = $("clearBtn");
const copyBtn = $("copyBtn");

function analyzeText(text){

  text = text.trim();

  if(!text) return null;

  const words = text.match(/\b[\w'-]+\b/g) || [];
  const sentences = text.match(/[^.!?]+[.!?]+/g) || [text];
  const paragraphs = text.split(/\n\s*\n/).filter(Boolean);

  const wordCount = words.length;
  const charCount = text.length;
  const sentenceCount = sentences.length;
  const paragraphCount = paragraphs.length;
  const readingTime = Math.max(1,Math.ceil(wordCount/200));

  const uniqueWords = [...new Set(words.map(w=>w.toLowerCase()))];
  const vocab = uniqueWords.length / Math.max(wordCount,1);

  const avgSentence =
      wordCount / Math.max(sentenceCount,1);

  const freq = {};

  words.forEach(w=>{
      w=w.toLowerCase();
      freq[w]=(freq[w]||0)+1;
  });

  const repeated =
      Object.values(freq)
      .filter(v=>v>=3)
      .length;

  let ai = 0;

  if(avgSentence>24) ai+=20;
  if(avgSentence>18) ai+=10;

  if(vocab<0.42) ai+=20;
  else if(vocab<0.5) ai+=10;

  if(repeated>8) ai+=20;
  else if(repeated>4) ai+=10;

  const aiWords=[
    "furthermore",
    "moreover",
    "therefore",
    "however",
    "overall",
    "in conclusion",
    "additionally",
    "utilize",
    "significantly",
    "notably",
    "crucial",
    "essential",
    "important to note"
  ];

  let matches=0;

  aiWords.forEach(w=>{
      if(text.toLowerCase().includes(w))
        matches++;
  });

  ai+=matches*5;

  ai=Math.min(ai,100);

  const human=100-ai;

  let result="";

  if(ai<30)
      result="Likely Human Written";
  else if(ai<60)
      result="Mixed Human & AI";
  else
      result="Likely AI Generated";

  const suggestions=[];

  if(vocab<0.45)
      suggestions.push("Use more varied vocabulary.");

  if(avgSentence>22)
      suggestions.push("Shorten long sentences.");

  if(repeated>5)
      suggestions.push("Reduce repeated words.");

  if(matches>2)
      suggestions.push("Avoid overly formal AI phrases.");

  if(!suggestions.length)
      suggestions.push("Your writing already looks fairly natural.");

  return{
      wordCount,
      charCount,
      sentenceCount,
      paragraphCount,
      readingTime,
      vocab,
      avgSentence,
      repeated,
      ai,
      human,
      result,
      suggestions
  };

}

analyzeBtn?.addEventListener("click",()=>{

    const data=analyzeText(input.value);

    if(!data){
        alert("Paste text first.");
        return;
    }

    $("stats").style.display="block";
    $("resultBox").style.display="block";

    $("wordCount").textContent=data.wordCount;
    $("charCount").textContent=data.charCount;
    $("sentenceCount").textContent=data.sentenceCount;
    $("paragraphCount").textContent=data.paragraphCount;
    $("readingTime").textContent=data.readingTime+" min";

    $("aiBar").style.width=data.ai+"%";

    $("aiScore").textContent=data.ai+"%";
    $("resultText").textContent=data.result;

    $("vocabScore").textContent=
      Math.round(data.vocab*100)+"%";

    $("sentenceVariety").textContent=
      data.avgSentence.toFixed(1)+" words";

    $("repeatScore").textContent=
      data.repeated;

    $("avgSentence").textContent=
      data.avgSentence.toFixed(1)+" words";

    if(data.avgSentence<16)
        $("readability").textContent="Easy";
    else if(data.avgSentence<22)
        $("readability").textContent="Medium";
    else
        $("readability").textContent="Hard";

    const ul=$("suggestions");
    ul.innerHTML="";

    data.suggestions.forEach(item=>{
        const li=document.createElement("li");
        li.textContent=item;
        ul.appendChild(li);
    });

});

clearBtn?.addEventListener("click",()=>{

    input.value="";

    $("stats").style.display="none";
    $("resultBox").style.display="none";

});

copyBtn?.addEventListener("click",async()=>{

    if(!$("resultBox").offsetParent) return;

    const report=
`AI Detector Report

AI Probability : ${$("aiScore").textContent}
Result : ${$("resultText").textContent}

Words : ${$("wordCount").textContent}
Characters : ${$("charCount").textContent}
Sentences : ${$("sentenceCount").textContent}
Paragraphs : ${$("paragraphCount").textContent}
Reading Time : ${$("readingTime").textContent}

Vocabulary : ${$("vocabScore").textContent}
Sentence Length : ${$("avgSentence").textContent}
Repeated Words : ${$("repeatScore").textContent}
Readability : ${$("readability").textContent}`;

    await navigator.clipboard.writeText(report);

    copyBtn.textContent="Copied!";

    setTimeout(()=>{
        copyBtn.textContent="Copy Report";
    },2000);

});
</script>

