import { Injectable } from '@nestjs/common';

@Injectable()
export class Connection {
    getConnection(): any {
        return {
            dialect: 'postgres',
            host: 'localhost',
            port: '5432',
            username: 'postgres',
            password: 'admin',
            database: 'teste',
            synchronize: true,
            pool: {
                max: 5,
                min: 0,
                idle: 10000,
            },
            autoLoadModels: true,
        };
    }
}
