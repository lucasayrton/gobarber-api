import FakeAppointmentsRepository from '../repositories/fakes/FakeAppointmentsRepository';
import ListProviderAppointmentService from './ListProviderAppointmentsService';

let fakeAppointmentRepository: FakeAppointmentsRepository;
let listProviderAppointmentService: ListProviderAppointmentService;

describe('ListProviderDayAvailability', () => {
  beforeEach(() => {
    fakeAppointmentRepository = new FakeAppointmentsRepository();

    listProviderAppointmentService = new ListProviderAppointmentService(
      fakeAppointmentRepository,
    );
  });

  it('should be able to list the appointments on specific day', async () => {
    const appointment1 = await fakeAppointmentRepository.create({
      provider_id: 'provider-id',
      user_id: 'user-id',
      date: new Date(2020, 4, 20, 14, 0, 0),
    });

    const appointment2 = await fakeAppointmentRepository.create({
      provider_id: 'provider-id',
      user_id: 'user-id',
      date: new Date(2020, 4, 20, 15, 0, 0),
    });

    const availability = await listProviderAppointmentService.execute({
      provider_id: 'provider-id',
      year: 2020,
      month: 5,
      day: 20,
    });

    expect(availability).toEqual(
      expect.arrayContaining([appointment1, appointment2]),
    );
  });
});
