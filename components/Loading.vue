<template>
    <div>
        <!--div class="loader" :style="{'width': percent+'%', 'opacity': show ? 1 : 0}"></div-->
    </div>
</template>

<script>
  export default {
    data () {
      return {
        percent: 0,
        show: false,
        canSuccess: true,
        duration: 3000,
        failedColor: '#ff442e',
      }
    },
    methods: {
      start () {
        this.$store.commit('stopWaves');

        this.show = true;
        this.canSuccess = true;
        if (this._timer) {
          clearInterval(this._timer);
          this.percent = 0
        }
        this._cut = 10000 / Math.floor(this.duration);
        this._timer = setInterval(() => {
          this.increase(this._cut * Math.random());
          if (this.percent > 95) {
            this.finish()
          }
        }, 100);
        return this
      },
      finish () {
        const that = this;
        setTimeout(function() {
          that.$store.commit('startWaves');
        }, 999);
        this.percent = 100;
        this.hide();
        return this
      },
      set (num) {
        this.show = true;
        this.canSuccess = true;
        this.percent = Math.floor(num);
        return this
      },
      get () {
        return Math.floor(this.percent)
      },
      increase (num) {
        this.percent = this.percent + Math.floor(num);
        return this
      },
      decrease (num) {
        this.percent = this.percent - Math.floor(num);
        return this
      },
      pause () {
        clearInterval(this._timer);
        return this
      },
      hide () {
        clearInterval(this._timer);
        this._timer = null;
        setTimeout(() => {
          this.show = false;
          this.$nextTick(() => {
            setTimeout(() => {
              this.percent = 0
            }, 200)
          })
        }, 500);
        return this
      },
      fail () {
        this.canSuccess = false;
        return this
      }
    }
  }
</script>
