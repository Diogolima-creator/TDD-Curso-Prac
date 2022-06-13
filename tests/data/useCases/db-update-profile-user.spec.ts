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

  test('Should Call UpdateProfileRepository', async () => {
    const { sut, updateProfileRepositorySpy } = makeSut()
    await sut.update({id:'id', description: 'description', profilePic: 'profilePic'})
    expect(updateProfileRepositorySpy.id).toBe('id')
    expect(updateProfileRepositorySpy.description).toBe('description')
    expect(updateProfileRepositorySpy.profilePic).toBe('profilePic')
  })

  test('Should throw if UpdateProfileRepository throws', async () => {
    const { sut, updateProfileRepositorySpy } = makeSut()
    jest.spyOn(updateProfileRepositorySpy, 'updateProfile').mockImplementationOnce(throwError)
      const promise = sut.update({id:'id', description: 'description', profilePic: 'profilePic'})
      await expect(promise).rejects.toThrow()
  })
})