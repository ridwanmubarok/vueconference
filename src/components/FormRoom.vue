<template>
    <div class="container">
    <div class="card">
        <div class="card-content">
          <div class="columns is-mobile">
            <div class="column">
                <b-field>
                    <b-input placeholder="Nama Room" v-model="roomname"></b-input>
                </b-field>
            </div>
            <div class="column">
                <b-field>
                    <b-input placeholder="Nama Kamu" v-model="roomkode"></b-input>
                </b-field>
            </div>
            <div class="column">
                <b-button v-on:click="readData" type="is-primary" expanded>
                    BUAT ROOM
                </b-button>
            </div>
        </div>
        </div>
        <footer class="card-footer">
          <p class="card-footer-item">
            <span>
              Bagikan di <a href="#">Twitter</a>
            </span>
          </p>
          <p class="card-footer-item">
            <span>
              Bagikan di <a href="#">Facebook</a>
            </span>
          </p>
        </footer>
    </div>
    </div>
</template>

<script>
import {EventBus} from '@/events/eventbus.js';
 export default {
        data() {
            return {
            namaRoom : "adadadadad",
            koderoom : "",
            }
        },
        methods: {
            readData(){
                this.namaRoom = this.roomname
                this.koderoom = this.roomkode
                EventBus.$emit('roomname', this.namaRoom)
                EventBus.$emit('koderoom', this.koderoom)
                this.$router.push({ name: 'Meet' , params: {roomname: this.namaRoom,displayname: this.koderoom }  });
            }
        }
 }
</script>