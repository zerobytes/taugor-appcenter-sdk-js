import { _post, _get } from "../functions.js";

const Auth = () => {
	const _private = {
		post: (path, data) => _post("/auth/" + path, data),
		get: (path, params) => _get("/auth/" + path, params)
	};
	let service = {
		authenticate: (user, password, fromApp) => {
			return _private
				.post("/auth", {
					user,
					password,
					fromApp
				})
				.then(r => {
					return {
						user: r.data,
						response: r
					};
				});
		}
	};
	return service;
};

export default Auth();
