import { StitchClient } from 'mongodb-stitch'
import credentials from './credentials'

/* credentials.js expected format:

export default {
  name: 'name of the api key',
  key: 'provided key'
}

*/

/* Connect to Stitch */

export const client = new StitchClient('tpdoc-otctb')

export const authClient = client.authenticate(credentials.name, credentials.key)
.then(() => {
  console.log('Successfully authenticated as ' + client.authedId())
})
.catch((err) => {
  console.error('Error authenticating: ' + err)
})

export const db = client.service('mongodb', 'mongodb-atlas').db('tpdoc')
