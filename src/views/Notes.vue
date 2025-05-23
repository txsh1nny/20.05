<template>
  <div>
    <h2 class="mb-4">Ваши заметки</h2>
    <div class="row">
      <div class="col-md-4 mb-4" v-for="note in store.notes" :key="note.id">
        <div class="card card-cloud h-100">
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">{{ note.title }}</h5>
            <p class="card-text text-muted small mb-2">{{ formatDate(note.created) }}</p>
            <p class="card-text flex-grow-1">{{ note.content.slice(0, 100) }}…</p>
            <div class="mt-3">
              <router-link :to="`/details/${note.id}`" class="btn btn-sm btn-cloud me-2">Подробнее</router-link>
              <router-link :to="`/edit/${note.id}`" class="btn btn-sm btn-secondary me-2">Изменить</router-link>
              <button class="btn btn-sm btn-danger" @click="store.removeNote(note.id)">Удалить</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <p v-if="!store.notes.length" class="text-muted">Нет заметок — создайте новую!</p>
  </div>
</template>

<script setup>
import { useNoteStore } from '../stores/noteStore'
import { format }      from 'date-fns'
const store = useNoteStore()
function formatDate(dt) {
  return format(new Date(dt), 'dd.MM.yyyy HH:mm')
}
</script>
