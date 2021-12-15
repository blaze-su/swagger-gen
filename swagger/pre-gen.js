import del from "del"

console.log('[api:pre] clear...')

del.sync('swagger/gen')

console.log('[api.pre] clear done')