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

describe('DbUpdateLastClassUser useCase', () => {

  test('Should Call DbUpdateLastClassUser', async () => {
    const { sut, updateLastClassUserRepositorySpy } = makeSut()
    await sut.update({id:'id', LastClasses: [1,2]})
    expect(updateLastClassUserRepositorySpy.id).toBe('id')
    expect(updateLastClassUserRepositorySpy.posLastModule).toBe(1)
    expect(updateLastClassUserRepositorySpy.posLastClass).toBe(2)
  })
})
