<template>
  <div>
    <h2 class="mb-4">Новая заметка</h2>
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
        <input v-model="tags" class="form-control" placeholder="todo, idea" />
      </div>
      <button type="submit" class="btn btn-cloud">Сохранить</button>
    </form>
  </div>
</template>

<script setup>
import { ref }          from 'vue'
import { useRouter }    from 'vue-router'
import { useNoteStore } from '../stores/noteStore'

const title   = ref('')
const content = ref('')
const tags    = ref('')

const store  = useNoteStore()
const router = useRouter()

function onSubmit() {
  store.addNote({
    title:   title.value,
    content: content.value,
    tags:    tags.value.split(',').map(t => t.trim()).filter(t => t)
  })
  router.push('/notes')
}
</script>
