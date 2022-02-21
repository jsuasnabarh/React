import React from 'react'

export default function EmailInput({Label,DefaultValue}) {
  const handleChange = evt =>{
    evt.preventDefault()
  }


  return (
    <div className="form-group">
    <label htmlFor="signin-email" className="control-label sr-only">{Label}</label>
    <input type="email" className="form-control" id="signin-email" value={DefaultValue} onChange={handleChange} placeholder="Email"/>
    </div>
  )
}
