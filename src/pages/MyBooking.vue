<script>
export default {
  name: "MyBooking",
  data () {
    return {
      myBookings : [
        {
          HotelName:'fuckHotel',
          address:'asdasdasd',
          StartDate:new Date(),
          EndDate:new Date(),
          EnterKey:'asdds-c-v-dg--sdfsdfsd',
        },
        {
          HotelName:'fuckHotel',
          address:'asdasdasd',
          StartDate:new Date(),
          EndDate:new Date(),
          EnterKey:'asdds-c-v-dg--sdfsdfsd',
        },
        {
          HotelName:'fuckHotel',
          address:'asdasdasd',
          StartDate:new Date(),
          EndDate:new Date(),
          EnterKey:'asdds-c-v-dg--sdfsdfsd',
        }
      ]
    }
  }

}
</script>

<template>
  <div class="container">
      <h2>我的预定</h2>
      <div v-for="myBooking in myBookings">
        <el-card>
          <h2>{{myBooking.HotelName}}</h2>
          <span>地址： {{myBooking.address}}</span> <br>
          <span>时间: {{myBooking.StartDate.getMonth() + 1}}月
            {{ myBooking.StartDate.getDate() }}日
            {{ myBooking.StartDate.getHours()}}时
            {{}}
            -
            {{myBooking.EndDate.getMonth() + 1}}月
            {{myBooking.EndDate.getDate() }}日
            {{myBooking.EndDate.getHours()}}时
            {{}}</span> <br>
          <span>交付密钥：{{myBooking.EnterKey}}</span>
        </el-card>
      </div>
  </div>
</template>

<style scoped>

</style>