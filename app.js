const { createApp } = Vue

createApp({
    data() {
        return {
            message: 'hello world',
            img: 'https://picsum.photos/200',

        }
    }
}).mount('.container')

