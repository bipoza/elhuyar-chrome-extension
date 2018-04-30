console.log("dnhjhdsgfjsdfg")
window.onload = function() {
    const app = new Vue({
    el: '#app',

    data: {
        selected: 'eu/es',
        isInvalid: false,
        text: null,
    },
    methods: {
        search:  function () {
            if (!this.text) {
               // alert("Bilatu zerbait");
                this.isInvalid = true;
                return
            }
            let elhuyarUrl = 'https://hiztegiak.elhuyar.eus/'
            if (this.selected == 'eu/es') {
                elhuyarUrl = elhuyarUrl + 'eu_es/' + this.text;
            } else {
                elhuyarUrl = elhuyarUrl + 'es_eu/' + this.text;

            }
       //   window.location = elhuyarUrl;
       window.open(elhuyarUrl,'_blank');
        }
    }
})
}