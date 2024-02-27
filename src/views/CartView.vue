<template>
  <div class="container mt-4">
    <div class="row mb-3">
      <div class="col-12">
        <label for="couponCode">Coupon Code:</label>
        <input type="text" id="couponCode"
         v-model="couponCode" placeholder="Enter coupon code" class="form-control">
        <button class="btn btn-success mt-2" @click="applyCoupon">Apply Coupon</button>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <table class="table table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Item</th>
              <th scope="col">Price</th>
              <th scope="col">Quantity</th>
              <th scope="col">Total</th>
              <th scope="col">Remove</th> <!-- New column for actions -->
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in cartItems" :key="item.id">
              <th scope="row" class="align-middle">{{ index + 1 }}</th>
              <td class="align-middle">
                <div class="row">
                  <div class="col-md-3">
                    <img :src="item.img" class="img-fluid" alt="Item" />
                  </div>
                  <div class="col-md-9">
                    <div>{{ item.title }}</div>
                    <div class="text-muted">{{ item.description }}</div>
                  </div>
                </div>
              </td>
              <td class="align-middle">${{ item.price }}</td>
              <td class="align-middle">
                <div class="quantity-controller btn-group" role="group">
                  <button type="button"
                  class="btn btn-secondary" @click="decreaseQuantity(item)">-</button>
                  <input type="text"
                   class="form-control text-center" :value="item.quantity" disabled />
                  <button type="button"
                   class="btn btn-secondary" @click="increaseQuantity(item)">+</button>
                </div>
              </td>
              <td class="align-middle">${{ item.quantity * item.price }}</td>
              <td class="align-middle"> <!-- New column for remove button -->
                <button type="button" class="btn btn-danger" @click="removeItem(item)">X</button>
              </td>
            </tr>
          </tbody>
        </table>
        <tfoot>
            <tr>
              <td colspan="4"
              class="text-right font-weight-bold subtotal-total-label">Subtotal:</td>
              <td colspan="2" class="text-right subtotal-total-value">${{ formattedSubtotal }}</td>
            </tr>
            <tr>
              <td colspan="4"
               class="text-right font-weight-bold subtotal-total-label">Discount:</td>
              <td colspan="2"
               class="text-right text-success subtotal-total-value">- ${{ formattedDiscount }}</td>
            </tr>
            <tr>
              <td colspan="4" class="text-right font-weight-bold subtotal-total-label">Total:</td>
              <td colspan="2"
               class="text-right font-weight-bold subtotal-total-value">${{ formattedTotal }}</td>
            </tr>
          </tfoot>
      </div>
    </div>
    <button class="btn btn-info">checkout</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cartItems: [
        {
          id: 1,
          title: 'Book Title 1',
          description: 'Description for book 1',
          price: 9.99,
          quantity: 1,
          img: 'https://im2.book.com.tw/image/getImage?i=https://www.books.com.tw/img/CN1/190/95/CN11909591.jpg&v=652ed512k&w=348&h=348',
        },
        {
          id: 2,
          title: 'Book Title 2',
          description: 'Description for book 2',
          price: 12.99,
          quantity: 1,
        },
        {
          id: 3,
          title: 'Book Title 3',
          description: 'Description for book 3',
          price: 7.99,
          quantity: 1,
        },
        // 可以继续添加更多的商品
      ],
    };
  },
};
</script>
