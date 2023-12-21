<template>
  <v-card class="mx-auto" max-width="450">
    <v-toolbar color="cyan-lighten-1">
      <v-btn variant="text" icon="mdi-menu"></v-btn>

      <v-toolbar-title>ClientesApp</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn variant="text" icon="mdi-magnify"></v-btn>
    </v-toolbar>
    <button @click="incrementarContador()">
      Clique aqui. Quantidade de cliques {{ contador }}
    </button>
    <v-list>
      <v-list-item-group>
        <v-list-item v-for="item in items" :key="item.id">
          <v-card width="400" @click="detalhes(item)">
            <v-card-item>
              <v-card-title>{{item.nome}}</v-card-title>

              <v-card-subtitle>{{item.email}}</v-card-subtitle>
            </v-card-item>

            <v-card-text>
              Eu moro no endereço {{item.endereco}} e minha profissão é
              {{item.profissao}}.
            </v-card-text>
            <hr>
          </v-card>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-card>
</template>

<script>
// Import axios
import axios from "axios";

export default {
  // Properties returned from data() become reactive state
  // and will be exposed on `this`.

  data() {
    return {
      contador: 0,
      items: [],
    };
  },

  // Methods are functions that mutate state and trigger updates.
  // They can be bound as event handlers in templates.
  methods: {
    incrementarContador() {
      this.contador++;
    },
    detalhes(item) {
      alert(JSON.stringify(item));
    },
  },

  // Lifecycle hooks are called at different stages
  // of a component's lifecycle.
  // This function will be called when the component is mounted.
  mounted() {
    console.log(`The initial count is ${this.contador}.`);

    let usuarios = axios
      .get("http://localhost:3001/usuarios")
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        // manipula erros da requisição
        console.error(error);
        return [];
      });

    usuarios.then((data) => {
      console.log(data);
      this.items = data;
    });
  },
};
</script>
