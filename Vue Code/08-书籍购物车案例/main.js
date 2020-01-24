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
            // 1.普通for循环
            // let totalPrice = 0
            // for (let i = 0; i < this.books.length; i++) {
            //     totalPrice += this.books[i].price * this.books[i].amount
            // }
            // return totalPrice

            // 2.for(let i in this.books)
            // let totalPrice = 0
            // for (let i in this.books){
            //     totalPrice += this.books[i].price * this.books[i].amount
            // }
            // return totalPrice

            // 3.for(let i of this.books)
            // let totalPrice = 0
            // for(let item of this.books){
            //     totalPrice += item.price * item.amount
            // }
            // return totalPrice

            // reduce
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

// 编程范式：命令式编程/声明式编程
// 编程范式：面向对象编程(第一公民：对象)/函数式编程(第一公民：函数)
// filter/map/reduce
// filter中的回调函数有一个要求：必须返回一个boolean值
// true：当返回true时，函数内部会自动将这次架设的n加入到新的数组中
// false：当返回false时，函数内部会过滤掉这次的n
const nums = [10, 20, 111, 222, 234, 30]

nums.filter()

// // 1.需求：取出所有小于100的数字
// let newNums = []
// for (let n of nums) {
//     if (n < 100) {
//         newNums.push(n)
//     }
// }

// // 2.需求：将所有小于00的数字进行转化：全部*2
// let new2Nums = []
// for (let n of newNums) {
//     if (n < 100) {
//         new2Nums.push(n * 2)
//     }
// }

// // 3.需求：将所有newNums数字相加得到最终的结果
// let total = 0
// for (let n of new2Nums) {
//     total += n
// }