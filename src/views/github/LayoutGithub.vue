<template lang="pug">
  .github-layout
    v-container
      v-row
        v-text-field(
          label="Usuario"
          v-model="usuario"
        )
      v-row
        v-card 
          {{ usuarioInfos }}
</template>

<script>
import http from '@/utils/http';
export default {
  name: 'LayoutGithub',

  data: () => ({
    usuario: 'LeoSouza221',
    usuarioInfos: {},
  }),

  created() {
    this.buscarUsuario();
  },

  methods: {
    buscarUsuario() {
      const nomeUsuario = this.usuario;

      http.get(`/users/${nomeUsuario}`)
        .then(({ data }) => {
          this.usuarioInfos = data;
        })
        .catch((error) => this.usuarioInfos = error);
    },
  },
}
</script>

<style scoped>
  .github-layout {
    height: 100%;
    padding: 64px 0 0 0;
    font-family: 'Montserrat', sans-serif;
  }
</style>
