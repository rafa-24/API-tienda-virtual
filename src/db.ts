import { DataSource } from "typeorm"

export const myDataSource = new DataSource({
      type: "mysql",
      host: "mdb-test.c6vunyturrl6.us-west-1.rds.amazonaws.com",
      port: 3306,
      username: "bsale_test",
      password: "bsale_test",
      database: "bsale_test",
      logging: true,
      synchronize: true,
});