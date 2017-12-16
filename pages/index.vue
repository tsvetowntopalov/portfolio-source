<template>
    <div class="container grid-xl">
        <div class="columns" style="align-items:center;justify-content:center;">
            <div class="column col-md-12 col-7">
                <h1>Hi, I'm <strong>Tsvetan</strong>
                    <small>a <strong>FullStack</strong> &mdash; ish <strong>Developer</strong></small>
                </h1>
                <p>
                    I am {{ datePassed("1991/10/19") }} y.o. Web guy from the small city of Pazardzhik, Bulgaria.<br />
                    Target-oriented full-stack web developer with over {{ datePassed("2008/01/01") }} years
                    of freelance experience and passion for beautiful design and effective web applications.<br/>
                    <nuxt-link to="/about" class="ll">Read more..</nuxt-link>
                </p>
            </div>
            <div class="column col-md-12 col-5">
                <div class="empty">
                    <div class="empty-icon">
                        <i class="material-icons" style="font-size:4em;">&#xE159;</i>
                    </div>
                    <p class="empty-title h5">
                        Currently I am looking for a full-time gig in <strong>Sofia, Bulgaria</strong>
                    </p>
                    <p class="empty-subtitle">
                        In the range of Junior → Mid-level and the role of Full-stack/Front-end Developer.
                    </p>
                    <div class="empty-action">
                        <nuxt-link to="/contact" class="btn btn-lg btn-primary">
                            <i class="material-icons"
                               style="font-size:inherit;letter-spacing:inherit;margin:-10px 0;display:inline-block;position: relative;top:2px;">
                                &#xE150;
                            </i>
                            Contact me
                        </nuxt-link>
                        <br>
                        <nuxt-link to="/resume" class="ll">Check Resume</nuxt-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
  export default {
    transition: 'bounce',
    head () {
      return {
        title: 'Home',
      }
    },
    methods: {
      // a computed getter
      datePassed: function (dateNow) {
        const today = new Date(),
          birthDate = new Date(dateNow),
          m = today.getMonth() - birthDate.getMonth();
        let age = today.getFullYear() - birthDate.getFullYear();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
          age--;
        }
        return age
      }
    }
  }
</script>
