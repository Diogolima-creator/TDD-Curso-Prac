import { DbUpdateClassUser } from "@/data/useCases"
import { UpdateClassUserRepositorySpy } from "@/tests/data/mocks"
import { throwError } from '@/tests/domain/mocks'

type SutTypes = {
  sut: DbUpdateClassUser
  updateClassUserRepositorySpy: UpdateClassUserRepositorySpy
}

const makeSut = (): SutTypes => {
  const updateClassUserRepositorySpy = new UpdateClassUserRepositorySpy()
  const sut = new DbUpdateClassUser(
    updateClassUserRepositorySpy
  )
  return {
    sut,
    updateClassUserRepositorySpy
  }
}