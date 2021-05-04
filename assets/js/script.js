console.log(' '); console.log(' '); console.log(' '); console.log('// window.carti()'); console.log(' '); console.log(' '); console.log(' ')

// if you wanna test typings
window.carti = () => window.open('https://github.com/redcarti', '_blank').focus()

window.sayHi = () => console.log('Hi!!!')

const isPascalBetterJS = () => console.log('Nope.')

const html = 'is not a programming language'

const aidar = 'loh'

window.break = async () => {
    console.log('You want to break this window?\n\nok.')
    
    return 'Window is broken now.'
}

window.hi = 'I mean... ok'

class BigFloppa {
    constructor () {}
    
    pelmeni() {
        console.log('Пельмени. '
                    +'Хорошие пельмени это очень вкусно. '
                    +'На самом деле рецепт простой - много мяса, мало теста. '
                    +'Сперва готовим тонкое яичное тесто, с добавлением сливочного масла. '
                    +'Лук сладких сортов для образования бульончика и перец совсем немного. '
                    +'Щедро выкладываем великолепный рубленый фарш, много мяса, мало теста. '
                    +'Вот он настоящий пельмень, а внутри много сочной начинки, грудинка индюшки с курицей или телятина со свининой. '
                    +'Многие и забыли как это может быть вкусно. '
                    +'Выбирайте и наслаждайтесь - пельмени флопские. '
                    +'Много мяса, мало теста.')
    }
}

const jojo = () => { throw new ReferenceError('is this a JoJo reference?') }

class RedCartiError extends Error {
    constructor () {
        this.name = 'RedCartiError'
        super('redcarti is not defined')
    }
}

const hi = (v) => {
    if (v) {
        console.log(v)
        return undefined
    }

    return undefined
}

const javascript = 'javascript'
const java = 'java'
//

function getBrowser() {
    var sUsrAg = navigator.userAgent;

    //The order matters here, and this may report false positives for unlisted browsers.

    if (sUsrAg.indexOf("Firefox") > -1) {
            return "Mozilla Firefox";
            //"Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:61.0) Gecko/20100101 Firefox/61.0"
    } else if (sUsrAg.indexOf("Opera") > -1) {
            return "Opera";
    } else if (sUsrAg.indexOf("Trident") > -1) {
            return "Microsoft Internet Explorer";
            //"Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; .NET4.0C; .NET4.0E; Zoom 3.6.0; wbx 1.0.0; rv:11.0) like Gecko"
    } else if (sUsrAg.indexOf("Edge") > -1) {
            return "Microsoft Edge";
            //"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36 Edge/16.16299"
    } else if (sUsrAg.indexOf("Chrome") > -1) {
        return "Google Chrome or Chromium";
        //"Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Ubuntu Chromium/66.0.3359.181 Chrome/66.0.3359.181 Safari/537.36"
    } else if (sUsrAg.indexOf("Safari") > -1) {
        return "Apple Safari";
        //"Mozilla/5.0 (iPhone; CPU iPhone OS 11_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/11.0 Mobile/15E148 Safari/604.1 980x1306"
    }
    
    return "unknown";
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

/*
    Some typings are in node.js context and might not work in browser console.
    It is marked as Fuck
*/
let typings = [
    `() => redcarti()`, 
    `window.close()`, 
    `'use strict'`, 
    `let redcarti = require('redcarti')`, /// Fuck
    `undefined === null`, 
    `$('.inner').text('redcarti')`, 
    `html === 'programming language'`, 
    `!![] !== ![]`, `{ 'hi': 'Hello World!' }`, 
    `// type window.sayHi()`, 
    `fetch('https://www.google.com/search?q=how+to+make+a+site')`, 
    `isPascalBetterJS()`, 
    `aidar !== 'programmer'`, // local
    `'butter dog'`, 
    `window.break().then(console.log)`, 
    `// ReferenceError: redcarti is not defined`, 
    `// there's 5 in total typing speeds`, 
    `Number([+!+[]]+[!+[]+!+[]+!+[]])`, 
    `(() => console.log('well ok'))()`, 
    `module.exports = { [window.hi]: 'Hello C++' }`, /// Fuck
    `// don't try to module.exports here`, /// Yeah Fuck
    `takeRandomSpeed()`, 
    `!(1 + 1 === 3) + 1 // is true answer`, 
    `// i cant be hired but someone hire me`, 
    `new BigFloppa().pelmeni()`, 
    `jojo() // ReferenceError: is this a JoJo reference?`, // local
    `throw new RedCartiError()`, 
    `// JetBrains Mono is best ever font`, 
    `hi()()()()('hi!')`, 
    `'redcarti. and redcarti.'`, 
    `// mathematicians are lazy. thats why im lazy but not a mathematician`, 
    `javascript === java`, 
    `console.log('go read JavaScript for kids')`, 
    `'{"iHate":"doubleQuotes"}'`, 
    `class MyError extends Error { constructor () {} }`, 
    `// you are using ${getBrowser()}`, 
    `// took 3 hours to make it`,
    `return <></>`, /// Fuck
    `let redcarti = 'me'; redcarti()`,
    `// TODO: define redcarti`,
    `// Did you know that you are '\${undefined}'?`
]

let typingSpeed = [
    100,
    125,
    150,
    200,
    250
]

let takeRandomSpeed = () => typingSpeed[getRandomInt(0, 4)]

let partIndex = 0
let part = 0

let interval

$(document).ready(function() {
    interval = setInterval(Type, takeRandomSpeed());
});

function Type() { 
    // Get substring with 1 characater added
    var text =  typings[part].substring(0, partIndex + 1);
    $('.inner').text(text);
    partIndex++;

    // If full sentence has been displayed then start to delete the sentence after some time
    if(text === typings[part]) {
        clearInterval(interval);
        setTimeout(function() {
            interval = setInterval(Delete, takeRandomSpeed());
        }, 1000);
    }
}

// Implements deleting effect
function Delete() {
    // Get substring with 1 characater deleted
    var text =  typings[part].substring(0, partIndex - 1);
    $('.inner').text(text);
    partIndex--;

    // If sentence has been deleted then start to display the next sentence
    if(text === '') {
        clearInterval(interval);

        // If current sentence was last then display the first one, else move to the next
        if(part == (typings.length - 1))
            part = 0;
        else 
            part++

        partIndex = 0;

        // Start to display the next sentence after some time
        setTimeout(function() {
            interval = setInterval(Type, takeRandomSpeed());
        }, 200);
    }
}