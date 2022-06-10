import { LoadClass } from '@/domain/useCases/load-classes';

export const mockClass = (): LoadClass.Params => ({
    id: '123',
    Type: 'JavaScript',
    Modules: [],
    Author: 'Diogo Lima'
})