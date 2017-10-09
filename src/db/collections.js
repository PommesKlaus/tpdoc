import { db } from './init'

export const entities = db.collection('entities')
export const transactions = db.collection('transactions')
export const transactionTemplates = db.collection('transactionTemplates')
