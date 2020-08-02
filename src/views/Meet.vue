<template>
    <div id="tes">
      <AppBar></AppBar>
      <div class="container">
        <div class="card">
          <div class="card-image">
            <vue-jitsi-meet
        ref="jitsiRef"
        domain="meet.jit.si"
        :options="jitsiOptions"
        ></vue-jitsi-meet>
          </div>
          <div class="card-content">
            <div class="content">
              Sekolahsmart aplikasi hebat anak bangsa - <a>@daylightdev</a>.
              <a href="#">#css</a> <a href="#">#sekolahsmart</a>
              <br>
              <time datetime="2016-1-1">19:01 WIB - 2 Agu 2020</time>
            </div>
          </div>
        </div>
      </div>
         <b-loading :is-full-page="isFullPage" :active.sync="isLoading" :can-cancel="true"></b-loading>
        <AppFoot></AppFoot>
    </div>
</template>

<script>
// @ is an alias to /src
import AppBar from "@/components/AppBar.vue";
import AppFoot from "@/components/AppFoot.vue";
import { JitsiMeet } from "@mycure/vue-jitsi-meet";
export default {
  data() {
    return {
      namaRoom : this.$route.query.roomname,
      namaProfile: this.$route.query.displayname,
      isLoading: false,
      isFullPage: true
      }
    },
  created(){
    this.namaRoom = this.$route.params.roomname
    this.roomName = this.$route.params.roomname
  },
  name: "DayMeet",
  components: {
    VueJitsiMeet: JitsiMeet,
    AppBar,
    AppFoot,
  },
  computed: {
    jitsiOptions () {
      return {
        roomName: this.namaRoom,
        height: 700,
        noSSL: false,
        userInfo: {
          email: "",
          displayName: "",
        },
        configOverwrite: {
          enableNoisyMicDetection: false
        },
        interfaceConfigOverwrite: {
          SHOW_JITSI_WATERMARK: false,
          SHOW_WATERMARK_FOR_GUESTS: false,
          SHOW_CHROME_EXTENSION_BANNER: false
        },
        interfaceConfig: {
        APP_NAME: "meet.Sekolahsmart",
        AUDIO_LEVEL_PRIMARY_COLOR: "rgba(255,255,255,0.4)",
        AUDIO_LEVEL_SECONDARY_COLOR: "rgba(255,255,255,0.2)",
        },
        onload: this.onIFrameLoad
      };
    },
  },
  methods: {
    onIFrameLoad () {
      this.$refs.jitsiRef.executeCommand('displayName', this.namaProfile);
      this.isLoading = true
      setTimeout(() => {
      this.isLoading = false
      }, 10 * 1000)
    },
    openLoading() {
      this.isLoading = true
      setTimeout(() => {
      this.isLoading = false
      }, 10 * 1000)
    }
  }, 
};
</script>