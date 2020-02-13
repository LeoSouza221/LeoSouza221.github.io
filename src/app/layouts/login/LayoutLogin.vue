<template lang="pug">
  .login-container
    .background
      v-img(
        src="https://images.unsplash.com/photo-1485470733090-0aae1788d5af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1991&q=80"
        height="100%"
        width="100%"
        gradient="to top right, rgba(3, 3, 3, 0.1), rgba(25, 25, 26, 0.7)"
      )
    .side-text(v-if="verifyMobile()") 
      h1 Lorem ipsum dolor sit amet, consectetur adipiscing elit
    .sky
      .pos-1
        .star.delay-1
      .pos-2
        .star.delay-2
      .pos-3
        .star.delay-3
      .pos-4
        .star.delay-4
      .pos-5
        .shooting-star
      .pos-6
        .shooting-star
    v-row(align="center" justify="center" style="height: 100%")
      v-col(cols="10" md="auto" :offset="$vuetify.breakpoint.width > 400 ? 1 : 0")
        v-card(
          :width="verifyMobile() ? '350' : '300'"
          color="rgba(3, 3, 3, 0.1)"
        ) 
          v-tabs(
            class="elevation-2"
            dark
            centered
            grow
            height="50"
            background-color="rgba(3, 3, 3, 0.3)"
          )
            v-tabs-slider
            v-tab(
              v-for="(tab, index) in tabsContent"
              :key="index"
              :href="`#tab-${tab.nome}`"
            ) {{ tab.nome }}
            v-tab-item(value="tab-Login" color="transparent")
              v-card(flat light height="450")
                v-form(ref="loginForms" v-model="validaLogin")
                  v-row(justify="center" no-gutters style="padding-top: 40px;")
                    v-col.my-5(
                      cols="11"
                    )
                      v-text-field(
                        label="Email"
                        outlined
                        rounded
                        light
                        color="rgba(3, 3, 3, 0.9)"
                        append-icon="fa fa-envelope"
                        type="text"
                        :rules="rules.email"
                      )
                    v-col(
                      cols="11"
                    )
                      v-text-field(
                        label="Senha"
                        outlined
                        rounded
                        color="rgba(3, 3, 3, 0.9)"
                        append-icon="fa fa-key"
                        type="password"
                        :rules="rules.senha"
                      )
                    v-col(cols="10")
                      div(style="width: 100%; height: 50px; display: flex; justify-content: center")
                        v-icon.mx-3(dark color="blue" large) fab fa-facebook-square
                        v-icon.mx-3(dark color="red" large) fab fa-google
                    v-col.ma-5(cols="11")
                      v-row(justify="center" no-gutters)
                        v-btn.mt-5(
                          rounded
                          dark
                          color="rgba(3, 3, 3, 0.9)"
                          height="40"
                          :disabled="!validaLogin"
                        ) Enviar
                    v-col(md="10")
                      div(style="width: 100%; height: 50px; display: flex; justify-content: center")
                        a(style="font-size: 12px;") Esqueci minha senha
            v-tab-item(value="tab-Cadastro")
              v-card(flat height="450" color="rgba(3, 3, 3, 0.1)")
                v-form(ref="cadastroForms" v-model="validaCadastro")
                 v-row(justify="center" no-gutters)
                    v-col.mt-5(
                     cols="11"
                    )
                      v-text-field(
                        label="Nome"
                        outlined
                        rounded
                        light
                        color="rgba(3, 3, 3, 0.9)"
                        append-icon="fa fa-user"
                        type="password"
                        :rules="rules.nome"
                      )
                    v-col(
                      cols="11"
                    )
                      v-text-field(
                        label="Email"
                        outlined
                        rounded
                        color="rgba(3, 3, 3, 0.9)"
                        append-icon="fa fa-envelope"
                        type="text"
                        :rules="rules.emailCadastro"
                      )
                    v-col(
                      cols="11"
                    )
                      v-text-field(
                        label="Senha"
                        outlined
                        rounded
                        color="rgba(3, 3, 3, 0.9)"
                        append-icon="fa fa-key"
                        type="password"
                        :rules="rules.senhaCadastro"
                      )
                    v-col(
                      cols="11"
                    )
                      v-text-field(
                        label="Confirme a Senha"
                        outlined
                        rounded
                        color="rgba(3, 3, 3, 0.9)"
                        append-icon="fa fa-key"
                        type="password"
                        :rules="rules.senhaConfirma"
                      )
                    v-col(cols="11")
                      v-row(justify="center" no-gutters)
                        v-btn.mt-5(
                          rounded
                          dark
                          color="rgba(3, 3, 3, 0.9)"
                          height="40"
                          :disabled="!validaCadastro"
                        ) Cadastrar                 
</template>

<script>
import isMobile from '@/mixins/isMobile';

export default {
  mixins: [isMobile],
  data: () => ({
    validaCadastro: false,
    validaLogin: false,
    tabsContent: [
      {
        nome: 'Login'
      },
      {
        nome: 'Cadastro'
      }
    ],
    rules: {
      email: [
        v => !!v || 'Campo Obrigatório',
        v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'Email inválido',
      ],
      senha: [
        v => !!v || 'Campo Obrigatório',
      ],
      nome: [
        v => !!v || 'Campo Obrigatório',
      ],
      emailCadastro: [
        v => !!v || 'Campo Obrigatório',
        v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'Email inválido',
      ],
      senhaCadastro: [
        v => /^(?=.{6,})(?=.*[a-z]).*$/gm.test(v) || 'A senha deve conter ao menos 6 caracteres !',
      ],
      senhaConfirma: [
        v => !!v || 'Campo Obrigatório',
      ]
    }
  }),
  name: 'LayoutLogin',
}
</script>

<style scoped>
  .login-container {
    width: 100vw;
    height: 100%;
    position: relative;
    overflow: hidden;
  }

  .background {
    position: absolute;
    background:     rgba(3, 3, 3, 0.33);
  }

  .side-text {
    width: 300px;
    height: 100%;
    position: absolute;
    display: flex;
    align-items: center;
    left: 100px;
    color: white;
    text-shadow: 1px 1px 2px grey;
    animation: toDown .5s ease-in;
    transition: all .5s cubic-bezier(0.165, 0.84, 0.44, 1);
  }

  @keyframes toDown {
    from {
      transform: translateY(-100px) rotateX(70deg);
      opacity: 0;
    }
    to {
      transform: translateY(0) rotateX(0);
      opacity: 1;
    }
  }

  .sky {
    width: 50%;
    height: 300px;
    position: absolute;
    right: 0;
    transition: all .5s cubic-bezier(0.165, 0.84, 0.44, 1);
  }

  .star {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: rgb(252, 242, 185);
  }

  .shooting-star {
    width: 8px;
    height: 100px;
    background-image: linear-gradient(to top, rgb(252, 242, 185), #f9ffc8, rgba(255, 255, 255, 0));
    border-radius: 50px;
    transform: skew(-54deg, 10deg);
  }

  .pos-1 {
    position: absolute;
    top: 150px;
  }

  .pos-2 {
    position: absolute;
    top: 100px;
    left: 25%;
  }

  .pos-3 {
    position: absolute;
    bottom: 0;
    left: 40%;
  }

  .pos-4 {
    position: absolute;
    top: 130px;
    left: 90%;
  }

  .pos-5 {
    position: absolute;
    top: -50px;
    left: 60%;
    animation: curse 1s linear infinite;
  }

  .pos-6 {
    position: absolute;
    top: -50px;
    left: 100%;
    animation: curse2 1.5s linear infinite;
  }

  @keyframes curse {
    40%, 100% {
      top: 80%;
      left: 0;
      opacity: 0;
    }
    0% {
      opacity: 0;
    }
    30% {
      opacity: 1;
    }
  }

   @keyframes curse2 {
    40%, 100% {
      top: 80%;
      left: 40%;
      opacity: 0;
    }
    0% {
      opacity: 0;
    }
    30% {
      opacity: 1;
    }
  }

  .delay-1 {
    animation: shine 7s infinite;
  }

  .delay-2 {
    animation: shine 8s infinite;
  }

  .delay-3 {
    animation: shine 5s infinite;
  }

  .delay-4 {
    animation: shine 4s infinite;
  }

  @keyframes shine {
    0% {
      box-shadow: none;
    }
    50% {
      box-shadow: 0 0 10px rgb(236, 236, 140),
        0 0 15px rgb(236, 236, 140);
    }
    100% {
      box-shadow: none;
    }
  }
  
</style>
