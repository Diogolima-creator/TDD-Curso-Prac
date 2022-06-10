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