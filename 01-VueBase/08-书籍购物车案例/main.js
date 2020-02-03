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
      // for (let item of this.books) {
      //     totalPrice += item.price * item.amount
      // }
      // return totalPrice

      // 4.reduce
      return this.books.reduce(function (preValue, book) {
        return preValue + book.price * book.amount
      }, 0)

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