module.exports = class CreateUser1723382756127 {
  async up(queryRunner) {
    await queryRunner.query(`
            CREATE TABLE "users" (
                "id" SERIAL NOT NULL,
                "name" character varying NOT NULL,
                "email" character varying NOT NULL,
                "phone" character varying NOT NULL,
                "password" character varying NOT NULL,
                "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
                "updatedAt" TIMESTAMP NOT NULL DEFAULT now(),
                CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id")
            )
        `);
  }

  async down(queryRunner) {
    await queryRunner.query(`
            DROP TABLE "users"
        `);
  }
};
