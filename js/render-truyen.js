const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const btnLeft = $('.left');
const btnRight = $('.right');
const truyen = $('.truyen');

const app = {
    currenIndex: 0,
    imgs: [
        {
            img1: './img/truyen/h1.jpg"',
            img2: './img/truyen/h2.jpg"',
            img3: './img/truyen/h3.jpg"',
        },
        {
            img1: './img/truyen/h4.jpg"',
            img2: './img/truyen/h5.jpg"',
            img3: './img/truyen/h6.jpg"',
        },
        {
            img1: './img/truyen/h7.jpg"',
            img2: './img/truyen/h8.jpg"',
            img3: './img/truyen/h9.jpg"',
        },
        {
            img1: './img/truyen/h10.jpg"',
            img2: './img/truyen/h11.jpg"',
            img3: './img/truyen/h12.jpg"',
        },
        {
            img1: './img/truyen/h13.jpg"',
            img2: './img/truyen/h14.jpg"',
            img3: './img/truyen/h15.jpg"',
        },
        {
            img1: './img/truyen/h16.jpg"',
            img2: './img/truyen/h17.jpg"',
            img3: './img/truyen/h18.jpg"',
        },
        {
            img1: './img/truyen/h19.jpg"',
            img2: './img/truyen/h20.jpg"',
            img3: './img/truyen/h21.jpg"',
        },
        {
            img1: './img/truyen/h22.jpg"',
            img2: './img/truyen/h23.jpg"',
            img3: './img/truyen/h24.jpg"',
        },
        {
            img1: './img/truyen/h22.jpg"',
            img2: './img/truyen/h23.jpg"',
            img3: './img/truyen/h24.jpg"',
        },
        {
            img1: './img/truyen/h25.jpg"',
            img2: './img/truyen/h26.jpg"',
            img3: './img/truyen/h27.jpg"',
        },
        {
            img1: './img/truyen/h28.jpg"',
            img2: './img/truyen/h29.jpg"',
            img3: './img/truyen/h30.jpg"',
        },
    ],
    render: function () {
        const htmls = this.imgs.map((img, index) => {
            return `
                            <div class="sliderImg ${index === this.currenIndex ? 'show' : ''}">
                                <img src="${img.img1}" alt="">
                                <img src="${img.img2}" alt="">
                                <img src="${img.img3}" alt="">
                            </div>
                        `;
        })
        truyen.innerHTML = htmls.join('');
    },
    handleEvents: function () {
        const _this = this
        btnRight.onclick = function () {
            _this.rightImg();
            _this.render();
        }
        btnLeft.onclick = function () {
            _this.leftImg();
            _this.render();
        }
    },

    rightImg: function () {
        this.currenIndex++
        if (this.currenIndex >= this.imgs.length) {
            this.currenIndex = 0
        }
    },
    leftImg: function () {
        this.currenIndex--
        if (this.currenIndex < 0) {
            this.currenIndex = this.imgs.length - 1
        }
    },

    start: function () {

        this.handleEvents();

        this.render();
    }
}

app.start()

