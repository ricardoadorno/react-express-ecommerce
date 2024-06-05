import { DefaultNamingStrategy, NamingStrategyInterface } from 'typeorm';
import { snakeCase } from 'typeorm/util/StringUtils';

class DatabaseNamingStrategy
  extends DefaultNamingStrategy
  implements NamingStrategyInterface
{
  columnName(propertyName: string, customName: string): string {
    return snakeCase(customName || propertyName);
  }
}

export default DatabaseNamingStrategy;
