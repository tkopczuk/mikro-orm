import { EntityManager } from './EntityManager';
import { IDatabaseDriver } from './drivers/IDatabaseDriver';
import { NamingStrategy } from './naming-strategy/NamingStrategy';
import { MetadataStorage } from './MetadataStorage';

const defaultOptions = {
  entitiesDirs: [],
  strict: false,
  logger: () => undefined,
  baseDir: process.cwd(),
  debug: false,
};

export class MikroORM {

  em: EntityManager;
  readonly options: MikroORMOptions;
  private readonly driver: IDatabaseDriver;

  static async init(options: Options): Promise<MikroORM> {
    const orm = new MikroORM(options);
    const driver = await orm.connect();
    orm.em = new EntityManager(orm.options, driver);
    const storage = new MetadataStorage(orm.em, orm.options);
    storage.discover();

    return orm;
  }

  constructor(options: Options) {
    this.options = {
      ...defaultOptions,
      ...options,
    };

    if (!this.options.dbName) {
      throw new Error('No database specified, please fill in `dbName` option');
    }

    if (!this.options.entitiesDirs || this.options.entitiesDirs.length === 0) {
      throw new Error('No directories for entity discovery specified, please fill in `entitiesDirs` option');
    }

    if (!this.options.driver) {
      this.options.driver = require('./drivers/MongoDriver').MongoDriver;
    }

    this.driver = new this.options.driver(this.options);

    if (!this.options.clientUrl) {
      this.options.clientUrl = this.driver.getDefaultClientUrl();
    }
  }

  async connect(): Promise<IDatabaseDriver> {
    await this.driver.connect();
    const clientUrl = this.options.clientUrl.replace(/\/\/([^:]+):(\w+)@/, '//$1:*****@');
    this.options.logger(`MikroORM: successfully connected to database ${this.options.dbName} on ${clientUrl}`);

    return this.driver;
  }

  async isConnected(): Promise<boolean> {
    return this.driver.isConnected();
  }

  async close(force = false): Promise<void> {
    return this.driver.close(force);
  }

}

export interface MikroORMOptions {
  dbName: string;
  entitiesDirs: string[];
  entitiesDirsTs?: string[];
  driver?: { new (options: MikroORMOptions): IDatabaseDriver };
  namingStrategy?: { new (): NamingStrategy };
  clientUrl?: string;
  host?: string;
  port?: number;
  user?: string;
  password?: string;
  multipleStatements?: boolean; // for mysql driver
  strict: boolean;
  logger: (message: string) => void;
  debug: boolean;
  baseDir: string;
}

export type Options = Pick<MikroORMOptions, Exclude<keyof MikroORMOptions, keyof typeof defaultOptions>> | MikroORMOptions;
