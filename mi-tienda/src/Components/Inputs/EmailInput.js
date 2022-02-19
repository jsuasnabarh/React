import React from 'react'

export default function EmailInput({Label,DefaultValue}) {
  return (
    <div class="form-group">
    <label for="signin-email" class="control-label sr-only">{Label}</label>
    <input type="email" class="form-control" id="signin-email" value={DefaultValue} placeholder="Email"/>
    </div>
  )
}
