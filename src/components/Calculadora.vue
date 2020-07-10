<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-sm-6 offset-sm-3">
          <h1>Calculadora Vue.js</h1>
          <hr />
          <table class="table table-dark align-middle text-center shadow">
            <thead>
              <tr>
                <th colspan="3">
                  <button
                    type="button"
                    class="btn btn-info btn-block"
                  >{{ resultado }} {{ operacao }}</button>
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
                  <button type="button" class="btn btn-light btn-block" @click="n7">7</button>
                </td>
                <td>
                  <button type="button" class="btn btn-light btn-block" @click="n8">8</button>
                </td>
                <td>
                  <button type="button" class="btn btn-light btn-block" @click="n9">9</button>
                </td>
                <td rowspan="4">
                  <button type="button" class="btn btn-success btn-block btn-block-height">
                    <i class="fas fa-check"></i>
                  </button>
                </td>
              </tr>
              <tr>
                <td>
                  <button type="button" class="btn btn-light btn-block" @click="n4">4</button>
                </td>
                <td>
                  <button type="button" class="btn btn-light btn-block" @click="n5">5</button>
                </td>
                <td>
                  <button type="button" class="btn btn-light btn-block" @click="n6">6</button>
                </td>
              </tr>
              <tr>
                <td>
                  <button type="button" class="btn btn-light btn-block" @click="n1">1</button>
                </td>
                <td>
                  <button type="button" class="btn btn-light btn-block" @click="n2">2</button>
                </td>
                <td>
                  <button type="button" class="btn btn-light btn-block" @click="n3">3</button>
                </td>
              </tr>
              <tr>
                <td colspan="2">
                  <button type="button" class="btn btn-light btn-block" @click="n0">0</button>
                </td>
                <td>
                  <button type="button" class="btn btn-light btn-block">,</button>
                </td>
              </tr>
            </tbody>
          </table>
          <b-button type="button" variant="primary">SOU UM BOTÃO</b-button>
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
      operacao: ""
    };
  },

  methods: {
    limpar() {
      this.resultado = 0;
      this.operacao = "";
    },

    n0() {
      this.resultado = 0;
    },
    n1() {
      this.resultado = 1;
    },
    n2() {
      this.resultado = 2;
    },
    n3() {
      this.resultado = 3;
    },
    n4() {
      this.resultado = 4;
    },
    n5() {
      this.resultado = 5;
    },
    n6() {
      this.resultado = 6;
    },
    n7() {
      this.resultado = 7;
    },
    n8() {
      this.resultado = 8;
    },
    n9() {
      this.resultado = 9;
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
    }
  }
};
</script>
<style scoped>
.btn.btn-block-height {
  padding: 100% 0;
}
</style>