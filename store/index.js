import Vuex from 'vuex';

const createStore = () => {
  return new Vuex.Store({
    state: {
      waves: {
        wave1: null,
        wave2: null,
        wave3: null,
      }
    },
    mutations: {
      addWaves(state, data) {
        state.waves.wave1 = data.wave1;
        state.waves.wave2 = data.wave2;
        state.waves.wave3 = data.wave3;
      },
      stopWaves(state) {
        state.waves.wave1.running = state.waves.wave2.running = state.waves.wave3.running = false;
      },
      startWaves(state) {
        state.waves.wave1.running = state.waves.wave2.running = state.waves.wave3.running = true;
      },
      test(state) {
        state.waves.wave1.options.wavesWidth = state.waves.wave2.options.wavesWidth = state.waves.wave3.options.wavesWidth = '0%';
      },
    }
  });
};

export default createStore;
