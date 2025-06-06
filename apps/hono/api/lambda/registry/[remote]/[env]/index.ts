export default async (remote: string, env: string) => {
	return {
		framework: "hono",
		remote,
		env,
	};
};
