import { createRequire } from 'module';
const require = createRequire(import.meta.url);
import { franc } from 'franc';
const langs = require('langs');
const colors = require('colors');

const input = process.argv[2];
const langCode = franc(input);

if (langCode === 'und') {
    console.log('DESCULPE, NAO CONSEGUI ADIVINHAR A LÍNGUA. TENTE COM UMA OUTRA SENTENÇA!'.red)
} else {
    const language = langs.where('3', langCode);
    console.log(`Nosso melhor palpite é: ${language.name}`.green);
}
