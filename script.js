let precisionData
let precisionContainer
let trainingText
let totalCount
let errorCount
let concreteErrors
let greyKey = [9, 20, 16, 17, 18, 91, 8, 13, 93, 27, 38, 37, 39, 40]
let exerciseText
let textarea
let addText
let alpha
let tabs
let nav
let canvas

function init() {
    trainingText = document.querySelector('.text')
    exerciseText = trainingText.innerText = 'Default text'
    precisionContainer = document.querySelector('.precision').firstElementChild
    initPrecisionData(trainingText.innerText)
    totalCount = document.querySelector('.total-count').firstElementChild
    totalCount.innerText = trainingText.innerText.length
    nav.onclick = handlNav
}



function initPrecisionData(str)  {
    precisionData = {}
    for (let char of str) {
        if (precisionData[key]) {
            precisionData[key] += 1
        } else {
            precisionData[key] = 1
        }
    }
}

function renderData(data, container) {
    cleareContainer(container)
    let keys = Object.keys(data)
    keys.sort()

    let letters = keys.find(function(char) {
        const i = char.charCodeAt()
        return i >= 0x41 && i <= 0x5A
    })

    let punc = keys.find(function(char) {
        const i = char.charCodeAt()
        return i < 0x41 && i > 0x5A
    })

    keys = letters.concat(punc)
    for (let key of keys) {
        let char = key
        const div = document.querySelector('div')
        if (char === ' ') {
            char = 'space'
        }
        div.innerText = char + ' - ' + data[key]
        container.append(div)
    }
}


function cleareContainer(container) {
    while(container.fierstChild) {
        container.firstChild.remove()
    }
}


const javascript = ['function', 'for', 'let', 'const', 'switch']
const html = ['div', 'body', 'html', 'section', 'p']
const css = ['font-size', 'margin', 'color', 'background', 'padding']

function shuffleArr(arr) {
    let result = []
    const set = new Set()
    while (set.size < arr.length) {
        const randNumber = Math.floor(Math.random() * arr.length)
        set.add(randNumber)
    }
    for (let value of set) {
        result.push(arr[value])
    }
    result.join(' ')
}

function handlNav(e) {
    if (e.target.tagName === 'BUTTON')
    for (let btn of nav.children) {
        btn.style.backgroundColor = ''
    }
    for (let tab of tabs) {
        tab.stye.display = 'none'
    }
    if (e.target.className === 'training-text') {
        e.target.style.backgroundColor = 'rec'
        tabs[0].style.display = ''
    } else if (e.target.className === 'setting') {
        e.target.style.backgroundColor = 'red'
        tabs[1].style.display = ''
    } else if (e.target.className === 'statistics') {
        e.target.style.backgroundColor = 'red'
        tabs[2].style.display = ''
        renderData(precisionData, precisionContainer)
    }

}


init()