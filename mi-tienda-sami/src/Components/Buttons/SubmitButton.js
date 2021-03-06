import React, { useState } from 'react'

export default function SubmitButton({texto = 'Enviar'}) {
    const [loading,setLoading] = useState(false)
  return (
    <button type="submit" className="btn btn-primary btn-lg btn-block">{texto}</button>
  )
}
