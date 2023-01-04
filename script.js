let a = ['You will', 'You will not', 'You may', 'You might'];
let b = ['get married', 'have a child', 'lose your job', 'get a new job', 'win the lottery'];
let c = ['this year!', 'next year!', 'soon!', 'in 2 years from now!'];

const ranEl = elements => {
    return elements[Math.floor(Math.random() * elements.length)]
}

console.log(ranEl(a) + ' ' + ranEl(b) + ' '+ ranEl(c));