module.exports = class CreateUser1723382851630 {
  async up(queryRunner) {
    await queryRunner.query(`
            ALTER TABLE "users"
            ADD CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email")
        `);
    await queryRunner.query(`
            ALTER TABLE "users"
            ADD CONSTRAINT "UQ_a000cca60bcf04454e727699490" UNIQUE ("phone")
        `);
  }

  async down(queryRunner) {
    await queryRunner.query(`
            ALTER TABLE "users" DROP CONSTRAINT "UQ_a000cca60bcf04454e727699490"
        `);
    await queryRunner.query(`
            ALTER TABLE "users" DROP CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3"
        `);
  }
};
