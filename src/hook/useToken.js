import { useEffect, useState } from "react";

const useToken = (email) => {
	const [token, setToken] = useState("");

	useEffect(() => {
		if (email) {
			fetch(` https://used-car-server.vercel.app/jwt?email=${email}`)
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
