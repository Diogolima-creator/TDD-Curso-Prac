import { DbUpdateProfile } from "@/data/useCases"
import { UpdateProfileRepositorySpy } from "@/tests/data/mocks"
import { throwError } from '@/tests/domain/mocks'



type SutTypes = {
  sut: DbUpdateProfile
  updateProfileRepositorySpy: UpdateProfileRepositorySpy
}

const makeSut = (): SutTypes => {
  const updateProfileRepositorySpy = new UpdateProfileRepositorySpy()
  const sut = new DbUpdateProfile(
    updateProfileRepositorySpy
  )
  return {
    sut,
    updateProfileRepositorySpy
  }
}

describe('DbUpdateProfile useCase', () => {

})