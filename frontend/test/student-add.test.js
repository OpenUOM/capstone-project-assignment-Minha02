import { Selector } from 'testcafe';
process.env.NODE_ENV = "test";

const BASE_URL = 'http://localhost:4401';

fixture`Testing Student UI`
    .page`${BASE_URL}`
    .beforeEach(async t => {
        await t.wait(5000);
        await t.navigateTo(`${BASE_URL}/dbinitialize`);
        await t.wait(2000);
    });

test('Testing add students', async t => {
    // Navigate to add student page
    await t.navigateTo(`${BASE_URL}/addStudent`);
    await t.wait(3000);

    // Verify form elements exist
    await t
        .expect(Selector('#student-id').exists).ok('Student ID input not found')
        .expect(Selector('#student-name').exists).ok('Student name input not found')
        .expect(Selector('#student-age').exists).ok('Student age input not found')
        .expect(Selector('#student-hometown').exists).ok('Student hometown input not found')
        .expect(Selector('#student-add').exists).ok('Add button not found');

    // Fill form
    await t
        .typeText('#student-id', '999999')
        .typeText('#student-name', 'Test Student')
        .typeText('#student-age', '20')
        .typeText('#student-hometown', 'Test City')
        .click('#student-add');

    // Verify redirect and table exists
    await t
        .navigateTo(`${BASE_URL}/student`)
        .expect(Selector('#student-table').exists).ok('Student table not found');
});