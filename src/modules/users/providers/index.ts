import { container } from 'tsyringe';

import IHaseProvider from './HashProvider/models/IHashProvider';
import BCryptHashProvider from './HashProvider/implementations/BCryptHashProvider';

container.registerSingleton<IHaseProvider>('HashProvider', BCryptHashProvider);
