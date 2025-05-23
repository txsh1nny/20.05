import { defineStore } from 'pinia'

export const useNoteStore = defineStore('note', {
  state: () => ({
    notes: [],       // { id, title, content, tags, created }
    nextId: 1
  }),
  actions: {
    loadNotes() {
      const saved = localStorage.getItem('notes')
      if (saved) {
        this.notes = JSON.parse(saved)
        this.nextId = this.notes.length
          ? Math.max(...this.notes.map(n => n.id)) + 1
          : 1
      } else {
        this.notes = []
        this.nextId = 1
      }
    },
    addNote(note) {
      const timestamp = new Date().toISOString()
      this.notes.unshift({ id: this.nextId++, created: timestamp, ...note })
      localStorage.setItem('notes', JSON.stringify(this.notes))
    },
    updateNote(updated) {
      this.notes = this.notes.map(n => n.id === updated.id ? updated : n)
      localStorage.setItem('notes', JSON.stringify(this.notes))
    },
    removeNote(id) {
      this.notes = this.notes.filter(n => n.id !== id)
      localStorage.setItem('notes', JSON.stringify(this.notes))
    },
    getNote(id) {
      return this.notes.find(n => n.id === Number(id))
    }
  }
})
