const initialState = {
  'title': null,
  'description': null,
  'img': null,
  'url': null
}

export default function update(state = initialState, action) {
  switch (action.type) {
    case 'META-SET':
      return action.meta
    default:
      break
  }

  return state
}
