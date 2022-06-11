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

describe('DbUpdateClassUser useCase', () => {

  test('Should Call UpdateClassUserRepository', async () => {
    const { sut, updateClassUserRepositorySpy } = makeSut()
    await sut.update({id:'id', classes:['Module','Class','urlVideo']})
    expect(updateClassUserRepositorySpy.id).toBe('id')
    expect(updateClassUserRepositorySpy.Module).toBe('Module')
    expect(updateClassUserRepositorySpy.Class).toBe('Class')
    expect(updateClassUserRepositorySpy.urlVideo).toBe('urlVideo')
  })

})