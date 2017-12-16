<template>
    <section>
        <div class="container grid-xl">
            <header class="navbar" v-bind:class="{ open: menuOpen }">
                <section class="navbar-section">
                    <nuxt-link to="/" class="btn btn-link ll"><em></em>Home</nuxt-link>
                    <nuxt-link to="/about" class="btn btn-link ll"><em></em>About</nuxt-link>
                    <nuxt-link to="/contact" class="btn btn-link ll"><em></em>Contact</nuxt-link>
                </section>
                <section class="navbar-center">
                    <a href="#" v-on:click.prevent="shift" class="logo">
                        <div id="box">
                            <canvas class="waves" id="waves1"></canvas>
                            <canvas class="waves" id="waves2"></canvas>
                            <canvas class="waves" id="waves3"></canvas>
                        </div>
                        <span>
                            <span>That's me!</span>
                            <span class="sec">Toggle menu!</span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 346.393 346.393">
                                <path d="M204.651 58.521c-4.284-21.42-15.3-39.78-28.764-56.305-3.061-3.672-9.181-2.447-11.629 1.225-11.016 19.584-20.196 41.004-22.644 63.647-.612 6.732 9.792 7.345 11.016 1.225 4.284-16.524 10.404-32.437 18.36-47.736 3.06 4.284 6.121 9.18 8.569 14.076-4.284-4.284-14.077-2.448-14.077 5.508-.612 99.756-23.256 202.571-5.508 301.104 1.224 7.956 14.688 6.12 14.076-1.836-7.956-100.368 7.345-198.899 7.957-299.268v-1.224c3.672 7.344 6.119 14.688 7.956 23.256 1.225 9.792 16.524 6.12 14.688-3.672z"/>
                            </svg>
                        </span>
                        <div class="logo-wrapper">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 390 390" shape-rendering="geometricPrecision">
                                <circle cx="195" cy="195" r="195" class="cls-1"/>
                                <path d="M60.36 336.21Q48.41 322 48 293.56V139H23v-29h25V41h44v69h38v29H92v151.7q0 14.36 4.54 20.09t17.35 5.74A103.9 103.9 0 0 0 130 315.3V348a206.65 206.65 0 0 1-30.49 2.47q-27.2-.05-39.15-14.26zm126 0Q174.41 322 174 293.56V139h-25v-29h25V41h44v69h38v29h-38v151.7q0 14.36 4.54 20.09t17.35 5.74A103.91 103.91 0 0 0 256 315.3V348a206.66 206.66 0 0 1-30.49 2.47q-27.2-.05-39.15-14.26z" class="cls-2"/>
                            </svg>
                            <div class="imgvatar"></div>
                        </div>
                        <div class="menu-wrapper">
                          <i class="material-icons">&#xE5D2;</i>
                        </div>
                    </a>
                </section>
                <section class="navbar-section">
                    <nuxt-link to="/portfolio" class="btn btn-link ll"><em></em>Portfolio</nuxt-link>
                    <nuxt-link to="/resume" class="btn btn-link ll"><em></em>Resume</nuxt-link>
                </section>
            </header>
        </div>

        <nuxt/>

        <div class="container grid-xl">
            <div class="empty footer">
                <ul class="social">
                    <li class="twitter">
                        <a target="_blank" href="https://twitter.com/tsvetowntopalov">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 430.117 430.117">
                                <path d="M381.384 198.639c24.157-1.993 40.543-12.975 46.849-27.876-8.714 5.353-35.764 11.189-50.703 5.631-.732-3.51-1.55-6.844-2.353-9.854-11.383-41.798-50.357-75.472-91.194-71.404 3.304-1.334 6.655-2.576 9.996-3.691 4.495-1.61 30.868-5.901 26.715-15.21-3.5-8.188-35.722 6.188-41.789 8.067 8.009-3.012 21.254-8.193 22.673-17.396-12.27 1.683-24.315 7.484-33.622 15.919 3.36-3.617 5.909-8.025 6.45-12.769C241.68 90.963 222.563 133.113 207.092 174c-12.148-11.773-22.915-21.044-32.574-26.192-27.097-14.531-59.496-29.692-110.355-48.572-1.561 16.827 8.322 39.201 36.8 54.08-6.17-.826-17.453 1.017-26.477 3.178 3.675 19.277 15.677 35.159 48.169 42.839-14.849.98-22.523 4.359-29.478 11.642 6.763 13.407 23.266 29.186 52.953 25.947-33.006 14.226-13.458 40.571 13.399 36.642C113.713 320.887 41.479 317.409 0 277.828c108.299 147.572 343.716 87.274 378.799-54.866 26.285.224 41.737-9.105 51.318-19.39-15.144 2.57-37.094-.086-48.733-4.933z"/>
                            </svg>
                        </a>
                    </li>
                    <li class="facebook">
                        <a target="_blank" href="https://facebook.com/tsvetowntopalov">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 430.113 430.114">
                                <path d="M158.081 83.3v59.218h-43.385v72.412h43.385v215.183h89.122V214.936h59.805s5.601-34.721 8.316-72.685H247.54V92.74c0-7.4 9.717-17.354 19.321-17.354h48.557V.001h-66.021C155.878-.004 158.081 72.48 158.081 83.3z"/>
                            </svg>
                        </a>
                    </li>
                    <li class="linked-in">
                        <a target="_blank" href="https://www.linkedin.com/in/tsvetowntopalov/">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 430.117 430.117">
                                <path d="M430.117 261.543V420.56h-92.188V272.193c0-37.271-13.334-62.707-46.703-62.707-25.473 0-40.632 17.142-47.301 33.724-2.432 5.928-3.058 14.179-3.058 22.477V420.56h-92.219s1.242-251.285 0-277.32h92.21v39.309c-.187.294-.43.611-.606.896h.606v-.896c12.251-18.869 34.13-45.824 83.102-45.824 60.673-.001 106.157 39.636 106.157 124.818zM52.183 9.558C20.635 9.558 0 30.251 0 57.463c0 26.619 20.038 47.94 50.959 47.94h.616c32.159 0 52.159-21.317 52.159-47.94-.606-27.212-20-47.905-51.551-47.905zM5.477 420.56h92.184V143.24H5.477v277.32z"/>
                            </svg>
                        </a>
                    </li>
                    <li class="google">
                        <a target="_blank" href="https://plus.google.com/+TsvetanTopalov">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90 90">
                                <path d="M74.499 0H50.144c-6.382 0-14.421.942-21.158 6.49-5.09 4.374-7.566 10.392-7.566 15.828 0 9.211 7.094 18.546 19.625 18.546 1.182 0 2.477-.12 3.787-.235-.592 1.413-1.189 2.594-1.189 4.605 0 3.662 1.893 5.902 3.547 8.029-5.314.353-15.249.942-22.583 5.428-6.975 4.143-9.107 10.16-9.107 14.414C15.499 81.846 23.778 90 40.923 90c20.336 0 31.098-11.22 31.098-22.33 0-8.143-4.729-12.164-9.932-16.534l-4.258-3.305c-1.295-1.065-3.068-2.479-3.068-5.08 0-2.597 1.773-4.254 3.307-5.789 4.964-3.896 9.933-8.03 9.933-16.77 0-8.979-5.68-13.704-8.396-15.947h7.334L74.499 0zM64.103 72.279c0 7.322-6.033 12.753-17.385 12.753-12.648 0-20.809-6.024-20.809-14.405 0-8.393 7.568-11.218 10.166-12.164 4.969-1.656 11.352-1.891 12.414-1.891 1.184 0 1.775 0 2.725.115 8.988 6.377 12.889 9.57 12.889 15.592zm-9.461-38.03c-1.893 1.886-5.088 3.305-8.045 3.305-10.164 0-14.772-13.113-14.772-21.023 0-3.072.592-6.258 2.598-8.74 1.893-2.362 5.201-3.899 8.277-3.899 9.812 0 14.899 13.229 14.899 21.73 0 2.13-.241 5.906-2.957 8.627z"/>
                            </svg>
                        </a>
                    </li>
                    <li class="github">
                        <a target="_blank" href="https://github.com/tsvetowntopalov">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90 90">
                                <path d="M65.709 10.5c1.17 2.657 1.928 7.07.797 10.301 4.625 3.949 6.215 13.549 3.982 21.394 6.592.503 14.444-.242 19.512 1.781-4.738-.609-11.209-1.804-17.32-1.388-1.158.079-2.873-.044-2.789 1.585 7.074.555 14.104 1.16 19.912 2.973-5.761-.941-12.754-2.375-19.912-2.574-2.957 5.835-8.908 8.703-17.123 9.307.883 1.922 2.574 2.653 2.987 5.744.616 4.618-.964 11.381.595 14.459.748 1.475 1.967 1.514 2.789 2.775-2.012 2.381-7-.268-7.568-2.775-.973-4.295 1.482-10.953-1.192-13.865.188 4.685-1.108 11.264.199 15.449.515 1.646 2.002 2.281 1.593 3.766-9.352.949-5.443-12.104-6.972-19.81-1.411.101-.791 2.113-.796 2.972-.04 7.524 1.54 17.844-6.57 16.838-.237-1.582 1.088-2.119 1.593-3.563 1.479-4.233-.277-10.542.401-15.651-3.095 2.334.325 10.48-1.593 14.657-1.105 2.404-4.666 3.45-7.367 2.377.352-1.79 2.2-1.501 2.984-3.169 1.096-2.324.008-5.674.399-9.111-5.729 1.144-10.173-.166-12.348-3.764-.973-1.615-1.214-3.52-2.39-4.951-1.17-1.432-3.04-1.625-3.582-3.563 7.095-1.708 7.367 7.302 13.739 7.524 1.954.071 2.97-.563 4.778-.988.506-2.272 1.589-3.967 3.186-5.153-7.929-1.085-14.477-3.554-17.522-9.504-7.208.354-13.804 1.317-19.913 2.771 5.545-2.014 12.384-2.736 19.715-2.973-.432-2.596-4.219-1.882-6.57-1.782-4.37.192-9.87.735-13.343 1.387 5.034-1.795 12.098-1.571 18.918-1.585-2.086-6.54-1.363-16.929 3.186-20.798-1.289-3.249-.889-8.563.796-11.093 5.079.228 8.159 2.443 11.35 4.557 3.957-1.125 8.118-1.685 13.54-1.387 2.28.126 4.651 1.151 6.369.989 1.685-.158 3.542-2.049 5.178-2.771 2.131-.941 3.934-1.3 6.372-1.388z"/>
                            </svg>
                        </a>
                    </li>
                    <li class="codepen">
                        <a target="_blank" href="https://codepen.io/tsvetowntopalov">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 31.665 31.665">
                                <path d="M16.878.415c-.854-.565-1.968-.552-2.809.034L1.485 9.214C.814 9.682.414 10.447.414 11.266v9.444c0 .84.421 1.623 1.122 2.086l12.79 8.455c.836.553 1.922.553 2.758 0l13.044-8.618c.7-.463 1.122-1.246 1.122-2.086v-9.279c0-.839-.421-1.622-1.121-2.085L16.878.415zm9.743 10.23L21.8 13.882l-4.521-3.288-.029-6.467 9.371 6.518zM13.979 4.133v6.329l-4.633 3.24-4.621-3.099 9.254-6.47zM3.458 13.722l2.991 2.004-2.991 2.093v-4.097zm10.6 13.493l-9.331-6.258 4.661-3.258 4.67 3.133v6.383zm-1.772-11.541l3.021-2.113 3.519 2.313-3.119 2.095-3.421-2.295zm5.068 11.541V20.83l4.463-2.991 4.805 3.159-9.268 6.217zm10.6-9.288l-3.168-2.082 3.168-2.125v4.207z"/>
                            </svg>
                        </a>
                    </li>
                </ul>
                <div class="columns">
                    <div class="column col-md-12 col-6">
                        <div class="tile tile-centered">
                            <div class="tile-content">
                                <div>
                                    Created in few days with <i class="material-icons">&#xE87D;</i> and hosted by Github
                                    with the kind support of Cloudflare
                                </div>
                                <div class="tile-subtitle text-gray">
                                    <small>
                                        Copyrights or whatever, code is available on Github.
                                    </small>
                                </div>
                            </div>
                            <div class="tile-action">
                              <span class="btn btn-link hide-md">
                                  <i class="icon icon-more-vert"></i>
                              </span>
                            </div>
                        </div>
                    </div>
                    <div class="column col-md-12 col-6">

                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
  // Client side only
  if (process.browser) {
    var SineWaves = require('sine-waves');
  }

  export default {
    head () {
      return {
        titleTemplate: `%s ; Tsvetan.me / Tsvetan Topalov ( Full-Stack Web Developer )`
      }
    },
    data: () => ({
      menuOpen: false,
    }),
    methods: {
      shift: function () {
        this.$store.commit('test')
        this.menuOpen = !this.menuOpen
      }
    },
    mounted: function () {
      this.$store.commit('addWaves', {
        wave1: new SineWaves({
          el: document.getElementById('waves1'),
          speed: -4,
          width: 300,
          height: 300,
          rotate: 270,
          ease: 'SineOut',
          wavesWidth: '100%',
          waves: [
            {
              timeModifier: 1,
              lineWidth: 3,
              amplitude: 150,
              wavelength: 200,
            },
            {
              timeModifier: 1,
              lineWidth: 3,
              amplitude: 75,
              wavelength: 100,
            },
            {
              timeModifier: 1,
              lineWidth: 4,
              amplitude: -150,
              wavelength: 50,
            },
            {
              timeModifier: 1,
              lineWidth: 2,
              amplitude: -100,
              wavelength: 100,
            },
            {
              timeModifier: 2,
              lineWidth: 2,
              amplitude: -25,
              wavelength: 25,
            },
            {
              timeModifier: 0.5,
              lineWidth: 2,
              amplitude: 100,
              wavelength: 25,
              segmentLength: 5
            }
          ],
          resizeEvent: function () {
            var gradient = this.ctx.createLinearGradient(0, 0, this.width, 0);
            gradient.addColorStop(0, "rgba(152, 83, 255, 0)");
            gradient.addColorStop(1, "rgba(152, 83, 255, 0.75)");
            var index = -1;
            var length = this.waves.length;
            while (++index < length) {
              this.waves[index].strokeStyle = gradient;
            }
            // Clean Up
            index = void 0;
            length = void 0;
            gradient = void 0;
          }
        }),
        wave2: new SineWaves({
          el: document.getElementById('waves2'),
          speed: -3,
          width: 300,
          height: 300,
          rotate: 270,
          ease: 'SineOut',
          wavesWidth: '100%',
          waves: [
            {
              timeModifier: 1,
              lineWidth: 3,
              amplitude: 100,
              wavelength: 50,
            },
            {
              timeModifier: 1,
              lineWidth: 3,
              amplitude: 75,
              wavelength: 100,
            }
          ],
          resizeEvent: function () {
            var gradient = this.ctx.createLinearGradient(0, 0, this.width, 0);
            gradient.addColorStop(0, "rgba(152, 83, 255, 0)");
            gradient.addColorStop(.9, "rgba(152, 83, 255, .25)");
            gradient.addColorStop(1, "rgba(152, 83, 255, 0.75)");

            var index = -1;
            var length = this.waves.length;
            while (++index < length) {
              this.waves[index].strokeStyle = gradient;
            }
            index = void 0;
            length = void 0;
            gradient = void 0;
          }
        }),
        wave3: new SineWaves({
          el: document.getElementById('waves3'),
          speed: 3,
          width: 300,
          height: 300,
          rotate: 270,
          ease: 'SineOut',
          wavesWidth: '100%',
          waves: [
            {
              timeModifier: 1,
              lineWidth: 3,
              amplitude: 100,
              wavelength: 50,
            },
            {
              timeModifier: 2,
              lineWidth: 2,
              amplitude: 75,
              wavelength: 100,
            },
            {
              timeModifier: 2,
              lineWidth: 2,
              amplitude: -25,
              wavelength: 25,
            }
          ],
          resizeEvent: function () {
            var gradient = this.ctx.createLinearGradient(0, 0, this.width, 0);
            gradient.addColorStop(0.4, "rgba(152, 83, 255, 0)");
            gradient.addColorStop(.9, "rgba(152, 83, 255, .25)");
            gradient.addColorStop(1, "rgba(152, 83, 255, 0.75)");
            var index = -1;
            var length = this.waves.length;
            while (++index < length) {
              this.waves[index].strokeStyle = gradient;
            }
            index = void 0;
            length = void 0;
            gradient = void 0;
          }
        })
      })
    }
  }
</script>
