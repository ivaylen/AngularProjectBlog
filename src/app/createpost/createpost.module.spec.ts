import { CreatepostModule } from './createpost.module';

describe('CreatepostModule', () => {
  let createpostModule: CreatepostModule;

  beforeEach(() => {
    createpostModule = new CreatepostModule();
  });

  it('should create an instance', () => {
    expect(createpostModule).toBeTruthy();
  });
});
