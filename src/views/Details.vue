<template>
  <div v-if="note">
    <button class="btn btn-link mb-3" @click="$router.back()">← Назад</button>
    <h2 class="mb-2">{{ note.title }}</h2>
    <p class="text-muted small mb-3">{{ formatDate(note.created) }}</p>
    <p class="mb-3">{{ note.content }}</p>
    <p v-if="note.tags.length"><strong>Теги:</strong> {{ note.tags.join(', ') }}</p>
  </div>
  <p v-else class="text-danger">Заметка не найдена.</p>
</template>

<script setup>
import { useRoute }    from 'vue-router'
import { useNoteStore } from '../stores/noteStore'
import { format }      from 'date-fns'

const route = useRoute()
const store = useNoteStore()
const note  = store.getNote(route.params.id) || null

function formatDate(dt) {
  return format(new Date(dt), 'dd.MM.yyyy HH:mm')
}
</script>
