export type FormMethod = "POST" | "PUT" | "DELETE";

export interface AppState {
	request: object;
	response: object;
	contentType: string;
	isLoggedIn: boolean;
	isTokenExpired: boolean;
	token: string;
	postUrl: string;
	updateUrl: string;
	deleteUrl: string;
	getUrl: string;
	formMethod: FormMethod;
}

export interface DataState {
	id: null | number;
	advice: null | string;
}

export interface DataSet {
	data: DataState;
	loading: boolean;
}

export const INIT_DATA: DataState = {
	id: null,
	advice: ''
}
