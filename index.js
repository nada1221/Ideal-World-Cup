let data = []
const secondHead = document.getElementById('secondHead')

const btn1 = document.getElementById('menSinger')
const btn2 = document.getElementById('womenSinger')

const roundBtn1 = document.getElementById('roundOf16');
const roundBtn2 = document.getElementById('roundOf32');

const pickIdol1 = document.getElementById('leftChoice')
const pickIdol2 = document.getElementById('rightChoice')
const vers = document.getElementById('pickIdolTxt');

const reset = document.getElementById('resetBtn')
const finish = document.getElementById('finalImg')
const finishTxt = document.getElementById('finishTxt')

const leftImg = document.getElementById('leftImg')
const rightImg = document.getElementById('rightImg')
const leftImgTxt = document.getElementById('leftImgTxt')
const rightImgTxt = document.getElementById('rightImgTxt')


const img1 = document.getElementById('img1')
const img2 = document.getElementById('img2')
const img3 = document.getElementById('img3')
const img4 = document.getElementById('img4')
const img5 = document.getElementById('img5')
const img6 = document.getElementById('img6')
const img7 = document.getElementById('img7')
const img8 = document.getElementById('img8')
const img9 = document.getElementById('img9')
const img10 = document.getElementById('img10')
const img11 = document.getElementById('img11')
const img12 = document.getElementById('img12')
const img13 = document.getElementById('img13')
const img14 = document.getElementById('img14')
const img15 = document.getElementById('img15')
const img16 = document.getElementById('img16')

const boyImgSet16 = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16]

btn1.addEventListener('click', (e) => {
    e.preventDefault()
    const value = btn1.value;
    data.push(value)
    console.log(data)
    btn1.style.display = 'none';
    btn2.style.display = 'none';
    roundBtn1.style.display = 'inline-block'
    roundBtn2.style.display = 'inline-block'
    reset.style.display = 'inline-block'
})

btn2.addEventListener('click', (e) => {
    e.preventDefault()
    const value = btn2.value;
    data.push(value)
    console.log(data)
    btn1.style.display = 'none';
    btn2.style.display = 'none';
    roundBtn1.style.display = 'inline-block'
    roundBtn2.style.display = 'inline-block'
    reset.style.display = 'inline-block'
})

roundBtn1.addEventListener('click', (e) => {
    e.preventDefault()
    const value = roundBtn1.value
    data.push(value)
    console.log(data)
    roundBtn1.style.display = 'none'
    roundBtn2.style.display = 'none'
    pickIdol1.style.display = 'inline-block'
    pickIdol2.style.display = 'inline-block'
    vers.style.display = 'inline-block'
    secondHead.innerText = '16강!'
    test()
})

roundBtn2.addEventListener('click', (e) => {
    e.preventDefault()
    const value = roundBtn2.value
    data.push(value)
    console.log(data)
    roundBtn1.style.display = 'none'
    roundBtn2.style.display = 'none'
    pickIdol1.style.display = 'inline-block'
    pickIdol2.style.display = 'inline-block'
    vers.style.display = 'inline-block'
    secondHead.innerText = '16강!'
    test()
})

reset.addEventListener('click', (e) => {
    resetFunction()
})

let type = 16;
let count = 0;
let final = 0;
let choiceNumb8 = [];
let choiceNumb4 = [];
let choiceNumb2 = [];

pickIdol1.addEventListener('click', (e) => {
    choiceNumb.push(randomIndexArray[count])
    console.log('choiceNumb = ',choiceNumb)
    count += 2
    if (count === 16) {
        count = 0
        randomIndexArray = []
        type = type / 2
        secondHead.innerText = '8강!'
        createImg8()
    } else if (type === 16) {
        createImg16()
    }
    else if (type === 8) {
        choiceNumb8.push(choiceNumb[count-2])
        console.log('8round count =',count)
        console.log('choiceNumb8=',choiceNumb8)
        if (count === 8) {
            count = 0
            randomIndexArray = []
            type = type / 2
            secondHead.innerText = '4강!'
            createImg4()
        } else if (type === 8) {
            createImg8()
        }
    } else if (type === 4) {
        choiceNumb4.push(choiceNumb8[count-2])
        console.log('choiceNumb4=',choiceNumb4)
        if (count === 4) {
            count = 0
            randomIndexArray = []
            type = type / 2
            secondHead.innerText = '결승!'
            leftImg.src=`${boyImgSet16[choiceNumb4[0]].src}`
            rightImg.src=`${boyImgSet16[choiceNumb4[1]].src}`
        } else if (type === 4) {
            createImg4()
        }
    } else if (type === 2) {
        final ++
        if (final === 1 ) {
            secondHead.innerText = '우승!'
            finish.src = `${boyImgSet16[choiceNumb4[0]].src}`;
            finishTxt.innerText = `${boyImgSet16[choiceNumb4[0]].alt}`
            pickIdol1.style.display = 'none';
            pickIdol2.style.display = 'none';
            finish.style.display = 'block'
            vers.style.display='none'
        }

    }
})

pickIdol2.addEventListener('click', (e) => {
    choiceNumb.push(randomIndexArray[count+1])
    console.log('choiceNumb = ',choiceNumb)
    count += 2
    if (count === 16) {
        count = 0
        randomIndexArray = []
        type = type / 2
        secondHead.innerText = '8강!'
        createImg8()
    } else if (type === 16) {
        
        createImg16()
    }
    else if (type === 8) {
        choiceNumb8.push(choiceNumb[count-1])
        console.log('8round count =',count)
        console.log('choiceNumb8=',choiceNumb8)
        if (count === 8) {
            count = 0
            randomIndexArray = []
            type = type / 2
            secondHead.innerText = '4강!'
            createImg4()
        } else if (type === 8) {
            createImg8()
        }
    } else if (type === 4) {
        choiceNumb4.push(choiceNumb8[count-1])
        console.log('choiceNumb4=',choiceNumb4)
        if (count === 4) {
            count = 0
            randomIndexArray = []
            type = type / 2
            secondHead.innerText = '결승!'
            leftImg.src=`${boyImgSet16[choiceNumb4[0]].src}`
            rightImg.src=`${boyImgSet16[choiceNumb4[1]].src}`
        } else if (type === 4) {
            createImg4()
        }
    } else if (type === 2) {
        final += 2
        if (final === 2 ) {
            secondHead.innerText = '우승!'
            finish.src = `${boyImgSet16[choiceNumb4[1]].src}`;
            finishTxt.innerText = `${boyImgSet16[choiceNumb4[1]].alt}`
            pickIdol1.style.display = 'none';
            pickIdol2.style.display = 'none';
            finish.style.display = 'block'
            vers.style.display='none'
        }

    }


})
const finished = () =>{
    data = [];
    btn1.style.display = 'none';
    btn2.style.display = 'none';
    roundBtn1.style.display = 'none'
    roundBtn2.style.display = 'none'
    pickIdol1.style.display = 'none'
    pickIdol2.style.display = 'none'
    vers.style.display = 'none'
    reset.style.display = 'none';
    finish.style.display = 'none';
    secondHead.innerText = 'winner!'
}

const resetFunction = () => {
    data = [];
    btn1.style.display = 'inline-block';
    btn2.style.display = 'inline-block';
    roundBtn1.style.display = 'none'
    roundBtn2.style.display = 'none'
    pickIdol1.style.display = 'none'
    pickIdol2.style.display = 'none'
    vers.style.display = 'none'
    reset.style.display = 'none';
    finish.style.display = 'none';
    finish.src = '';
    finishTxt.innerText='';
    secondHead.innerText = 'choice!'
    randomIndexArray=[];
    choiceNumb= [];
    choiceNumb2=[];
    choiceNumb4=[];
    choiceNumb8=[];
    type = 16;
    count = 0;
    final = 0;
}


let choiceNumb = [];
let randomIndexArray = [];

const randomIdx = (totalIndex, selectingNumber) => {

    for (i = 0; i < selectingNumber; i++) {
        randomNum = Math.floor(Math.random() * totalIndex)
        if (randomIndexArray.indexOf(randomNum) === -1) {
            randomIndexArray.push(randomNum)
        } else {
            i--
        }
    }
    return randomIndexArray
}

const test = () => {
    if (data[0] === '보이그룹' && data[1] === '16강') {
        console.log('1')
        createImg16()
    } else if (data[0] === '보이그룹' && data[1] === '32강') {
        console.log('2')
        alert('구현중')
        resetFunction()
    } else if (data[0] === '걸그룹' && data[1] === '16강') {
        console.log('3')
        alert('구현중')
        resetFunction()
    } else if (data[0] === '걸그룹' && data[1] === '32강') {
        console.log('4')
        alert('구현중')
        resetFunction()
    }
};

const createImg16 = () => {
    randomIdx(16, 2)
    leftImg.src = `${boyImgSet16[randomIndexArray[count]].src}`;
    leftImgTxt.innerText = `${boyImgSet16[randomIndexArray[count]].alt}`
    rightImg.src = `${boyImgSet16[randomIndexArray[count + 1]].src}`;
    rightImgTxt.innerText = `${boyImgSet16[randomIndexArray[count + 1]].alt}`
}

const createImg8 = () => {
    console.log(choiceNumb[count])
    leftImg.src = `${boyImgSet16[choiceNumb[count]].src}`;
    leftImgTxt.innerText = `${boyImgSet16[choiceNumb[count]].alt}`
    rightImg.src = `${boyImgSet16[choiceNumb[count+1]].src}`;
    rightImgTxt.innerText = `${boyImgSet16[choiceNumb[count+1]].alt}`
}

const createImg4 = () => {
    leftImg.src = `${boyImgSet16[choiceNumb8[count]].src}`;
    leftImgTxt.innerText = `${boyImgSet16[choiceNumb8[count]].alt}`
    rightImg.src = `${boyImgSet16[choiceNumb8[count + 1]].src}`;
    rightImgTxt.innerText = `${boyImgSet16[choiceNumb8[count + 1]].alt}`
}

const createImg2 = () => {
    leftImg.src = `${boyImgSet16[choiceNumb4[choiceNumb4[count+1]]].src}`;
    leftImgTxt.innerText = `${boyImgSet16[choiceNumb4[randomIndexArray[count+1]]].alt}`
    rightImg.src = `${boyImgSet16[choiceNumb4[choiceNumb4[count]]].src}`;
    rightImgTxt.innerText = `${boyImgSet16[choiceNumb4[randomIndexArray[count + 1]]].alt}`
}