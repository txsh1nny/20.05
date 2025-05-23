<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-cloud">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/">NoteCloud</router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navMenu">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navMenu">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item"><router-link class="nav-link" to="/notes">All Notes</router-link></li>
            <li class="nav-item"><router-link class="nav-link" to="/add">New Note</router-link></li>
            <li class="nav-item"><router-link class="nav-link" to="/about">About</router-link></li>
          </ul>
        </div>
      </div>
    </nav>

    <transition name="fade" mode="out-in">
      <router-view class="container my-4" />
    </transition>
  </div>
</template>

<script setup>
import { onBeforeMount } from 'vue'
import { useNoteStore }  from './stores/noteStore'

const store = useNoteStore()
onBeforeMount(() => {
  store.loadNotes()
})
</script>
