import { DbLoadClass } from "@/data/useCases"
import { LoadClassByTypeRepositorySpy } from "@/tests/data/mocks"
import { mockUser, throwError } from "@/tests/domain/mocks"

type SutTypes = {
  sut: DbLoadClass,
  loadClassByTypeRepositorySpy: LoadClassByTypeRepositorySpy
}

const makeSut = ():SutTypes => {

  const loadClassByTypeRepositorySpy = new LoadClassByTypeRepositorySpy()
  const sut = new DbLoadClass(
    loadClassByTypeRepositorySpy
  )

  return {
    sut,
    loadClassByTypeRepositorySpy
  }
}

describe('DbLoadClass useCases', () => {

    test('Should call LoadClassByTypeRepository', async () => {
      const { sut, loadClassByTypeRepositorySpy } = makeSut()
      const classType = 'JavaScript'
      await sut.load(classType)
      expect(loadClassByTypeRepositorySpy.data).toBe(classType)
    })
    
    test('Should return a list of Classes on success', async () => {
      const { sut, loadClassByTypeRepositorySpy } = makeSut()
      const classes = await sut.load('JavaScript')
      expect(classes).toEqual(loadClassByTypeRepositorySpy.result)
    })

    test('Should throw if LoadClassByTypeRepository', async() => {
      const { sut, loadClassByTypeRepositorySpy } = makeSut()
      jest.spyOn(loadClassByTypeRepositorySpy, 'findByType').mockImplementationOnce(throwError)
      const promise = sut.load('JavaScript')
      await expect(promise).rejects.toThrow()
    })
})

 
