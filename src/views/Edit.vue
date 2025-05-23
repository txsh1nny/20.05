<template>
  <div v-if="note">
    <h2 class="mb-4">Редактировать заметку</h2>
    <form @submit.prevent="onSubmit">
      <div class="mb-3">
        <label class="form-label">Заголовок</label>
        <input v-model="title" class="form-control" required />
      </div>
      <div class="mb-3">
        <label class="form-label">Содержимое</label>
        <textarea v-model="content" class="form-control" rows="5" required></textarea>
      </div>
      <div class="mb-3">
        <label class="form-label">Теги (через запятую)</label>
        <input v-model="tags" class="form-control" />
      </div>
      <button type="submit" class="btn btn-cloud">Обновить</button>
    </form>
  </div>
  <p v-else class="text-danger">Заметка не найдена.</p>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useNoteStore } from '../stores/noteStore'

const router = useRouter()
const route  = useRoute()
const store  = useNoteStore()

const note    = ref(null)
const title   = ref('')
const content = ref('')
const tags    = ref('')

onMounted(() => {
  const n = store.getNote(route.params.id)
  if (n) {
    note.value = { ...n }
    title.value   = n.title
    content.value = n.content
    tags.value    = (n.tags || []).join(', ')
  }
})

function onSubmit() {
  store.updateNote({
    id:      note.value.id,
    created: note.value.created,
    title:   title.value,
    content: content.value,
    tags:    tags.value.split(',').map(t => t.trim()).filter(t => t)
  })
  router.push('/notes')
}
</script>
