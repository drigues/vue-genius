new Vue({
  el: '#app',
  data: {
    gameover: false,
    numDraw: 0,
    scores: 0,
    lightOn: false,
    lightOnR: 'asd'
  },
  computed: {
    colorOn: function() {
      return {
        //lightOnR: this.lightOn
      };
    }
  },
  watch: {
    lightOn: function(value) {
      var vm = this;
      setTimeout(function() {
        vm.lightOn = false;
      }, 2000);
    }
  },
  methods: {
    randomNumber: function() {
      this.numDraw = Math.floor(Math.random() * 4) + 1;
    }
  }
});
