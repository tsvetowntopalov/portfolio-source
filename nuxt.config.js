module.exports = {
  head: {
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: 'Portfolio'}
    ],
    link: [
      {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Indie+Flower|Lora:400,700|Merriweather:300,400,700,900|Material+Icons&amp;subset=cyrillic'},
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ]
  },
  css: [
    '@/src/main.scss',
    'swiper/dist/css/swiper.css',
  ],
  loading: '~/components/loading.vue',
  plugins: ['~/plugins/vue-awesome-swiper'],
  build: {
    vendor: [
      'vue-awesome-swiper',
      'mixitup',
      'sine-waves',
    ],
    extend: function (config) {
      const babelLoader = config.module.rules.find(rule => rule.loader === 'babel-loader');
      const babelLoaderEs6 = Object.assign({}, babelLoader, {exclude: undefined, test: /\.es6$/});
      config.module.rules.push(babelLoaderEs6);
    },
    extractCSS: true,
    analyze: false,
  }
};
