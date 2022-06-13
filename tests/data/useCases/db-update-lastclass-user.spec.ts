import { DbUpdateLastClassUser } from "@/data/useCases"
import { UpdateLastClassUserRepositorySpy } from "@/tests/data/mocks"
import { throwError } from '@/tests/domain/mocks'



type SutTypes = {
  sut: DbUpdateLastClassUser
  updateLastClassUserRepositorySpy: UpdateLastClassUserRepositorySpy
}

const makeSut = (): SutTypes => {
  const updateLastClassUserRepositorySpy = new UpdateLastClassUserRepositorySpy()
  const sut = new DbUpdateLastClassUser(
    updateLastClassUserRepositorySpy
  )
  return {
    sut,
    updateLastClassUserRepositorySpy
  }
}
