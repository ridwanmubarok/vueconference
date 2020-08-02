<template>
  <div class="container">
    <h1>{{namaroom}}</h1>
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
          <span>{{ nameroom }}</span>
          <time datetime="2016-1-1">19:01 WIB - 2 Agu 2020</time>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { JitsiMeet } from "@mycure/vue-jitsi-meet";
export default {
  name: "Jitsi",
  props: {
    namaroom: String,
    password: String,
  },
  components: {
    VueJitsiMeet: JitsiMeet
  },
  computed: {
    jitsiOptions () {
      return {
        roomName: "sekolahsmart",
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
          SHOW_JITSI_WATERMARK: true,
          SHOW_WATERMARK_FOR_GUESTS: false,
          SHOW_CHROME_EXTENSION_BANNER: false
        },
        interfaceConfig: {
        APP_NAME: "Jitsi Meet",
        AUDIO_LEVEL_PRIMARY_COLOR: "rgba(255,255,255,0.4)",
        AUDIO_LEVEL_SECONDARY_COLOR: "rgba(255,255,255,0.2)",
        },
        onload: this.onIFrameLoad
      };
    },
  },
   methods: {
    onIFrameLoad () {
      // do stuff
    },
  }, 
};
</script>

