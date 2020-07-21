<template>
  <div>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css" integrity="sha512-1PKOgIY59xJ8Co8+NE6FZ+LOAZKjy+KY8iq0G4B3CyeY6wYHN3yt9PW0XpSriVlkMXe40PTKnXrLnZ9+fkDaog==" crossorigin="anonymous" />
    <div class="container">
      <div class="row">
        <div class="col-sm-6 offset-sm-3">
          <h1>Calculadora Vue.js</h1>
          <hr />
          <table class="table table-dark align-middle text-center shadow">
            <thead>
              <tr>
                <th colspan="3">
                    <button type="button" class="btn btn-info btn-block">&#8203; {{ display }}</button>
                </th>
                <th colspan="1">
                  <button type="button" class="btn btn-info btn-block" @click="limpar">
                    <i class="fas fa-backspace"></i>
                  </button>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <button type="button" class="btn btn-secondary btn-block" @click="somar">+</button>
                </td>
                <td>
                  <button type="button" class="btn btn-secondary btn-block" @click="subtrair">-</button>
                </td>
                <td>
                  <button type="button" class="btn btn-secondary btn-block" @click="multiplicar">*</button>
                </td>
                <td>
                  <button type="button" class="btn btn-secondary btn-block" @click="dividir">/</button>
                </td>
              </tr>
              <tr>
                <td>
                  <button type="button" class="btn btn-light btn-block" @click="n(7)">7</button>
                </td>
                <td>
                  <button type="button" class="btn btn-light btn-block" @click="n(8)">8</button>
                </td>
                <td>
                  <button type="button" class="btn btn-light btn-block" @click="n(9)">9</button>
                </td>
                <td rowspan="4">
                  <button type="button" class="btn btn-success btn-block btn-block-height" @click="calcular">
                    <i class="fas fa-check"></i>
                  </button>
                </td>
              </tr>
              <tr>
                <td>
                  <button type="button" class="btn btn-light btn-block" @click="n(4)">4</button>
                </td>
                <td>
                  <button type="button" class="btn btn-light btn-block" @click="n(5)">5</button>
                </td>
                <td>
                  <button type="button" class="btn btn-light btn-block" @click="n(6)">6</button>
                </td>
              </tr>
              <tr>
                <td>
                  <button type="button" class="btn btn-light btn-block" @click="n(1)">1</button>
                </td>
                <td>
                  <button type="button" class="btn btn-light btn-block" @click="n(2)">2</button>
                </td>
                <td>
                  <button type="button" class="btn btn-light btn-block" @click="n(3)">3</button>
                </td>
              </tr>
              <tr>
                <td colspan="2">
                  <button type="button" class="btn btn-light btn-block" @click="n(0)">0</button>
                </td>
                <td>
                  <button type="button" class="btn btn-light btn-block">,</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      resultado: 0,
      nb1: "",
      nb2: "",
      operacao: "",
      animated: true,
    };
  },

  methods: {
    limpar() {
      this.resultado = 0;
      this.nb1 = "";
      this.nb2 = "";
      this.operacao = "";
    },  

    n(numero){
      if(this.operacao == "") {
        if(this.nb1 == "") {
          this.nb1 = numero;
        } else {
          var numberStringN1 = `${this.nb1}${numero}`
          this.nb1 = numberStringN1;
        }
      } else {
        if(this.nb2 == "") {
          this.nb2 = numero;
        } else {
          var numberStringN2 = `${this.nb2}${numero}`
          this.nb2 = numberStringN2;
        }
      } 
    },

    somar() {
      this.operacao = "+";
    },
    subtrair() {
      this.operacao = "-";
    },
    multiplicar() {
      this.operacao = "*";
    },
    dividir() {
      this.operacao = "/";
    },

    calcular() {
      let calculo = this.nb1 + this.operacao + this.nb2;
      this.resultado = eval(calculo);
      this.nb1 = this.resultado;
      this.nb2 = "";
      this.operacao = "";
    }
  },

  computed: {
    display: function() {
      let display;
      if(this.nb1 != "") {
        display = this.nb1 + " " + this.operacao + " " + this.nb2;
      } else {
        display = this.resultado;
      }
      return display;
    }
  }
};
</script>
<style scoped>
.btn.btn-block-height {
  padding: 100% 0;
}
</style>