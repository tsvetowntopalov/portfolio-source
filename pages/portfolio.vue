<template>
    <div id="portfolio" class="grid-xl">
        <div class="columns">
            <div class="column col-md-12 col-lg-8 col-9">
                <div class="portfolio">
                    <div class="mix card category-a" v-for="(p, key) in portfolio"
                                                    :data-tag="p.tag.join(' ')"
                                                    :data-stack="p.stack.join(' ')"
                                                    :data-source="(p.source) ? 1 : 0"
                                                    :data-live="(p.live) ? 1 : 0"
                                                    :data-lab="(p.lab) ? 1 : 0">
                        <div class="mix-holder">
                            <div class="card-header">
                                <div class="card-title h5">{{ p.title }}</div>
                                <div class="card-subtitle text-gray">{{ p.subtitle }}</div>
                            </div>
                            <div class="card-image">
                                <img class="img-responsive" :src="p.src" alt="OS X Yosemite">
                            </div>
                            <div class="card-body">
                                {{ p.desc }}
                            </div>
                            <div class="card-footer">
                                <button v-on:click.prevent="readMore(key)" class="btn btn-sm btn-primary">Read more</button>
                                <a v-if="p.live" :href="p.live" class="btn btn-sm btn-link" target="_blank">Visit project</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="clearfix"></div>
            </div>

            <div class="column col-md-12 col-lg-4 col-3 aside">
                <div class="sidebar">
                    <div class="controls">
                        <button class="btn btn-action" data-sort="default:asc">
                            <i class="material-icons">&#xE5CE;</i>
                        </button>
                        <button class="btn btn-action" data-sort="default:desc">
                            <i class="material-icons">&#xE5CF;</i>
                        </button>
                        <button class="btn btn-action" v-on:click.prevent="resetAll">
                            <i class="material-icons">&#xE5CD;</i>
                        </button>
                    </div>
                    <div class="widget">
                        <h5>Filter by stack</h5>
                        <multiselect v-model="selected.stack" :options="stat['stack']"
                                     :multiple="true" :max="5" :clear-on-select="false" :hide-selected="true" :preserve-search="true"
                                     @select="onSelectStack" @remove="onRemoveStack"
                                     placeholder="Select tag" label="key" track-by="key" :show-labels="false">
                            <template slot="tag" scope="props">
                                <span class="chip">
                                    <figure class="avatar avatar-sm" :data-initial="props.option.value" style="background-color: #5755d9;"></figure>
                                    <span>{{ props.option.key }}</span>
                                    <a class="btn btn-clear" aria-label="Close" role="button" @click="props.remove(props.option)"></a>
                                </span>
                            </template>
                            <template slot="option" scope="props">
                                <div class="option__desc">
                                    <span class="option__title">{{ props.option.key }} <strong>( {{ props.option.value }} )</strong></span>
                                </div>
                            </template>
                        </multiselect>
                    </div>
                    <div class="widget">
                        <h5>Filter by tag</h5>
                        <multiselect v-model="selected.tag" :options="stat['tag']"
                                     :multiple="true" :max="5" :clear-on-select="false" :hide-selected="true" :preserve-search="true"
                                     @select="onSelectTag" @remove="onRemoveTag"
                                     placeholder="Select tag" label="key" track-by="key" :show-labels="false">
                            <template slot="tag" scope="props">
                                <span class="chip">
                                    <figure class="avatar avatar-sm" :data-initial="props.option.value" style="background-color: #5755d9;"></figure>
                                    <span>{{ props.option.key }}</span>
                                    <a class="btn btn-clear" aria-label="Close" role="button" @click="props.remove(props.option)"></a>
                                </span>
                            </template>
                            <template slot="option" scope="props">
                                <div class="option__desc">
                                    <span class="option__title">{{ props.option.key }} <strong>( {{ props.option.value }} )</strong></span>
                                </div>
                            </template>
                        </multiselect>
                    </div>
                    <div class="widget">
                        <h5>Additional</h5>
                        <div class="form-group">
                          <label class="form-switch"><input type="checkbox" v-on:change.prevent="toggleAdd('source')" :checked="selected.add.source"><i class="form-icon"></i> Open-source</label>
                        </div>
                        <div class="form-group">
                          <label class="form-switch"><input type="checkbox" v-on:change.prevent="toggleAdd('lab')" :checked="selected.add.lab"><i class="form-icon"></i> Lab Experiment</label>
                        </div>
                        <div class="form-group">
                          <label class="form-switch"><input type="checkbox" v-on:change.prevent="toggleAdd('live')" :checked="selected.add.live"><i class="form-icon"></i> Live</label>
                        </div>
                    </div>
                </div><br>
                <small>
                  Features part of the portfolio item set for the past 5 years, where there is no NDA & includes proof of life or a concept..
                </small>
            </div>
        </div>



        <!-- Details -->
        <div class="modal modal-lg" id="example-modal-3" :class="{ 'active': selected.item }">
            <span class="modal-overlay" aria-label="Close"></span>
            <div class="modal-container" role="document" v-if="selected.item">
                <div class="modal-header">
                    <button v-on:click.prevent="readMore(null)" class="btn btn-clear float-right" aria-label="Close"></button>
                    <div class="modal-title h4">
                        <strong>{{ portfolio[selected.item]['title'] }}</strong>
                        &mdash;
                        {{ portfolio[selected.item]['year'] }}
                        <br />
                        <small>{{ portfolio[selected.item]['type'] }}</small>
                    </div>
                </div>
                <div class="modal-body">
                    <div class="content">
                        <div class="tile">
                            <div class="tile-content">
                                <p class="tile-title">{{ portfolio[selected.item]['subtitle'] }}</p>
                                <p class="tile-subtitle text-gray">
                                    {{ portfolio[selected.item]['desc'] }}
                                </p>
                            </div>
                            <div class="tile-action">
                                <button class="btn btn-sm btn-primary tooltip tooltip-left" data-tooltip="Current Status" :class="'status-'+portfolio[selected.item]['status']">{{ portfolio[selected.item]['status'] }}</button>
                                <button class="btn btn-sm btn-primary tooltip tooltip-left" data-tooltip="Current Stage" :class="'status-'+portfolio[selected.item]['stage']">{{ portfolio[selected.item]['stage'] }}</button>
                            </div>
                        </div>

                        <h4>Job</h4>
                        <p>{{ portfolio[selected.item]['jobtype'] }}</p>
                        <h4>Role</h4>
                        <p>{{ portfolio[selected.item]['role'] }}</p>
                        <h4>Stack</h4>
                        <p class="list">
                            <button class="btn btn-sm" :class="stack" v-for="(stack, key) in portfolio[selected.item]['stack']">{{ stack }}</button>
                        </p>
                        <h4>Tags</h4>
                        <p class="list">
                            <button class="btn btn-sm" :class="tag" v-for="(tag, key) in portfolio[selected.item]['tag']">{{ tag }}</button>
                        </p>
                        <!-- IMAGES -->
                        <h4>Gallery</h4>
                        <div class="gallery-slider" v-if="portfolio[selected.item]['gallery'].length > 0">
                            <div v-swiper:mySwiper="swiperOption">
                                <div class="swiper-wrapper">
                                    <div class="swiper-slide" v-for="i in portfolio[selected.item]['gallery']">
                                        <a :href="i" class="btn btn-primary" target="_blank">
                                            <i class="material-icons">&#xE8FF;</i>
                                        </a>
                                        <img :src="i">
                                    </div>
                                </div>
                                <div class="swiper-button-prev" slot="button-prev"></div>
                                <div class="swiper-button-next" slot="button-next"></div>
                                <div class="swiper-pagination swiper-pagination-bullets"></div>
                            </div>
                        </div><div v-else class="text-gray">No images are currently available for the public.</div><p></p>
                        <!-- VIDEO -->
                        <h4>Videos</h4>
                        <div class="video-slider" v-if="portfolio[selected.item]['video'].length > 0">
                            <div v-swiper:mySwiper="swiperOption">
                                <div class="swiper-wrapper">
                                    <div class="swiper-slide" v-for="i in portfolio[selected.item]['video']">
                                        <a class="play" :href="'https://youtu.be/'+i" target="_blank"></a>
                                        <img :src="'https://img.youtube.com/vi/'+i+'/maxresdefault.jpg'">
                                        <!--
                                        <div class="video-responsive">
                                            <iframe width="840" height="300" :src="'http://www.youtube.com/embed/'+i+'?rel=0&amp;showinfo=0'"
                                                    frameborder="0" allowfullscreen></iframe>
                                        </div>
                                        -->
                                    </div>
                                </div>
                                <div class="swiper-button-prev" slot="button-prev"></div>
                                <div class="swiper-button-next" slot="button-next"></div>
                                <div class="swiper-pagination swiper-pagination-bullets"></div>
                            </div>
                        </div><div v-else class="text-gray">No videos are currently available for the public.</div><p></p>
                    </div>
                </div>
                <div class="modal-footer">
                    <a v-if="portfolio[selected.item]['source']" :href="portfolio[selected.item]['source']" target="_blank" class="btn">Source</a>
                    <a v-if="portfolio[selected.item]['live']" :href="portfolio[selected.item]['live']" target="_blank" class="btn">Live</a>
                    <button class="btn btn-primary">Share</button>
                    <button v-on:click.prevent="readMore(null)" class="btn btn-link">Close</button>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
  import forEach from 'lodash/forEach';
  import Multiselect from 'vue-multiselect';

  // Client side only
  if (process.browser) {
    var mixitup = require('mixitup');
  }

  function sortObject(obj) {
    var arr = [];
    for (var prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        arr.push({'key': prop,'value': obj[prop]});
      }
    }
    arr.sort(function(a, b) { return b.value - a.value; });
    return arr;
  }

  export default {
    transition: 'bounce',
    components: { Multiselect },
    head () {
      return {
        title: this.title,
      }
    },
    data: () => ({
      title: 'Portfolio',
      banners: [
        require('~/assets/portfolio/fsbweather.jpg'),
        require('~/assets/portfolio/fsbweather.jpg'),
        require('~/assets/portfolio/fsbweather.jpg')
      ],
      swiperOption: {
        initialSlide: 1,
        loop: true,
        pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
      },
      mix: null,
      selected: {
        item:  null,
        tag:   null,
        stack: null,
        year:  null,
        add: {
          source: false,
          lab: false,
          live: false,
        },
      },
      stat: {
        tag:   [],
        stack: [],
        year:  [],
      },
      portfolio: {
        fsbweather:                 require('~/projects/fsbweather.js'),
        elobg:                      require('~/projects/elobg.js'),
        micropanel:                 require('~/projects/micropanel.js'),
        sumenu:                     require('~/projects/sumenu.js'),
        vskexpres:                  require('~/projects/vskexpres.js'),
        lanservers:                 require('~/projects/lanservers.js'),
        elegance:                   require('~/projects/elegance.js'),
        fpsbg:                      require('~/projects/fpsbg.js'),
        myghost:                    require('~/projects/myghost.js'),
        freeuikitvincentloginform:  require('~/projects/freeuikitvincentloginform.js'),
        inspirationloginimbatman:   require('~/projects/inspirationloginimbatman.js'),
        reminderconcept:            require('~/projects/reminderconcept.js'),
        snowfall:                   require('~/projects/snowfall.js'),
        witchergiveaway:            require('~/projects/witchergiveaway.js'),
        aiongemu:                   require('~/projects/aiongemu.js'),
      }
    }),
    methods: {
      resetAll: function () {
        this.mix.show();
        this.selected.stack = this.selected.tag = [];
      },
      onSelectStack: function (value) {
        return this.filterMix(value.key, 'stack');
      },
      onRemoveStack: function (value) {
        return this.filterMixOff(value.key, 'stack');
      },
      onSelectTag: function (value) {
        return this.filterMix(value.key, 'tag');
      },
      onRemoveTag: function (value) {
        return this.filterMixOff(value.key, 'tag');
      },
      toggleAdd: function (which) {
        if(this.selected.add[which]) {
          this.filterMixOff(1, which);
          this.selected.add[which] = false;
        } else {
          this.filterMix(1, which);
          this.selected.add[which] = true;
        }
      },
      readMore: function (selected) {
        if(selected) {
          this.title = `${this.portfolio[selected].title} @ Portfolio`;
        } else {
          this.title = 'Portfolio';
        }
        this.selected.item = selected;
      },
      filterMix: function (mix, by) {
        return this.mix.toggleOn('[data-' + by + '~="' + mix + '"]')
          .then(function (state) {
            console.log(state); // true
          });
      },
      filterMixOff: function (mix, by) {
        return this.mix.toggleOff('[data-' + by + '~="' + mix + '"]')
          .then(function (state) {
            console.log(state); // true
          });
      }
    },
    mounted: function () {
      const that = this;
      // --------------------------
      // When all is rendered go through with `mixitup`
      // --------------------------
      that.$nextTick(function () {

        // Close popped window on keypress
        window.onkeydown = function( event ) {
            if ( event.keyCode === 27  && that.selected.item ) {
                that.readMore(null);
            }
        };

        // --------------------------
        // Loop portfolio Items
        // --------------------------
        var data = {
          tag  : {},
          stack: {},
          year : {}
        };
        forEach(that.portfolio, function (i) {
          if (!i) return;
          forEach(i.tag,   function (t) { data.tag[t] = (data.tag[t] || 0)+1 });
          forEach(i.stack, function (t) { data.stack[t] = (data.stack[t] || 0)+1 });
                                          data.year[i.year] = (data.year[i.year] || 0)+1;
        });

        // Sort and array ths
        that.stat.stack = sortObject(data.stack);
        that.stat.tag   = sortObject(data.tag);
        that.stat.year  = sortObject(data.year);

        console.log(that.stat.stack);

        that.mix = mixitup('.portfolio', {
          "animation": {
            "queue": true,
            "queueLimit": 1,
            "duration": 220,
            "nudge": true,
            "reverseOut": true,
            "effects": "fade scale(0.4) translateX(100%) stagger(110ms)",
          }
        });
      });
    }
  }
</script>
