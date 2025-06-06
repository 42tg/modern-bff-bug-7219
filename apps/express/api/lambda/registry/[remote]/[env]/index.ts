export default async (remote: string, env: string) => {
	return {
		framework: "express",
		remote,
		env,
	};
};
