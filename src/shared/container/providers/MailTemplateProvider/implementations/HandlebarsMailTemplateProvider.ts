import handlebars from 'handlebars';
import fs from 'fs';

import IMailTempalteProvider from '../models/IMailTempalteProvider';
import IParseMailTemplateDTO from '../dtos/IParseMailTemplateDTO';

export class HandlebarsMailTemplateProvider implements IMailTempalteProvider {
  public async parse({
    file,
    variables,
  }: IParseMailTemplateDTO): Promise<string> {
    const templateFileContent = await fs.promises.readFile(file, {
      encoding: 'utf-8',
    });
    const parseTemplate = handlebars.compile(templateFileContent);

    return parseTemplate(variables);
  }
}

export default HandlebarsMailTemplateProvider;
