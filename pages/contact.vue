<template>
    <div>
        <div class="container grid-xl" style="position:relative;">
            <div class="columns">
                <div class="column col-12">
                    <h2>Contact me</h2>
                    <p>
                        You can contact me 24/7 except the weekends.<br>

                    </p>
                    <br>

                    <table>
                        <tbody>
                        <tr>
                            <td>Call on <strong>Phone</strong>:</td>
                            <td><a :href="myphone.href" class="ll">{{ myphone.real }}</a></td>
                        </tr>
                        <tr>
                            <td>Write on <strong>Email</strong>:</td>
                            <td><a :href="myemail.href" class="ll">{{ myemail.real }}</a></td>
                        </tr>
                        <tr>
                            <td>Chat on <strong>Messenger</strong>:</td>
                            <td><a href="https://m.me/tsvetowntopalov" class="ll">m.me/tsvetowntopalov</a></td>
                        </tr>
                        <tr>
                            <td>Drop a line on <strong>Skype</strong>:</td>
                            <td><a href="skype:gamebird.studios?chat" class="ll">gamebird.studios</a></td>
                        </tr>
                        </tbody>
                    </table>

                    <br>

                    <p>
                        You can also check my social links, for more connections.
                    </p>

                </div>
            </div>
            <div class="awesome-map"></div>
        </div>
        <!--google-maps></google-maps-->
    </div>
</template>

<script>
  export default {
    head () {
      return {
        title: 'Contact',
      }
    },
    data: () => ({
      myphone: {real: null, href: null},
      myemail: {real: null, href: null},
    }),
    transition: 'bounce',
    mounted: function () {
      // Hide here from scrappers.
      this.myphone = {
        real: '+359-889-2-602-615',
        href: 'tel:+3598892602615'
      };
      this.myemail = {
        real: 'xtenzive@gmail.com',
        href: 'mailto:xtenzive@gmail.com'
      };
    }
  }
</script>
