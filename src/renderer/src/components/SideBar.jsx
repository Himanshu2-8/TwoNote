import { useState, useEffect } from 'react'

export default function SideBar() {
  const [notes, setNotes] = useState([])

  useEffect(() => {
    const loadNotes = async () => {
      try {
        const savedNotes = await window.notes.getAll();
        setNotes(savedNotes)
      } catch (err) {
        console.error(err)
      }
    }
    loadNotes()
  }, [])

  return (
    <div>
      <div className="flex items-center justify-center font-bold text-white">Your Notes</div>
      <div>
        {notes.map((note) => (
          <div key={note.id}>{note.title}</div>
        ))}
      </div>
    </div>
  )
}
