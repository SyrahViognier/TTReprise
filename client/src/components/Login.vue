<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <div class="white elevation-2">
        <v-toolbar flat dense class="cyan" dark>
          <v-toolbar-title>Login</v-toolbar-title>
        </v-toolbar>
        <div class="pl-4 pr-4 pt-2 pt-2">
          <v-form>
            <v-text-field
            label="Email"
            v-model="email"
            ></v-text-field>
            <br/>
            <v-text-field
            type="password"
            label="Password"
            v-model="password"
            ></v-text-field>
            <br/>
            <div class="error" v-html="error"></div>
            <br/>
            <v-btn
            class="cyan"
            dark
            @click="login"
            >
            Login
          </v-btn>
        </v-form>
        </div>
      </div>
    </v-flex>
  </v-layout>
</template>
<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async login () {
      try {
        await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>
<style scoped>
</style>
