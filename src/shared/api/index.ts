export * from './authorization'
export * from './company'
export * from './common'

export * from './types'

import type {Company } from '@/shared/api'

import * as authorization from './authorization'

export const api = {
    authorization,
}

import {api} from '@/shared/api'

api.authorization.signIn({email, password})
