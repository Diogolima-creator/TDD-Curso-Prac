import { Controller, HttpResponse, Validation } from '@/presentation/protocols'
import { badRequest, serverError, unauthorized, ok } from '@/presentation/helpers'
import { loadUser } from '@/domain'