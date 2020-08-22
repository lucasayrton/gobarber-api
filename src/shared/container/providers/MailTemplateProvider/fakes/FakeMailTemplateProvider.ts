import IMailTempalteProvider from '../models/IMailTempalteProvider';

export class FakeMailTemplateProvider implements IMailTempalteProvider {
  public async parse(): Promise<string> {
    return 'Mail content';
  }
}

export default FakeMailTemplateProvider;
