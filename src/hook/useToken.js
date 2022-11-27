import { useEffect, useState } from "react";

const useToken = (email) => {
	const [token, setToken] = useState("");

	useEffect(() => {
		if (email) {
			fetch(`http://localhost:5000/jwt?email=${email}`)
				.then((res) => res.json())
				.then((data) => {
					if (data.usedcarToken) {
						localStorage.setItem("usedcarToken", data.usedcarToken);
						setToken(data.usedcarToken);
					}
				});
		}
	}, [email]);
	return [token];
};

export default useToken;
