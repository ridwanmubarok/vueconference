<template>
    <b-navbar type="is-primary"  shadow="true" mobile-burger="true">
        <template slot="brand">
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
               MEET.SEKOLAHSMART.COM
            </b-navbar-item>
        </template>
        <template slot="start">
        </template>

        <template slot="end">
            <b-navbar-item tag="div">
                <div class="buttons">
                </div>
            </b-navbar-item>
        </template>
    </b-navbar>
</template>

<script>
export default {
  name: "AppBar",
};
</script>