const app = new Vue({
    el: '#app',
    data: {
        books: [{
                id: 1,
                name: '《操作系统》',
                createDate: '2006-9',
                price: 85.00,
                amount: 1
            },
            {
                id: 2,
                name: '《UNIX编程艺术》',
                createDate: '2006-2',
                price: 59.00,
                amount: 1
            },
            {
                id: 3,
                name: '《编程珠玑》',
                createDate: '2008-10',
                price: 39.00,
                amount: 1
            },
            {
                id: 4,
                name: '《代码大全》',
                createDate: '2004-3',
                price: 128.00,
                amount: 1
            }
        ]
    },
    computed: {
        totalPrice() {
            let totalPrice = 0
            for (let i = 0; i < this.books.length; i++) {
                totalPrice += this.books[i].price * this.books[i].amount
            }
            return totalPrice
        }
    },
    methods: {
        // getFinalPrice(price) {
        //     return "￥" + price.toFixed(2)
        // }
        increment(index) {
            this.books[index].amount++
        },
        decrement(index) {
            this.books[index].amount--
        },
        removeHandle(index) {
            this.books.splice(index, 1)
        }
    },
    filters: {
        showPrice(price) {
            return "￥" + price.toFixed(2)
        }
    }
});