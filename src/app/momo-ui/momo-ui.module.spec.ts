import { MomoUiModule } from './momo-ui.module';

describe('MomoUiModule', () => {
  let momoUiModule: MomoUiModule;

  beforeEach(() => {
    momoUiModule = new MomoUiModule();
  });

  it('should create an instance', () => {
    expect(momoUiModule).toBeTruthy();
  });
});
