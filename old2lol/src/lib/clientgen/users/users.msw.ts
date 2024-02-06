/**
 * Generated by orval v6.23.0 🍺
 * Do not edit manually.
 * VerdanTech-Backend
 * Backend API of the VerdanTech software project.
 * OpenAPI spec version: 0.1.0
 */
import { faker } from '@faker-js/faker';
import { HttpResponse, delay, http } from 'msw';

export const getUserLoginMock = () => ({
	created_at: faker.helpers.arrayElement([
		faker.helpers.arrayElement([{}, `${faker.date.past().toISOString().split('.')[0]}Z`]),
		undefined
	]),
	emails: Array.from({ length: faker.number.int({ min: 1, max: 10 }) }, (_, i) => i + 1).map(
		() => ({
			address: faker.word.sample(),
			primary: faker.datatype.boolean(),
			verified: faker.datatype.boolean()
		})
	),
	id: faker.string.uuid(),
	is_superuser: faker.datatype.boolean(),
	username: faker.word.sample()
});

export const getUserProfilesMock = () =>
	faker.helpers.arrayElement([
		Array.from({ length: faker.number.int({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => ({
			id: faker.string.uuid(),
			username: faker.word.sample()
		})),
		{
			created_at: faker.helpers.arrayElement([
				faker.helpers.arrayElement([{}, `${faker.date.past().toISOString().split('.')[0]}Z`]),
				undefined
			]),
			emails: Array.from({ length: faker.number.int({ min: 1, max: 10 }) }, (_, i) => i + 1).map(
				() => ({
					address: faker.word.sample(),
					primary: faker.datatype.boolean(),
					verified: faker.datatype.boolean()
				})
			),
			id: faker.string.uuid(),
			is_superuser: faker.datatype.boolean(),
			username: faker.word.sample()
		}
	]);

export const getUserEmailConfirmationConfirmMock = () => faker.word.sample();

export const getUserEmailVerificationRequestMock = () => faker.word.sample();

export const getUserPasswordResetConfirmMock = () => faker.word.sample();

export const getUserPasswordResetRequestMock = () => faker.word.sample();

export const getUserCreateMock = () => ({
	created_at: faker.helpers.arrayElement([
		faker.helpers.arrayElement([{}, `${faker.date.past().toISOString().split('.')[0]}Z`]),
		undefined
	]),
	emails: Array.from({ length: faker.number.int({ min: 1, max: 10 }) }, (_, i) => i + 1).map(
		() => ({
			address: faker.word.sample(),
			primary: faker.datatype.boolean(),
			verified: faker.datatype.boolean()
		})
	),
	id: faker.string.uuid(),
	is_superuser: faker.datatype.boolean(),
	username: faker.word.sample()
});

export const getUsersMock = () => [
	http.post('*/vdtapi/users/auth/login', async () => {
		await delay(1000);
		return new HttpResponse(JSON.stringify(getUserLoginMock()), {
			status: 200,
			headers: {
				'Content-Type': 'application/json'
			}
		});
	}),
	http.get('*/vdtapi/users/read/:userIds/profile', async () => {
		await delay(1000);
		return new HttpResponse(JSON.stringify(getUserProfilesMock()), {
			status: 200,
			headers: {
				'Content-Type': 'application/json'
			}
		});
	}),
	http.post('*/vdtapi/users/verification/email/verification_confirm', async () => {
		await delay(1000);
		return new HttpResponse(JSON.stringify(getUserEmailConfirmationConfirmMock()), {
			status: 200,
			headers: {
				'Content-Type': 'application/json'
			}
		});
	}),
	http.post('*/vdtapi/users/verification/email/verification_request', async () => {
		await delay(1000);
		return new HttpResponse(JSON.stringify(getUserEmailVerificationRequestMock()), {
			status: 200,
			headers: {
				'Content-Type': 'application/json'
			}
		});
	}),
	http.post('*/vdtapi/users/verification/password/confirm', async () => {
		await delay(1000);
		return new HttpResponse(JSON.stringify(getUserPasswordResetConfirmMock()), {
			status: 200,
			headers: {
				'Content-Type': 'application/json'
			}
		});
	}),
	http.post('*/vdtapi/users/verification/password/request', async () => {
		await delay(1000);
		return new HttpResponse(JSON.stringify(getUserPasswordResetRequestMock()), {
			status: 200,
			headers: {
				'Content-Type': 'application/json'
			}
		});
	}),
	http.post('*/vdtapi/users/write/create', async () => {
		await delay(1000);
		return new HttpResponse(JSON.stringify(getUserCreateMock()), {
			status: 200,
			headers: {
				'Content-Type': 'application/json'
			}
		});
	})
];
