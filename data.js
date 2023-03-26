const data = [
    {
        title: 'MacBook Air',
        img: 'macbookair.png',
        price: 999,
        url: 'https://www.apple.com/shop/buy-mac/macbook-air',
        colors: ['#C7C8CA', '#B1B2B7', '#E3CCB4'],
        specs: {
            display: {
                title: 'Retina display',
                size: 13.3
            },
            chip: {
                title: 'Apple M1 chip',
                description: ''
            },
            ram: {
                title: 'Up to 16GB unified memory',
                description: 'For increased performance and power efficiency'
            },
            memory: {
                size: 2,
                type: 'tb'
            },
            battery: 18,
            camera: {
                title: '720p FaceTime HD camera',
                description: 'With the image signal processor of M1 for drastically improved performance'
            },
            weight: 2.8,
            other: [
                'Touch ID'
            ]
        }
    },
    {
        title: 'MacBook Pro 13”',
         img: 'macbook13.png',
        price: 1299,
        url: 'https://www.apple.com/shop/buy-mac/macbook-pro/13-inch',
        colors: ['#C7C8CA', '#B1B2B7'],
        specs: {
            display: {
                title: 'Retina display',
                size: 13.3
            },
            chip: {
                title: 'Apple M1 chip',
                description: 'Also available with Intel Core i5 or i7 processor'
            },
            ram: {
                title: 'Up to 16GB unified memory',
                description: 'For increased performance and power efficiency'
            },
            memory: {
                size: 2,
                type: 'tb'
            },
            battery: 20,
            camera: {
                title: '720p FaceTime HD camera',
                description: 'With the image signal processor of M1 for drastically improved performance'
            },
            weight: 3.0,
            other: [
                'Touch Bar',
                'Sound',
                'Touch ID'
            ]
        }
    },
    {
        title: 'MacBook Air',
         img: 'macbookpro.png',
        price: 999,
        url: 'https://www.apple.com/shop/buy-mac/macbook-pro/16-inch',
        colors: ['#C7C8CA', '#B1B2B7', '#E3CCB4'],
        specs: {
            display: {
                title: 'Retina display',
                size: 16
            },
            chip: {
                title: 'Up to Intel Core i9 processor',
                description: ''
            },
            ram: {
                title: 'Up to 64GB memory',
                description: ''
            },
            memory: {
                size: 8,
                type: 'tb'
            },
            battery: 11,
            camera: {
                title: '720p FaceTime HD camera',
                description: ''
            },
            weight: 4.3,
            other: [
                'Touch Bar',
                'Sound',
                'Touch ID'
            ]
        }
    },
]

let cont = document.querySelector(".container")


function reload(arr){
    for(let item of arr){
        let conte = document.createElement("div")
        let box = document.createElement("div")
        let img = document.createElement("img")
        let title = document.createElement("h2")
        let h3 = document.createElement("h3")
        let btns = document.createElement("div")
        let btn = document.createElement("div")
        let btn2 = document.createElement("div")
        let button = document.createElement("button")
        let line = document.createElement("div")
        let box2 = document.createElement("div")
        let h2 = document.createElement("h2")
        let p = document.createElement("p")
        let box3 = document.createElement("div")
        let img2 = document.createElement("img")
        let m1 = document.createElement("p")
        let box4 = document.createElement("div")
        let img3 = document.createElement("img")
        let gb = document.createElement("p")
        let tit = document.createElement("p")
        let memory = document.createElement("h2")
        let box5 = document.createElement("div")
        let img4 = document.createElement("img")
        let hour = document.createElement("p")
        let box6 = document.createElement("div")
        let video = document.createElement("img")
        let hd = document.createElement("p")
        let signal = document.createElement("p")
        let weight = document.createElement("h2")
        let box7 = document.createElement("div")
        let touch = document.createElement("p")
        let line2 = document.createElement("div")
        let a  = document.createElement("a")
        a.href = item.url
        a.innerHTML = "Learn more >"
        conte.classList.add("cont")
        box.classList.add("box")
        box2.classList.add("box")
        box3.classList.add("box")
        box4.classList.add("box")
        box5.classList.add("box")
        box6.classList.add("box")
        box7.classList.add("box")
        btns.classList.add("btns")
        img.src = `./img/${item.img}`
        title.innerHTML = item.title
        h3.innerHTML = "Price" + " "+ item.price
        btn.classList.add("btn")
        btn2.classList.add("btn2")
        button.innerHTML = "Buy"
        line.classList.add("line")
        line2.classList.add("line")
        h2.innerHTML = item.specs.display.size
        p.innerHTML = item.specs.display.title
        img2.src = `./img/m1.png`
        m1.innerHTML = item.specs.chip.title
        img3.src = `./img/memory.png`
        gb.innerHTML = item.specs.ram.title 
        tit.innerHTML = item.specs.ram.description
        memory.innerHTML = item.specs.memory.size +  item.specs.memory.type
        img4.src = `./img/battery.png`
        hour.innerHTML = item.specs.battery
        video.src = `./img/video.png`
        hd.innerHTML = item.specs.camera.title
        signal.innerHTML = item.specs.camera.description
        weight.innerHTML = item.specs.weight
        touch.innerHTML = item.specs.other[0]  
        
        box.append(img , title , h3 , btns, button, line )
        btns.append(btn, btn2)
        box2.append(h2, p)
        box3.append(img2, m1)
        box4.append(img3, gb, tit, memory)
        box5.append(img4 , hour)
        box6.append(video, hd , signal, weight)
        box7.append(touch, line2, a)
        conte.append(box, box2, box3, box4, box5, box6, box7)
        cont.append(conte)

     
    }
}

reload(data)